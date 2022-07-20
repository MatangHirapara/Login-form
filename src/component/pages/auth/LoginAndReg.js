import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import pic1 from "../../images/pic1.png"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { display } from '@mui/system';
import Userlogin from './Userlogin';
import Registration from './Registration';


const TabPanel = (props) => {
  const { children,value,index } = props;
  return(
    <div role='tabpanel' hidden={value !== index} >
      {
        value === index && (
          <Box>{children}</Box>
        )
      }
    </div>
  )
}


const LoginAndReg = () => {
  const [value, setValue] = useState();
  const handleChange = (event , newValue) =>{
    setValue(newValue)
  }
  return (
    <>
      <Grid container sx={{height: '90vh'}}>
        <Grid item lg={7} sm={5} sx={{
          backgroundImage: `url(${pic1})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: {xs: 'none', sm: 'block'}
        }}>
        </Grid>
        <Grid item lg={5} sm={7} xs={12}>
          <Card sx={{height: "100%", width: "100%"}} >
            <Box sx={{borderBottom: 1, borderColor: "divider"}}>
              <Tabs value={value} textColor='secondary' indicatorColor='secondary' onChange={handleChange} >
                <Tab label="Login"  sx={{textTransform: 'none', fontWeight: "bold"}}></Tab>
                <Tab label="Ragistration" sx={{textTransform: 'none', fontWeight: "bold"}}></Tab>
              </Tabs>
            </Box>
            <TabPanel value={value} index={0} ><Userlogin /></TabPanel>
            <TabPanel value={value} index={1} ><Registration /></TabPanel>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default LoginAndReg
