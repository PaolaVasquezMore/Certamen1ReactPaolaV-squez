import { 
  Box, TextField, FormControl, FormLabel, RadioGroup, 
  FormControlLabel, Radio, Typography, Slider, Select, 
  MenuItem, Rating, Button, InputLabel 
} from '@mui/material'

function FormularioGuerrero({
  nombre, setNombre,
  tipo, setTipo,
  nivel, setNivel,
  categoria, setCategoria,
  amenaza, setAmenaza,
  handleSubmit
}) {
  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {/* 1. Nombre del Guerrero */}
      <TextField 
        label="Nombre del Guerrero" 
        value={nombre} 
        onChange={(e) => setNombre(e.target.value)} 
        required 
        fullWidth 
      />

      {/* 2. Tipo de Guerrero */}
      <FormControl required>
        <FormLabel>Tipo de Guerrero</FormLabel>
        <RadioGroup row value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <FormControlLabel value="Orco" control={<Radio />} label="Orco" />
          <FormControlLabel value="Uruk" control={<Radio />} label="Uruk" />
        </RadioGroup>
      </FormControl>

      {/* 3. Nivel de Combate (Slider 1-100) */}
      <Box>
        <Typography gutterBottom>Nivel de Combate: {nivel}</Typography>
        <Slider 
          value={nivel} 
          onChange={(e, val) => setNivel(val)} 
          min={1} 
          max={100} 
          valueLabelDisplay="auto" 
        />
      </Box>

      {/* 4. Categoría / Rango (Select) */}
      <FormControl fullWidth required>
        <InputLabel id="categoria-label">Categoría / Rango</InputLabel>
        <Select 
          labelId="categoria-label"
          value={categoria} 
          label="Categoría / Rango" 
          onChange={(e) => setCategoria(e.target.value)}
        >
          <MenuItem value="Capitán">Capitán</MenuItem>
          <MenuItem value="Berserker">Berserker</MenuItem>
          <MenuItem value="Explorador">Explorador</MenuItem>
          <MenuItem value="Asediador">Asediador</MenuItem>
        </Select>
      </FormControl>

      {/* 5. Nivel de Amenaza / Furia (Rating 1-5) */}
      <Box>
        <Typography component="legend">Nivel de Amenaza / Furia</Typography>
        <Rating 
          value={amenaza} 
          onChange={(e, val) => setAmenaza(val || 1)} 
          min={1} 
          max={5} 
        />
      </Box>

      {/* Botón de Envió */}
      <Button type="submit" variant="contained" color="error" size="large">
        Registrar Guerrero
      </Button>
    </Box>
  )
}

export default FormularioGuerrero