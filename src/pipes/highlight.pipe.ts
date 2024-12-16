import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: string): string{
    const regex = /\*\*(.*?)\*\*|"(.*?)"/g;
      const match = value.match(regex)
     value = value.replace(regex,(match,p1,p2)=>{
       if(p1){
         return `<strong>${p1}</strong>`
       }
       else{
         return `<strong>${p2}</strong>`
       }
     })
      return value

  }

}
