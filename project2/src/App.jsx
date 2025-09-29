import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const cards = [
  {front: "stack", back: "last in first out data structure"},
  {front: "queue", back: "first in first out data structure"},
  {front: "array", back: "collection of items stored at contiguous memory locations"},
  {front: "linked list", back: "linear data structure where elements are not stored at contiguous memory locations"},
  {front: "tree", back: "hierarchical data structure that consists of nodes connected by edges"},
  {front: "graph", back: "data structure that consists of a set of nodes (vertices) and a set of edges that connect pairs of nodes"},

  ];
  const [flipped, setFlipped] = useState(false);
  const [index, setIndex] = useState(0);

  

  function handleCardClick() { 
    setFlipped(!flipped);    
  }

  return (
    <>
      <h1>Computer Science Flashcards</h1>
      <h3>general cs info decks</h3>
      <p>Total cards: 6</p>
  
      <div>
        <div className="card" onClick={handleCardClick}>

          {flipped ? cards[index].back : cards[index].front}
        </div>

        <div className="button-style">
          <button onClick={() => {setIndex((index - 1 + cards.length) % cards.length); setFlipped(false);}} style={{marginRight: "10px"}}>Previous</button>
          <button onClick={() => {setIndex((index + 1) % cards.length); setFlipped(false);}}>Next</button>
        </div>
      </div>
    </>
  )
}

export default App
