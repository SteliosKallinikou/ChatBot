import { Component } from '@angular/core';
import {ChatBotAiService} from '../service/chat-bot-ai.service';
import {FormsModule} from '@angular/forms';
import {MatProgressBar} from '@angular/material/progress-bar';



@Component({
  selector: 'app-home',
  imports: [
    FormsModule,
    MatProgressBar,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  promt = ''
  response: string | undefined
  chatMessages: string[]=[]
  promts: string[]=[]
  isLoading=true
  constructor(private AIService: ChatBotAiService) {
  }

  async getComplete(input:string) {
    this.isLoading=true
    this.response = await this.AIService.getResponse(this.promt).then()
    this.promts.push(input)
    if (this.response != null) {
      this.isLoading=false
      this.chatMessages.push(this.response)
      console.log(this.chatMessages)
    }
  }
}
