import './index.css';

import axios from 'axios';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, Switch, Route } from "react-router-dom";
import Context from './componentsApp3/Context';

import Header from './componentsApp3/Header/Header';
import Tasks from './componentsApp3/Tasks/Tasks';
import Info from './componentsApp3/Info/Info';
import Info2 from './componentsApp3/Info/Info2';
import Info3 from './componentsApp3/Info/Info3';
import Loader from './componentsApp3/Loader/Loader'
import Modal from './componentsApp3/Modal/Modal';
import Select from './componentsApp3/Sellect/Select';
import Search from './componentsApp3/Search/Search';

document.body.classList.add("body");


export default function App() {

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setshowModal] = useState(false);
  const [text, setText] = useState("Example");
  const [selectSort,setSElectSort] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true)
    axios.get("http://localhost:3001/titles")
        .then(({data}) => {
            setTasks(data)
            setLoading(false)
        })
    axios.get("http://localhost:3001/names")
    .then(({data}) => {      
      setText(data[0].name)
      })
    }, [])


const onAdd = (taskObj) => {
  const newTask = [...tasks, taskObj];
  setTasks(newTask);
}

const onRemove = (id) => {
  console.log(id)
  axios.delete("http://localhost:3001/titles/" + id)

  const newListTasks = tasks.filter(task => task.id !== id)
  setTasks(newListTasks)
} 

const onCloseModal = (e) => {
  e.preventDefault();
  setshowModal(false);
}

const SubmitModal = (inputVal) => {
  setshowModal(false)
  setText(inputVal)
}

const sortSelect = (sort) => {
  console.log("7")
  setSElectSort(sort);
  if(sort === "title") {
    setTasks([...tasks].sort((a,b) => a[sort].localeCompare(b[sort])))
  }
   if(sort === "id") {
    setTasks([...tasks].sort((a,b) => a[sort] - b[sort]))
   }
}

// const serchPosts = useMemo( () => {
//   if(search) {
//     console.log("88")
//     return setTasks([...tasks].filter(task => task.title.includes(search)))
//   } else {
//     console.log("99")
//   }
// }, [search, tasks])
// const serchPosts =() => {
//   if(search === "" ) {
//   console.log(search)}
//   // if(search.trim()) {
//   //   console.log("88")
//   //   return setTasks([...tasks].filter(task => task.title.includes(search)))
//   // } else {
//   //   console.log("99")
//   // }
// }



let serchPosts = useEffect(() => {
  if(search === "" ) {
    axios.get("http://localhost:3001/titles")
        .then(({data}) => {
            setTasks(data)
        })
  } else {
    return setTasks([...tasks].filter(task => task.title.includes(search)))
  }
  
}, [search])

  return (
    <div className="wrapper">
      <Context.Provider value={{onRemove, SubmitModal}}>
        <Header/>  
        <div className="main">
            <div className="container">   
        <Route exact path="/">
          <div className="sort-wrap">
          <Select 
            value={selectSort}
            defaultValue="Сортировка"
            onChange={sortSelect}
            options={[
              {val: "title", name : "по названию"},
              {val: "id", name : "по индексу"}
            ]}
          />
          <Search
            value={search} 
            // eslint-disable-next-line no-unused-expressions
            onChange={(e) => {setSearch(e.target.value); serchPosts}}
          />
          </div>
          {loading ? 
            (<Loader/>)
            :
            (<Tasks tasks={tasks}   onAddTask={onAdd} />)
             }
          </Route> 
        <Route path="/Title2">
          <Info text={text}  onShowModal={setshowModal}/>
        </Route> 
        <Route path="/Title3"><Info2/></Route> 
        <Route path="/Title4"><Info3 initCount={5}/></Route> 
        {showModal && <Modal  onCloseModal={onCloseModal}/>}</div></div>
      </Context.Provider>
    </div>
  );
}


