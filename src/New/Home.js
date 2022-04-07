import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
export default function Home(props)
{
    return(
        <div>
        <img src={props.image}/>
        <div className="text">
        <span>
            <FontAwesomeIcon icon={faCalendarDays} className="icon"/>
            {props.date}
        </span>
        <h2>{props.title}</h2>
        {
            props.content.map(parg=><p>{parg}</p>)
        }
        </div>
        </div>
    )
}