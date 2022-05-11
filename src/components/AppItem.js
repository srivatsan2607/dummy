import React from 'react'

const AppItem = ( props ) =>
{

  return (
    <div className='card'>
      <div className='tile'>
        <div>
          <img src={ props.item.imageUrl } alt={ props.item.itemName } />
        </div>
        <div className='title-desc'>
          <h2>{ props.item.itemName }</h2>
          <p>{ props.item.description }</p>
        </div>
        <div>
          <h5>{ props.item.price } - EUR</h5>
        </div>
      </div>
      <div className='favIcon'>
        <i onClick={ () => props.favHandler( props.item.id ) } className={ props.item.isFav ? "fa-solid fa-heart" : "fa-regular fa-heart" }></i>
      </div>
    </div>
  )
}

export default AppItem