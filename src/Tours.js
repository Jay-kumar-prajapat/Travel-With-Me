import Card from './Card';

// function Tours({tours,removeTour}){
//   return( 
//     <div>
//        <div>       
//           <h2> Plan With Me</h2>
//        </div>

//        <div className="card">
//     {
//         tours.map( (tour) => {
//         return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
//     } )
//     }

        
//        </div>
//     </div>
//   )
// }  

function Tours({tours, removeTour}) {
    return (
        <div className='container  '>
            <div>
                <h2 className='title text-4xl text-red-700 bold text-center mt-5 border-b-2'> Travel With Me</h2>
            </div>
            <div className='cards flex justify-center flex-wrap m-w-[1300px]' >
                {
                    tours.map( (tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    } )
                }
            </div>
        </div>
    );
}
export default Tours;