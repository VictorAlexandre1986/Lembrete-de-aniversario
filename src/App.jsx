
import React from 'react';
import Card  from "../src/components/Cards.jsx";
import Typography from '@mui/material/Typography';


import ProximoAniversario from "../src/components/ProximosAniversarios.jsx";
import './App.css';

const App = () =>{
  
  return (
    <div >
    <Typography variant="h1" sx={{textAlign:"center"}}>
          Aniversários hoje
    </Typography>

            <Card/>

    <Typography variant="h1" sx={{textAlign:"center"}}>
        Próximos aniversários
    </Typography>
        <ProximoAniversario/>
    </div>
  )
}

export default App
