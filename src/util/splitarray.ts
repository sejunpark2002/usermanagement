import { IUser } from "model";

// Create 2D array by 1D array
export const splitArray = (userList: IUser[], rowCount: number): IUser[][] => {
  const tempUserList: IUser[] = [...userList];

  const newArray: IUser[][] = [];
  while (tempUserList.length) newArray.push(tempUserList.splice(0, rowCount));
  return newArray;
};