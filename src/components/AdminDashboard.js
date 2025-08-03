import React from 'react'
import Header from './others/Header'
import Createtask from './TaskList/Createtask'
import Alltasks from './TaskList/Alltasks'

const AdminDashboard = ({user, handleLogout}) => {
  const userData = typeof user === 'string' ? JSON.parse(user) : user;
  return (
    <div className='admin-container'>
      <Header handleLogout={handleLogout} userData={userData}/>
      <Createtask userData={userData}/>
      <Alltasks userData={userData}/>
    </div>
  )
}

export default AdminDashboard
