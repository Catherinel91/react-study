import './index.css';

import List from "./components/List/List"
import React, { useEffect, useState } from 'react';
import Context from './components/Context';
import AddList from './components/AddList/AddList';
import Loading from './components/Loading';
import Modal from './components/Modal/Modal';

function App() {
  const [lists, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=4')
      .then(response => response.json())
      .then(json => {
        setTimeout(() => {
          console.log(json)
          setList(json)
          setLoading(false)
        }, 2000)        
      })
  }, []);

  const onChecked = (id) => {
    const newList = lists.map(item => {
      if(id === item.id) {
        item.completed = !item.completed
      }
      console.log(item)
      return item
    })

    setList(newList);
  }

  const onRemove = (id) => {
    const newList = lists.filter(item => (item.id !== id));
    setList(newList);
  }

  const onAddList = (val) => {
    const newObj = [...lists, {title: val, completed: false, id: lists.length ? lists[lists.length - 1].id + 1 : 1}];
    setList(newObj);
    console.log(val)
  }

  return (
    <>
    <Modal/>
    <Context.Provider value={{onRemove}}>      
      <div className="container">        
        <AddList onLoad={loading} onAdd={onAddList} lists={lists}/>
        {loading && <Loading/>}
        {lists.length ? (<List lists={lists} onChecked={onChecked} />) 
        : (loading ? <span className="loading">Загрузка...</span> : <h2>Список пуст!</h2>)}
                
      </div>
    </Context.Provider>
    </>
  );
}

export default App;
