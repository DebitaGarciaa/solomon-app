interface StepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function StepTwoContent({ onNext, onBack }: StepProps) {
  return (
    <div className="jobpost-form-card">
      <h2 className="jobpost-section-title">Job Description</h2>

      <div className="mb-8 p-6 bg-white rounded-lg border border-gray-300 shadow-inner">
        <ol className="list-decimal pl-5 text-gray-700 space-y-2 text-sm">
          <li>Melakukan instalasi dan konfigurasi software.</li>
          <li>Pemeliharaan aset digital kantor.</li>
          <li>Bekerja sama dengan tim IT support.</li>
        </ol>
      </div>

      <h2 className="jobpost-section-title mt-10">Requirements</h2>

      <div className="mb-12 p-6 bg-white rounded-lg border border-gray-300 shadow-inner">
        <ol className="list-decimal pl-5 text-gray-700 space-y-2 text-sm">
          <li>Minimal SMK/D3 bidang IT.</li>
          <li>Familiar dengan troubleshooting jaringan.</li>
        </ol>
      </div>

      <div className="flex justify-between">
        <button onClick={onBack} className="btn-back">Back</button>
        <button onClick={onNext} className="btn-next">Next</button>
      </div>
    </div>
  );
}
