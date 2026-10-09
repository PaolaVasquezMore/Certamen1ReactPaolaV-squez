import { useState } from 'react'
import { Container, Card, CardContent, Typography, Box } from '@mui/material'
import BarraNavegacion from '../components/BarraNavegacion'
import FormularioGuerrero from '../components/FormularioGuerrero'
import TablaTropas from '../components/TablaTropas'

function SauronContainer() {
  // Estados para cada campo del formulario
  const [nombre, setNombre] = useState('')
  const [tipo, setTipo] = useState('Orco')
  const [nivel, setNivel] = useState(50)
  const [categoria, setCategoria] = useState('Capitán')
  const [amenaza, setAmenaza] = useState(1)

  // Estado para la lista del ejército
  const [lista, setLista] = useState([
    { id: 1, nombre: 'Gothmog', tipo: 'Orco', nivel: 85, categoria: 'Capitán', amenaza: 5 },
    { id: 2, nombre: 'Lurtz', tipo: 'Uruk', nivel: 95, categoria: 'Berserker', amenaza: 5 }
  ])

  // Función para agregar un nuevo guerrero a la lista
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!nombre.trim()) return

    const nuevoGuerrero = {
      id: Date.now(),
      nombre,
      tipo,
      nivel,
      categoria,
      amenaza
    }

    setLista([...lista, nuevoGuerrero])

    // Reiniciar los campos del formulario
    setNombre('')
    setTipo('Orco')
    setNivel(50)
    setCategoria('Capitán')
    setAmenaza(1)
  }

  // Función para eliminar un guerrero por su ID
  const handleEliminar = (idBorrar) => {
    setLista(lista.filter((guerrero) => guerrero.id !== idBorrar))
  }

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f8a1e9', pb: 5 }}>
      <BarraNavegacion />
      
      <Container maxWidth="md" sx={{ mt: 4 }}>
        {/* Card Contenedora del Formulario */}
        <Card elevation={3} sx={{ mb: 4, borderRadius: 2 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" fontWeight="bold" align="center" sx={{ mb: 3, color: '#212121' }}>
              Módulo: Ingresar Guerrero
            </Typography>
            <FormularioGuerrero 
              nombre={nombre} setNombre={setNombre}
              tipo={tipo} setTipo={setTipo}
              nivel={nivel} setNivel={setNivel}
              categoria={categoria} setCategoria={setCategoria}
              amenaza={amenaza} setAmenaza={setAmenaza}
              handleSubmit={handleSubmit}
            />
          </CardContent>
        </Card>

        {/* Tabla de Despliegue */}
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: '#212121' }}>
          Módulo: Despliegue del Ejército
        </Typography>
        <TablaTropas lista={lista} handleEliminar={handleEliminar} />
      </Container>
    </Box>
  )
}

export default SauronContainer