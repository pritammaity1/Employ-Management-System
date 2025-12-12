import React, { useContext, useEffect, useState } from "react";
import Login from "./componenets/Auth/Login";
import EmployeeDashboard from "./componenets/Dashboard/EmployeeDashboard";
import AdminDashboard from "./componenets/Dashboard/AdminDashboard";
import { setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const { userData, setUserData } = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role); // "admin" or "employees"
      setLoggedInUserData(userData.data); // the saved user object
    }
  }, []);

  const handleLogin = (email, password) => {
    // ADMIN LOGIN
    if (email === "admin@example.com" && password === "12345") {
      const adminData = { firstName: "Daksh", email, role: "admin" };

      setUser("admin");
      setLoggedInUserData(adminData);

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: adminData }) // ✅ save data object
      );
      return;
    }

    // EMPLOYEE LOGIN
    if (userData) {
      const employee = userData.find(
        (e) => email === e.email && password === e.password
      );

      if (employee) {
        setUser("employees");
        setLoggedInUserData(employee);

        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employees", data: employee }) // ✅ save full employee
        );
        return;
      }
    }

    alert("invalid credentials");
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user === "admin" ? (
        <AdminDashboard data={loggedInUserData} />
      ) : user === "employees" ? (
        <EmployeeDashboard userEmail={loggedInUserData?.email} />
      ) : null}
    </>
  );
};

export default App;
