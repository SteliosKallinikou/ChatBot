import {Component, effect, ElementRef, inject, input, ViewChild} from '@angular/core';
import {ChatBotAiService} from '../shared/service/chat-bot-ai.service';
import {FormsModule} from '@angular/forms';
import {MatProgressBar} from '@angular/material/progress-bar';
import {StateService} from '../shared/service/state-service';
import {MusicComponent} from '../music/music.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    FormsModule,
    MatProgressBar,
    MusicComponent,
    RouterOutlet,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  stateService= inject(StateService)
  AIService = inject(ChatBotAiService)
  name = input.required<string>()
  welcomeChange=input.required<boolean>()
  @ViewChild('changes') change!: ElementRef;

  messages:{sender: string, message: string}[]=[]
  promt: string=''
  isLoading=false
  WelcomeMessage=""

  constructor() {
    effect(() => {
      const state = this.stateService.getState(this.name())
      this.messages=state.messages
      this.WelcomeMessage= "Welcome to "+ this.name()
      this.Restart()
    })
  }

  async sendMessage(userMessage: string){
    this.messages.push({sender: 'user', message: userMessage});
    this.isLoading=true
    const botMessage = await this.AIService.getResponse(userMessage,this.name()).then()
    if(botMessage!=null){
      this.messages.push({sender: 'bot', message: botMessage});
      this.isLoading=false
    }

    this.stateService.saveState({messages: this.messages},this.name());
    this.promt=""
  }
  ClearChat(){
    this.stateService.clearService(this.name())
    this.messages=[]
  }

  Restart(){
    const element = this.change.nativeElement;
    element.style.animation='none'
    void element.offsetWidth;
    element.style.animation=''
  }
}
