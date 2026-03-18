import { mockLogin, mockLogout, mockGetCurrentUser } from "../mocks/mockAuth";

export const authService = {
  login: async (email, password) => {
    try {
      const response = await mockLogin(email, password);
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  logout: async () => {
    try {
      await mockLogout();
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getCurrentUser: async (token) => {
    try {
      const user = await mockGetCurrentUser(token);
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
