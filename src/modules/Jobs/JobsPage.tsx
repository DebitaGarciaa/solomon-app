"use client";
import { useState } from "react";
import Stepper from "./JobStepper";
import StepOneContent from "./StepOneContent";
import StepTwoContent from "./StepTwoContent";
import StepThreeContent from "./StepThreeContent";

export default function JobsPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const goToNextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const goToPrevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="jobpost-container">
      <h1 className="jobpost-title">Create new job post</h1>

      {/* Stepper */}
      <Stepper currentStep={currentStep} />

      {/* Content per step */}
      {currentStep === 1 && <StepOneContent onNext={goToNextStep} />}
      {currentStep === 2 && (
        <StepTwoContent onNext={goToNextStep} onBack={goToPrevStep} />
      )}
      {currentStep === 3 && <StepThreeContent onBack={goToPrevStep} />}
    </div>
  );
}
