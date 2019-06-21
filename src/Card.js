import React from 'react';

function Card (props) {

    return (
        <div className="Card">
            <li>
                {props.user} <br/>
                {props.label} <br/>
                {props.action} <br/>
                {props.amount} <br/>
            </li>
        </div>
);
}

export default Card;
