import React from "react"
import { ComicCard } from "./ComicCard"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

export const Comic = () => {
  const [url,setUrl]=useState("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=0577b337b43ba2a4a30291358e0dd50b&hash=f2008e55dcdd0827126e388784ce19d4")
  const [itemComic,setItem]=useState();
  const [search,setSearch]=useState("");
  useEffect(()=>{
    const fetch=async()=>{
      const res=await axios.get(url)
      setItem(res.data.data.results);
    }
    fetch();
  },[url])
  
  const searchComic=()=>{
    setUrl(`https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${search}&ts=1&apikey=0577b337b43ba2a4a30291358e0dd50b&hash=f2008e55dcdd0827126e388784ce19d4`)
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
                 onKeyPress={searchComic}/>
            </div>
        </div>
       <div className="content">
         
        {
          (!itemComic)?<p>Not Found</p>:<ComicCard data={itemComic}/>
        }
       </div>
    </>
  )
}