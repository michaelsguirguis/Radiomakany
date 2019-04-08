import { FirestoreDocument } from './firestore-document';

export class AppUser implements FirestoreDocument {
    id: string;
    fullName: string;
    email: string;
    phoneNumber: string;
    birthday: Date;
}

