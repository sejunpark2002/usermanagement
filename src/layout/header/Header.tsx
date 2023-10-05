import React from 'react'
import 'App.css';

const Header = () => {
  return (
    <>
    <div className="text-bg-primary p-3 header" >
      <span >User Management</span>
      <button type="button" className="btn btn-light">Add New User</button>
    </div>
    
    </>
  )
}

export default Header