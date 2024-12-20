import { SenderTypes } from './enums';

export interface messages {
  sender: SenderTypes;
  message: string;
}

export interface state {
  messages: messages[];
}
