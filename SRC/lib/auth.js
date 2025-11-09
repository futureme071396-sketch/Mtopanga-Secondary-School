import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "eduteach-hub.firebaseapp.com",
  projectId: "eduteach-hub",
  storageBucket: "eduteach-hub.firebasestorage.app",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Auto-login
signInAnonymously(auth).catch(console.error);
