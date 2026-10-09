import { AppBar, Toolbar, Typography } from '@mui/material'

function BarraNavegacion() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1b1b1b' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" fontWeight="bold" sx={{ color: '#ffb74d' }}>
          Anillo Único
        </Typography>
        <Typography variant="subtitle1" sx={{ fontStyle: 'italic', color: '#e0e0e0' }}>
          Uno para dominarlos a todos
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default BarraNavegacion