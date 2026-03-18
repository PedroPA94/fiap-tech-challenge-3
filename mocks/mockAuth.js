const MOCK_USERS = {
  "user@example.com": {
    id: "user-123",
    email: "user@example.com",
    password: "password123",
    name: "João Silva",
  },
};

export const mockLogin = async (email, password) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const user = MOCK_USERS[email];

  if (!user || user.password !== password) {
    throw new Error("Email ou senha inválidos");
  }

  const { password: _, ...userWithoutPassword } = user;
  return {
    user: userWithoutPassword,
    token: `mock-token-${user.id}`,
  };
};

export const mockLogout = async () => {
  await new Promise((resolve) => setTimeout(resolve, 300));
};

export const mockGetCurrentUser = async (token) => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  if (!token) {
    return null;
  }

  const userId = token.replace("mock-token-", "");
  for (const user of Object.values(MOCK_USERS)) {
    if (user.id === userId) {
      const { password: _, ...userWithoutPassword } = user;
      return userWithoutPassword;
    }
  }

  return null;
};
