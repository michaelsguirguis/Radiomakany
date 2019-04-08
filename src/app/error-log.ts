import { FirestoreDocument } from '../app/firestore-document';
import { Guid } from 'guid-typescript';

export class ErrorLog implements FirestoreDocument {
  logDate: string;
  id: string;
  constructor(public log: any) {
    this.id = Guid.create.toString();
    this.logDate = Date.now().toString();
  }
}
