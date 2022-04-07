import React, { useContext, useState } from "react";
import News from "./News";
import Slide from './Slide';
import { val } from "../App";
import RecentPost from "./RecentPost";
import Categories from "./Categories";
import { nanoid } from 'nanoid'
export default function Home()
{
    let {data} = useContext(val);
    return(
            <div className="home">
            <Slide/>
            <div className="flex">
                <div className="news">
                    {data.map(box=><News {...box} key={nanoid()}/>)}
                </div>
                <div className="details">
                    <div className="recent">
                        <h2>Recent Posts</h2>
                        {
                            data.map(box=>box.recent==true?<RecentPost {...box }key={nanoid()}/>:"")
                        }
                    </div>
                <div className="categories">
                        <Categories/>
                </div>
                </div>
            </div>
            </div>
    )
}