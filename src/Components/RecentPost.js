import { Link } from "react-router-dom";

export default function RecentPost(props)
{
    return(
        <Link to={`/new/${props.type}/${props.id}`}>
        <div className='box'>
            <img src={props.image}/>
            <span>
                <h5>{props.date}</h5>
                <h4>{props.title}</h4>
            </span>
        </div>
        </Link>
    )
}