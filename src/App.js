import logo from './logo.svg';
import './App.css';
import React, { useEffect,useState } from 'react';

function App() {
  
  const [data, setdata] = useState([{}]);
  useEffect(()=>{
    async function fetchApi(){
    const response = await fetch("https://api.github.com/users/muhammadmohsin/repos")
    const data = await response.json();
    console.log(data);
    setdata(data)
  }
  return fetchApi()}
  
  ,[f])
  return (
   <div>
   <ul>
   {data.map((r,id)=>{
     return <li key ={r.id}>{r.name}</li>})
  }
   </ul>
   </div>
  );
}

export default App;
