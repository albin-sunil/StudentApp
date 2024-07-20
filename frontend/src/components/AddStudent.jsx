import { Button, Grid, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const AddStudent = (props) => {
  var[data,setData]= useState({
    s_name:"",
    s_age:"",
    s_rollno:"",
    s_place:"",
    s_dept:'',

  });
  var navigate =useNavigate();
  var location =useLocation();
  console.log("location",location.state)

  useEffect(()=>{
    if(location.state!=null)
      setData({...data,s_name:location.state.val.s_name,
    s_age:location.state.val.s_age,
    s_rollno:location.state.val.s_rollno,
    s_place:location.state.val.s_place,
    s_dept:location.state.val.s_dept
  })
  },[])

  const inputHandler=(e)=>{
    console.log(e.target.value);
    setData({...data,[e.target.name]:e.target.value});
    console.log(data);
  };
  var navigate=useNavigate()
  const sumbmitHandler =()=>{
    console.log("btn clicked");
    if(location.state!=null)
    {
      axios.put("http://localhost:3008/update/"+location.state.val._id,data)
    .then((res)=>{
      console.log(res);
      alert(res.data.message)
    })
    .catch((err)=>{
      console.log(err)
    })

    }
    else{
     
    axios.post("http://localhost:3008/add",data)
    .then((res)=>{
      console.log(res);
      alert(res.data.message)
      
    })
    .catch((err)=>{
      console.log(err)
    })

    }
    
    
   navigate("/")
  }
  return (
    <div style ={{marginTop:'100px'}}>
  <Grid container spacing={2}>
  <Grid item xs={12} md ={4}></Grid>
  <Grid item xs={12} md ={4}>
 <TextField
variant="outlined"
fullWidth
label="Name"
onChange={inputHandler}
name="s_name"
value={data.s_name}/>
<br /><br />



<TextField
variant="outlined"
fullWidth
label="Age"
onChange={inputHandler}
name="s_age"
value={data.s_age}>


    </TextField>
    <br /><br />
    

  
<TextField variant="outlined" fullWidth label='Roll No' onChange={inputHandler}
name="s_rollno"
value={data.s_rollno}/>
<br /><br />

<TextField variant="outlined" fullWidth label='Place'onChange={inputHandler}
name="s_place"
value={data.s_place}/>
<br /><br />

<TextField variant="outlined" fullWidth label='Department'onChange={inputHandler}
name="s_dept"
value={data.s_dept}/>
<br /><br />

<Button colour="secondary"
fullWidth variant="contained" onClick={sumbmitHandler}
>sumbit</Button>
  </Grid>
   <Grid item xs={12} md ={4}></Grid>
</Grid>
    </div>
  )
}

export default AddStudent