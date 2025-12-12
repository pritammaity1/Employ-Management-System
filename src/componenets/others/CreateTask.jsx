import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { setLocalStorage } from "../../utils/localStorage";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [taskCategory, setTaskCategory] = useState("");

  const { userData, setUserData } = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    const trimmedName = asignTo.trim().toLowerCase();
    if (!trimmedName) return;

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      taskCategory,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    // create NEW array and NEW user objects
    const updatedUsers = (userData || []).map((user) => {
      const firstName = (user.firstName || "").trim().toLowerCase();

      // not the target employee → return as-is
      if (firstName !== trimmedName) return user;

      const currentStats = user.taskStats || {};
      const updatedStats = {
        ...currentStats,
        newTask: (currentStats.newTask || 0) + 1,
      };

      return {
        ...user,
        tasks: [...(user.tasks || []), newTask],
        taskStats: updatedStats,
      };
    });

    setUserData(updatedUsers);

    // reset form
    setTaskTitle("");
    setTaskDate("");
    setTaskCategory("");
    setAsignTo("");
    setTaskDescription("");
  };

  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   const trimmedName = asignTo.trim().toLowerCase();
  //   if (!trimmedName) return;

  //   const newTask = {
  //     taskTitle,
  //     taskDescription,
  //     taskDate,
  //     taskCategory,
  //     active: false,
  //     newTask: true,
  //     failed: false,
  //     completed: false,
  //   };

  //   // create NEW array and NEW user objects (no in-place mutation)
  //   const updatedUsers = (userData || []).map((user) => {
  //     const firstName = (user.firstName || "").trim().toLowerCase();

  //     if (firstName !== trimmedName) return user;

  //     const currentStats = user.taskStats || {};
  //     const updatedStats = {
  //       ...currentStats,
  //       newTask: (currentStats.newTask || 0) + 1,
  //     };

  //     return {
  //       ...user,
  //       tasks: [...(user.tasks || []), newTask],
  //       taskStats: updatedStats,
  //     };
  //   });

  //   setUserData(updatedUsers);

  //   // clear form
  //   setTaskTitle("");
  //   setTaskDate("");
  //   setTaskCategory("");
  //   setAsignTo("");
  //   setTaskDescription("");
  // };

  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   // build task object directly (instead of using async state)
  //   const newTask = {
  //     taskTitle,
  //     taskDescription,
  //     taskDate,
  //     taskCategory,
  //     active: false,
  //     newTask: true,
  //     failed: false,
  //     completed: false,
  //   };

  //   const data = [...userData];

  //   data.forEach((user) => {
  //     if (asignTo === user.firstName) {
  //       user.tasks.push(newTask);
  //       // fix typo + actually increment
  //       if (!user.taskStats.newTask) user.taskStats.newTask = 0;
  //       user.taskStats.newTask += 1;
  //     }
  //   });

  //   setUserData(data);

  //   setTaskTitle("");
  //   setTaskDate("");
  //   setTaskCategory("");
  //   setAsignTo("");
  //   setTaskDescription("");
  // };

  return (
    <section className="mt-8">
      <div className="rounded-3xl border border-slate-700/70 bg-[#030817]/90 px-4 py-5 md:px-6 md:py-6">
        {/* Header row */}
        <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between mb-5">
          <div>
            <h2 className="text-base md:text-lg font-semibold text-white">
              Create New Task
            </h2>
            <p className="mt-1 text-xs text-slate-400">
              Assign a task to an employee and track it on their dashboard.
            </p>
          </div>
          <span className="mt-2 inline-flex md:mt-0 items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-200">
            Admin tool
          </span>
        </div>

        <form
          onSubmit={submitHandler}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Left column */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xs font-medium text-slate-300 mb-1">
                Task Title
              </h3>
              <input
                required
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                type="text"
                placeholder="Make a UI Design"
                className="w-full text-sm rounded-xl border border-slate-600/70 bg-slate-950/40 px-3 py-2.5 text-white placeholder:text-slate-500 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/60"
              />
            </div>

            <div className="relative">
              <h3 className="text-xs font-medium text-slate-300 mb-1">Date</h3>
              <input
                required
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                type="date"
                className="w-full text-sm rounded-xl border border-slate-600/60 bg-slate-900/40 
                    px-3 py-2 text-white outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/60 \[color-scheme\:dark\]"
              />

              {/* Custom calendar icon */}
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none mt-2 r"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10m-12 8h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"
                />
              </svg>
            </div>

            <div>
              <h3 className="text-xs font-medium text-slate-300 mb-1">
                Assign To
              </h3>
              <input
                required
                value={asignTo}
                onChange={(e) => setAsignTo(e.target.value)}
                type="text"
                placeholder="Employee name"
                className="w-full text-sm rounded-xl border border-slate-600/70 bg-slate-950/40 px-3 py-2.5 text-white placeholder:text-slate-500 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/60"
              />
            </div>

            <div>
              <h3 className="text-xs font-medium text-slate-300 mb-1">
                Category
              </h3>
              <input
                required
                value={taskCategory}
                onChange={(e) => setTaskCategory(e.target.value)}
                type="text"
                placeholder="Design, Dev, etc."
                className="w-full text-sm rounded-xl border border-slate-600/70 bg-slate-950/40 px-3 py-2.5 text-white placeholder:text-slate-500 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/60"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col space-y-4">
            <div className="flex-1">
              <h3 className="text-xs font-medium text-slate-300 mb-1">
                Description
              </h3>
              <textarea
                required
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                placeholder="Add any extra details the employee should know..."
                className="w-full h-40 md:h-full text-sm rounded-xl border border-slate-600/70 bg-slate-950/40 px-3 py-2.5 text-white placeholder:text-slate-500 outline-none resize-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/60"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full md:self-end md:w-auto rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-medium text-slate-950 hover:bg-emerald-400 transition"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

// const submitHandler = (e) => {
//   e.preventDefault();

//   // build task object directly (instead of using async state)
//   const newTask = {
//     taskTitle,
//     taskDescription,
//     taskDate,
//     taskCategory,
//     active: false,
//     newTask: true,
//     failed: false,
//     completed: false,
//   };

//   const data = [...userData];

//   data.forEach((user) => {
//     if (asignTo === user.firstName) {
//       user.tasks.push(newTask);
//       // fix typo + actually increment
//       if (!user.taskStats.newTask) user.taskStats.newTask = 0;
//       user.taskStats.newTask += 1;
//     }
//   });

//   setUserData(data);

//   setTaskTitle("");
//   setTaskDate("");
//   setTaskCategory("");
//   setAsignTo("");
//   setTaskDescription("");
// };

//   return (
//     <section className="mt-8">
//       <div className="rounded-2xl border border-slate-600/60 bg-[#050816]/90 px-4 py-5 md:px-6 md:py-6">
//         <h2 className="text-base md:text-lg font-semibold text-white mb-4">
//           Create New Task
//         </h2>

//         <form
//           onSubmit={submitHandler}
//           className="grid grid-cols-1 md:grid-cols-2 gap-6"
//         >
//           {/* Left column */}
//           <div className="space-y-4">
//             <div>
//               <h3 className="text-xs font-medium text-slate-300 mb-1">
//                 Task Title
//               </h3>
//               <input
//                 value={taskTitle}
//                 onChange={(e) => setTaskTitle(e.target.value)}
//                 type="text"
//                 placeholder="Make a UI Design"
//                 className="w-full text-sm rounded-xl border border-slate-600/60 bg-slate-900/40 px-3 py-2 text-white placeholder:text-slate-500 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/60"
//               />
//             </div>

//             <div>
//               <h3 className="text-xs font-medium text-slate-300 mb-1">Date</h3>
//               <input
//                 value={taskDate}
//                 onChange={(e) => setTaskDate(e.target.value)}
//                 type="date"
//                 className="w-full text-sm rounded-xl border border-slate-600/60 bg-slate-900/40 px-3 py-2 text-white outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/60"
//               />
//             </div>

//             <div>
//               <h3 className="text-xs font-medium text-slate-300 mb-1">
//                 Assign To
//               </h3>
//               <input
//                 value={asignTo}
//                 onChange={(e) => setAsignTo(e.target.value)}
//                 type="text"
//                 placeholder="Employee name"
//                 className="w-full text-sm rounded-xl border border-slate-600/60 bg-slate-900/40 px-3 py-2 text-white placeholder:text-slate-500 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/60"
//               />
//             </div>

//             <div>
//               <h3 className="text-xs font-medium text-slate-300 mb-1">
//                 Category
//               </h3>
//               <input
//                 value={taskCategory}
//                 onChange={(e) => setTaskCategory(e.target.value)}
//                 type="text"
//                 placeholder="Design, Dev, etc."
//                 className="w-full text-sm rounded-xl border border-slate-600/60 bg-slate-900/40 px-3 py-2 text-white placeholder:text-slate-500 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/60"
//               />
//             </div>
//           </div>

//           {/* Right column */}
//           <div className="flex flex-col space-y-4">
//             <div className="flex-1">
//               <h3 className="text-xs font-medium text-slate-300 mb-1">
//                 Description
//               </h3>
//               <textarea
//                 value={taskDescription}
//                 onChange={(e) => setTaskDescription(e.target.value)}
//                 className="w-full h-40 md:h-full text-sm rounded-xl border border-slate-600/60 bg-slate-900/40 px-3 py-2 text-white outline-none resize-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/60"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full md:self-end md:w-auto rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-medium text-slate-950 hover:bg-emerald-400 transition"
//             >
//               Create Task
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// const CreateTask = () => {
//   const [taskTitle, setTaskTitle] = useState("");
//   const [taskDescription, setTaskDescription] = useState("");
//   const [taskDate, setTaskDate] = useState("");
//   const [asignTo, setAsignTo] = useState("");
//   const [taskCategory, setTaskCategory] = useState("");
//   const [newTask, setNewTask] = useState({});

//   const { userData, setUserData } = useContext(AuthContext);

//   const submitHandler = (e) => {
//     e.preventDefault();

//     setNewTask({
//       taskTitle,
//       taskDescription,
//       taskDate,

//       taskCategory,
//       active: false,
//       newTask: true,
//       failed: false,
//       completed: false,
//     });

//     const data = userData;

//     data.forEach((e) => {
//       // console.log(e.firstName);
//       if (asignTo === e.firstName) {
//         e.tasks.push(newTask);
//         e.taskStats.mewtask + 1;
//       }
//     });

//     setUserData(data);

//     setTaskTitle("");
//     setTaskDate("");
//     setTaskCategory("");
//     setAsignTo("");
//     setTaskDescription("");
//   };

//   return (
//     <div className=" p-5 bg-[#1c1c1c] mt-5 rounded">
//       <form
//         className="flex flex-wrap w-full items-start justify-between"
//         onSubmit={(e) => {
//           submitHandler(e);
//         }}
//       >
//         <div className="w-1/2 ">
//           <div>
//             <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
//             <input
//               value={taskTitle}
//               onChange={(e) => setTaskTitle(e.target.value)}
//               type="text"
//               placeholder="Make a UI Design"
//               className="text-sm py-1 px-2 w-4/5 rounded outline-none border-\[1px\] border-gray-400 mb-4 bg-transparent placeholder:text-gray-400 text-white"
//             />
//           </div>

//           <div>
//             <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
//             <input
//               value={taskDate}
//               onChange={(e) => setTaskDate(e.target.value)}
//               type="date"
//               className="text-sm py-1 px-2 w-4/5 rounded outline-none border-\[1px\] border-gray-400 mb-4 bg-transparent  text-white"
//             />
//           </div>

//           <div>
//             <h3 className="text-sm text-gray-300 mb-0.5">Asign To</h3>
//             <input
//               value={asignTo}
//               onChange={(e) => setAsignTo(e.target.value)}
//               type="text"
//               placeholder="Employee name"
//               className="text-sm py-1 px-2 w-4/5 rounded outline-none border-\[1px\] border-gray-400 mb-4 bg-transparent placeholder:text-gray-400 text-white"
//             />
//           </div>

//           <div>
//             <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
//             <input
//               value={taskCategory}
//               onChange={(e) => setTaskCategory(e.target.value)}
//               type="text"
//               placeholder="Design, Dev, etc.."
//               className="text-sm py-1 px-2 w-4/5 rounded outline-none border-\[1px\] border-gray-400 mb-4 bg-transparent placeholder:text-gray-400 text-white"
//             />
//           </div>
//         </div>

//         <div className="w-1/2 flex flex-col items-start ">
//           <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
//           <textarea
//             value={taskDescription}
//             onChange={(e) => setTaskDescription(e.target.value)}
//             name=""
//             id=""
//             className="w-full h-44 text-sm py-2 px-4 outline-none bg-transparent border-\[1px\] border-gray-400 text-white"
//           ></textarea>
//           <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full ">
//             Create Task
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

export default CreateTask;
