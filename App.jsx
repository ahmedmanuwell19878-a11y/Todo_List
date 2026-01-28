import { useState,useEffect } from 'react'
import Anavbar from './components/Anavbar'
import './App.css'
import './index.css'



function App() {
  let [todolist,setTodolist]=useState([]);



useEffect(()=>{
  let todoString=localStorage.getItem("todolist")
  if(todoString){
let todos=JSON.parse(localStorage.getItem("todolist"))
setTodolist(todos)
  }

},[])

  let savetodolist=(event)=>{
let toname=event.target.toname.value;
if(!todolist.includes(toname)){
let finaldolist=[...todolist,toname]
setTodolist(finaldolist)
}else{
 alert("todo already exists")
}
    event.preventDefault();
  }
  let list=todolist.map((value,index)=>{
    return(
<Todolistitem value={value} key={index} indexnumber={index} todolist={todolist} setTodolist={setTodolist}/>
    )
  })
  return (
    <>
    <div className="container-fluid">
      <Anavbar/>
      </div>

      
      <section className="conatiner-fluid">
        <div className="container mt-3 mainissue overflow-sm-auto">

          <div className="row">
            <div className="col-sm-12 col-12">
      <form action="" onSubmit={savetodolist} className='mt-4'>
        <h4 className='text-center'><b>iTask-Manage your todos at one place</b></h4>
        <h4 ><b>Add a Todo</b></h4>
        <input type="text" className='textarea' name='toname' /><button  className='btndel'>Add</button>
      </form>
      <h4 className='mt-2'><b>Your Todos</b></h4>
      </div>
      </div>

      <div className="row">
   <div className="col-sm-12 col-12">
    
    <ul>
{list}
    </ul>
   
    </div>
   </div>
   
   </div>
   </section>
    </>
  )
}

export default App;


function Todolistitem({value,indexnumber,todolist,setTodolist}){
let [status,setstatus]=useState(false);
let deleterow=()=>{
  let finaldata=todolist.filter((v,i)=>i!=indexnumber);
  setTodolist(finaldata);
  
}
let checkstatus=()=>{
setstatus(!status)
}
return(
<>
<div className="container-fluid">
  <div className="container">
    <div className="row">

<div className="problem">

<div className="col-sm-10 col-10"><li onClick={checkstatus} className={(status)? 'completetod':''}>{indexnumber+1})  {value}</li></div><div className="col-sm-2 col-2"><button className='del ' onClick={deleterow}>Delete</button></div>

</div>
</div>
</div>
</div>
</>

)
}