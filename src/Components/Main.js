import React from "react"
import { Card } from "./Card"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

//api cadangan 0577b337b43ba2a4a30291358e0dd50b hash=f2008e55dcdd0827126e388784ce19d4
// api limit apikey=3ca54f22ed148109311642bcfe4c4a1c&hash=d3459c3e6ed9ffd09c7aefd9fab8a4ff

export const Main = () => {
  const [url,setUrl]=useState("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=0577b337b43ba2a4a30291358e0dd50b&hash=f2008e55dcdd0827126e388784ce19d4")
  const [item,setItem]=useState();
  const [search,setSearch]=useState("");
  useEffect(()=>{
    const fetch=async()=>{
      const res=await axios.get(url)
      setItem(res.data.data.results);
    }
    fetch();
  },[url])
  
  const searchMarvel=()=>{
    setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=0577b337b43ba2a4a30291358e0dd50b&hash=f2008e55dcdd0827126e388784ce19d4`)
  }

  return (
    <>
        <div className="header">
            <div className="bg">
                <img src="./Images/bg.png" alt="" />
            </div>
            <div className="search-bar">
                <img src="./Images/logo.jpg" alt="logo" />
                <input type="search" placeholder='Search Here'
                 className='search'
                 onChange={e=>setSearch(e.target.value)}
                 onKeyPress={searchMarvel}/>
            </div>
        </div>
       <div className="content">
         
        {
          (!item)?<p>Not Found</p>:<Card data={item}/>
        }
       </div>
    </>
  )
}
