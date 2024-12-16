import {Component, inject, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ChatBotAiService} from '../service/chat-bot-ai.service';
import {HighlightPipe} from '../../pipes/highlight.pipe';
import {MatProgressBar} from '@angular/material/progress-bar';
import {StateService} from '../service/state-service';

@Component({
  selector: 'app-math',
  imports: [
    FormsModule,
    HighlightPipe,
    MatProgressBar
  ],
  templateUrl: './math.component.html',
  styleUrl: './math.component.scss'
})
export class MathComponent implements OnInit{
  messages:{sender: string, message: string|null}[]=[]
  stateService= inject(StateService)
  AIService = inject(ChatBotAiService)
  promt: string=''
  isLoading=false

  ngOnInit() {
    const state = this.stateService.getState("Math")
    this.messages=state.messages
  }

  async sendMessage(userMessage: string){
    this.messages.push({sender: 'user', message: userMessage});
    this.isLoading=true
    const botMessage = await this.AIService.createMathAssistant(userMessage).then()
    if(botMessage!=null){
      this.messages.push({sender: 'bot', message: botMessage});
    }

    this.isLoading=false
    this.stateService.saveState({messages: this.messages},"Math");
    this.promt=""
  }
  ClearChat(){
    this.stateService.clearService("Math")
    this.messages=[]
  }
}
