import { Injectable } from '@angular/core';
import { state } from '../model';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  getState(stateKey: string): state {
    const savedState = localStorage.getItem(stateKey);
    return savedState ? (JSON.parse(savedState) as state) : { messages: [] };
  }

  saveState(state: state, stateKey: string): void {
    localStorage.setItem(stateKey, JSON.stringify(state));
  }

  clearService(stateKey: string): void {
    localStorage.removeItem(stateKey);
  }
}
