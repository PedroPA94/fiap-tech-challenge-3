const MOCK_USERS = {
  "user@example.com": {
    id: "user-123",
    email: "user@example.com",
    password: "password123",
    name: "João Silva",
  },
};

let registeredUsers = { ...MOCK_USERS };
let nextUserId = 124;

export const mockLogin = async (email, password) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const user = registeredUsers[email];

  if (!user || user.password !== password) {
    throw new Error("Email ou senha inválidos");
  }

  const { password: _, ...userWithoutPassword } = user;
  return {
    user: userWithoutPassword,
    token: `mock-token-${user.id}`,
  };
};

export const mockRegister = async (name, email, password) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Valida se email já existe
  if (registeredUsers[email]) {
    throw new Error("Este email já está cadastrado");
  }

  // Valida dados
  if (!name || name.trim().length < 3) {
    throw new Error("Nome deve ter pelo menos 3 caracteres");
  }

  if (!email || !email.includes("@")) {
    throw new Error("Email inválido");
  }

  if (!password || password.length < 6) {
    throw new Error("Senha deve ter pelo menos 6 caracteres");
  }

  // Cria novo usuário
  const newUser = {
    id: `user-${nextUserId++}`,
    email,
    password,
    name,
    createdAt: new Date().toISOString(),
  };

  registeredUsers[email] = newUser;

  const { password: _, ...userWithoutPassword } = newUser;
  return {
    user: userWithoutPassword,
    token: `mock-token-${newUser.id}`,
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
  for (const user of Object.values(registeredUsers)) {
    if (user.id === userId) {
      const { password: _, ...userWithoutPassword } = user;
      return userWithoutPassword;
    }
  }

  return null;
};
