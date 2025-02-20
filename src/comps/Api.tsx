import axios from "axios";
import { User, Todo } from "../types/App";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchUsers = async (): Promise<User[]> => {
  const { data } = await axios.get(`${API_BASE_URL}/users`);
  return data;
};

export const fetchTodos = async (): Promise<Todo[]> => {
  const { data } = await axios.get(`${API_BASE_URL}/todos`);
  return data;
};