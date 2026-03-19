import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { auth } from "../firebase/config";

export const authService = {
  login: async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const user = userCredential.user;

      return {
        user: {
          id: user.uid,
          email: user.email,
          name: user.displayName,
        },
        token: await user.getIdToken(),
      };
    } catch (error) {
      throw new Error("Falha ao realizar login");
    }
  },

  register: async (name, email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const user = userCredential.user;

      await updateProfile(user, {
        displayName: name,
      });

      return {
        user: {
          id: user.uid,
          email: user.email,
          name: name,
        },
        token: await user.getIdToken(),
      };
    } catch (error) {
      throw new Error("Não foi possível realizar o cadastro");
    }
  },

  logout: async () => {
    try {
      await signOut(auth);
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
