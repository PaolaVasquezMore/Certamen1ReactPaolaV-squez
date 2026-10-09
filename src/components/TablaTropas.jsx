import { 
  TableContainer, Table, TableHead, TableRow, TableCell, 
  TableBody, Paper, Chip, Button, Rating, Typography 
} from '@mui/material'

function TablaTropas({ lista, handleEliminar }) {
  if (lista.length === 0) {
    return (
      <Typography align="center" color="text.secondary" sx={{ mt: 2 }}>
        No hay tropas desplegadas actualmente en Mordor.
      </Typography>
    )
  }

  return (
    <TableContainer component={Paper} elevation={3}>
      <Table>
        <TableHead sx={{ backgroundColor: '#212121' }}>
          <TableRow>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Nombre</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Tipo</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Categoría</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Nivel</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Amenaza</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Acción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lista.map((guerrero) => (
            <TableRow key={guerrero.id} hover>
              <TableCell sx={{ fontWeight: 'bold' }}>{guerrero.nombre}</TableCell>
              
              {/* Renderizado condicional de Chip según el tipo */}
              <TableCell>
                <Chip 
                  label={guerrero.tipo} 
                  color={guerrero.tipo === 'Orco' ? 'warning' : 'secondary'} 
                  variant="filled"
                />
              </TableCell>

              <TableCell>{guerrero.categoria}</TableCell>
              <TableCell>{guerrero.nivel}</TableCell>
              <TableCell>
                <Rating value={guerrero.amenaza} readOnly size="small" />
              </TableCell>

              {/* Botón de Eliminación */}
              <TableCell>
                <Button 
                  variant="outlined" 
                  color="error" 
                  size="small"
                  onClick={() => handleEliminar(guerrero.id)}
                >
                  Asesinado por la aparición
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TablaTropas