import { api } from "./provider"

export const useUser = () => ({
  registerUser: async (name, email, password) => {
    try {
      const form = {name, email, password}
      const response = await api.post('/api/users/createuser', form);
      return response.data;
    } catch(error) {
      throw new Error('Erro ao criar usuário: ', error);
    }
  },

  getAllUsers: async (token) => {
    try {
      const response = await api.get('/api/users/all', {
        headers: { Authorization: `Bearer ${token}`}
      })

      return response.data;
    } catch (error) {
      throw new Error('Erro ao solicitar lista de usuários: ', error)
    }
  },

  deleteUser: async (token, id) => {
    try {
      const response = await api.delete(`/api/users/deleteUser/${id}`, {
        headers: { Authorization: `Bearer ${token}`}
      })

      return response;
    } catch (error) {
      throw new Error('Erro ao deletar usuário');
    }
  }
})