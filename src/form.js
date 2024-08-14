import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function Form() {
  const [name, setName] = useState({
    Fname: "",
    Lname: "",
    email: "",
  });
  const[error,setError] =useState({})

  const handlechange = (e) => {
    setName({
      ...name,
      [e.target.name] : e.target.value
    })
  };
const validation=(data)=>{
  let error = {}
  if (!data.Fname.trim()) {
    error.fname = "FirstName is required"
  }
  if (!data.Lname.trim()) {
    error.lname = "LastName is required"
  }
  if (!data.email.trim()) {
    error.email = "Email is required"
  }else if (!/\S+@\S+\.\S+/.test(data.email)) {
    error.email = 'Email is invalid';
}
  setError(error)
}

  const handlesubmit= (e)=>{

    e.preventDefault()
    if (validation(name)) {
      console.log("Sucess");
    }
 
  
  }
  return (
    <div className="App">
      <form onSubmit={handlesubmit}>
        <div>
          <label>FirstName</label>
          <input type="text" onChange={handlechange} name="Fname"  value={name.Fname}/>
          <span>{error && error.fname}</span>
        </div>
        <div>
          <label>LastName</label>
          <input type="text" onChange={handlechange} name="Lname" value={name.Lname}/>
          <span>{error && error.lname}</span>
        </div>
        <div>
          <label>Email</label>
          <input type="text" onChange={handlechange}name="email" value={name.email} />
          <span>{error && error.email}</span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
