import {Component, inject, OnInit} from '@angular/core';
import {ChatBotAiService} from '../service/chat-bot-ai.service';
import {FormsModule} from '@angular/forms';
import {MatProgressBar} from '@angular/material/progress-bar';
import {StateService} from '../service/state-service';
import {JsonPipe} from '@angular/common';



@Component({
  selector: 'app-home',
  imports: [
    FormsModule,
    MatProgressBar,
    JsonPipe,
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


  ngOnInit() {
    const state = this.stateService.getState()
    this.messages=state.messages
  }

  async sendMessage(userMessage: string){
    // Add the user's message to the chat
    this.messages.push({sender: 'user', message: userMessage});
    this.promt=userMessage
    this.isLoading=true
    const botMessage = await this.AIService.getResponse(userMessage).then()
    this.messages.push({sender: 'bot', message: botMessage});
    this.isLoading=false
    // Save the state
    this.stateService.saveState({messages: this.messages});
  }


  // promt = ''
  // response: string | undefined
  // chatMessages: string[]=[]
  // promts: string[]=[]
  // isLoading=false
  // constructor(private AIService: ChatBotAiService) {
  // }
  // async getComplete(input:string) {
  //   this.isLoading=true
  //   this.response = await this.AIService.getResponse(this.promt).then()
  //   this.promts.push(input)
  //   if (this.response != null) {
  //     this.isLoading=false
  //     this.chatMessages.push(this.response)
  //     this.promt=""
  //   }
  //
  // }
}
