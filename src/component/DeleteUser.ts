import React from 'react'
import { deleteUserAPI } from 'api/user';



const deleteUser = async (id:string) => {
  const res: Response = await deleteUserAPI(id);
  console.log(res);
}

  // const { userlist } = useAppSelector((state) => state.userReducer);
  // const dispatch = useAppDispatch();

  // const deleteUserFunc =(id:string) =>{
  //   // const index = userlist.findIndex((arr)=>arr.id === id)
  //   dispatch(deleteUserAction(id))
  // }

  // const deleteUser = async (id:string) => {
  //   const res: Response = await deleteUserAPI(id);
  //   console.log(res);
  // }



export default deleteUser