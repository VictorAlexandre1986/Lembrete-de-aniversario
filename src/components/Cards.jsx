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
    {data.map((bod) => {
        if (bod.day === day &  bod.month === month + 1) {
            return(
                <div key={bod.id}>
                    <Paper elevation={3} sx={{ textAlign:"Center", paddingTop:5, paddingBottom:5, marginBottom:3, width:300, margin:2}}>
                        <h2  >Nome : {bod.nome} </h2>
                        <p>Idade : {bod.age}</p>
                        <p>Dt nasc: {bod.day}/{bod.month}/{bod.year}</p>
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