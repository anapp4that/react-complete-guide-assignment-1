import React from 'react'
import UserInput from '../UserInput/UserInput.js'
import './UserOutput.css'
const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <UserInput value={props.value} changed={props.changed} />
            <p>{props.userName}</p>
            <p>Bio about {props.userName}</p>
        </div>
    )
};

export default UserOutput;