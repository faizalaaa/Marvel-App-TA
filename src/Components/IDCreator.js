import React from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';

export const IDCreator = () => {
  const {id}=useParams();
  const [itemCreator,setItem]=useState()
  const fetch=async()=>{
    const res=await axios.get(`https://gateway.marvel.com:443/v1/public/creators/${id}?ts=1&apikey=0577b337b43ba2a4a30291358e0dd50b&hash=f2008e55dcdd0827126e388784ce19d4`)
    setItem(res.data.data.results[0])
  }
  fetch();
  return (
    <>
    {
      (!itemCreator)? "":(
        <div className="box-content">
          <div className="right-box">
          <img src={`${itemCreator.thumbnail.path}.${itemCreator.thumbnail.extension}`} alt="" />
          </div>
          <div className="left-box">
            <h1>{itemCreator.fullName}</h1>
            <h4>{itemCreator.description}</h4>
          </div>
        </div>
      )
    }
    </>
  )
}
