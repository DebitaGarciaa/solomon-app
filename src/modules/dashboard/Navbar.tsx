export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <img src="/Logo.png" alt="Solomon Indo Global" className="h-8 w-auto" />
        <span>Solomon Indo Global</span>
      </div>

      <nav className="navbar-menu">
        <a href="/dashboard" className="active">Dashboard</a>
        <a href="/jobs">Jobs</a>
        <a href="/history">History</a>
      </nav>
    </header>
  );
}
