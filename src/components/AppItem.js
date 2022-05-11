import React from 'react'

const AppItem = (props) => {
    
  return (
    <div className='tile'>
        <div>
            <img src={props.item.imageUrl} alt={props.item.itemName}/>
        </div>
        <div className='title-desc'>
            <h1>{props.item.itemName}</h1>
            <p>{props.item.description}</p>
        </div>
        <div>
        <h3>{props.item.price} - EUR</h3>
        <i onClick={() => props.favHandler(props.item.id)} className={props.item.isFav ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
        </div>
    </div>
  )
}

export default AppItem