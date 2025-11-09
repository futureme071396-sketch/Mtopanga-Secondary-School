import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAMirosxN-_81B4te272HvayuVK63QRAGg",
  authDomain: "mtopanga-secondary-school.firebaseapp.com",
  projectId: "mtopanga-secondary-school",
  storageBucket: "mtopanga-secondary-school.firebasestorage.app",
  messagingSenderId: "783437006663",
  appId: "1:783437006663:web:6d61c2f022f4073bfb6e62"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Auto-login
signInAnonymously(auth).catch(console.error);
