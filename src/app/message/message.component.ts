import { Component, OnInit, Inject , Output, EventEmitter} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Output() sendVerificationEmail = new EventEmitter<string>();

  constructor(
    public dialogRef: MatDialogRef<MessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Message
    ) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  fireSendVerificationEmail() {
    this.sendVerificationEmail.emit('');
  }
}

export interface Message {
  title: string;
  closeButtonText: string;
  matButtonColor: string;
  message: string;
  useButtons: boolean;
  allowSendVerificationEmail: boolean;
}
