interface StepperProps {
  currentStep: number;
}

const Stepper = ({ currentStep }: StepperProps) => {
  const getStatus = (index: number) => {
    if (index < currentStep) return "completed";
    if (index === currentStep) return "active";
    return "pending";
  };

  const steps = [
    "Basic job details",
    "Compensation & Application",
    "Review & Publish",
  ];

  return (
    <div className="stepper">
      <div className="stepper-line" />
      {steps.map((label, idx) => (
        <div key={idx} className={`stepper-step ${getStatus(idx + 1)}`}>
          <div className="stepper-icon">{idx + 1}</div>
          <span className="stepper-label">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
