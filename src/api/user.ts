import { IResponseTypeWithResult} from "../App";

export const getAllUsersAPI = async (): Promise<IResponseTypeWithResult> => {
  const res: Response = await fetch(`${process.env.REACT_APP_API_ADDRESS}/user`, {
    method: 'GET',
  });
  return await res.json();
}