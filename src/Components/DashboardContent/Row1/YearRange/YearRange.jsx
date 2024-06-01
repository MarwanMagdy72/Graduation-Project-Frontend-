import { FormControl, InputLabel, MenuItem, Select , Typography, useTheme } from "@mui/material";
import { Box, Stack } from "@mui/system";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { dataYear } from "./YearData";
import { useState } from "react";
import YearRangeChart from "./chart/YearRangeChart";


const YearRange = () => {
    const theme=useTheme() ;
    
    const years = dataYear.map(data => data.year);
  
    const [selectedYear, setSelectedYear] = useState(years[years.length - 1]);
    const [currentData, setCurrentData] = useState(dataYear.find(data => data.year === selectedYear));
  
    const handleChange = (event) => {
      const year = event.target.value;
      const selectedData = dataYear.find(data => data.year === year);
  
      setSelectedYear(year);
      setCurrentData(selectedData);
    };


  return (
  
    <div>
      <Stack direction={"row"} justifyContent={"space-between"}> 
        <Typography sx={{fontSize:"20px"  , fontWeight:"500"}}>
          User
        </Typography>
{/* #EDEDED */}
      <Stack>
        <FormControl sx={{ borderRadius:"20px", backgroundColor:theme.palette.textColor.bgyearColor,
        border:"none" , 
        minWidth: 100 }} 
        size="small">
        <InputLabel id="demo-select-small-label" sx={{fontSize:"16px",fontWeight:"500"}}>Year</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          sx={{borderRadius:"20px",fontWeight:400, color:theme.palette.textColor.textyearColor}}
          onChange={handleChange}
        >
      
      
          {years.map((year) => (
          
          <MenuItem key={year} value={year}>{year}</MenuItem>
        ))
      }
        </Select>
        </FormControl>
        </Stack>
      </Stack>
      
      <Stack direction={"column"}> 
      <Stack direction={"row"} sx={{justifyContent:"center" ,marginTop:"40px" }}>
        <ArrowBackIosNewIcon sx={{fontSize:"16px"}}/>
        <Typography variant="h6" fontSize={"16px"} sx={{ padding :"0px 30px"}} >{selectedYear}</Typography> 
        <ArrowForwardIosIcon sx={{fontSize:"16px"}}/> 
      </Stack>

      <Stack >
    

          <YearRangeChart /> 
          <Box sx={{position:"relative" , top:"-110px" , left:"90px"}}>
          <Typography sx={{fontSize:"20px ", color:"#949494"}}> Total User</Typography>
          <Typography  sx={{fontSize:"16px ", color:theme.palette.textColor.main, fontWeight:"500", padding:"4px 20px"}}>{currentData.totalUsers}</Typography> 
          </Box>
      </Stack>
    
    <Stack direction={"row"} justifyContent={"space-between"}> 
        <Stack>
          <Box sx={{width:"15px" , height:"15px" ,borderRadius:"50%", position:"relative",top:"16px " ,backgroundColor:"#3BAE49"}}></Box>
          <Typography color={theme.palette.textColor.main} fontSize={"15px"} fontWeight={"500"} marginLeft={"25px"}>Active users</Typography>
          <Typography  fontSize={"15px"} fontWeight={"300"} marginLeft={"40px"}> {currentData.activeUsers}</Typography>
        </Stack>

        <Stack>
          <Box  sx={{width:"15px" , height:"15px" ,borderRadius:"50%", position:"relative",top:"16px " ,backgroundColor:"#D8EFDB"}}></Box>
          <Typography color={theme.palette.textColor.main} fontSize={"15px"} fontWeight={"500"} marginLeft={"25px"}>Not Active users</Typography>
          <Typography fontSize={"15px"} fontWeight={"300"}  marginLeft={"40px"}> {currentData.notActiveUsers} </Typography>
        </Stack>
    </Stack>

      </Stack> 
    
    </div>
  )
}

export default YearRange ; 

