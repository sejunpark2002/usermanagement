import { IResponseTypeWithResult} from "../App";

// export const getAllUsersAPI = async (): Promise<IResponseTypeWithResult> => {
//   const res: Response = await fetch(`${process.env.REACT_APP_API_ADDRESS}/user`, {
//     method: 'GET',
//   });
//   return await res.json();
// }

export const getAllUsersAPI = async (): Promise<IResponseTypeWithResult> => {
  // console.log(process.env.REACT_APP_API_ADDRESS)
  console.log(process.env.REACT_APP_ENV);
  let api_address = '';
  if(process.env.REACT_APP_ENV === 'dev') {
    api_address = process.env.REACT_APP_API_ADDRESS_DEV as string;
  } else {
    api_address = process.env.REACT_APP_API_ADDRESS_PROD as string;
  }
  const res: Response = await fetch(`${api_address}/user`, {
    method: 'GET',
  });
  return await res.json();
}