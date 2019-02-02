import React, { Component } from 'react';
import './NameHeader.css';
//Material UI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class NameHeader extends Component {
    render() {
        return (
            <Grid container justify="center" className="header">
                <Grid item xs={12}>
                    
                            <Grid container justify="center">
                                <img src="./images/pic.jpg" />
                            </Grid>
                            <Grid container justify="center">
                                <Typography>
                                    <h1>Dion Roloff</h1>
                                </Typography>
                                
                                <Typography>
                                        <h4>Full Stack Software Engineer</h4>
                                </Typography>
                                
                            </Grid>
                        
                </Grid>
            </Grid>
        )
    }
}

export default NameHeader;