import React, { useState } from 'react'
import Header from './others/Header'
import Tasks from './others/Tasks'
import TaskList from './others/TaskList'

const EmployeeDashboard = ({user, handleLogout}) => {
  const userData = JSON.parse(user);
  
  return (
    <div className='Employee-container'>
      <Header handleLogout={handleLogout} userData={userData}/>
      <Tasks userData={userData} />
      {/* <TaskList userData={userData} /> */}
    </div>
  )
}

export default EmployeeDashboard
