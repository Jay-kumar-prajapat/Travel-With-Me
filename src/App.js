import React, { useState } from "react";
import Tours from "./Tours";
import data from "./data";

const App = () => {
const [tours,setTours]=useState(data);

function removeTour(id){
  const newTours=tours.filter(tour => tour.id !==id);
  setTours(newTours);
}
if(tours.length === 0){
  return(
    <div className="flex w-[100vw] justify-center items-center flex-col h-[100vh]">
      <div className="font-2xl"> Not Any Plan Available</div>
      <button onClick={() => setTours(data)} className="text-xl border mt-4 pt-1 pb-1 pl-2 pr-2 bg-red-700 text-white transition-all hover:bg-black">Refresh</button>
    </div>
  )
}


  return <div className=" container ">
  <Tours tours={tours} removeTour={removeTour}></Tours>
  </div>;
};

export default App;
