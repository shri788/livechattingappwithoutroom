import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './web-socket.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

    user:string;
    messageText:string;
    messageArray:Array<{user:string,message:string}> = [];
    constructor(private WebSocketService:WebSocketService){
        
        this.WebSocketService.newMessageReceived()
        .subscribe(data=>this.messageArray.push(data));
    }

     sendmessage()
    {
        this.WebSocketService.sendMessage({user:this.user, message:this.messageText});
    }

}
