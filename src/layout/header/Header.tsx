import React from 'react'
import 'App.css';


const Header = () => {
  return (
    <>
    <div className="header" >
      <h2 className='header-font' >User Management</h2>
      <form action="#">
      <input className="search-bar" type="search" placeholder="Seach..."/>
      </form>
      {/* <button onClick={setNewUserModalFunc}type="button" className="btn btn-light">Add New User</button> */}
    </div>
    
    </>
  )
}

export default Header  