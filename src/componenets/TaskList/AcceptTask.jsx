// import React from "react";

import React, { useEffect, useState } from "react";
import { PlayCircle, CalendarDays, Eye, X } from "lucide-react";

const AcceptTask = ({ data }) => {
  const [mounted, setMounted] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <div
        className={`h-full min-h-[260px] rounded-3xl border border-sky-500/35 bg-[#050b11] bg-linear-to-br from-sky-500/20 to-[#050b11] p-5 md:p-6 flex flex-col justify-between transform transition duration-300
          ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          } hover:-translate-y-0.5 hover:scale-[1.01]`}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-sky-500/20 flex items-center justify-center">
              <PlayCircle className="w-4 h-4 text-sky-300" />
            </div>
            <span className="rounded-full bg-sky-600/90 px-3 py-1 text-[11px] font-medium text-white">
              {data.category}
            </span>
          </div>

          <span className="rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-200">
            Active
          </span>
        </div>

        <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-300">
          <CalendarDays className="w-3 h-3" />
          <span>{data.taskDate}</span>
        </div>

        <div className="mt-4 space-y-2">
          <h2 className="text-base md:text-lg font-semibold text-white leading-snug">
            {data.taskTitle}
          </h2>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed line-clamp-3">
            {data.taskDescription}
          </p>
        </div>

        <div className="mt-5 flex flex-col sm:flex-row gap-3">
          <button className="flex-1 rounded-full bg-emerald-500 px-4 py-2 text-xs md:text-sm font-medium text-white hover:bg-emerald-400 transition">
            Mark as Completed
          </button>
          <button className="flex-1 rounded-full bg-rose-500 px-4 py-2 text-xs md:text-sm font-medium text-white hover:bg-rose-400 transition">
            Mark as Failed
          </button>
        </div>

        <button
          type="button"
          onClick={() => setShowDetails(true)}
          className="mt-3 inline-flex items-center gap-1 text-[11px] md:text-xs text-sky-300 hover:text-sky-200"
        >
          <Eye className="w-3 h-3" />
          View details
        </button>
      </div>

      {showDetails && (
        <TaskDetailsModal
          data={data}
          onClose={() => setShowDetails(false)}
          accentBorder="border-sky-500/40"
        />
      )}
    </>
  );
};

const TaskDetailsModal = ({ data, onClose, accentBorder }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
    onClick={onClose}
  >
    <div
      className={`w-full max-w-md rounded-2xl border ${accentBorder} bg-[#050814] p-5 md:p-6`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm md:text-base font-semibold text-white">
          {data.taskTitle}
        </h3>
        <button onClick={onClose} className="p-1 rounded-full hover:bg-white/5">
          <X className="w-4 h-4 text-slate-300" />
        </button>
      </div>

      <p className="text-[11px] text-slate-400 mb-2">
        Category: <span className="text-slate-200">{data.category}</span>
      </p>
      <p className="text-[11px] text-slate-400 mb-4">
        Due date: <span className="text-slate-200">{data.taskDate}</span>
      </p>

      <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
        {data.taskDescription}
      </p>
    </div>
  </div>
);

// const AcceptTask = ({ data }) => {
//   const [mounted, setMounted] = useState(false);
//   const [showDetails, setShowDetails] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <>
//       <div
//         className={`rounded-3xl border border-sky-500/35 bg-[#050b11] bg-linear-to-br from-sky-500/20 to-[#050b11] p-5 md:p-6 flex flex-col justify-between transform transition duration-300
//           ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
//         `}
//       >
//         {/* Top: icon + category + status */}
//         <div className="flex items-center justify-between gap-3">
//           <div className="flex items-center gap-2">
//             <div className="h-9 w-9 rounded-full bg-sky-500/20 flex items-center justify-center">
//               <PlayCircle className="w-4 h-4 text-sky-300" />
//             </div>
//             <span className="rounded-full bg-sky-600/90 px-3 py-1 text-[11px] font-medium text-white">
//               {data.category}
//             </span>
//           </div>

//           <span className="rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-200">
//             Active
//           </span>
//         </div>

//         {/* Date */}
//         <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-300">
//           <CalendarDays className="w-3 h-3" />
//           <span>{data.taskDate}</span>
//         </div>

//         {/* Title + description */}
//         <div className="mt-4 space-y-2">
//           <h2 className="text-base md:text-lg font-semibold text-white leading-snug">
//             {data.taskTitle}
//           </h2>
//           <p className="text-xs md:text-sm text-slate-300 leading-relaxed line-clamp-3">
//             {data.taskDescription}
//           </p>
//         </div>

//         {/* Actions */}
//         <div className="mt-5 flex flex-col sm:flex-row gap-3">
//           <button className="flex-1 rounded-full  bg-emerald-500 px-4 py-2 text-xs md:text-sm font-medium text-white hover:bg-emerald-400 transition">
//             Mark as Completed
//           </button>
//           <button
//             className="
//               flex-1 rounded-full
//               bg-rose-500
//               px-4 py-2
//               text-xs md:text-sm font-medium text-white
//               hover:bg-rose-400
//               transition
//             "
//           >
//             Mark as Failed
//           </button>
//         </div>

//         {/* View details link */}
//         <button
//           onClick={() => setShowDetails(true)}
//           className="mt-3 inline-flex items-center gap-1 text-[11px] md:text-xs text-sky-300 hover:text-sky-200"
//           type="button"
//         >
//           <Eye className="w-3 h-3" />
//           View details
//         </button>
//       </div>

//       {/* Modal */}
//       {showDetails && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
//           onClick={() => setShowDetails(false)}
//         >
//           <div
//             className="w-full max-w-md rounded-2xl border border-sky-500/40 bg-[#050814] p-5 md:p-6"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex items-center justify-between mb-3">
//               <h3 className="text-sm md:text-base font-semibold text-white">
//                 {data.taskTitle}
//               </h3>
//               <button
//                 onClick={() => setShowDetails(false)}
//                 className="p-1 rounded-full hover:bg-white/5"
//               >
//                 <X className="w-4 h-4 text-slate-300" />
//               </button>
//             </div>

//             <p className="text-[11px] text-slate-400 mb-2">
//               Category: <span className="text-slate-200">{data.category}</span>
//             </p>
//             <p className="text-[11px] text-slate-400 mb-4">
//               Due date: <span className="text-slate-200">{data.taskDate}</span>
//             </p>

//             <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
//               {data.taskDescription}
//             </p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// const AcceptTask = ({ data }) => {
//   return (
//     <div
//       className="
//         rounded-3xl
//         border border-sky-500/30
//         bg-[#050b11]
//         bg-linear-to-br from-sky-500/18 to-[#050b11]
//         p-5 md:p-6
//         flex flex-col justify-between
//       "
//     >
//       {/* Top: category + date */}
//       <div className="flex items-center justify-between gap-3">
//         <span className="inline-flex items-center rounded-full bg-sky-600/90 px-3 py-1 text-[11px] font-medium text-white">
//           {data.category}
//         </span>
//         <span className="text-[11px] md:text-xs text-slate-300 whitespace-nowrap">
//           {data.taskDate}
//         </span>
//       </div>

//       {/* Middle: title + description */}
//       <div className="mt-4 space-y-2">
//         <h2 className="text-base md:text-lg font-semibold text-white leading-snug">
//           {data.taskTitle}
//         </h2>
//         <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
//           {data.taskDescription}
//         </p>
//       </div>

//       {/* Bottom: actions */}
//       <div className="mt-5 flex flex-col sm:flex-row gap-3">
//         <button
//           className="
//             flex-1 rounded-full
//             bg-emerald-500
//             px-4 py-2
//             text-xs md:text-sm font-medium text-white
//             hover:bg-emerald-400
//             transition
//             cursor-pointer
//           "
//         >
//           Mark as Completed
//         </button>
//         <button
//           className="
//             flex-1 rounded-full
//             bg-rose-500
//             px-4 py-2
//             text-xs md:text-sm font-medium text-white
//             hover:bg-rose-400
//             transition
//             cursor-pointer
//           "
//         >
//           Mark as Failed
//         </button>
//       </div>
//     </div>
//   );
// };

// const AcceptTask = ({ data }) => {
//   return (
//     <div
//       className="
//         rounded-3xl
//         border border-sky-500/30
//         bg-[#050b11]
//         bg-linear-to-br from-sky-500/20 to-transparent
//         p-6
//         flex flex-col justify-between
//         shadow-lg
//         hover:shadow-[0_0_30px_rgba(56,189,248,0.35)]
//         transition
//       "
//     >
//       {/* Top: category + date */}
//       <div className="flex items-center justify-between">
//         <span className="rounded-full bg-sky-600/90 px-3 py-1 text-xs font-medium text-white">
//           {data.category}
//         </span>
//         <span className="text-xs text-slate-300">{data.taskDate}</span>
//       </div>

//       {/* Middle: title + description */}
//       <div className="mt-4">
//         <h2 className="text-lg font-semibold text-white leading-snug">
//           {data.taskTitle}
//         </h2>
//         <p className="mt-2 text-sm text-slate-300 leading-relaxed">
//           {data.taskDescription}
//         </p>
//       </div>

//       {/* Bottom: actions */}
//       <div className="mt-5 flex gap-3">
//         <button className="flex-1 rounded-full bg-emerald-500 px-3 py-2 text-xs font-medium text-white hover:bg-emerald-400 transition">
//           Mark as Completed
//         </button>
//         <button className="flex-1 rounded-full bg-rose-500 px-3 py-2 text-xs font-medium text-white hover:bg-rose-400 transition">
//           Mark as Failed
//         </button>
//       </div>
//     </div>
//   );
// };

export default AcceptTask;
