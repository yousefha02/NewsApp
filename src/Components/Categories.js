import { Link } from "react-router-dom"
export default function Categories()
{
    return(
        <div>
            <h2>Categories</h2>
            <ul>
                <li><Link to={'/part/build'}>Building</Link></li>
                <li><Link to={'/part/sport'}>Sports</Link></li>
                <li><Link to={'/part/education'}>Education</Link></li>
                <li><Link to={'/part/web'}>Web Development</Link></li>
            </ul>
        </div>
    )
}