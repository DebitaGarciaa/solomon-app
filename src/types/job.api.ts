// src/types/job.api.ts


export interface Job {
  id: string;
  title: string;
  division: string;
  location: string;
  type: 'Full-Time' | 'Part-Time' | 'Contract';
  postedAt: string; // ISO Date String
  summary: string;
}


export interface PaginationMeta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

/**
 * Interface untuk Response API List Lowongan
 */
export interface JobsResponse {
  data: Job[];
  meta: PaginationMeta;
}

/**
 * Interface untuk Response Statistik Perekrutan
 */
export interface StatsResponse {
  totalJobs: number;
  totalEmployees: number;
  yearsInBusiness: number;
  growthRate: number;
}