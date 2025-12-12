import React, { useEffect, useState } from "react";
import { Cast, Eye, EyeOff } from "lucide-react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // trigger entrance animation
    setMounted(true);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    setError("");

    try {
      const result = handleLogin(email, password);

      // if handleLogin returns false => invalid creds
      if (result === false) {
        setError("Invalid email or password. Please try again.");
        return;
      }

      setEmail("");
      setPassword("");
    } catch (err) {
      setError(
        err?.message || "Something went wrong. Please check your credentials."
      );
    }
  };

  return (
    <div
      className="
        min-h-screen w-full
        flex items-center justify-center
        px-4
        bg-[#020617]
        bg-[radial-gradient(circle_at_top,_rgba(15,118,110,0.22),transparent_60%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9),transparent_70%)]
        text-slate-100
        relative
        overflow-hidden
      "
    >
      {/* Main card */}
      <div
        className={`
          relative z-10
          w-full max-w-5xl
          rounded-\[32px\]
          border border-slate-700/70
          bg-[#040818]/95
          shadow-[0_28px_80px_rgba(0,0,0,0.65)]
          backdrop-blur-xl
          overflow-hidden
          transform transition duration-500 ease-out
          ${
            mounted
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-[0.98]"
          }
        `}
      >
        <div className="grid md:grid-cols-2">
          {/* Left panel: brand */}
          <div
            className="
              hidden md:flex
              flex-col
              px-10 py-10
              gap-6
              bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.22),transparent_60%),linear-gradient(to_bottom,#020b19,#040818)]
              border-r border-slate-700/60
            "
          >
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-md bg-emerald-500 flex items-center justify-center font-bold text-2xl text-white">
                EM
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-semibold tracking-wide text-white">
                  Employee Manager
                </h1>
                <p className="text-sm text-emerald-100/90">
                  Simplify workforce management
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              Login to manage employees, track assigned tasks and keep all your
              HR data in one clean dashboard.
            </p>

            <ul className="space-y-2 text-sm text-slate-100">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Real-time employee overview
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Role-based secure access
              </li>
            </ul>

            <div className="mt-auto text-[11px] text-slate-500">
              © {new Date().getFullYear()} Employee Manager • All rights
              reserved
            </div>
          </div>

          {/* Right panel: form */}
          <div className="px-7 py-9 md:px-10 md:py-10 flex flex-col justify-center bg-[#050816]">
            <div className="mb-6 text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-semibold">
                Welcome back{" "}
                <span className="inline-block align-middle">👋</span>
              </h2>
              <p className="mt-1 text-xs md:text-sm text-slate-300">
                Sign in to access your dashboard
              </p>
            </div>

            <form onSubmit={submitHandler} className="flex flex-col gap-4">
              {/* Email */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="text-xs font-medium text-slate-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="
                    w-full
                    bg-transparent
                    border border-emerald-500/60
                    rounded-full
                    py-2.5 px-5
                    text-sm md:text-base
                    outline-none
                    text-slate-100
                    placeholder:text-slate-500
                    focus:ring-2 focus:ring-emerald-500/70
                    focus:border-emerald-400
                    transition
                  "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="password"
                  className="text-xs font-medium text-slate-300"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                    className="
                      w-full
                      bg-transparent
                      border border-emerald-500/60
                      rounded-full
                      py-2.5 pl-5 pr-10
                      text-sm md:text-base
                      outline-none
                      text-slate-100
                      placeholder:text-slate-500
                      focus:ring-2 focus:ring-emerald-500/70
                      focus:border-emerald-400
                      transition
                    "
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="
                      absolute inset-y-0 right-3
                      flex items-center justify-center
                      text-slate-400 hover:text-slate-200
                    "
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember + forgot */}
              <div className="flex items-center justify-between text-[11px] md:text-xs text-slate-300 mt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    className="accent-emerald-500 h-3.5 w-3.5 rounded"
                  />
                  Remember me
                </label>
                <button
                  type="button"
                  className="text-emerald-400 hover:text-emerald-300 cursor-pointer"
                >
                  Forgot Password
                </button>
              </div>

              {/* Error */}
              {error && (
                <p className="mt-2 text-[11px] md:text-xs text-rose-400 bg-rose-500/10 border border-rose-500/40 rounded-xl px-3 py-2">
                  {error}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="
                  mt-4
                  py-2.5 md:py-3
                  rounded-full
                  bg-emerald-600
                  text-white
                  font-medium
                  text-sm md:text-base
                  hover:bg-emerald-500
                  active:scale-[0.99]
                  transition
                  cursor-pointer
                "
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// const Login = ({ handleLogin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [mounted, setMounted] = useState(false);

//   // Trigger entrance animation

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const result = handleLogin(email, password);

//       //error if users give wrong credentials
//       if (result === false) {
//         setError("Invalid Credentials. Please Try Again");
//         return;
//       }

//       // if it's successful

//       setEmail("");
//       setPassword("");
//     } catch (err) {
//       // If handleLogin throws error

//       setError(err?.message || "Something Went Wrong! ");
//     }
//   };

//   return (
//     <div className="min-h-screen w-full bg-[#020617] bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.15),transparent_70%)] text-slate-100 flex items-center justify-center px-4">
//       <div className="pointer-events-none fixed inset-0 opacity-50">
//         <div className="w-[420px] h-[420px] bg-emerald-500/30 rounded-full blur-3xl absolute -top-32 -left-32" />
//         <div className="w-[460px] h-[460px] bg-sky-500/25 rounded-full blur-3xl absolute bottom-[-120px] right-\[-80px\]" />
//       </div>

//       <div
//         className={`relative z-10 w-full max-w-5xl rounded-\[32px\] border border-emerald-500/30
//         bg-[#020818]/95 shadow-[0_0_70px_rgba(16,185,129,0.35)] backdrop-blur-xl overflow-hidden
//           transform transition duration-500 ease-out
//             ${
//               mounted
//                 ? "opacity-100 translate-y-0 scale-100"
//                 : "opacity-0 translate-y-4 scale-[0.98]"
//             }
//         `}
//       >
//         <div className="grid md:grid-cols-2">
//           {/* Left panel: brand / info */}
//           <div className="hidden md:flex flex-col px-10 py-10 gap-6 bg-[linear-gradient(to_bottom,rgba(16,185,129,0.18),transparent)] border-r border-emerald-500/25">
//             <div className="flex items-center gap-3">
//               <div className="h-11 w-11 rounded-md bg-emerald-500 flex items-center justify-center font-bold text-2xl text-white">
//                 EM
//               </div>
//               <div>
//                 <h1 className="text-2xl lg:text-3xl font-semibold tracking-wide text-white">
//                   Employee Manager
//                 </h1>
//                 <p className="text-sm text-emerald-100/90">
//                   Simplify workforce management
//                 </p>
//               </div>
//             </div>

//             <p className="text-sm text-slate-300 leading-relaxed max-w-md">
//               Login to manage employees, track assigned tasks and keep all your
//               HR data in one clean dashboard.
//             </p>

//             <ul className="space-y-2 text-sm text-slate-100">
//               <li className="flex items-center gap-2">
//                 <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
//                 Real-time employee overview
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
//                 Role-based secure access
//               </li>
//             </ul>

//             <div className="mt-auto text-[11px] text-slate-500">
//               © {new Date().getFullYear()} Employee Manager • All rights
//               reserved
//             </div>
//           </div>

//           {/* Right panel: login form */}
//           <div className="px-7 py-9 md:px-10 md:py-10 flex flex-col justify-center bg-[#030816]">
//             <div className="mb-6 text-center md:text-left">
//               <h2 className="text-xl md:text-2xl font-semibold">
//                 Welcome back{" "}
//                 <span className="inline-block align-middle">👋</span>
//               </h2>
//               <p className="mt-1 text-xs md:text-sm text-slate-300">
//                 Sign in to access your dashboard
//               </p>
//             </div>

//             <form onSubmit={submitHandler} className="flex flex-col gap-4">
//               {/* Email */}
//               <div className="flex flex-col gap-1">
//                 <label
//                   htmlFor="email"
//                   className="text-xs font-medium text-slate-300"
//                 >
//                   Email
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   placeholder="Enter your email"
//                   required
//                   className="bg-transparent border border-emerald-500/60 rounded-full py-2.5 px-5
//                     text-sm md:text-base outline-none text-slate-100 placeholder:text-slate-500
//                     focus:ring-2 focus:ring-emerald-500/70 focus:border-emerald-400 transition"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>

//               {/* Password with show/hide */}
//               <div className="flex flex-col gap-1">
//                 <label
//                   htmlFor="password"
//                   className="text-xs font-medium text-slate-300"
//                 >
//                   Password
//                 </label>
//                 <div className="relative">
//                   <input
//                     id="password"
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Enter your password"
//                     required
//                     className="bg-transparent border border-emerald-500/60 rounded-full py-2.5 pl-5 pr-10 text-sm md:text-base outline-none text-slate-100 placeholder:text-slate-500
//                     focus:ring-2 focus:ring-emerald-500/70 focus:border-emerald-400 transition w-full"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword((prev) => !prev)}
//                     className="absolute inset-y-0 right-3 flex items-center justify-center text-slate-400 hover:text-slate-200
//                     "
//                     tabIndex={-1}
//                   >
//                     {showPassword ? (
//                       <EyeOff className="w-4 h-4" />
//                     ) : (
//                       <Eye className="w-4 h-4" />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               {/* Remember + Forgot */}
//               <div className="flex items-center justify-between text-[11px] md:text-xs text-slate-300 mt-1">
//                 <label className="flex items-center gap-2 cursor-pointer select-none">
//                   <input
//                     type="checkbox"
//                     className="accent-emerald-500 h-3.5 w-3.5 rounded"
//                   />
//                   Remember me
//                 </label>
//                 <button
//                   type="button"
//                   className="text-emerald-400 hover:text-emerald-300 cursor-pointer"
//                 >
//                   Forgot Password
//                 </button>
//               </div>

//               {/* Inline error */}
//               {error && (
//                 <p className="mt-2 text-[11px] md:text-xs text-rose-400 bg-rose-500/10 border border-rose-500/40 rounded-xl px-3 py-2">
//                   {error}
//                 </p>
//               )}

//               {/* Submit */}
//               <button
//                 type="submit"
//                 className="mt-4 py-2.5 md:py-3 rounded-full bg-emerald-600 text-white font-medium text-sm md:text-base hover:bg-emerald-500 active:scale-[0.99] transition cursor-pointer"
//               >
//                 Log In
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Login = ({ handleLogin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const submitHandler = (e) => {
//     e.preventDefault();
//     handleLogin(email, password);
//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <div className="pt-6 md:pt-10 min-h-screen w-full bg-[#020617] text-slate-100 flex items-center justify-center px-4">
//       {/* Background Accent */}
//       <div className="pointer-events-none fixed inset-0 opacity-40 ">
//         <div className="w-[380px] h-[380px] bg-emerald-500/25 rounded-full blur-3xl absolute -top-24 -left-16 " />
//         <div className="w-[420px] h-[420px] bg-sky-500/20 rounded-full blur-3xl absolute bottom-\[-80px\] right-\[-40px\] " />
//       </div>

//       {/* Main Card */}
//       <div className="relative z-10 w-full max-w-4xl bg-slate-900/80 border border-emerald-500/30 rounded-3xl shadow-[0_0_60px_rgba(16,185,129,0.25)] backdrop-blur-md overflow-hidden">
//         <div className="grid md:grid-cols-2">
//           {/* Left Panel */}
//           <div className="hidden md:flex flex-col gap-6 px-10 py-10 bg-[linear-gradient(to_bottom,rgba(16,185,129,0.16),transparent)] border-r border-emerald-500/20">
//             <div className="flex items-center gap-3">
//               <div className="h-11 w-11 rounded-md bg-emerald-500 flex items-center justify-center font-bold text-2xl text-white">
//                 EM
//               </div>
//               <div>
//                 <h1 className="text-3xl font-semibold tracking-wide text-white">
//                   Employee Manager
//                 </h1>
//                 <p className="text-sm text-slate-300">
//                   Simplify workforce management
//                 </p>
//               </div>
//             </div>

//             <p className="text-sm text-slate-300 leading-relaxed">
//               Login to manage employees, track assigned tasks and keep all your
//               HR data in one clean dashboard.
//             </p>

//             <ul className="space-y-2 text-sm text-slate-200">
//               <li className="flex items-center gap-2">
//                 <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
//                 Real-time employee overview
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
//                 Role-based secure access
//               </li>
//             </ul>

//             <div className="mt-auto text-xs text-slate-500">
//               © {new Date().getFullYear()} Employee Manager • All rights
//               reserved
//             </div>
//           </div>

//           {/* Right Panel: Login Form */}
//           <div className="px-8 py-10 md:px-10 flex flex-col justify-center">
//             <h2 className="text-2xl font-semibold mb-2 text-center md:text-left">
//               Welcome back 👋
//             </h2>
//             <p className="text-sm text-slate-300 mb-6 text-center md:text-left">
//               Sign in to access your dashboard
//             </p>

//             <form onSubmit={submitHandler} className="flex flex-col gap-4">
//               <div className="flex flex-col gap-1">
//                 <input
//                   id="email"
//                   type="email"
//                   placeholder="Enter your email"
//                   required
//                   className="bg-transparent border border-emerald-500/60 rounded-full py-3 px-5 text-sm md:text-base outline-none text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500/70 focus:border-emerald-400 transition"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>

//               <div className="flex flex-col gap-1">
//                 <input
//                   id="password"
//                   type="password"
//                   required
//                   placeholder="Enter your password"
//                   className="bg-transparent border border-emerald-500/60 rounded-full py-3 px-5 text-sm md:text-base outline-none text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500/70 focus:border-emerald-400 transition"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>

//               <div className="flex items-center justify-between text-xs md:text-sm text-slate-300 mt-1">
//                 <label className="flex items-center gap-2 cursor-pointer select-none">
//                   <input
//                     type="checkbox"
//                     className="accent-emerald-500 h-4 w-4"
//                   />
//                   Remember me
//                 </label>
//                 <button
//                   type="button"
//                   className="text-emerald-400 hover:text-emerald-300 cursor-pointer"
//                 >
//                   Forgot Password
//                 </button>
//               </div>

//               <button
//                 type="submit"
//                 className="mt-4 py-3 rounded-full bg-emerald-600 text-white font-medium text-sm md:text-base hover:bg-emerald-500 active:scale-[0.99] transition cursor-pointer"
//               >
//                 Log In
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Login;
