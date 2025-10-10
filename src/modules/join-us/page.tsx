export default function JoinUsPage() {
  return (
    <div className="joinus-container">
      {/* Hero Section */}
      <section className="joinus-hero">
        <h1>Your Potential, Unleashed</h1>
        <p>Stop dreaming about the future. Start building it with us today.</p>
      </section>

      {/* Snapshot / Testimonial */}
      <section className="snapshot-section">
        <h2 className="section-title">Hear It From The Team</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
              "The best part is the trust. My manager doesn't micromanage; I feel
              empowered to take full ownership of my projects."
            </p>
            <div className="author">
              Bima <br /> Backend Developer
            </div>
          </div>

          <div className="testimonial-card">
            <p>
              "I love the collaborative environment. Everyone is willing to help
              and share knowledge."
            </p>
            <div className="author">
              Sari <br /> Frontend Developer
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="why-join">
        <h2>Why Join Us?</h2>
        <p>
          Our SOLID culture empowers every team member to grow, learn, and
          create impact.
        </p>
      </section>

      {/* Roles / Job List */}
      <section className="roles-section">
        <h2 className="section-title">Open Positions</h2>
        <div className="job-list">
          {/* Gunakan komponen JobCard.tsx di sini */}
        </div>
      </section>
    </div>
  );
}
