import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const { userData } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = userData.filter((user) =>
    `${user.firstName} ${user.lastName || ""}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <section className="mt-8">
      <div className="rounded-2xl border border-slate-700/70 bg-[#030817]/80 backdrop-blur-sm px-4 py-5 md:px-6 md:py-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-3">
          <h2 className="text-lg md:text-xl font-semibold text-white">
            Employee Task Overview
          </h2>

          {/* Search input */}
          <div className="w-full md:w-64">
            <input
              type="text"
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className=" w-full rounded-full bg-slate-900/60 border border-slate-600/70 px-3 py-2
                text-xs md:text-sm text-white placeholder:text-slate-500 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/60"
            />
          </div>
        </div>

        {/* HEADER */}
        <div className="hidden md:grid grid-cols-5 py-3 px-4 rounded-xl bg-slate-800/40 text-sm font-medium text-slate-200 border border-slate-700/60">
          <span>Employee Name</span>
          <span>New Task</span>
          <span>Active</span>
          <span>Completed</span>
          <span>Failed</span>
        </div>

        {/* BODY */}
        <div className="mt-3 space-y-3">
          {filteredUsers.map((user, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-5 gap-y-2 md:gap-0 px-4 py-4 rounded-xl border border-slate-700/50 bg-slate-900/30"
            >
              {/* Employee Name */}
              <div className="flex items-center font-medium text-white">
                {user.firstName}
              </div>

              {/* New Task */}
              <div className="flex items-center">
                <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 text-sm font-semibold">
                  {user.taskStats.newTask}
                </span>
              </div>

              {/* Active */}
              <div className="flex items-center">
                <span className="px-3 py-1 rounded-full bg-sky-500/15 text-sky-300 text-sm font-semibold">
                  {user.taskStats.active}
                </span>
              </div>

              {/* Completed */}
              <div className="flex items-center">
                <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-sm font-semibold">
                  {user.taskStats.completed}
                </span>
              </div>

              {/* Failed */}
              <div className="flex items-center">
                <span className="px-3 py-1 rounded-full bg-rose-500/15 text-rose-400 text-sm font-semibold">
                  {user.taskStats.failed}
                </span>
              </div>
            </div>
          ))}

          {filteredUsers.length === 0 && (
            <p className="text-xs md:text-sm text-slate-400 px-1">
              No employees found for &quot;{searchTerm}&quot;.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

// const AllTask = () => {
//   const { userData, setUserData } = useContext(AuthContext);

//   return (
//     <div className="bg-[#1c1c1c] p-5 mt-5 mx-8 rounded-xl  ">
//       <div className="bg-red-400 py-2 px-4 flex justify-between rounded">
//         <h2 className="text-lg font-medium text-white w-1/5">Employee Name</h2>
//         <h3 className="text-lg font-medium text-white w-1/5">New Task</h3>
//         <h5 className="text-lg font-medium text-white w-1/5">Active Atsk</h5>
//         <h5 className="text-lg font-medium text-white w-1/5">Completed</h5>
//         <h5 className="text-lg font-medium text-white w-1/5">Failed</h5>
//       </div>
//       <div className=" ">
//         {userData.map((e, idx) => {
//           return (
//             <div
//               key={idx}
//               className="flex flex-col gap-3 mt-2 justify-between "
//             >
//               <div className="border border-emerald-400 py-2 px-4 flex rounded">
//                 <h2 className="w-1/5 text-white text-lg">{e.firstName}</h2>
//                 <h3 className="text-blue-600 w-1/5 text-lg font-medium">
//                   {e.taskStats.newTask}
//                 </h3>
//                 <h5 className="text-yellow-500 w-1/5 text-lg font-medium">
//                   {e.taskStats.active}
//                 </h5>
//                 <h5 className="text-white w-1/5 text-lg font-medium">
//                   {e.taskStats.completed}
//                 </h5>
//                 <h5 className="text-red-600 w-1/5 text-lg font-medium">
//                   {e.taskStats.failed}
//                 </h5>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

export default AllTask;
