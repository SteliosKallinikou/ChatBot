import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightPipe } from '../shared/pipes/highlight.pipe';
import { ChatType, SenderTypes } from '../shared/enums';

@Component({
  selector: 'app-music',
  imports: [FormsModule, HighlightPipe],
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss',
})
export class MusicComponent {
  message = input.required<string>();
  sender = input.required<string>();
  protected readonly ChatType = ChatType;
  protected readonly SenderTypes = SenderTypes;
}
