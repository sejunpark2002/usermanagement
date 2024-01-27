import { IUser } from 'model';
import React from 'react'
import { useState } from 'react';
import { splitArray } from 'util/splitarray';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, } from '@fortawesome/free-solid-svg-icons'
import 'App.css';

interface IPaginationProps {
  userlist: IUser[];
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
  pageIndex: number;
}



const Pagination = ({userlist,setPageIndex,pageIndex}: IPaginationProps) => {

  const pageSize = 10
  
  const [page,setPage] =  useState<number>(1); 
  // const [lastIndex,setLastIndex] =  useState(0); 

  const newArray =splitArray(userlist,pageSize)
  console.log("NewArray",newArray)
  console.log("Userlist", userlist)

  // const increaseIndex =() =>{
  //   if(firstIndex+rowCount < newArray.length-1) {
  //     setFirstIndex(firstIndex+1)
  //     setPage(page+1)
  //   }
  //   console.log(userlist.length)
  
  // }

  // const decreaseIndex =() =>{
  //   if(firstIndex > 0 ) {
  //     setFirstIndex(firstIndex-1)
  //     setPage(page-1)
  //   } 

  const increaseIndex =() =>{
    setPageIndex(pageIndex+1)
      setPage(page+1)
    
  
  }

  const decreaseIndex =() =>{
    if(pageIndex > 0 ) {
      setPageIndex(pageIndex-1)
      setPage(page-1)
    } 
  }
  return (
   <>
      <button onClick={decreaseIndex} disabled={(pageIndex === 0) && true} className='btn'><FontAwesomeIcon className='icon' icon={faChevronLeft} /></button>
      <span className='page-number'>{page}</span>
      <button onClick={increaseIndex} disabled={(newArray[pageIndex]?.length < pageSize) && true} className='btn'><FontAwesomeIcon className='icon' icon={faChevronRight} /></button>

   </>
  )
}


export default Pagination