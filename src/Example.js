import React,{useState} from 'react';
import './App.css';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';




function App() {
   
  const [Text,setText] = useState();
  const [FullText,setFullText] = useState();
  const [Email,setEmail] = useState();
  const [Phnum,setPhnum] = useState();

  const handleOnClick =()=>{
    console.log("I was Clicked")
  }
  const handleOnChange =(event)=>{
    console.log("onChange")
    setText(event.target.value)
  }
  const handleOnChangeFull =(event)=>{
    console.log("onChange")
    setFullText(event.target.value)
  }
  const handleOnChangeEmail =(event)=>{
    console.log("onChange")
    setEmail(event.target.value)
  }
  const handleOnChangePhnum =(event)=>{
    console.log("onChange")
    setPhnum(event.target.value)
  }
  // const handleOnClickFull =()=>{
  //   console.log("Fulltext")
  // }
  


  // const handleOnClickEmail =()=>{
  //   console.log("Email")
  // }
  


  // const handleOnClickPhnum =()=>{
  //   console.log("Phone Number")
  // }
  
  return (
    <div className="App"> 
     
      <Grid>
        <Card  id="cardStyle" style={{ maxWidth: 700, padding: "4px 5px" }}>
          <CardContent>
            <Typography id="typoIDacont" gutterBottom variant="h5">
            Account
          </Typography> 
          <Typography id="idofav" variant="h6" color="initial">
            Avatar
        </Typography>
             
            <form  >
            
              <Grid container spacing={2}>
                <Grid xs={2} sm={1} item>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                </Grid>
                <Grid xs={4} sm={2} item>
                <Button id="btnidUpload" variant="outlined" color="primary">
                  Upload
                  </Button>
                </Grid>
                <Grid xs={1} sm={1}  item>
                <Button id="btnidRemoveWithuploadbtn" variant="outlined" >
                Remove
                </Button>           
                </Grid> 
                </Grid>


                <Divider id="idofhrform" variant="middle" />
                <Grid container spacing={2}>
                {/* asdas */}
                <Grid xs={12} sm={6} item>
                  <TextField 
                  value={Text}
                  onChange={handleOnChange}
                  placeholder="James" 
                  label="Display name" 
                  variant="outlined" 
                  helperText="Visible to other members" 
                  fullWidth  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField 
                  value={FullText}
                  onChange={handleOnChangeFull}
                  placeholder="James McDowel" 
                  label="Full name" 
                  variant="outlined"
                  helperText="How do you want to be called?"
                  fullWidth />
                </Grid>
                </Grid>
                <Divider id="idofhrform" variant="middle" />
                <Grid container spacing={2}>
                <Grid xs={12} sm={6} item>
                  <TextField 
                  value={Email}
                  onChange={handleOnChangeEmail}
                  placeholder="James" 
                  label="Email Address" 
                  variant="outlined" 
                  helperText="For notification and loggin in" 
                  fullWidth  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                  value={Phnum}
                  onChange={handleOnChangePhnum}
                  placeholder="James McDowel" 
                  label="+2132154313" 
                  variant="outlined"
                  helperText="For receiving notification"
                  fullWidth />
                </Grid>
                </Grid>
                <Divider id="idofhrform" variant="middle" />
                <Grid container spacing={2}>
                <Grid item xs={12}>
                <Typography id="Typographyid" >
                 Linked accounts
                </Typography>
                <Typography id="Typographyid2" >
                 We use this to let you sign in and populate your profile information
                </Typography>
                </Grid>
                </Grid>
                <Divider id="idofhrform" variant="middle" />
                <Grid container spacing={2}>
                <Grid xs={2} sm={1} item>
                <Avatar  id="googleId"  src="googlepic.png" />
                </Grid>
                <Grid xs={5} sm={3} item>
                <Typography id="Typographyid3" >
                Sign in with Google
                </Typography>               
                 </Grid>
                 <Grid  xs={1} sm={6} item>
                <Typography >
                <Button id="Conntbtn" variant="outlined" >
                Connect
                </Button>
                </Typography>               
                 </Grid>
                 </Grid>
                 <Divider id="idofhrform" variant="middle" />
                <Grid container spacing={1}>
                 <Grid item sm={7} xs={6}  >
                <Typography id="Typographyid" >
                Delete Accounts
                </Typography>
                <Typography id="Typographyid2Del" >
                By deletinng your account your account you will losee all your data
                </Typography>
                </Grid>
                <Grid  xs={2} sm={5} item>
                <Typography >
                <Button id="btnidRemove" >
                Deleteaccount
                </Button>
                </Typography>               
                 </Grid>
                 </Grid>
                 <Divider id="idofhrform" variant="middle" />
                <Grid >
                  <Grid sm={1} xs={1} item>

                  </Grid>
                <Grid  sm={6} xs={5} item>
                  <Button id="lastbtn" onClick={handleOnClick} variant="contained" color="primary" >SaveChange</Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default App;
