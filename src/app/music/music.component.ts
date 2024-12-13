import {Component, inject} from '@angular/core';
import {ChatBotAiService} from '../service/chat-bot-ai.service';
import {FormsModule} from '@angular/forms';
import {MatProgressBar} from '@angular/material/progress-bar';


@Component({
  selector: 'app-music',
  imports: [
    FormsModule,
    MatProgressBar,
  ],
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss'
})
export class MusicComponent {
  AiService = inject(ChatBotAiService)
  promt = ''
  response: string | undefined
  chatMessages: string[]=[]
  promts: string[]=[]
  isLoading=false

  async getComplete(input:string) {
    this.isLoading=true
    this.response = await this.AiService.createAssistant(this.promt).then()
    this.promts.push(input)
    if (this.response != null) {
      this.isLoading=false
      this.chatMessages.push(this.response)
      this.promt=""
    }
  }
}

