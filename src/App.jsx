

import './App.css'

// Variable global para IDs únicos (como te daban en el examen)
let nextId = 3;


const initialItems = [
  { id: 0, name: "Lámpara", checked: true },
  { id: 1, name: "Tienda", checked: false },
  { id: 2, name: "Silla", checked: false },
];

export default function App(){



  
  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="mb-8 text-bold">Challenge 2</h1>
      <ListItems  />

      <FormItem  />

      <div className="mt-5"> {3} of {5}</div>

    </div>
  )
}

const ListItems=()=>{



  return(
    <ul>
  
            <li  className="mb-3">
            items
            </li>  
    </ul>
  )
}

const FormItem=()=>{

  return(
      <form>
          <input type="text"  className="border border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
           
           />
           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add
          </button>
      </form>

    )
}


