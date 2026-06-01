import { useState, useRef } from 'react'
import './App.css'

// Variable global para IDs únicos (como te daban en el examen)
let nextId = 3;


const initialItems = [
  { id: 0, name: "Lámpara", checked: true },
  { id: 1, name: "Tienda", checked: false },
  { id: 2, name: "Silla", checked: false },
];

  export default function App(){
    const [items, setItems] = useState(initialItems);

    const handleItemCheck=(itemId)=>{
      setItems(prev=>prev.map(item=>item.id===itemId?{...item,checked:!item.checked}: item));
    }
    const handleAdd=(newItem)=>{
      setItems(prev=>[...prev, {id:nextId++, name:newItem, checked:false}])
    }

    const handleDelete=(itemId)=>{
      setItems(prev=>prev.filter( el=>el.id!==itemId));
    }

    const counterChecked=items.filter(item=>item.checked)

  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="mb-8 fw-bold">Challenge 2</h1>
      <SearchInput  onAdd={handleAdd}/>
      <ul className="mt-5 divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden max-w-sm">
        <Items items={items} onItemCheck={handleItemCheck} onDelete={handleDelete}  />
      </ul>
      <p className="mt-5">{counterChecked.length} de {items.length} Items</p>
    </div>
  )
}

const SearchInput=({onAdd})=>{

  const [text,setText]=useState('');
  const inputText=useRef(null);

  const handleOnSubmit=(e)=>{
    e.preventDefault();
    if(text!==''){
      onAdd(text)
      setText('');
    }

    inputText.current.focus()
  }
  return(
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={text}
          onChange={(e)=>setText(e.target.value)}
          ref={inputText}
        />
        <button className="ml-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded transition-colors">
          Add
        </button>
      </form>
    </div>
    );
}

const Items=({items, onItemCheck, onDelete})=>{

  return (
      <div>
      {items.map(item=>(
        <li key={item.id} className="flex items-center gap-3 px-4 py-3 bg-white hover:bg-gray-50 transition-colors">
          <input type="checkbox" className="mr-3 w-4 h-4 accent-purple-600 cursor-pointer" checked={item.checked} onChange={()=>onItemCheck(item.id)} />
          <span className={item.checked ? 'line-through' : 'text-gray-700'}>{item.name}</span>
          <button className="btn btn-secondary ml-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded transition-colors"
            onClick={()=>onDelete(item.id)}> Delete </button>
        </li>
        ))}
      </div>

    );

}
