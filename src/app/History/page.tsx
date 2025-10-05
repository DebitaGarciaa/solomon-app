"use client";

import { useState } from "react";
import { Download, Eye, Edit, Trash2 } from "lucide-react";

export default function HistoryPage() {
  const [filters, setFilters] = useState({
    periode1: "Hari Ini",
    periode2: "Hari Ini",
    periode3: "Hari Ini",
    periode4: "Hari Ini",
  });

  const applicants = [
    { id: 1, date: "28 Sep, 2025", name: "Ratna Ayu", email: "RatnaAyu@gmail.com", position: "Software Engineer", location: "Surabaya" },
    { id: 2, date: "28 Sep, 2025", name: "Ayu Sari", email: "AyuSari@gmail.com", position: "UI/UX Designer", location: "Jakarta" },
    { id: 3, date: "29 Sep, 2025", name: "Intan Ayu", email: "IntanAyu@gmail.com", position: "Marketing", location: "Bandung" },
    { id: 4, date: "30 Sep, 2025", name: "Agung Dias", email: "AgungDias@gmail.com", position: "HRD", location: "Surabaya" },
    { id: 5, date: "01 Oct, 2025", name: "Pratama Agung", email: "PratamaAgung@gmail.com", position: "Accountant", location: "Jakarta" },
    { id: 6, date: "01 Oct, 2025", name: "Intan Laksana", email: "IntanLaksana@gmail.com", position: "Project Manager", location: "Yogyakarta" },
  ];

  return (
    <div className="history-container">
      {/* Title */}
      <h1 className="history-title">History Rekrutmen</h1>

      {/* Statistik Cards */}
      <div className="history-cards">
        <div className="history-card">
          <h3>Total Pelamar</h3>
          <p>120</p>
        </div>
        <div className="history-card">
          <h3>Diterima</h3>
          <p>45</p>
        </div>
        <div className="history-card">
          <h3>Ditolak</h3>
          <p>60</p>
        </div>
        <div className="history-card">
          <h3>Proses</h3>
          <p>15</p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="history-filter">
        <h4>Filter Riwayat</h4>
        <div className="filter-row">
          {Object.keys(filters).map((key, idx) => (
            <select
              key={idx}
              value={filters[key as keyof typeof filters]}
              onChange={(e) => setFilters({ ...filters, [key]: e.target.value })}
            >
              <option>Hari Ini</option>
              <option>Minggu Ini</option>
              <option>Bulan Ini</option>
            </select>
          ))}
          <button className="btn-filter">Terapkan Filter</button>
        </div>
      </div>

      {/* Table Riwayat */}
      <div className="history-table-wrapper">
        <div className="history-table-header">
          <span>Daftar Riwayat Pelamar</span>
          <button>
            <Download size={16} /> Export Excel
          </button>
        </div>
        <table className="history-table">
          <thead>
            <tr>
              <th>NO</th>
              <th>TANGGAL APPLY</th>
              <th>NAMA PELAMAR</th>
              <th>EMAIL</th>
              <th>POSISI</th>
              <th>LOKASI</th>
              <th>AKSI</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((app, index) => (
              <tr key={app.id}>
                <td>{index + 1}</td>
                <td>{app.date}</td>
                <td>{app.name}</td>
                <td>{app.email}</td>
                <td>{app.position}</td>
                <td>{app.location}</td>
                <td>
                  <div className="table-actions">
                    <button title="Lihat">
                      <Eye size={16} />
                    </button>
                    <button title="Edit">
                      <Edit size={16} />
                    </button>
                    <button title="Hapus">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="history-table-footer">
          Menampilkan {applicants.length} data pelamar
        </div>
      </div>
    </div>
  );
}
