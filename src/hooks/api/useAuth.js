import { api } from "./provider"

export const useAuth = () => ({
  signIn: async (email, password) => {
    try {
      const response = await api.post('/api/auth/login', { email, password});
      return response.data;
    } catch (error) {
      return 'Usuario ou senha invalidos';
    }
  },
  validateToken: async (token) => {
    try {
      const response = await api.post('/api/auth/validate', { token });

      return response.data;
    } catch (error) {
      return false;
    }
  }
})