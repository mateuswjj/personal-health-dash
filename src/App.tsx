import { AppBar, Box, CssBaseline, Toolbar, Typography } from '@mui/material'
import './App.css'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Clipped drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <NavBar></NavBar>
      </Box>

    </>
  )
}

export default App
