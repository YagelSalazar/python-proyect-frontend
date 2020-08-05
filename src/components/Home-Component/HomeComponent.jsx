import React from 'react';
import './Home.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Trello from '../../img/trello.png';
import Tec from '../../img/hero-a.svg'
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
})); 

export const Home = () => {
   const classes = useStyles();
    return(
        <div className='home'>
            <div className='navbar'>
                <img src={Trello} alt='logo' style={{width:'180px'}}/>
                <a href='/registro' style={{color:'white', paddingLeft:'850px'}}>Iniciar Sesión</a>
                <Button style={{ color:'#2196F3',backgroundColor:'white'}}>Registrarse</Button>                
            </div>
            <div className='info'>
               <div style={{paddingRight:'135px'}}>
                    <h1>Trello le permite trabajar de forma más colaborativa y ser más productivo.</h1>
                    <h4>Las tarjetas, listas y tableros de Trello le permiten organizar y priorizar sus proyectos de forma divertida, flexible y provechosa.</h4>
               </div>                
                <img src={Tec} alt='img' style={{paddingRight:'85px'}}/>          
            </div>
            <div className='registro'>                
                <form   noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Correo electrónico" variant="outlined" style={{ backgroundColor: 'white', height: '55px', width: '350px'}}/>
                </form> 
                <Button style={{ backgroundColor: '#61BD4F', height:'55px', width:'300px', color:'white', marginLeft:'12px', borderColor:'green' }}>Registrese. ¡Es gratis!</Button>
            </div>     
        </div>
    )
}