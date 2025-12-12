import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // localStorage.clear();admin@example.com
  const [userData, setUserData] = useState(null);

  // 1) On mount: seed and load employees
  useEffect(() => {
    // This should only seed if nothing exists inside (as in your util)
    setLocalStorage();

    const { employees } = getLocalStorage();
    setUserData(employees || []);
  }, []);

  // 2) Whenever userData changes, persist back to localStorage
  useEffect(() => {
    if (!userData) return;
    try {
      // we know your util stores employees under "employees"
      localStorage.setItem("employees", JSON.stringify(userData));
    } catch (err) {
      console.error("Failed to persist employees to localStorage", err);
    }
  }, [userData]);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   // localStorage.clear();
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     setLocalStorage();
//     const { employees } = getLocalStorage();
//     setUserData(employees);
//   }, []);

//   return (
//     <div>
//       <AuthContext.Provider value={{ userData, setUserData }}>
//         {children}
//       </AuthContext.Provider>
//     </div>
//   );
// };

export default AuthProvider;
