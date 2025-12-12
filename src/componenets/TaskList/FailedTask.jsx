import React, { useEffect, useState } from "react";
import { AlertTriangle, CalendarDays, Eye, X } from "lucide-react";

const FailedTask = ({ data }) => {
  const [mounted, setMounted] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div
        className={`h-full min-h-[260px] rounded-3xl border border-rose-500/40 bg-[#0c0a0a]bg-linear-to-br from-rose-500/12 to-transparent p-5 md:p-6 flex flex-col justify-between transform transition duration-300 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        } hover:-translate-y-0.5 hover:scale-[1.01]`}
      >
        {/* Top Row: icon + category + failed badge */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-rose-500/20 flex items-center justify-center">
              <X className="w-4 h-4 text-rose-300" />
            </div>

            <span className="rounded-full bg-rose-600/90 px-3 py-1 text-[11px] font-medium text-white">
              {data.category}
            </span>
          </div>

          <span className="rounded-full border border-rose-400/40 bg-rose-500/10 px-3 py-1 text-[11px] font-medium text-rose-300">
            Failed
          </span>
        </div>

        {/* Date */}
        <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-300">
          <CalendarDays className="w-3 h-3" />
          <span>{data.taskDate}</span>
        </div>

        {/* Title + description */}
        <div className="mt-4 space-y-2">
          <h2 className="text-base md:text-lg font-semibold text-white leading-snug">
            {data.taskTitle}
          </h2>

          <p className="text-xs md:text-sm text-slate-300 leading-relaxed line-clamp-3">
            {data.taskDescription}
          </p>
        </div>

        {/* Failed Pill */}
        <div className="mt-5">
          <button className="w-full rounded-full bg-rose-600/80 px-4 py-2 text-xs md:text-sm font-medium text-white cursor-default">
            Failed
          </button>
        </div>

        {/* View details */}
        <button
          type="button"
          onClick={() => setShowDetails(true)}
          className="mt-3 inline-flex items-center gap-1 text-[11px] md:text-xs text-rose-300 hover:text-rose-200"
        >
          <Eye className="w-3 h-3" />
          View details
        </button>
      </div>

      {/* Details Modal */}
      {showDetails && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setShowDetails(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-rose-500/40 bg-[#1a0d0d] p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-semibold text-white">
                {data.taskTitle}
              </h3>
              <button
                onClick={() => setShowDetails(false)}
                className="p-1 rounded-full hover:bg-white/5"
              >
                <X className="w-4 h-4 text-slate-300" />
              </button>
            </div>

            <p className="text-[12px] text-slate-400 mb-1">
              Category: <span className="text-slate-200">{data.category}</span>
            </p>
            <p className="text-[12px] text-slate-400 mb-4">
              Failed on: <span className="text-slate-200">{data.taskDate}</span>
            </p>

            <p className="text-sm text-slate-200 leading-relaxed">
              {data.taskDescription}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

// const FailedTask = ({ data }) => {
//   const [mounted, setMounted] = useState(false);
//   const [showDetails, setShowDetails] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <>
//       <div
//         className={`rounded-3xl border border-rose-500/40 bg-[#050b11] bg-linear-to-br from-rose-500/ 18 to-[#050b11] p-5 md:p-6 flex flex-col justify-between transform transition duration-300
//           ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
//       >
//         {/* Top: icon + category + status */}
//         <div className="flex items-center justify-between gap-3">
//           <div className="flex items-center gap-2">
//             <div className="h-9 w-9 rounded-full bg-rose-500/20 flex items-center justify-center">
//               <AlertTriangle className="w-4 h-4 text-rose-300" />
//             </div>
//             <span className="rounded-full bg-rose-600/90 px-3 py-1 text-[11px] font-medium text-white">
//               {data.category}
//             </span>
//           </div>

//           <span className="rounded-full border border-rose-500/40 bg-rose-500/10 px-3 py-1 text-[11px] font-medium text-rose-200">
//             Failed
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

//         {/* Status button */}
//         <div className="mt-5">
//           <button className="w-full rounded-full bg-rose-500/85 px-4 py-2 text-xs md:text-sm font-medium  text-white cursor-default">
//             Failed
//           </button>
//         </div>

//         {/* View details */}
//         <button
//           onClick={() => setShowDetails(true)}
//           className="mt-3 inline-flex items-center gap-1 text-[11px] md:text-xs text-rose-300 hover:text-rose-200"
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
//             className="w-full max-w-md rounded-2xl border border-rose-500/40 bg-[#050814] p-5 md:p-6"
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
//               Failed on: <span className="text-slate-200">{data.taskDate}</span>
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

export default FailedTask;
