import React from 'react'
import 'App.css';

export interface IHeaderProps {
  setNewUserModalFunc: () => void; // Assuming it's a function that takes a boolean argument
}

const Header = ({setNewUserModalFunc}: IHeaderProps) => {
  return (
    <>
    <div className="text-bg-primary p-3 header" >
      <span >User Management</span>
      <button onClick={setNewUserModalFunc}type="button" className="btn btn-light">Add New User</button>
    </div>
    
    </>
  )
}

export default Header  