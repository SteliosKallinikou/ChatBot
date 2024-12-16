import {Injectable} from '@angular/core';
import {environment} from '../shared/enviroment';
import OpenAI from "openai";

@Injectable({
  providedIn: 'root'
})

export class ChatBotAiService {

  openai = new OpenAI({apiKey: environment.openaiApiKey, dangerouslyAllowBrowser: true})
  output: string|undefined
  content: string|null|undefined




  async getResponse(promt:string) {
    const  chatCompletion = await this.openai.chat.completions.create({
      messages: [{ role: "system",content: "You are a powerfull assistant that knows many things about everything."},
        {role: "user", content: promt}],
      model: "gpt-4o-mini",
      max_tokens: 1050,
    })
    return chatCompletion.choices[0].message.content

  }

  async createAssistant(promt: string){
    const assistant= await this.openai.beta.assistants.retrieve("asst_buRnGd1d5BeiSbQ6mfjXkItp")
    let thread = await this.openai.beta.threads.create()
    let run = await this.openai.beta.threads.runs.createAndPoll(thread.id,{
        assistant_id: assistant.id
      })

    if(run.status==='completed'){
          const messages= await this.openai.beta.threads.messages.list(run.thread_id);
          for(const message of messages.data.reverse()){
            if(message.content[0].type=='text'){
              this.output=message.content[0].text.value
            }

          }
        }
          return this.output
  }
}
