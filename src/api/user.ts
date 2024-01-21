import { IResponseTypeWithResult} from "../App";

// export const getAllUsersAPI = async (): Promise<IResponseTypeWithResult> => {
//   const res: Response = await fetch(`${process.env.REACT_APP_API_ADDRESS}/user`, {
//     method: 'GET',
//   });
//   return await res.json();
// }

// const API_ADDRESS = process.env.REACT_APP_ENV === 'dev' ? 'http://localhost:8080': '실제사이트'
// https://sejunStudentProject.ca;

const API_ADDRESS ='http://localhost:8080'
const headers = {
   'Content-Type': 'application/json',
}

export const getAllUsersAPI = async (): Promise<IResponseTypeWithResult> => {
  const res: Response = await fetch(`${API_ADDRESS}/user`, {
    method: 'GET',
    headers: headers
  });
  return await res.json();
}

export const deleteUserAPI = async (id:string) => {
  const res: Response = await fetch(`${API_ADDRESS}/user?id=${id}`, {
    method:'DELETE',
    headers
  })
  return await res.json();
}
