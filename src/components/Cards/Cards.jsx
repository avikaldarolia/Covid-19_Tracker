import React from 'react';
import {Card,CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';
import styles from './Cards.module.css' ;
import CountUP from 'react-countup';
// Purpose of cx is to bind the className of cards with different styles 
import cx from 'classnames';
const Cards = ({data : {confirmed, recovered,deaths,lastUpdate} }) =>{
    //if the hasn't been fetched yet
    if(!confirmed){
        return 'Loading...';
    }

    // console.log(props.data);
    return(
       <div className={styles.container}>
         <Grid container spacing={3} justify="center">
             <Grid item component={Card} md={3} xs={12} className={cx(styles.card,styles.infected)}>
                 <CardContent >
                     <Typography color="textSecondary" gutterBottom> Infected  </Typography>
                     <Typography vairant="h5"> 
                     <CountUP 
                        start={0}
                        end= {confirmed.value}
                        //duration is 2.5 seconds
                        duration={2.5}
                         separator=","
                         /> 
                     </Typography>
                     <Typography color="textSecondary" > {new Date(lastUpdate).toDateString()} </Typography>
                     <Typography variant="body2" >  Number of Active Cases of Covid 19 </Typography>
                 </CardContent>
             </Grid>
             <Grid item component={Card} md={3} xs={12} className={cx(styles.card,styles.recovered)}>
                 <CardContent >
                    <Typography color="textSecondary" gutterBottom> Recovered </Typography>
                    <Typography vairant="h5"> 
                        <CountUP    start={0} end= {recovered.value}  duration={2.5} separator="," /> 
                    </Typography>     
                    <Typography color="textSecondary" > {new Date(lastUpdate).toDateString()} </Typography>
                    <Typography variant="body2" > Number of recoveries from Covid 19 </Typography>
                 </CardContent>
             </Grid>
             <Grid item component={Card} md={3} xs={12} className={cx(styles.card,styles.deaths)}>
                 <CardContent >
                     <Typography color="textSecondary" gutterBottom> Deaths   </Typography>
                    <Typography vairant="h5"> 
                     <CountUP    start={0} end= {deaths.value}  duration={2.5} separator="," /> 
                    </Typography>
                     <Typography color="textSecondary" > {new Date(lastUpdate).toDateString()} </Typography>
                     <Typography variant="body2" >  Number of deaths caused by  Covid 19   </Typography>
                 </CardContent>
             </Grid> 
         </Grid>
       </div>
         
    )
}
export default Cards