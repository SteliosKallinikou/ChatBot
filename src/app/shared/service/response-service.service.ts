import { inject, Injectable } from '@angular/core';
import { ChatBotAiService } from './chat-bot-ai.service';

@Injectable({
  providedIn: 'root',
})
export class ResponseService {
  chatBotService = inject(ChatBotAiService);

  async getResponse(prompt: string, id: string): Promise<string | undefined | null> {
    if (id === 'music-chat') {
      return this.chatBotService.getMusicAssistant(prompt);
    }
    if (id === 'math-chat') {
      return this.chatBotService.getMathAssistant(prompt);
    } else {
      return this.chatBotService.getGeneralChat(prompt);
    }
  }
}
