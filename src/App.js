
import { useState } from 'react';
import './App.css';
import AppList from './components/AppList';
function App() {
  const items = [
    {
      id: 1,
      itemName: "Caesar's Salad",
      description: "The original Caesar's Salad",
      imageUrl: "/assets/images/1.jpg",
      price: 12,
      isFav: false
    },
    {
      id: 2,
      itemName: "Spaghetti Carbonara",
      description: "Better than your nonna's! All local and fresh ingredients",
      imageUrl: "/assets/images/2.jpg",
      price: 15,
      isFav: false
    },
    {
      id: 3,
      itemName: "Grilled Whole Fish",
      description: "Fish of the day, grilled Whole with a side of vegetables.",
      imageUrl: "/assets/images/3.jpg",
      price: 20,
      isFav: false
    },
    {
      id: 4,
      itemName: "Steak florentine",
      description: "The original Caesar's Salad",
      imageUrl: "/assets/images/4.jpg",
      price: 12,
      isFav: true
    },
  ]
  const [itemList, setItemList] = useState(items);
  const favHandler = (id) => {
    setItemList(itemList.map(element => {
       if(element.id === id) {
           element.isFav = ! element.isFav
       }
       return element
    }));
}
  return (
    <div className="App">
        <AppList items={itemList} favHandler={favHandler}/>
    </div>
  );
}

export default App;
