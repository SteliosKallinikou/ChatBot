import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ChatBotAiService} from '../service/chat-bot-ai.service';
import {HomeComponent} from '../home/home.component';

@Component({
  selector: 'app-math',
  imports: [
    FormsModule,
    HomeComponent
  ],
  templateUrl: './math.component.html',
  styleUrl: './math.component.scss'
})
export class MathComponent {
  promt = ''
  response: string | undefined
  chatMessages: string[]=[]
  promts: string[]=[]
  isLoading=false
  constructor(private AIService: ChatBotAiService) {
  }
  async getComplete(input:string) {
    this.isLoading=true
    this.response = await this.AIService.getResponse(this.promt).then()
    this.promts.push(input)
    if (this.response != null) {
      this.isLoading=false
      this.chatMessages.push(this.response)
      this.promt=""
    }
  }
}
