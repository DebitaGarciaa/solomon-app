// src/modules/join-us/_components/talent-pool-form.tsx
"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/button";

const talentPoolSchema = z.object({
  email: z.string().email({ message: "Alamat email tidak valid." }),
});
type TalentPoolFormValues = z.infer<typeof talentPoolSchema>;

const TalentPoolForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<TalentPoolFormValues>({
    resolver: zodResolver(talentPoolSchema),
  });

  const onSubmit = async (data: TalentPoolFormValues) => {
    console.log("Submitting to Talent Pool API:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    reset();
  };

  return (
    <div className="container max-w-4xl text-center bg-white p-10 rounded-xl shadow-2xl">
      <h3 className="text-3xl font-bold mb-4">Didn't find a perfect fit?</h3>
      <p className="text-lg text-gray-600 mb-8">
        Don't worry! We're always looking for talented people. Join our Talent
        Pool and we'll notify you when a matching opportunity arises.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto"
      >
        <input
          {...register("email")}
          type="email"
          placeholder="enter your email address"
          className={`flex-grow px-5 py-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors 
                      ${errors.email ? "border-red-500" : "border-gray-300"}`}
          disabled={isSubmitting || isSubmitSuccessful}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {isSubmitting ? "Joining..." : "Join Talent Pool"}
        </Button>
      </form>

      {errors.email && (
        <p className="text-red-500 mt-2 text-sm">{errors.email.message}</p>
      )}
      {isSubmitSuccessful && (
        <p className="text-green-600 mt-2 font-medium">
          Thanks! We've added you to the pool.
        </p>
      )}
    </div>
  );
};

export default TalentPoolForm;