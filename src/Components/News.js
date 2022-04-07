import React, { useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router';
export default function News(props)
{
    let navig = useNavigate();

    return(
        <div className='box'>
            <img src={props.image}/>
            <h2>{props.title}</h2>
            <span>
                <FontAwesomeIcon icon={faCalendarDays} className="icon"/>
                {props.date}
            </span>
            <h4>{props.desc}</h4>
            <button onClick={()=>navig(`/new/${props.type}/${props.id}`)}>Continue Reading</button>
        </div>
    )
}