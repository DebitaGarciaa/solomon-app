export default function JobsCard() {
  const jobListings = [
    {
      id: 1,
      title: "Host Live Freelance",
      type: "Freelance",
      location: "Surabaya, Jawa Timur",
      status: "Aktif",
    },
    {
      id: 2,
      title: "Social Media Specialist",
      type: "Full-Time",
      location: "Jakarta Selatan",
      status: "Aktif",
    },
  ];

  return (
    <div className="job-list-card">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">
        Daftar Lowongan Kerja
      </h2>

      {jobListings.map((job) => (
        <div key={job.id} className="job-item">
          <div className="job-item-details">
            <h3>{job.title}</h3>
            <p>{job.type} | {job.location}</p>
          </div>
          <span className="job-status">{job.status}</span>
        </div>
      ))}
    </div>
  );
}
