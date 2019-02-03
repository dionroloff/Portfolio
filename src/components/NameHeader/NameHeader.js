import React, { Component } from 'react';
import './NameHeader.css';
//Material UI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class NameHeader extends Component {
    // The NameHeader will render my photo, title
    render() {
        return (
            <Grid container justify="center" className="header">
                <Grid item xs={12}>
                    
                            <Grid container justify="center">
                                <img alt="me" src="./images/pic.jpg" />
                            
                            <Grid container justify="center">
                                <Typography>
                                    <h1>Dion Roloff</h1>
                                </Typography>
                                <Grid container justify="center"></Grid>
                                
                                        <h4>Full Stack Software Engineer</h4>
                                
                                </Grid>
                            </Grid>
                        
                </Grid>
            </Grid>
        )
    }
}

export default NameHeader;