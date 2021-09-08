import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';



export default function Setting() {
 
    return(<>
            <Container>
                <Grid  >
                    <Grid item xm={12} >
                         <Typography  variant="h4" color="initial">
                         Settings 
                         </Typography>
                    </Grid>
                    <Grid  >
                    <Link to="/Example" >
                        <Button variant="outlined" >
                                Accounts
                        </Button>
                    </Link>    
                    </Grid>

                    <Grid>
                    <Link to="/" ><Button variant="outlined" >
                    Back
                    </Button></Link> 
                    </Grid>

                </Grid>
                </Container>
            
            </>
    )}


    // <Grid>
    //             <Grid item sm={12}  >
    //                     <Typography id="settingh4ID" variant="h4" color="initial">
    //                         Settings
    //                     </Typography>
    //             </Grid>

                
    //             <Grid item xs={12}  sm={12} >
    //                 <Link to="/Puttingallin" ><Button id="btnid" color="primary">
    //                 Accounts
    //                 </Button></Link>  
    //                 </Grid>
                    
                              
                
    //               <Grid item  xs={12}  sm={6}  >
    //                 <ul >
    //                 <Link to="/" ><Button id="btnid2" color="primary">
    //                 Back
    //                 </Button></Link>  
    //                 </ul>
    //                 </Grid>
    //                 </Grid> 