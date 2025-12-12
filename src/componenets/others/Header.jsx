import React, { useState } from "react";
import { Plus, LogOut } from "lucide-react";
import { setLocalStorage } from "../../utils/localStorage";

// const Header = ({ data }) => {
//   // const [username, setUsername] = useState("");

//   const logOutUser = () => {
//     localStorage.setItem("loggedInUser", "");
//     window.location.reload();
//   };

//   return (
//     <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//       {/* Left Greeting */}

//       <div>
//         <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/70">
//           Dashboard
//         </p>
//         <h1 className="mt-1 text-3xl md:text-4xl text-white font-semibold">
//           Welcome back, <br />
//           <span className="text-emerald-400"> {data?.firstName}👋 </span>
//         </h1>
//         <p className="mt-2 text-sm text-gray-400 max-w-md">
//           Your tasks, priorities, and deadlines—organized for you.
//         </p>
//       </div>

//       {/* Right Action */}

//       <div className="flex items-center gap-3">
//         {/*  Task Button */}
//         {/* <button className="flex items-center gap-2 rounded-xl border border-emerald-500/60 px-4 py-2 text-sm text-emerald-300 hover:bg-emerald-500/10 transition cursor-pointer">
//           <Plus size={16} />
//           New Task
//         </button> */}

//         {/* Logout Button */}
//         <button
//           onClick={logOutUser}
//           className="flex items-center gap-2 rounded-xl border border-red-500/60 px-4 py-2 text-sm text-red-300 hover:bg-red-500/10 transition cursor-pointer"
//         >
//           <LogOut size={16} />
//           Log Out
//         </button>
//       </div>
//     </header>
//   );
// };
const Header = ({ data }) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    window.location.reload();
  };

  return (
    <header
      className="
        w-full
        flex flex-col md:flex-row 
        md:items-center md:justify-between 
        gap-6 md:gap-4
      "
    >
      {/* LEFT — Greeting */}
      <div className="flex flex-col">
        <p className="text-xs uppercase tracking-[0.20em] text-emerald-300/70">
          Dashboard
        </p>

        <h1 className="mt-1 text-3xl md:text-4xl font-semibold leading-tight">
          Welcome back,
          <br />
          <span className="text-emerald-400">{data?.firstName} 👋</span>
        </h1>

        <p className="mt-2 text-sm text-slate-400 max-w-md">
          Your tasks, priorities, and deadlines—organized for you.
        </p>
      </div>

      {/* RIGHT — Logout button */}
      <div className="flex items-center justify-end w-full md:w-auto">
        <button
          onClick={logOutUser}
          className="
            flex items-center gap-2 
            rounded-xl 
            border border-red-500/50 
            px-4 py-2 
            text-sm text-red-300
            hover:bg-red-500/10 
            transition
          "
        >
          <LogOut size={16} />
          Log Out
        </button>
      </div>
    </header>
  );
};
export default Header;
