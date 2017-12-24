import { Injectable } from '@angular/core';
 
@Injectable()
export class MessageService {
  messages: string[] = [];
  private heroesUrl = 'api/heroes';
 
  add(message: string) {
    this.messages.push(message);
  }

  private log(message: string) {
  	this.messageService.add('HeroService: ' + message);
  }
 
  clear() {
    this.messages = [];
  }
}