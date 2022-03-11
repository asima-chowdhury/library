import {db} from '../firebase.config'

import { collection, getDocs, getDoc, addDoc, updateDoc , deleteDoc} from 'firebase/firestore';

class BookDataService {
    
}
const bookCollectionRef = collection(db, "books");

export default new BookDataService();