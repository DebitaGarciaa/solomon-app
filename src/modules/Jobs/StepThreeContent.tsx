interface StepProps {
  onBack: () => void;
}

export default function StepThreeContent({ onBack }: StepProps) {
  return (
    <div className="jobpost-form-card text-center py-12">
      <h2 className="jobpost-section-title">Review & Publish</h2>
      <p className="text-gray-600 mb-6">
        Tinjau kembali data Anda sebelum mempublikasikan.
      </p>

      <div className="flex justify-between pt-4 max-w-sm mx-auto">
        <button onClick={onBack} className="btn-back">Back</button>
        <button className="btn-next bg-green-600 hover:bg-green-700">
          Publish Job
        </button>
      </div>
    </div>
  );
}
