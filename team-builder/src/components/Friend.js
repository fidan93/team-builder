import React from 'react';

export default function Friend(props){
const {details} = props;
    return (
        <div className = 'friendContainer'>
            <h2>{details.name}</h2>
            <p>{details.email}</p>
            <p>{ details.role}</p>
        </div>
    )
}