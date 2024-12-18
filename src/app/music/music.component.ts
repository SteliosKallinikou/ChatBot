import {Component, input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HighlightPipe} from '../shared/pipes/highlight.pipe';


@Component({
  selector: 'app-music',
  imports: [
    FormsModule,
    HighlightPipe,
  ],
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss'
})
export class MusicComponent{
  message = input.required<string>()
  sender=input.required<string>()
}

