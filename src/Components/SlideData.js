import React from "react";
import { Link } from "react-router-dom";
export default function(props)
{
    const styles ={
        backgroundImage:`url(${props.image})`
    }
    return(
        <div className="box" style={styles}>
        <Link to={`/new/${props.type}/${props.id}`}>
            <div className="text">
                <p>{props.date}</p>
                <h3>{props.title}</h3>
            </div>
        </Link>
        </div>
    )
}