import React, { useContext } from "react";
import Header from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

import { AuthContext } from "../../context/AuthProvider";

/* ---------- Skeleton while employee data is loading ---------- */
const DashboardSkeleton = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 px-4 py-6 md:px-6">
      <div className="max-w-7xl mx-auto animate-pulse space-y-8">
        {/* Header skeleton */}
        <div className="space-y-3 mt-4">
          <div className="h-4 w-28 bg-slate-700/40 rounded-full" />
          <div className="h-8 w-64 bg-slate-700/40 rounded-lg" />
          <div className="h-4 w-52 bg-slate-700/40 rounded-full" />
        </div>

        {/* Stats skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-24 rounded-2xl border border-slate-700/50 bg-slate-800/40"
            />
          ))}
        </div>

        {/* Task list skeleton */}
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-32 rounded-2xl border border-slate-700/60 bg-slate-800/40"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const EmployeeDashboard = ({ userEmail }) => {
  const { userData } = useContext(AuthContext);

  // Live updated employee from global context
  const employee = userData?.find((u) => u.email === userEmail);

  // While userData is still loading or employee not found yet → show skeleton
  if (!employee) return <DashboardSkeleton />;

  return (
    <div
      className="
        min-h-screen 
        bg-[#020617]
        bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.12),transparent_55%)]
        text-slate-100
        px-4 py-6 md:px-6
      "
    >
      <main
        className="
          max-w-7xl mx-auto space-y-10 
          animate-[fadeIn_0.5s_ease-out]
        "
      >
        {/* Greeting */}
        <Header data={employee} />

        {/* Task stats card row */}
        <section className="animate-[fadeIn_0.6s_ease-out]">
          <TaskListNumbers data={employee} />
        </section>

        {/* Full task list */}
        <section className="pb-6 animate-[fadeIn_0.7s_ease-out]">
          <TaskList data={employee} />
        </section>
      </main>
    </div>
  );
};

export default EmployeeDashboard;
