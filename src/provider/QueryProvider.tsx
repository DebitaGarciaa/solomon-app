'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { useState } from 'react';

// Komponen ini akan menjadi "pembungkus" sisi klien
export default function QueryProvider({ children }: { children: React.ReactNode }) {
  // Logika useState untuk membuat instance QueryClient hanya sekali
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
