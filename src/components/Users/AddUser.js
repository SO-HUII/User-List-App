import React from "react";
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from "../UI/Button";

const AddUser = (props) => {
    // form 제출 시 실행되는 함수
    const addUserHandler = (event) => {
        // submit 이벤트가 기본적으로 실행되도록 요청하는 정의된 동작을 중단하도록
        event.preventDefault();
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        
    );
};

export default AddUser;