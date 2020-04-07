import React from 'react'
//step2
const UserCard = props => {
    console.log(props, "from UserCard")
    return (
        <div className="container">
            <h1>{props.user.name}</h1>
            <p>{props.user.location}</p>
            <p>{props.user.followers}</p>
        </div>
    )
}

export default UserCard;