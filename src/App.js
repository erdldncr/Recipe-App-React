import logo from './logo.svg';
import './App.css';
import React from 'react'

const App=()=>{
  const API_ID=`7c0de6dc`
  const API_KEY=`
  68a25e0a7c1258e7e72897bc3e3069fa	`
  const exampleReq=
  `https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`

  return (
    <div className="App">
      <form className='search-form' >
        <input type="text"/>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
