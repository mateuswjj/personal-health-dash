import { AppBar, Box, CssBaseline, Toolbar, Typography } from '@mui/material'
import './App.css'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'




function App() {

  return (
    <Box sx={{ display: 'flex'  }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <NavBar />
      <Box component="main"
        sx={{
          flexGrow: 1,
          bgcolor: '#f9f9fc',
          height: '100vh  ', 
          mt: '64px', 
          p: 2,
        }} >
        <Outlet />
      </Box>
    </Box>
  )
}

export default App
