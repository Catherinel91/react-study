import './index.css';
import React, { useEffect, useRef, useState } from 'react';

function useInput(inputValue) {

  const [val, setVal] = useState(inputValue);

  const onChange = (e) => {
    setVal(e.target.value)
  }

  return {
    val, onChange
  }
}

function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener); 
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    [ref, handler]
  );
}


function App() {
const input = useInput("Title");
const inputRef = useRef();
const [showTitle, setShowTitle] = useState(false);

useOnClickOutside(inputRef, () => setShowTitle(false));


const hideOnEnter = (e) => {
  if(e.key === 'Enter') {
    setShowTitle(false);
  }
}
const focus = () => {
    inputRef.current.focus();
    inputRef.current.value = input.val
} 


  return (
    <div>
      {showTitle ? (
        <input ref={inputRef} onKeyDown={hideOnEnter} {...input}></input>)
        :
      (<h1 onClick={() => {
        setShowTitle(true);
        setTimeout(() => {focus()})}}>{input.val}</h1>
      )}
    </div>
  );
}

export default App;

