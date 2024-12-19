import { Injectable } from '@angular/core';
//import OpenAI from "openai";

@Injectable({
  providedIn: 'root',
})
export class ApiResponsesService {
  // async AssistantMessage(run: OpenAI.Beta.Threads.Runs.Run, openai: OpenAI, thread:OpenAI.Beta.Threads.Thread) {
  //   const messages = await openai.beta.threads.messages.list(run.thread_id);
  //   console.log(messages)
  //   for (const message of messages.data.reverse()) {
  //     if (message.content[0].type == 'text')
  //     {
  //       return message.content[0].text.value
  //     }
  //   }
  //   return "Error Message not Found"
  // }
}
