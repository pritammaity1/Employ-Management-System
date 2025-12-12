import React, { useEffect, useState } from "react";
import { CheckCircle2, CalendarDays, Eye, X } from "lucide-react";

const CompleteTask = ({ data }) => {
  const [mounted, setMounted] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div
        className={`h-full min-h-[260px] rounded-3xl border border-cyan-400/40 bg-[#050b11] bg-linear-to-br from-cyan-400/15 to-[#050b11] p-5 md:p-6 flex flex-col justify-between transform transition duration-300
          ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          } hover:-translate-y-0.5 hover:scale-[1.01]`}
      >
        {/* Top: icon + category + status */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-cyan-400/20 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-cyan-300" />
            </div>
            <span className="rounded-full bg-cyan-600/90 px-3 py-1 text-[11px] font-medium text-white">
              {data.category}
            </span>
          </div>

          <span className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 text-[11px] font-medium text-cyan-200">
            Completed
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

        {/* Status button */}
        <div className="mt-5">
          <button
            className="
              w-full 
              rounded-full 
              bg-cyan-500/85 
              px-4 
              py-2 
              text-xs md:text-sm 
              font-medium 
              text-white 
              cursor-default
            "
          >
            Completed
          </button>
        </div>

        {/* View details */}
        <button
          type="button"
          onClick={() => setShowDetails(true)}
          className="mt-3 inline-flex items-center gap-1 text-[11px] md:text-xs text-cyan-300 hover:text-cyan-200"
        >
          <Eye className="w-3 h-3" />
          View details
        </button>
      </div>

      {/* Details modal */}
      {showDetails && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setShowDetails(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-cyan-400/40 bg-[#050814] p-5 md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm md:text-base font-semibold text-white">
                {data.taskTitle}
              </h3>
              <button
                onClick={() => setShowDetails(false)}
                className="p-1 rounded-full hover:bg-white/5"
              >
                <X className="w-4 h-4 text-slate-300" />
              </button>
            </div>

            <p className="text-[11px] text-slate-400 mb-2">
              Category: <span className="text-slate-200">{data.category}</span>
            </p>
            <p className="text-[11px] text-slate-400 mb-4">
              Completed on:{" "}
              <span className="text-slate-200">{data.taskDate}</span>
            </p>

            <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
              {data.taskDescription}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

// const CompleteTask = ({ data }) => {
//   const [mounted, setMounted] = useState(false);
//   const [showDetails, setShowDetails] = useState(false);

//   useEffect(() => setMounted(true), []);

//   return (
//     <>
//       <div
//         className={`rounded-3xl border border-cyan-400/40 bg-[#050b11] bg-linear-to-br from-cyan-400/15 to-[#050b11] p-5 md:p-6 flex flex-col justify-between transform transition duration-300
//           ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
//       >
//         {/* Top Row */}
//         <div className="flex items-center justify-between gap-3">
//           <div className="flex items-center gap-2">
//             {/* Icon */}
//             <div className="h-9 w-9 rounded-full bg-cyan-400/20 flex items-center justify-center">
//               <CheckCircle2 className="w-4 h-4 text-cyan-300" />
//             </div>

//             {/* Category */}
//             <span className="rounded-full bg-cyan-600/90 px-3 py-1 text-[11px] font-medium text-white">
//               {data.category}
//             </span>
//           </div>

//           {/* Status Badge */}
//           <span className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 text-[11px] font-medium text-cyan-200">
//             Completed
//           </span>
//         </div>

//         {/* Date */}
//         <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-300">
//           <CalendarDays className="w-3 h-3" />
//           <span>{data.taskDate}</span>
//         </div>

//         {/* Title & Description */}
//         <div className="mt-4 space-y-2">
//           <h2 className="text-base md:text-lg font-semibold text-white leading-snug">
//             {data.taskTitle}
//           </h2>
//           <p className="text-xs md:text-sm text-slate-300 leading-relaxed line-clamp-3">
//             {data.taskDescription}
//           </p>
//         </div>

//         {/* Status Button */}
//         <div className="mt-5">
//           <button className="w-full rounded-full bg-cyan-500/85 px-4 py-2 text-xs md:text-sm font-medium text-white cursor-default">
//             Completed
//           </button>
//         </div>

//         {/* View Details */}
//         <button
//           onClick={() => setShowDetails(true)}
//           className="mt-3 inline-flex items-center gap-1 text-[11px] md:text-xs text-cyan-300 hover:text-cyan-200"
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
//             className="w-full max-w-md rounded-2xl border border-cyan-400/40 bg-[#050814] p-5 md:p-6"
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

//             <p className="text-[11px] text-slate-400 mb-1">
//               Category: <span className="text-slate-200">{data.category}</span>
//             </p>
//             <p className="text-[11px] text-slate-400 mb-4">
//               Completed on:{" "}
//               <span className="text-slate-200">{data.taskDate}</span>
//             </p>

//             <p className="text-xs md:text-sm text-slate-200">
//               {data.taskDescription}
//             </p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

export default CompleteTask;
