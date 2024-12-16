import {Component, inject, OnInit} from '@angular/core';
import {ChatBotAiService} from '../service/chat-bot-ai.service';
import {FormsModule} from '@angular/forms';
import {MatProgressBar} from '@angular/material/progress-bar';
import {StateService} from '../service/state-service';
import {HighlightPipe} from '../../pipes/highlight.pipe';


@Component({
  selector: 'app-home',
  imports: [
    FormsModule,
    MatProgressBar,
    HighlightPipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  messages:{sender: string, message: string|null}[]=[]
  stateService= inject(StateService)
  AIService = inject(ChatBotAiService)
  promt: string=''
  isLoading=false
  paragraph:string= "this is a test **paragraph** that **with** stars"


  ngOnInit() {
    const state = this.stateService.getState("general")
    this.messages=state.messages
  }

  async sendMessage(userMessage: string){
    this.messages.push({sender: 'user', message: userMessage});
    this.isLoading=true
    const botMessage = await this.AIService.getResponse(userMessage).then()
    this.messages.push({sender: 'bot', message: botMessage});
    this.isLoading=false
    this.stateService.saveState({messages: this.messages},"general");
    this.promt=""
  }
  ClearChat(){
    this.stateService.clearService("general")
    this.messages=[]
  }
}
