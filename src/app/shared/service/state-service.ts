import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  getState(stateKey: string): any {
    const savedState = localStorage.getItem(stateKey);
    return savedState ? JSON.parse(savedState) : { messages: [] };
  }

  saveState(state: any, stateKey: string): void {
    localStorage.setItem(stateKey, JSON.stringify(state));
  }

  clearService(stateKey: string): void {
    localStorage.removeItem(stateKey);
  }
}
