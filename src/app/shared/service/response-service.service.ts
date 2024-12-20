import { inject, Injectable } from '@angular/core';
import { ChatBotAiService } from './chat-bot-ai.service';
import { ChatType } from '../enums';

@Injectable({
  providedIn: 'root',
})
export class ResponseService {
  chatBotService = inject(ChatBotAiService);

  async getResponse(prompt: string, id: string): Promise<string | undefined | null> {
    if (id === ChatType.MUSIC) {
      return this.chatBotService.getMusicAssistant(prompt);
    }
    if (id === ChatType.MATH) {
      return this.chatBotService.getMathAssistant(prompt);
    } else {
      return this.chatBotService.getGeneralChat(prompt);
    }
  }
}
