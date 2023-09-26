import React from "react";
import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = props => {
    return (
        <Card className={classes.users}>
            <ul>
                {/* 수많은 아이템 생성. 해당 아이템들은 key 속성을 가져야 함. */}
                {/* why? because 반복해서 사용하기 때문 */}
                {props.users.map(user => 
                <li key={user.id}> 
                    {user.name} ({user.age} years old)
                </li>)}
            </ul>
        </Card>
        
    );
};

export default UsersList;