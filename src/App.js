import './App.css';
import React,{useState} from 'react';
import Header from './comp/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
const [name,setname]=useState("");
const [email,setemail]=useState("");
const [data,setdata]=useState([]);


function fas(){
if(name!="" && email!="")
 setdata([...data,{name:name,email:email}]);
 setname("");
 setemail("");
}

function deldata(ind){
var arr=data;
arr.splice(ind,1);
setdata([...arr]);
}
  return (
    <div className="App">
       <Header/>
       <div className='indiv'>
       <TextField value={name} onChange={(e)=>setname(e.target.value) } id="outlined-basic" label="Name" variant="outlined" 
       inputProps={{style: {fontSize: 15}}}
       InputLabelProps={{style: {fontSize: 18}}}
       />
       <TextField value={email}  onChange={(e)=>setemail(e.target.value) } id="outlined-basic" label="Email" variant="outlined" 
        inputProps={{style: {fontSize: 18}}}
       InputLabelProps={{style: {fontSize: 18}}}
       />
       <Button onClick={fas} variant="contained"><AddIcon /></Button>
       </div>
       <div className='datamain'>
        { (()=>{
          if(data.length>0)
          {
            return(<div className='heading'><h2>Name</h2>
    <h2>Email</h2>
    <h2>Delete</h2></div>);
          }
        })() }

        {
          data.map((ele,ind)=>{
            return(
              
              <div key={ind} className='head'>
    <h3>{ele.name}</h3>
    <h3>{ele.email}</h3>
    <Button onClick={()=>deldata(ind)} variant="outlined" color="error">
    <DeleteIcon />
     </Button>
</div>
            )
          })
        }
       </div>
    </div>
  );
}

export default App;
