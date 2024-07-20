import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ViewStudent = () => {
  var[students,setStudents]= useState([]);
  var navigate =useNavigate();
  useEffect(()=>{
    axios.get("http://localhost:3008/view")
    .then((res)=>{
      console.log(res.data);
      setStudents(res.data);
    })
    .catch((err)=>{
      console.log(err)
    });
  },[])
  
  const deleteHandler = (id) => {
    axios.delete(`http://localhost:3008/remove/${id}`)
      .then(response => {
        console.log('Item deleted successfully:', response.data);
        alert(response.data.message)
        window.location.reload(true)
        // setData(data.filter(item => item._id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the item!', error);
      });
  };

  var navigate=useNavigate();
  
  const updateHandler =(val)=>{
    console.log("clicked",val)
    navigate('/a',{state:{val}})
    
  }

  return (
    <div>
  <Typography
  variant="h3"
  colour={"secondary"}
  style={{textAlign:"center"}}
>
  Student Data
  </Typography>
  <TableContainer>
  <Table>
  <TableHead>
    <TableRow>
      <TableCell> Name</TableCell>
      <TableCell> Age</TableCell>
      <TableCell> Roll No</TableCell>
      <TableCell> Place</TableCell>
      <TableCell>Department</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {students.map((val,i)=>{
    return(
      <TableRow key={i}>
    <TableCell> {val.s_name}</TableCell>
    <TableCell>{val.s_age} </TableCell>
    <TableCell> {val.s_rollno}</TableCell>
    <TableCell> {val.s_place}</TableCell>
    <TableCell> {val.s_dept}</TableCell>
    <TableCell>
    <Button variant="contained"
    color="error"
    onClick={() => deleteHandler(val._id)}>
      delete</Button>
      &nbsp;
      <Button variant="contained"
       color="success"
       onClick={()=>{updateHandler(val)}}>
        update</Button>
    </TableCell>
      </TableRow>
    );
    })}
  </TableBody>
  </Table>
  </TableContainer>

  </div>
  )
}

export default ViewStudent