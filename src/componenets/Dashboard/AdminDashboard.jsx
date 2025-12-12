import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashboard = ({ data }) => {
  return (
    <div className="min-h-screen bg-[#020617] bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.12),transparent_55%)] text-slate-100 px-4 py-6 md:px-6">
      <main className="max-w-7xl mx-auto space-y-8">
        {/* Top header (same as employee, reused) */}
        <Header data={data} />

        {/* Main admin content */}
        <section className="space-y-6">
          {/* Create task panel */}
          <CreateTask />

          {/* Employee task table / overview */}
          <AllTask />
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
