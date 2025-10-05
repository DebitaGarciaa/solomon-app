"use client";
import { useState } from "react";

interface StepProps {
  onNext: () => void;
}

export default function StepOneContent({ onNext }: StepProps) {
  const [skills, setSkills] = useState<string[]>(["Microsoft Office", "Troubleshooting"]);
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newSkill.trim()) {
      e.preventDefault();
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  return (
    <form
      className="jobpost-form-card space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        onNext();
      }}
    >
      <h2 className="jobpost-section-title">Basic Information</h2>

      <div className="grid-2-col">
        <div>
          <label className="form-label">Job Title</label>
          <input type="text" placeholder="e.g IT Support" className="jobpost-input" />
        </div>
        <div>
          <label className="form-label">Department</label>
          <select className="jobpost-select">
            <option>Select Department</option>
            <option>IT</option>
            <option>HR</option>
          </select>
        </div>
      </div>

      <div className="grid-2-col">
        <div>
          <label className="form-label">Employment Type</label>
          <select className="jobpost-select">
            <option>Select Type</option>
            <option>Full-Time</option>
            <option>Part-Time</option>
          </select>
        </div>
        <div>
          <label className="form-label">Positions Available</label>
          <input type="number" defaultValue={1} className="jobpost-input" />
        </div>
      </div>

      <div>
        <label className="form-label">Skills Required</label>
        <div className="jobpost-skill-box">
          {skills.map((s, i) => (
            <span key={i} className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">{s}</span>
          ))}
          <input
            type="text"
            placeholder="Type a skill and press Enter..."
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyDown={handleAddSkill}
            className="jobpost-input"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button type="submit" className="btn-next">Next</button>
      </div>
    </form>
  );
}
