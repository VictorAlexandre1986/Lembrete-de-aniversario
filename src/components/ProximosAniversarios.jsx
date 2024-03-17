import data  from "../data.js"
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Card = () => {
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    


    return (
    <div>
    <Box sx={{ display:"flex", justifyContent:"space-around", alignItems:"center", margin:10, flexWrap: 'wrap' }}>
    {data.map((valor) => {
        if ((valor.day > day &  valor.month >= month + 1) | (valor.day <= day &  valor.month > month + 1)) {
            return(
                <div key={valor.id}>
                <Paper elevation={3} sx={{ textAlign:"Center", paddingTop:5, paddingBottom:5, marginBottom:3, width:300, margin:2}}>
                    <h2 >Nome : {valor.nome} </h2>
                    <p>Idade : {valor.age}</p>
                    <p>Dt nasc: {valor.day}/{valor.month}/{valor.year}</p>
                </Paper>  
                </div>
            )
        }
    })}
    </Box>
    </div>
  )
}

export default Card