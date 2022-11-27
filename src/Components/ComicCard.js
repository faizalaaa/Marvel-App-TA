import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ComicCard = ({ data }) => {
  let navigate=useNavigate();
  return (
    <>
      {
        (data) ? (
          data.map(itemComic => {
            return (
              <div className="card" key={itemComic.id} 
              onClick={()=>navigate(`/comics/${itemComic.id}`)}>
                <img src={`${itemComic.thumbnail.path}.${itemComic.thumbnail.extension}`} alt="" />
                <div className="title">
                  <h3>{itemComic.title}</h3>
                </div>
              </div>
            )
          })
        ):""
      }

    </>
  )
}

