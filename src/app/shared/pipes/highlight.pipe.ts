import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
  standalone: true,
})
export class HighlightPipe implements PipeTransform {
  transform(value: string): string {
    const regex = /\*\*(.*?)\*\*|"(.*?)"|###/g;

    value = value.replace(regex, (_match, p1, p2, p3) => {
      const content = p1 || p2;
      if (content) {
        return `<span class="highlights">${content}</span>`;
      }
      if (p3) {
        return `<br><br>`;
      } else {
        return '';
      }
    });
    return value;
  }
}
