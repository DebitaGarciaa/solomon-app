// src/modules/join-us/_components/talent-pool-form.tsx
'use client';

import React from 'react';
import { useForm } from 'react-hook-form'; 
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'; 
// Asumsi Anda punya komponen Button di src/components/ui/button
import { Button } from '@/components/button';

// 1. Skema Validasi Input
const talentPoolSchema = z.object({
  email: z.string().email({ message: 'Alamat email tidak valid.' }),
});
type TalentPoolFormValues = z.infer<typeof talentPoolSchema>;

// 2. Komponen Form
const TalentPoolForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } = useForm<TalentPoolFormValues>({
    resolver: zodResolver(talentPoolSchema),
  });
  
  const onSubmit = async (data: TalentPoolFormValues) => {
    console.log('Submitting to NestJS Talent Pool API:', data);
    // --- Di sini letak useMutation dari React Query ---
    try {
        // Simulasi berhasil 
        await new Promise(resolve => setTimeout(resolve, 1500)); 
        console.log('Talent Pool Submission Success');
        reset(); // Bersihkan form
    } catch (error) {
        // Handle error API
        console.error('Submission failed', error);
    }
  };

  return (
    <div className="container max-w-2xl text-center">
      <h3 className="text-2xl font-bold mb-4">Didn't find a perfect fit?</h3>
      <p className="text-xl font-medium mb-6 text-gray-700">
        Don't worry! We're always looking for talented people. Join our *Talent Pool* and we'll notify you when a matching opportunity arises.
      </p>
      
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
        <input
          {...register('email')}
          type="email"
          placeholder="Enter your email address"
          // Gaya input yang sesuai dengan desain
          className={`flex-grow px-5 py-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors 
                      ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          disabled={isSubmitting || isSubmitSuccessful}
        />
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-blue-800 text-white font-semibold py-3 px-6 hover:bg-blue-700 disabled:opacity-50"
        >
          {isSubmitting ? 'Joining...' : 'Join Talent Pool'}
        </Button>
      </form>
      
      {errors.email && <p className="text-red-500 mt-2 text-sm">{errors.email.message}</p>}
      {isSubmitSuccessful && <p className="text-green-600 mt-2 font-medium">Thanks! We've added you to the pool.</p>}
    </div>
  );
};

// Component ini diimpor oleh recruitment-page.tsx
export default TalentPoolForm;