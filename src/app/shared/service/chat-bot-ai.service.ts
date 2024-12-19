import { Injectable } from '@angular/core';
import { environment } from '../enviroment';
import OpenAI from 'openai';
import { ChatType } from '../enums';
@Injectable({
  providedIn: 'root',
})
export class ChatBotAiService {
  openai = new OpenAI({ apiKey: environment.openaiApiKey, dangerouslyAllowBrowser: true });
  output: string | undefined;
  content: string | null | undefined;

  ChatTypeTokens = new Map<ChatType, string>([
    [ChatType.MUSIC, 'asst_buRnGd1d5BeiSbQ6mfjXkItp'],
    [ChatType.MATH, 'asst_DfT8WtbYfzjmoyGaflPMXoWZ'],
  ]);

  getTokenBasedOnChatType(chatType: ChatType): string {
    return <string>this.ChatTypeTokens.get(chatType);
  }

  async getResponse(prompt: string, id: string) {
    if (id == 'Math-Chat') {
      const MathAssistant = await this.openai.beta.assistants.retrieve(this.getTokenBasedOnChatType(ChatType.MATH));
      let thread = await this.openai.beta.threads.create();
      let message = await this.openai.beta.threads.messages.create(thread.id, {
        role: 'user',
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

    if (id == 'Music-Chat') {
      console.log('here');
      const MusicAssistant = await this.openai.beta.assistants.retrieve('asst_buRnGd1d5BeiSbQ6mfjXkItp');
      let thread = await this.openai.beta.threads.create();
      let message = await this.openai.beta.threads.messages.create(thread.id, {
        role: 'user',
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

    const chatCompletion = await this.openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a powerfull assistant that knows many things about everything.' },
        { role: 'user', content: prompt },
      ],
      model: 'gpt-4o-mini',
      max_tokens: 1050,
    });
    return chatCompletion.choices[0].message.content;
  }
}
