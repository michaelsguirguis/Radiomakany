import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { FirestoreDocument } from 'src/app/firestore-document';

@Injectable()
export class FirestoreService {
  constructor(private afStore: AngularFirestore) {}

  subscribeToCollection(name: string) {
    return this.afStore.collection(name).snapshotChanges();
  }

  addDocument(name: string, doc: FirestoreDocument) {
    return this.afStore.collection(name).add(doc);
  }

  updateDocument(name: string, doc: FirestoreDocument) {
    return this.afStore.collection(name).doc(doc.id).update(doc);
  }

  deleteDocument(name: string, doc: FirestoreDocument) {
    return this.afStore.collection(name).doc(doc.id).delete();
  }
}
