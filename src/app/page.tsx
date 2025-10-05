'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/register'); // ✅ ubah dari '/dashboard' ke '/register'
  }, [router]);

  return null; // kosong, karena auto redirect
}