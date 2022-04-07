import { useContext } from 'react'
import {val} from '../App'
import News from './News'
import { useParams } from 'react-router'
import Categories from './Categories'
import { nanoid } from 'nanoid'
export default function Part()
{
    let {data}= useContext(val)
    let {type} = useParams();
return(
    <div className='flex'>
        <div className="news">
            {data.filter(box=>box.type===type).map(box=><News {...box} kay={nanoid()}/>)}
        </div>
        <div className="details">
           <div className="categories">
                <Categories/>
            </div>
        </div>
    </div>
)
}