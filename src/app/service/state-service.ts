import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root',
})

export class StateService {
  private stateKey='chatState';

  getState(){
    const savedState = localStorage.getItem(this.stateKey)
    return savedState ? JSON.parse(savedState): {messages:[]}
  }

  saveState(state:any){
  localStorage.setItem(this.stateKey, JSON.stringify(state))
  }
}
