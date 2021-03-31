import './App.css';
import React,{useEffect,useState} from 'react'
import Recipe from './Recipe'
const App=()=>{
  const API_ID=`7c0de6dc`
  const API_KEY=`
  68a25e0a7c1258e7e72897bc3e3069fa	`

  
const [recipes,setRecipes]=useState([])
const [search,setSearch]=useState('')
const [query,setQuery]=useState('chicken')
  useEffect( ()=>{
    getRecipes()
  },[query])
  const getRecipes=async ()=>{
    const res =await fetch(`https://api.edamam.com/search?q=${query==''?'chicken':query}&app_id=${API_ID}&app_key=${API_KEY}`)
    const data=await res.json()
    setRecipes(data.hits)
  }
  
const updateSearch=(e)=>{
  setSearch(e.target.value)

}
const getSearch=(e)=>{
  e.preventDefault();
  setQuery(search)
  document.querySelector('form input').value=''
}
  

  return (
    <div className="App">
      <form onSubmit={getSearch} className='search-form' >
        <input  value={search} onChange={updateSearch} className='search-bar' type="text"/>
        <button  className='search-button' type="submit"   >Seach</button>   
      </form>
      <div className='recipes'>
      {recipes.map((food,_)=><Recipe food={food} />)}
      </div>
  
    </div>
  );
}

export default App;
