import { Injectable } from '@angular/core';
import {environment} from '../shared/enviroment';
import OpenAI from "openai";
export interface message{
  content: string;
  refusal: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})

export class ChatBotAiService {
  openai = new OpenAI({apiKey: environment.openaiApiKey, dangerouslyAllowBrowser: true})

  async getResponse(promt:string) {
    const  chatCompletion = await this.openai.chat.completions.create({
      messages: [{ role: "system", content: promt }],
      model: "gpt-4o-mini",
      max_tokens: 500
    });
    return chatCompletion.choices[0].message.content
  }

}
