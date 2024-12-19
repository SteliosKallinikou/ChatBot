import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
  standalone: true,
})
export class HighlightPipe implements PipeTransform {
  transform(value: string): string {
    const regex = /\*\*(.*?)\*\*|"(.*?)"|###/g;
    value = value.replace(regex, (_match, p1, p2, p3) => {
      if (p1) {
        return `<span class="highlights">${p1}</span>`;
      }
      if (p2) {
        return `<span class="highlights">${p2}</span>`;
      } else {
        return `<br><br>`;
      }
    });
    return value;
  }
}
