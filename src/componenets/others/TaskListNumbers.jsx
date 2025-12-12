import React, { useEffect, useState } from "react";

import { ClipboardList, CheckCircle2, PlayCircle, XCircle } from "lucide-react";

const CountUp = ({ value }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let frame;
    const duration = 700; // ms
    const startTime = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.round(progress * value);
      setDisplay(current);
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return <span>{display}</span>;
};

const TaskListNumbers = ({ data }) => {
  const stats = data?.taskStats ?? {
    active: 0,
    newTask: 0,
    completed: 0,
    failed: 0,
  };

  const cards = [
    {
      key: "newTask",
      label: "New Task",
      icon: ClipboardList,
      gradient: "bg-linear-to-r from-emerald-500/22 to-[#050816]",
      ring: "ring-emerald-500/35",
    },
    {
      key: "completed",
      label: "Completed Task",
      icon: CheckCircle2,
      gradient: "bg-linear-to-r from-sky-500/22 to-[#050816]",
      ring: "ring-sky-500/35",
    },
    {
      key: "active",
      label: "Active Task",
      icon: PlayCircle,
      gradient: "bg-linear-to-r from-violet-500/22 to-[#050816]",
      ring: "ring-violet-500/35",
    },
    {
      key: "failed",
      label: "Task Failed",
      icon: XCircle,
      gradient: "bg-linear-to-r from-rose-500/22 to-[#050816]",
      ring: "ring-rose-500/35",
    },
  ];

  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {cards.map(({ key, label, icon: Icon, gradient, ring }) => (
        <div
          key={key}
          className={`
            ${gradient}
            ${ring}
            ring-1
            rounded-2xl
            px-6 py-4
            flex items-center gap-4
            
            transition-shadow
          `}
        >
          {/* Icon */}
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-black/20">
            <Icon className="w-5 h-5 text-slate-100" />
          </div>

          {/* Number + label */}
          <div className="flex flex-col">
            <span className="text-xl font-semibold text-white">
              <CountUp value={stats[key]} />
            </span>
            <span className="text-xl text-slate-300 mt-0.5">{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

// const CountUp = ({ value }) => {
//   const [display, setDisplay] = useState(0);

//   useEffect(() => {
//     let frame;
//     const duration = 700; // ms
//     const startTime = performance.now();

//     const animate = (now) => {
//       const progress = Math.min((now - startTime) / duration, 1);
//       const current = Math.round(progress * value);
//       setDisplay(current);
//       if (progress < 1) frame = requestAnimationFrame(animate);
//     };

//     frame = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(frame);
//   }, [value]);

//   return <span>{display}</span>;
// };

// const TaskListNumbers = ({ data }) => {
//   const stats = data?.taskStats ?? {
//     active: 0,
//     newTask: 0,
//     completed: 0,
//     failed: 0,
//   };

//   const cards = [
//     {
//       key: "newTask",
//       label: "New Task",
//       icon: ClipboardList,
//       gradient: "bg-linear-to-r from-emerald-500/22 to-[#050816]",
//       ring: "ring-emerald-500/35",
//     },
//     {
//       key: "completed",
//       label: "Completed Task",
//       icon: CheckCircle2,
//       gradient: "bg-linear-to-r from-sky-500/22 to-[#050816]",
//       ring: "ring-sky-500/35",
//     },
//     {
//       key: "active",
//       label: "Active Task",
//       icon: PlayCircle,
//       gradient: "bg-linear-to-r from-violet-500/22 to-[#050816]",
//       ring: "ring-violet-500/35",
//     },
//     {
//       key: "failed",
//       label: "Task Failed",
//       icon: XCircle,
//       gradient: "bg-linear-to-r from-rose-500/22 to-[#050816]",
//       ring: "ring-rose-500/35",
//     },
//   ];

//   return (
//     <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
//       {cards.map(({ key, label, icon: Icon, gradient, ring }) => (
//         <div
//           key={key}
//           className={`
//             ${gradient}
//             ${ring}
//             ring-1
//             rounded-2xl
//             px-6 py-4
//             flex items-center gap-4

//             transition-shadow
//           `}
//         >
//           {/* Icon */}
//           <div className="flex items-center justify-center h-10 w-10 rounded-full bg-black/20">
//             <Icon className="w-5 h-5 text-slate-100" />
//           </div>

//           {/* Number + label */}
//           <div className="flex flex-col">
//             <span className="text-lg font-semibold text-white">
//               <CountUp value={stats[key]} />
//             </span>
//             <span className="text-xl text-slate-300 mt-0.5">{label}</span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// const CountUp = ({ value }) => {
//   const [display, setDisplay] = useState(0);

//   useEffect(() => {
//     let frame;
//     const duration = 700; // ms
//     const startTime = performance.now();

//     const animate = (now) => {
//       const progress = Math.min((now - startTime) / duration, 1);
//       const current = Math.round(progress * value);
//       setDisplay(current);
//       if (progress < 1) frame = requestAnimationFrame(animate);
//     };

//     frame = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(frame);
//   }, [value]);

//   return <span>{display}</span>;
// };

// const TaskListNumbers = ({ data }) => {
//   const stats = data?.taskStats ?? {
//     active: 0,
//     newTask: 0,
//     completed: 0,
//     failed: 0,
//   };

//   const cards = [
//     {
//       key: "newTask",
//       label: "New Task",
//       border: "border-emerald-500/30",
//       bg: "bg-linear-to-r from-emerald-900/60 to-[#050f1a]",
//     },
//     {
//       key: "completed",
//       label: "Completed Task",
//       border: "border-sky-500/30",
//       bg: "bg-linear-to-r from-sky-900/60 to-[#050f1a]",
//     },
//     {
//       key: "active",
//       label: "Active Task",
//       border: "border-violet-500/30",
//       bg: "bg-linear-to-r from-violet-900/60 to-[#050f1a]",
//     },
//     {
//       key: "failed",
//       label: "Task Failed",
//       border: "border-rose-500/30",
//       bg: "bg-linear-to-r from-rose-900/60 to-[#050f1a]",
//     },
//   ];

//   return (
//     <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//       {cards.map(({ key, label, border, bg }) => (
//         <div
//           key={key}
//           className={`flex items-center rounded-2xl ${border} ${bg}
//                       px-5 py-4`}
//         >
//           <div className="flex flex-col">
//             {/* smaller number like your top cards */}
//             <p className="text-base font-semibold text-white">
//               <CountUp value={stats[key]} />
//             </p>
//             <p className="mt-1 text-xs text-slate-200">{label}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

export default TaskListNumbers;
