import {Component, inject, OnInit} from '@angular/core';
import {ChatBotAiService} from '../service/chat-bot-ai.service';
import {FormsModule} from '@angular/forms';
import {MatProgressBar} from '@angular/material/progress-bar';
import {StateService} from '../service/state-service';
import {HighlightPipe} from '../../pipes/highlight.pipe';


@Component({
  selector: 'app-music',
  imports: [
    FormsModule,
    MatProgressBar,
    HighlightPipe,
  ],
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss'
})
export class MusicComponent implements OnInit{
  messages:{sender: string, message: string|null}[]=[]
  stateService= inject(StateService)
  AIService = inject(ChatBotAiService)
  promt: string=''
  isLoading=false


  ngOnInit() {
    const state = this.stateService.getState("music")
    this.messages=state.messages
  }

  async sendMessage(userMessage: string){
    this.messages.push({sender: 'user', message: userMessage});
    this.isLoading=true
    const botMessage = await this.AIService.createMusicAssistant(userMessage).then()
    if(botMessage!=null){
      this.messages.push({sender:'bot', message:botMessage})
    }
    this.isLoading=false
    this.stateService.saveState({messages: this.messages},"music");
    this.promt=""
  }
  ClearChat(){
    this.stateService.clearService("music")
    this.messages=[]
  }
}

