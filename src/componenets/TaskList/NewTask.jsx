import React, { useEffect, useState } from "react";
import { PlusCircle, CalendarDays, Eye, X } from "lucide-react";

const NewTask = ({ data }) => {
  const [mounted, setMounted] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <div
        className={`rounded-3xl h-full min-h-[260px] border border-emerald-500/35 bg-[#050b11] bg-linear-to-br from-emerald-500/18 to-[#050b11] p-5 md:p-6 flex flex-col justify-between transform transition duration-300 
          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
          hover:-translate-y-0.5 hover:scale-[1.01]`}
      >
        {/* Top: icon + category + status */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <PlusCircle className="w-4 h-4 text-emerald-300" />
            </div>
            <span className="rounded-full bg-emerald-600/90 px-3 py-1 text-[11px] font-medium text-white">
              {data.category}
            </span>
          </div>

          <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-200">
            New
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

        {/* Action */}
        <div className="mt-5">
          <button className="w-full rounded-full bg-emerald-500 px-4 py-2 text-xs md:text-sm font-medium text-white hover:bg-emerald-400 transition">
            Accept Task
          </button>
        </div>

        {/* View details */}
        <button
          type="button"
          onClick={() => setShowDetails(true)}
          className="mt-3 inline-flex items-center gap-1 text-[11px] md:text-xs text-emerald-300 hover:text-emerald-200"
        >
          <Eye className="w-3 h-3" />
          View details
        </button>
      </div>

      {showDetails && (
        <TaskDetailsModal
          data={data}
          onClose={() => setShowDetails(false)}
          accentBorder="border-emerald-500/40"
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

// const NewTask = ({ data }) => {
//   const [mounted, setMounted] = useState(false);
//   const [showDetails, setShowDetails] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <>
//       <div
//         className={`rounded-3xl border border-emerald-500/35 bg-[#050b11] bg-linear-to-br from-emerald-500/18 yo-[#050b11] p-5 md:p-6 flex flex-col justify-between transform transition duration-300 ${
//           mounted ? "opacity-100 translate-y-0" : "opacity-o translate-y-3"
//         }`}
//       >
//         {/* Top: icon + category + status */}

//         <div className="flex items-center justify-between gap-3">
//           <div className="flex items-center gap-2">
//             <div className="h-9 w-9 rounded-full bg-emerald-500/20 flex items-center justify-center">
//               <PlusCircle className="w-4 h-4 text-emerald-300" />
//             </div>
//             <span className="rounded-full bg-emerald-600/90 px-3 py-1 text-[11px] font-medium text-white ">
//               {data.category}
//             </span>
//           </div>

//           <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-200">
//             New
//           </span>
//         </div>

//         {/* Date */}

//         <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-300">
//           <CalendarDays className="w-3 h-3" />
//           <span>{data.taskDate}</span>
//         </div>

//         {/* Title Description */}

//         <div className="mt-4 space-y-2 ">
//           <h2 className="text-base md:text-lg font-semibold text-white leading-snug">
//             {data.taskTitle}
//           </h2>
//           <p className="text-sx md:text-sm text-slate-300 leading-relaxed line-clamp-3 mb-4">
//             {data.taskDescription}
//           </p>
//         </div>

//         {/* Action */}
//         <div mt-5>
//           <button className="w-full rounded-full bg-emerald-500 px-4 py-2 text-xs md:text-sm font-medium text-white hover:bg-emerald-400 transition">
//             Accept Task
//           </button>
//         </div>
//         {/* View details */}
//         <button
//           onClick={() => setShowDetails(true)}
//           className="mt-3 inline-flex items-center gap-1 text-[11px] md:text-xs text-emerald-300 hover:text-emerald-200"
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
//             className="w-full max-w-md rounded-2xl border border-emerald-500/40 bg-[#050814] p-5 md:p-6"
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

// const NewTask = ({ data }) => {
//   return (
//     <div
//       className="
//         rounded-3xl
//         border border-emerald-500/35
//         bg-[#050b11]
//         bg-linear-to-br from-emerald-500/18 to-[#050b11]
//         p-5 md:p-6
//         flex flex-col justify-between
//       "
//     >
//       {/* Top: category + date */}
//       <div className="flex items-center justify-between gap-3">
//         <span className="rounded-full bg-emerald-600/90 px-3 py-1 text-[11px] font-medium text-white">
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

//       {/* Bottom: CTA button */}
//       <div className="mt-5">
//         <button
//           className="
//             w-full
//             rounded-full
//             bg-emerald-500
//             px-4
//             py-2
//             text-xs md:text-sm
//             font-medium
//             text-white
//             hover:bg-emerald-400
//             transition
//           "
//         >
//           Accept Task
//         </button>
//       </div>
//     </div>
//   );
// };

export default NewTask;
