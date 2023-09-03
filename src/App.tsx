import { useState } from 'react'
import './App.css'
import Book from './components/Book';

function App() {
  const [count, setCount] = useState(0)

  return <span id="book-wrapper"><Book /></span>;
}

export default App;
