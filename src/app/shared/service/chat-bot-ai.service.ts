import { Injectable } from '@angular/core';
import { environment } from '../enviroment';
import OpenAI from 'openai';
import { ChatType, SenderTypes } from '../enums';
import { ChatTypeTokens } from '../consts';

@Injectable({
  providedIn: 'root',
})
export class ChatBotAiService {
  openai = new OpenAI({ apiKey: environment.openaiApiKey, dangerouslyAllowBrowser: true });
  output: string | undefined;

  getTokenBasedOnChatType(chatType: ChatType): string {
    return <string>ChatTypeTokens.get(chatType);
  }

  async getMathAssistant(prompt: string): Promise<string | undefined> {
    const MathAssistant = await this.openai.beta.assistants.retrieve(this.getTokenBasedOnChatType(ChatType.MATH));
    let thread = await this.openai.beta.threads.create();
    let message = await this.openai.beta.threads.messages.create(thread.id, {
      role: SenderTypes.USER,
      content: prompt,
    });

    let run = await this.openai.beta.threads.runs.createAndPoll(thread.id, {
      assistant_id: MathAssistant.id,
    });

    if (run.status === 'completed') {
      const messages = await this.openai.beta.threads.messages.list(run.thread_id);
      for (const message of messages.data.reverse()) {
        if (message.content[0].type == 'text') {
          this.output = message.content[0].text.value;
        }
      }
    }
    return this.output;
  }

  async getMusicAssistant(prompt: string): Promise<string | undefined> {
    const MusicAssistant = await this.openai.beta.assistants.retrieve(this.getTokenBasedOnChatType(ChatType.MUSIC));
    let thread = await this.openai.beta.threads.create();
    let message = await this.openai.beta.threads.messages.create(thread.id, {
      role: SenderTypes.USER,
      content: prompt,
    });
    let run = await this.openai.beta.threads.runs.createAndPoll(thread.id, {
      assistant_id: MusicAssistant.id,
    });

    if (run.status === 'completed') {
      const messages = await this.openai.beta.threads.messages.list(run.thread_id);
      for (const message of messages.data.reverse()) {
        if (message.content[0].type == 'text') {
          this.output = message.content[0].text.value;
        }
      }
    }
    return this.output;
  }

  async getGeneralChat(prompt: string): Promise<string | null> {
    const chatCompletion = await this.openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a powerfull assistant that knows many things about everything.' },
        { role: SenderTypes.USER, content: prompt },
      ],
      model: 'gpt-4o-mini',
      max_tokens: 1050,
    });
    return chatCompletion.choices[0].message.content;
  }
}
