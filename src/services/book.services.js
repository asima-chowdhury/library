import { db } from '../firebase.config'

import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

const bookCollectionRef = collection(db, "books");
class BookDataService {
    addBooks = (newBook) => {
        return addDoc(bookCollectionRef, newBook);
    }
}

export default new BookDataService();