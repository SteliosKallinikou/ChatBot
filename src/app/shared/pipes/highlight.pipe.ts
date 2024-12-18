import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
  standalone: true
})
export class HighlightPipe implements PipeTransform {

  transform(value: string): string{
    const regex = /\*\*(.*?)\*\*|"(.*?)"|###/g;
      const match = value.match(regex)
     value = value.replace(regex,(match,p1,p2,p3)=>{
       const content = p1 || p2
       if(p1){
         return `<strong>${p1}</strong>`
       }
       if(p3){
         return `<br><br>`
       }
       else{
         return `<strong>${p2}</strong>`
       }
     })
      return value

  }

}
