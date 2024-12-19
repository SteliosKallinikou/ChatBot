import { inject, Injectable } from '@angular/core';
import { ChatBotAiService } from './chat-bot-ai.service';

@Injectable({
  providedIn: 'root',
})
export class ResponseService {
  chatBotService = inject(ChatBotAiService);

  async getResponse(prompt: string, id: string) {
    if (id === 'Music-Chat') {
      return this.chatBotService.getMusicAssistant(prompt);
    }
    if (id === 'Math-Chat') {
      return this.chatBotService.getMathAssistant(prompt);
    } else {
      return this.chatBotService.getGeneralChat(prompt);
    }
  }
}
