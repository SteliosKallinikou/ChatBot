import { Component, effect, ElementRef, inject, input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatProgressBar } from '@angular/material/progress-bar';
import { StateService } from '../shared/service/state-service';
import { MusicComponent } from '../music/music.component';
import { RouterOutlet } from '@angular/router';
import { messages } from '../shared';
import { ResponseService } from '../shared/service/response-service.service';

@Component({
  selector: 'app-home',
  imports: [FormsModule, MatProgressBar, MusicComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  stateService = inject(StateService);
  responseService = inject(ResponseService);
  name = input.required<string>();
  @ViewChild('changes') change!: ElementRef;

  messages: messages[] = [];
  prompt = '';
  welcomeMessage = '';
  isLoading = false;

  constructor() {
    effect(() => {
      const state = this.stateService.getState(this.name());
      this.messages = state.messages;
      this.welcomeMessage = 'Welcome to ' + this.name();
      this.onRestart();
    });
  }

  async sendMessage(userMessage: string): Promise<void> {
    this.messages.push({ sender: 'user', message: userMessage });
    this.isLoading = true;
    const botMessage = await this.responseService.getResponse(userMessage, this.name()).then();
    if (botMessage != null) {
      this.messages.push({ sender: 'bot', message: botMessage });
      this.isLoading = false;
    }

    this.stateService.saveState({ messages: this.messages }, this.name());
    this.prompt = '';
  }

  clearChat(): void {
    this.stateService.clearService(this.name());
    this.messages = [];
  }

  onRestart(): void {
    const element = this.change.nativeElement;
    element.style.animation = 'none';
    void element.offsetWidth;
    element.style.animation = '';
  }
}
