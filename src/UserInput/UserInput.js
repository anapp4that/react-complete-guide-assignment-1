import React from 'react'

const UserInput = (props) => {
    let style = {
        textAlign: 'center'
    }

    return (
        <div>
            <input type="text" value={props.value} onChange={props.changed} style={style}></input>
        </div>
    )
}

export default UserInput;