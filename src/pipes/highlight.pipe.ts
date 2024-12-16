import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: string): string{
    const regex = /\*\*(.*?)\*\*/g;
    value = value.replace(regex,(match,p1)=>{return `<strong>${p1}</strong>`})
    return value
  }

}
