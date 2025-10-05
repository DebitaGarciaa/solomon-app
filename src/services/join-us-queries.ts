// src/services/join-us-queries.ts
import { useQuery, keepPreviousData } from '@tanstack/react-query'; 
import axios from 'axios'; 

const API_URL = 'http://localhost:3000/api/v1'; // Contoh: Diambil dari .env
// FUNGSI 1: Mengambil data metrik (A Snapshot of Our Growth)
export const useGetJoinUsStats = () => {
  return useQuery({
    queryKey: ['joinUsStats'],
    queryFn: async () => {
      // KOREKSI DI SINI: Menggunakan backticks (`)
      const { data } = await axios.get(`${API_URL}/jobs/stats`);
      return data; 
    },
    staleTime: 1000 * 60 * 5, // Cache selama 5 menit
  });
};

// FUNGSI 2: Mengambil daftar divisi unik (Explore by Division)
export const useGetJoinUsDivisions = () => {
  return useQuery({
    queryKey: ['joinUsDivisions'],
    queryFn: async () => {
      // KOREKSI DI SINI: Menggunakan backticks (`)
      const { data } = await axios.get<string[]>('${API_URL}/jobs/divisions');
      return data;
    },
  });
};

// FUNGSI 3: Mengambil daftar lowongan (Roles We're Hiring For)
interface JobQueryOptions {
  division: string | null;
  term: string;
  page: string;
}

export const useGetJoinUsJobs = (options: JobQueryOptions) => {
  return useQuery({
    queryKey: ['joinUsJobs', options.division, options.term, options.page],
    queryFn: async () => {
      // KOREKSI DI SINI: Menggunakan backticks (`)
      const { data } = await axios.get(`${API_URL}/jobs`, {
        params: {
          division: options.division,
          term: options.term,
          page: options.page,
        },
      });
      // Mengembalikan response dengan struktur { data: [], meta: {} }
      return data; 
    },
    placeholderData: keepPreviousData, 
  });
};