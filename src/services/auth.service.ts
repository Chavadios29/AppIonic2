import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, deleteUser, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import { getFirestore, doc, setDoc, deleteDoc } from 'firebase/firestore';
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

      // Guardar información en Firestore
      await setDoc(doc(this.db, 'users', user.uid), {
        uid: user.uid,
        email: email,
        username: username,
        nombreCompleto: nombreCompleto,
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

  // Función para reautenticar al usuario antes de realizar la eliminación
  async reauthenticateUser(password: string) {
    const user = this.auth.currentUser;
    if (user) {
      const credential = EmailAuthProvider.credential(user.email!, password);
      try {
        await reauthenticateWithCredential(user, credential);
        console.log('Reautenticación exitosa');
      } catch (error) {
        throw new Error('Error al reautenticar al usuario');
      }
    } else {
      throw new Error('Usuario no autenticado');
    }
  }

  // Método para eliminar la cuenta del usuario
  async eliminarCuenta(password: string) {
    const user = this.auth.currentUser;
    
    if (user) {
      try {
        // Reautenticar al usuario antes de eliminar la cuenta
        await this.reauthenticateUser(password);

        // Eliminar datos de Firestore
        await deleteDoc(doc(this.db, 'users', user.uid));

        // Eliminar la cuenta de Firebase Authentication
        await deleteUser(user);
        console.log('Usuario eliminado con éxito');

        // Desloguear al usuario
        this.logout();
      } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        throw new Error('Ocurrió un error al eliminar el usuario');
      }
    } else {
      throw new Error('No hay usuario autenticado');
    }
  }
}
