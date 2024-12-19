import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  getState(stateKey: string) {
    const savedState = localStorage.getItem(stateKey);
    return savedState ? JSON.parse(savedState) : { messages: [] };
  }

  saveState(state: any, stateKey: string) {
    localStorage.setItem(stateKey, JSON.stringify(state));
  }

  clearService(stateKey: string) {
    localStorage.removeItem(stateKey);
  }
}
