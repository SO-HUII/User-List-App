import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }];
    })
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      {/* UsersList에서 값을 추출하는 이름과 동일하게 설정해야 함 */}
      {/* 배열로 설정해주지 않으면 UsersList에서 map undefined 에러 발생 */}
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
