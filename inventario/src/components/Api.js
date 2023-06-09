import React, { useState, useEffect } from 'react';


const Api = () => {


  const [data, setData] = useState([]);

useEffect(() => {
  
  try{
    fetch('http://localhost:4400/API/')
    .then(response => response.json())
    .then(data => setData(data));
    
  }catch{
    console.log('error');
  }

}, []);

console.log(data)
  return (
    <div>
      
    </div>
  )
}

export default Api



