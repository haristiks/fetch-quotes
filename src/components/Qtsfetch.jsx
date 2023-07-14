import React from "react";
import { useState, useEffect } from "react";

function Qtsfetch() {

  const [qot, setQot] = useState([]);
  const fetchQuote = async () => {
    const fetchedData = await fetch("https://dummyjson.com/quotes")
      .then((response) => response.json())
      .then((dat) => dat.quotes);
    const responsedata= fetchedData.filter((data)=>data.id<11)
    setQot(responsedata);
  };
  useEffect(()=>{
    fetchQuote();
  },[]);
  return (
    <div>
     {qot.map((value)=>(
      <h1 style={{backgroundColor:"#15e62a"}}>{value.id}.{value.quote} - {value.author}</h1>      
     ))}
    </div>
  );

}

export default Qtsfetch;
