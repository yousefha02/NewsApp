import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import {val} from '../App'
import Home from './Home'
import Categories from "../Components/Categories";
import RecentPost from "../Components/RecentPost";
import RandomNew from "./RandomNew";
import { nanoid } from "nanoid";
export default function New()
{
    let {data} = useContext(val);
    let {id} = useParams();
    let {type} = useParams();
    let Ndata = data.filter(box=>box.id!=id)
    let random = Math.floor(Math.random()*Ndata.length);

    return(
        <div className="new">
            <div className="home">
                <div className="post">
                    {
                    data.filter(box=>box.id==id).map(box=><Home{...box} key={nanoid()}/>)
                    }
                </div>
                    {
                        <RandomNew {...Ndata[random]}/>
                    }
            </div>
            <div className="details">
                <div className="recent">
                    <h2>Related Posts</h2>
                    {
                        data.filter(box=>box.type==type).filter(box=>box.id!=id).map(box=><RecentPost {...box} key={nanoid()}/>)
                    }
                </div>
                <div className="categories">
                    <Categories/>
                </div>
            </div>
        </div>
    )
}