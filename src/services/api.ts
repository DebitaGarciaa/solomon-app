import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ;

export interface RegisterPayload {
  email: string;
  username: string;
  password: string;
}

export const registerUser = async (payload: RegisterPayload) => {
  return axios.post(`${API_BASE_URL}/users/register`, payload);
};
