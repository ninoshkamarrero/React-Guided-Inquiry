// import React from 'react'
import React,  {Component} from 'react';



const BasicInfo =(props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>phoneNumber: {props.phoneNumber}</p>
            <p>birthDate: {props.birthDate}</p>
        </div>
    )
}

export default BasicInfo;