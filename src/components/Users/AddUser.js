import React, { useState, useRef } from "react";
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
const AddUser = (props) => {
    // 사용자 이름을 입력할 수 있게 해주는 첫번째 input과 연결
    // 생성되는 ref 값은 항상 '객체'
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    // form 제출 시 실행되는 함수
    const addUserHandler = (event) => {
        // submit 이벤트가 기본적으로 실행되도록 요청하는 정의된 동작을 중단하도록
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        // 유효성 검사
        if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        // +기호를 이용해 입력값을 숫자형으로 바꿀 수 있음
        if(+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            });
            return;
        }

        // Add User 버튼 클릭시 마다 입력된 데이터들을 App 컴포넌트로 보냄
        props.onAddUser(enteredName, enteredUserAge);

        // input 초기화
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

    const errorHandler = () => {
        setError(null);
    }

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" ref={nameInputRef} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" ref={ageInputRef} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
        
    );
};

export default AddUser;