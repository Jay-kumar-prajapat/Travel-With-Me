import { useState } from "react";


function Card({id,name,info,image,price,removeTour}){
    const [readmore,setReadmore] = useState(false);

    
   const description = readmore ? info :`${info.substring(0,200)}....`;
   function readmoreHandler(){
    setReadmore(!readmore)
   };

    return(
        <div className="w-[380px]  flex flex-col p-[1rem] m-[1rem] item-center radius rounded-xl  card">
        <div>
            <img src={image} alt="" className="h-[380px] aspect-square object-cover "></img>
        </div>
        <div>
            <h4 className=" bold text-xl text-green-600 ">₹{price}</h4>
            <h4 className="bold text-2xl">{name}</h4>
        </div>
        <div>
            {description}
            <span onClick={readmoreHandler} className="cursor-pointer">{ readmore ?`Show-Less` : `Read-More`}</span>
        </div>
        <button onClick={() =>removeTour(id)} className="border bg-red-800 text-white rounded-xl hover:text-blue-400 mt-3 pt-4px pb-[4px]">Not Interested</button>



        </div>
    )

}
export default Card;