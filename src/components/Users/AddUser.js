import React, { useState } from "react";
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from "../UI/Button";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    // form 제출 시 실행되는 함수
    const addUserHandler = (event) => {
        // submit 이벤트가 기본적으로 실행되도록 요청하는 정의된 동작을 중단하도록
        event.preventDefault();

        // 유효성 검사
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        // +기호를 이용해 입력값을 숫자형으로 바꿀 수 있음
        if(+enteredAge < 1) {
            return;
        }
        console.log(enteredUsername, enteredAge);

        // 초기화
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = event => {  // event 객체의 도움으로 입력된 값을 얻을 수 있음
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = event => {  // event 객체의 도움으로 입력된 값을 얻을 수 있음
        setEnteredAge(event.target.value);
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        
    );
};

export default AddUser;