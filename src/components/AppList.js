import React from 'react'
import AppItem from './AppItem'

const AppList = (props) => {
   
  return (
    <div>
        {props.items.map((item) => {
            return (
                <AppItem key={item.id} item={item} favHandler={props.favHandler}/>
            )
        })}
    </div>
  )
}

export default AppList