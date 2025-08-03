import { useContext, useEffect, useState } from 'react';
import './App.css';
import AdminDashboard from './components/AdminDashboard';
import EmployeeDashboard from './components/EmployeeDashboard';
import Login from './components/Login';
import { setLocalStorage } from './utils/localStorage';
import { AuthUser } from './context/AuthContext';

function App() {
  if (!localStorage.getItem('hasVisited')) {
    setLocalStorage();
    localStorage.setItem('hasVisited', 'true');
  }
  const [role, setRole] = useState(localStorage.getItem("role"));
  const [user, setUser] = useState(localStorage.getItem("currentuser"));
  const data = useContext(AuthUser);

  useEffect(() => {
    setRole(localStorage.getItem("role"));
  }, [role])
  const handleLogin = (email, password) => {
    if (email == "admin@example.com" && password == 123) {
      setRole("admin");
      setUser(data.admin);
      localStorage.setItem("role", "adim");
      localStorage.setItem("currentuser", JSON.stringify(data.admin));
    }
    else if (data.employees.find((e) => email == e.email && password == e.password)) {
      setRole("employee");
      data.employees.forEach(e => {
        if (email == e.email && password == e.password) {
          setUser(JSON.stringify(e));
          localStorage.setItem("role", "employee");
          localStorage.setItem("currentuser", JSON.stringify(e));
        }
      });
    }
    else {
      alert("Invalid Credentials")
    }
  }
  const handleLogout = () => {
    localStorage.setItem("role", "");
    setRole(localStorage.getItem("role"));
  }
  return (
    <div>
      {!role ? <Login handleLogin={handleLogin} /> : role == "employee" ? <EmployeeDashboard handleLogout={handleLogout} user={user} /> : <AdminDashboard handleLogout={handleLogout} user={user} />}
    </div>
  );
}

export default App;
