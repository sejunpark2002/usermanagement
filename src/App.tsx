import React from 'react'
import CreateUser from './component/CreateUser'
import ShowTodo from 'component/ShowTodo'
import Header from 'layout/header/Header'
import UpadateUser from 'component/UpadateUser'
import { useState,useEffect } from 'react'
import 'App.css'
import { IUser } from 'model'
import { getAllUsersAPI } from 'api/user'
import { splitArray } from 'util/splitarray'
import { mockUserList } from 'mock/user'
import { Container, Row, Col } from 'react-bootstrap';
import NewUser from 'component/NewUser'
import { Route, Routes } from 'react-router-dom';
import { createUserAction } from 'redux/user/User'
import { Dispatch } from '@reduxjs/toolkit'
import { useAppDispatch } from './store';
import { PAGE_SIZE } from 'const/general'

// `import TempComp from 'component/TempComp'`

export interface IResponseType {
  message: string;
  statusCode:string;
}

export interface IResponseTypeWithResult extends IResponseType {
  result:IUser[]
}


const App = () => {
  const dispatch = useAppDispatch();
  const [userlist,setUserList] =  useState <IUser[][]>
([]);

// const getAllUsers = async () => {
//   console.log('Get All Todo - Frontend')
//   const result: IResponseTypeWithResult = await getAllUsersAPI();
//   setUserList(result.result)
// };

const setUserListFunc = (userlist:IUser[][]) => {
  setUserList(userlist)
};


useEffect(() => {
  console.log('called');
  
  const getAllUsers = async () => {
    console.log('Get All Todo - Frontend')
    const result: IResponseTypeWithResult = await getAllUsersAPI();
    console.log(result)
    setUserList(splitArray(result.result,PAGE_SIZE))
    // dispatch(setDefaultUserAction(userlist))
  }
  getAllUsers();
}, []);


// [] => Component가 Mount 됬을 때 단 한번만 실행
// [state] => Component가 Mount 됬을 때 한번 실행 + state가 바꼈을 때 실행
// [state, state]


const [updateSelectedId, setUpdateSelectedId ] = useState('');



  return (
    <div className='App'>
        <Header/>
        <Container fluid>
          <Row>
            <Col className='left-col d-none d-lg-block'  lg={2} xl={2} xxl={2} >
             
            </Col>
            <Col  lg={10} xl={10} xxl={10} className='crm-body' >
            
            <div className='crm-user'>
              <Routes>
                <Route path={'/'} element={<ShowTodo userlist={userlist}  setUpdateSelectedId={setUpdateSelectedId} />} />
                <Route path={'/create'} element={  <CreateUser/> }></Route>
                <Route path={'/update'} element={  <UpadateUser setUserListFunc={setUserListFunc} updateSelectedId={updateSelectedId}/> }></Route>
              </Routes>
                
            </div>
            </Col>
          </Row>
        </Container>
        <footer>© 2024 Sejun Park</footer>
    </div>
   
    
  )
}

export default App
