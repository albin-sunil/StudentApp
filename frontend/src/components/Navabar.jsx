import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navabar = () => {
  return (
    <div>
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          studentapp
          </Typography>
          <Button color="inherit">
          <Link
          to={"/"}
          style={{color:"white",textDecoration:"none"}}>
         View
          </Link>
          </Button>
          <Button colour="inherit">
            <Link to={"/a"}  style={{color:"white",textDecoration:"none"}}>Add</Link>
            
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navabar