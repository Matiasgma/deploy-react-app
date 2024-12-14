import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import { Button, Grid2, Typography } from '@mui/material';

const Advice = () => {
  const [update, setUpdate] = useState(false);
  const { data } = useFetch(import.meta.env.VITE_ADVICES_API_URL, update);

  return (
    <Grid2>
        <Typography variant='h6'>{data?.slip.advice}</Typography>
        <Button variant='contained' onClick={()=> setUpdate(!update)}>Actualizar frase</Button>
    </Grid2>
  )
}

export default Advice