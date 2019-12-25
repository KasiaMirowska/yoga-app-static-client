import React from 'react';
import { Link } from 'react-router-dom';



export default function PoseListItem(props) {
    console.log(props)
    const pose_id = props.id
    return (

        <Link to={`/flow/${pose_id}` }>
            <h2>{props.name}</h2>
            <h2>{props.sanskrit}</h2>
            <img src={props.img} />
        </Link>

    )

}