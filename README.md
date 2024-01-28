# Usermanagement App

## Introduction
This project implements the Front-End for a simple usermanagement web application, using the React, Typescript and React Bootstrap.


## Features
- CRUD
- Add a new user
- 3 user fields : name, email, phone number
- Delete a user
- Update user's information
- Fetch user's info from backend's DB
- Pagination

## What I learned
- React
- Typescript
- Fetch
- CRUD
- Redux 
- React Bootstrap

## Problems
- Pagination
- After adding a new user re-rendering is not happening
- Adding a new user
- Deleteing a selected user
- Update a selected user information

## Solution
#### 1.Pagination
- First, the splitArray function was used to split and create a new array with desired row Count

```
const splitArray = (userList:IUser[], rowCount:number):IUser[][] => {
  const tempUserList: IUser[] = [...userlist];
  const newArray:IUser[][] =[];
  while ...
}
```

- Second, set useState of pageIndex vairables
  `const [pageIndex,setPageIndex] =  useState<number>(0);` 

- Thrid, create buttons to modify pageIndex 

#### 2.After adding a new user re-rendering is not happening
- Add dependency, userlist on the useEffect hook

#### 3.Adding,deleting and updating a new user
##### Adding
- Using Fetch(), call API using the post method to pass a new user object through body to the backend server
##### Deleting
- Using Fetch(), call API using the delete method to pass a new user object through query to the backend server
##### Updating
- Using Fetch(), call API using the put method to pass a new user object through body to the backend server


## What to improve
- Add Redux (for learning purpose)
- Responsive (mobile-friendly)
- Add test (optional)

## Question 
- Type of functions of userState when passed on props
`interface IPaginationProps {
  userlist: IUser[];
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
  pageIndex: number;
}` 

- Adding dependency in the useEffect hook is good practice to update view in realtime?


## # Preview

![preview_1](./src/assets/image/preview_1.png)

## # 프로젝트 구조

```
src
├── api (book)
├── assets
├── components
│     └── Reusable Component (ArrowButton / Book / LoadingSpinner / Title)
├── const (constant string (action / general))
├── layout
│     ├── books (BookCase1 / BookCase2)
│     ├── header
│     └── sidebar
├── mock
│     ├── data (mockData (For Testing))
│     └── store
│           ├── createMockStore (For Testing)
│           └── bookReducerMockData (For Testing)
├── models
├── redux (action / reducer)
├── store (store configuration)
└── util
```

hello