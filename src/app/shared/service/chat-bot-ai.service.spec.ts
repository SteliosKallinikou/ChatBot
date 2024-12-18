import { TestBed } from '@angular/core/testing';

import { ChatBotAiService } from './chat-bot-ai.service';

describe('ChatBotAiService', () => {
  let service: ChatBotAiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatBotAiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
