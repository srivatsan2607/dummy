
import { useEffect, useState } from 'react';
import './App.css';
import AppList from './components/AppList';
import axios from 'axios';


function App ()
{
  const [ itemList, setItemList ] = useState( [] );
  const favHandler = ( id ) =>
  {
    setItemList( itemList.map( element =>
    {
      if ( element.id === id )
      {
        element.isFav = !element.isFav
      }
      return element
    } ) );
  }

  useEffect( () =>
  {
    axios.get( "./data.json" ).then( ( res ) =>
    {
      console.log( res )
      setItemList( res.data.data )
    } )
  }, [] )

  return (
    <div className="App">
      <AppList items={ itemList } favHandler={ favHandler } />
    </div>
  );
}

export default App;
