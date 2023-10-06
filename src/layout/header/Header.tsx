import React from 'react'
import 'App.css';

export interface INewUserModalProps {
  setNewUSerModal: (value: boolean) => void; // Assuming it's a function that takes a boolean argument
}

const Header:React.FC<INewUserModalProps> = ({setNewUSerModal}) => {
  return (
    <>
    <div className="text-bg-primary p-3 header" >
      <span >User Management</span>
      <button onClick={()=>{setNewUSerModal(true)}}type="button" className="btn btn-light">Add New User</button>
    </div>
    
    </>
  )
}

export default Header  