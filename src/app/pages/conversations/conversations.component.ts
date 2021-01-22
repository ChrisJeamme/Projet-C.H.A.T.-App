import { ServerCommunicationService } from './../../services/server-communication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.scss']
})
export class ConversationsComponent implements OnInit
{

  constructor(
    private serverCommunicationService: ServerCommunicationService
  ) { }

  ngOnInit(): void
  {
  }

  test()
  {
    this.serverCommunicationService.testOk();
  }

}
