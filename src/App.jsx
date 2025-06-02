import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import './index.css';
import Employeedashboard from './components/Dashboard/Employeedashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

function App() {
  const [user, setUser] = useState(null);
  const [loggedInEmployee, setLoggedInEmployee] = useState(null);
  const authData = useContext(AuthContext);

  // On mount, check if user is already logged in
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      if (userData.role === 'admin') {
        setUser('admin');
      } else if (userData.role === 'employee') {
        setUser('employee');
        setLoggedInEmployee(userData.data);
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    // Admin login
    if (
      authData &&
      authData.admin &&
      Array.isArray(authData.admin) &&
      authData.admin[0]?.admin &&
      email === authData.admin[0].admin.email &&
      password === authData.admin[0].admin.password
    ) {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: authData.admin[0].admin }));
    }
    // Employee login
    else if (
      authData &&
      authData.employees &&
      authData.employees.find(
        (e) => email === e.email && password === e.password
      )
    ) {
      const employee = authData.employees.find(
        (e) => email === e.email && password === e.password
      );
      setUser('employee');
      setLoggedInEmployee(employee);
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard />}
      {user === 'employee' && loggedInEmployee && (
        <Employeedashboard employee={loggedInEmployee} />
      )}
    </div>
  );
}

export default App;