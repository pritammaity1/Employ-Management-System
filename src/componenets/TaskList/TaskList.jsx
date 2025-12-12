import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  const tasks = data?.tasks ?? [];
  const totalTasks = tasks.length;

  const renderTaskCard = (task) => {
    if (task.active) return <AcceptTask data={task} />;
    if (task.newTask) return <NewTask data={task} />;
    if (task.completed) return <CompleteTask data={task} />;
    if (task.failed) return <FailedTask data={task} />;
    return null;
  };

  return (
    <section className="mt-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-white">
            Your Task
          </h2>
          {totalTasks > 0 && (
            <p className="text-xs text-slate-400 mt-1">
              You have{" "}
              <span className="text-emerald-400 font-medium">{totalTasks}</span>{" "}
              tasks assigned.
            </p>
          )}
        </div>

        {/* Legend (purely visual, no logic yet) */}
        {totalTasks > 0 && (
          <div className="hidden md:flex items-center gap-2 text-[11px] text-slate-400">
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> New
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-sky-500" /> Active
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-cyan-400" /> Completed
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-rose-500" /> Failed
            </span>
          </div>
        )}
      </div>

      {/* Empty state */}
      {totalTasks === 0 ? (
        <div className="rounded-2xl border border-slate-700/60 bg-[#050816]/80 px-6 py-10">
          <p className="text-sm text-slate-400">
            No tasks assigned yet. Once tasks are added, you’ll see them here.
          </p>
        </div>
      ) : (
        <div
          id="tasklist"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-7"
        >
          {tasks.map((task) => (
            <div key={task.taskNumber} className="h-full">
              {renderTaskCard(task)}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

// const TaskList = ({ data }) => {
//   const tasks = data?.tasks ?? [];
//   const totalTasks = tasks.length;

//   const renderTaskCard = (task) => {
//     if (task.active) return <AcceptTask data={task} />;
//     if (task.newTask) return <NewTask data={task} />;
//     if (task.completed) return <CompleteTask data={task} />;
//     if (task.failed) return <FailedTask data={task} />;
//     return null;
//   };

//   return (
//     <section className="mt-10">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-5">
//         <div>
//           <h2 className="text-lg md:text-xl font-semibold text-white">
//             Your Task
//           </h2>
//           {totalTasks > 0 && (
//             <p className="text-xs text-slate-400 mt-1">
//               You have{" "}
//               <span className="text-emerald-400 font-medium">{totalTasks}</span>{" "}
//               tasks assigned.
//             </p>
//           )}
//         </div>
//       </div>

//       {/* Empty state */}
//       {totalTasks === 0 ? (
//         <div className="rounded-2xl border border-slate-700/60 bg-[#050816]/80 px-6 py-10">
//           <p className="text-sm text-slate-400">
//             No tasks assigned yet. Once tasks are added, you’ll see them here.
//           </p>
//         </div>
//       ) : (
//         <div
//           id="tasklist"
//           className="
//             grid gap-6
//             grid-cols-1
//             sm:grid-cols-2
//             lg:grid-cols-2
//             xl:grid-cols-3
//           "
//         >
//           {tasks.map((task) => (
//             <div key={task.taskNumber}>{renderTaskCard(task)}</div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// const TaskList = ({ data }) => {
//   const tasks = data?.tasks ?? [];

//   return (
//     <section className="mt-8">
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-lg font-semibold text-white">Your Task</h2>
//         <p className="text-xs text-slate-400">Swipe horizontally to see more</p>
//       </div>

//       <div
//         id="tasklist"
//         className="
//           flex flex-nowrap gap-6
//           w-full pb-2
//           overflow-x-auto
//           snap-x snap-mandatory
//           scroll-smooth px-1 md:px-2
//         "
//       >
//         {tasks.length === 0 ? (
//           <p className="text-slate-400 text-sm">No tasks assigned yet.</p>
//         ) : (
//           tasks.map((e) => {
//             if (e.active) {
//               return (
//                 <div
//                   key={e.taskNumber}
//                   className="snap-start shrink-0 w-[320px] md:w-[360px]"
//                 >
//                   <AcceptTask data={e} />
//                 </div>
//               );
//             }
//             if (e.newTask) {
//               return (
//                 <div
//                   key={e.taskNumber}
//                   className="snap-start shrink-0 w-[320px] md:w-[360px]"
//                 >
//                   <NewTask data={e} />
//                 </div>
//               );
//             }
//             if (e.completed) {
//               return (
//                 <div
//                   key={e.taskNumber}
//                   className="snap-start shrink-0 w-[320px] md:w-[360px]"
//                 >
//                   <CompleteTask data={e} />
//                 </div>
//               );
//             }
//             if (e.failed) {
//               return (
//                 <div
//                   key={e.taskNumber}
//                   className="snap-start shrink-0 w-[320px] md:w-[360px]"
//                 >
//                   <FailedTask data={e} />
//                 </div>
//               );
//             }
//             return null;
//           })
//         )}
//       </div>
//     </section>
//   );
// };

export default TaskList;
