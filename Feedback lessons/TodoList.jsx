// import { useState } from "react";

import { useState } from "react";

// const TodoList = ()=>{

//      const [todos,setTodes] = useState ([]);
//      const [inputValue, setInputValue] = useState ("")

//             // halkii todo wa inu ahado object ,objectigana muxu ka kobanyahay
//      const handleAddtodo = ()=>{
//     //   waxay naga trim in user wax eber inu add dhihin aysan u shaqaynin
//         if(inputValue.trim()!== ""){
               
//             const newTodo ={
//             id: crypto.randomUUID(),
//             text: inputValue,
//             completed: false 
//         }
//             setTodes([...todos, newTodo])
//             setInputValue("")

//         }

    
//      }


//     return(
//         <div>
//             <h2>To-Do List</h2>
//             {/* inputka userka wuu qoray tusale "Home work" add marku dhaho side logu so dara liiska*/}
//             <input 
//             type="text"
//             placeholder="Enter a new to-do" 
                                        // marwalibo is badal dhaco setInputValue waxad ku badashaa waxa userka uu qoray
//             onChange={(event)=> setInputValue(event.target.value)}
//             value={inputValue}
//             />
//              <button onClick={handleAddtodo}>Add</button>
//              <ul>
//                 {
//                     todos.map(todo=>(
//                         <li>{todo.text}</li>
//                     )

//                     )
//                 }
//              </ul>
//         </div>
//     )
// }



//  export default TodoList;