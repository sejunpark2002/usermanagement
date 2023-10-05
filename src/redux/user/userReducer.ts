import { UserActionTypes } from "redux/user/User.interface";
import { IUserState } from "./userReducer.interface";
import { USER_ACTION } from "const/action";
import { Reducer } from "@reduxjs/toolkit";

const {CREATE_USER}= USER_ACTION;

const INITIAL_STATE: IUserState = {
  userlist: []
};

const userReducer: Reducer<IUserState, UserActionTypes> = (
  state = INITIAL_STATE,
  action: UserActionTypes,
): IUserState => {
  const { type, payload } = action;
  switch(type) {
    case CREATE_USER: {
      return {
        ...state,
        userlist: [
          ...state.userlist,
          {
            id:payload.id,
            name:payload.name,
            phone:payload.phone,
            email:payload.email
          }
        ]
      }
    }
     
   
      default:
        return state
    }
};

export default userReducer;