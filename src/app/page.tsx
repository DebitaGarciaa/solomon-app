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

//INI AKU TD MECAHIN GLOBAL CSSNYA KE STYEL JD DI GLOBAL CC YANG APP ITU CUMA MANGGIL YANG DI STEYLNYAA YAKK