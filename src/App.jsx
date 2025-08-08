import { useLoaderData } from "react-router-dom"

import CoffeCard from "./Components/coffeCard"
import { useState } from "react";


function App() {
  const Loadedcoffees = useLoaderData();
  
   const [coffees,setCoffees]=useState(Loadedcoffees);
   console.log(coffees)
  return (
    <>
      <div className="m-20">
        <h1 className="text-6xl text-center text-purple-600 my-20">Hot hot coffee:{coffees?.length}</h1>
        <div className="grid md:grid-cols-2 gap-4">
          {
            coffees.map(coffee => <CoffeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeCard>)
          }
        </div>
      </div>

    </>
  )
}

export default App
