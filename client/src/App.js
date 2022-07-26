import React,{useState,useEffect} from 'react';
import {Container, Grow, Grid} from '@material-ui/core';
import {getPosts} from './actions/posts'
import {useDispatch} from 'react-redux';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import Navbar from './components/Navbar/Navbar';

const App=()=>{
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId,setCurrentId]=useState(null);

    useEffect(()=>{
         dispatch(getPosts());
    },[currentId,dispatch])
    return(
        <Container maxidth="lg">
           <Navbar/>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container  justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}></Grid>
                        <Form currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}
export default App;