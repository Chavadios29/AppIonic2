import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { firebaseConfig } from '../services/firebase-config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private app = initializeApp(firebaseConfig);
  private auth = getAuth(this.app);
  private db = getFirestore(this.app);

  constructor() {}

 
  async register(email: string, password: string, username: string, nombreCompleto: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      const user = userCredential.user;

      
      await updateProfile(user, { displayName: nombreCompleto });

      // 🔹 Guardar información en Firestore
      await setDoc(doc(this.db, 'users', user.uid), {
        uid: user.uid,
        email: email,
        username: username,
        nombreCompleto: nombreCompleto,  // 🔹 Ahora guardamos nombreCompleto
        createdAt: new Date().toISOString(),
      });

      return userCredential;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error('Ocurrió un error inesperado');
    }
  }


  async login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      return userCredential;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error('Ocurrió un error inesperado');
    }
  }

 
  logout() {
    this.auth.signOut();
  }
}
