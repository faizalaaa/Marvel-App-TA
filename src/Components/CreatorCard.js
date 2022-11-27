import React from 'react'
import { useNavigate } from 'react-router-dom'

export const CreatorCard = ({ data }) => {
  let navigate=useNavigate();
  return (
    <>
      {
        (data) ? (
          data.map(itemCreator => {
            return (
              <div className="card" key={itemCreator.id} 
              onClick={()=>navigate(`/creators/${itemCreator.id}`)}>
                <img src={`${itemCreator.thumbnail.path}.${itemCreator.thumbnail.extension}`} alt="" />
                <div className="title">
                  <h3>{itemCreator.fullName}</h3>
                </div>
              </div>
            )
          })
        ):""
      }

    </>
  )
}

