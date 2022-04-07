import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function RandomNew(props)
{
    let styles = {
        backgroundImage:`url(${props.image})`
    }
    return(
        <div className="random" style={styles}>
            <div className="text">
            <h4>{props.date}</h4>
            <h2>{props.title}</h2>
            </div>
            <Link to={`/new/${props.type}/${props.id}`}><FontAwesomeIcon icon={faArrowRight} className="arrow"/></Link>
        </div>
    )
}