import { Avatar, FormControl, InputLabel, MenuItem, Paper, Select, Typography, useTheme } from "@mui/material"
import { Stack } from "@mui/system"
import LineChart from "../../../Pages/LineChart/LineChart";
import { useState } from "react";
import {items} from './AntikaData'; 
import { Company } from "./Company/Company";


const Row2 = () => {
  const [age, setAge] = useState();

  const handleChange = (event) => {
    setAge(event.target.value);
  };
// Function to convert price string to numeric value
const convertPriceToNumber = (price) => {
  if (price.includes('M')) {
    return parseFloat(price.replace('M $', '')) * 1000000;
  } else if (price.includes('k')) {
    return parseFloat(price.replace('k $', '')) * 1000;
  }
  return parseFloat(price.replace('$', ''));
};
const [sortedItems, setSortedItems] = useState(items);

const handleSortByPrice = () => {
  const sorted = [...sortedItems].sort((a, b) => convertPriceToNumber(a.price) - convertPriceToNumber(b.price));
  setSortedItems(sorted);
};

const handleSortByName = () => {
  const sorted = [...sortedItems].sort((a, b) => {
    const nameA = a.title.toUpperCase(); // تحويل الأسماء إلى أحرف كبيرة للفرز الصحيح
    const nameB = b.title.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  setSortedItems(sorted);
};


const theme=useTheme();
  return (
<Stack direction={"row"} gap={2} marginTop={"20px"}> 
      <Stack  width={"30%"} >
        <Paper  sx={{borderRadius:"20px"}} >
        <LineChart inDashboard ="true"/>
        </Paper>
      </Stack>

      <Stack sx={{ width:"42%" , maxHeight: '300px', overflow: 'auto' }}>
        <Paper sx={{ padding:"20px", borderRadius:"20px" }}>
            <Stack direction={"row"} sx={{ display:"flex" ,marginBottom:"15px",justifyContent:"space-between", alignItems:"center"}}>
              <Stack>
                <Typography variant="body1" sx={{fonrSize:"14px",fontWeight:"500"}}> Antika </Typography>
              </Stack>

              <Stack>
            <FormControl sx={{ borderRadius:"20px", border:"1px solid #325831" , minWidth: 100 }} size="small">
            <InputLabel id="demo-select-small-label" sx={{fontSize:"16px" , fontWeight:"500"}}>Sort</InputLabel>
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            sx={{borderRadius:"20px", color:theme.palette.textColor.main ,border:"none" }}

          >
            <MenuItem value={10} onClick={handleSortByPrice}  sx={{fontSize:"14px"}}>Sort by Price</MenuItem>
            <MenuItem value={20}  onClick={handleSortByName}  sx={{fontSize:"14px"}}>Sort by Name</MenuItem>
          </Select>
        </FormControl>
              </Stack>

            </Stack>  
          
          {sortedItems.map((item) => (   
          <Stack  key={item.id} direction={"row"} sx={{ width:"100%",marginBottom:"10px" , height:"58px", border :"2px solid #D9D9D9 " , borderRadius:"20px" , padding:"8px 12px 8px 12px"}} justifyContent={"space-between"}  >
        

            <Stack direction={"row"}>
              <Stack sx={{marginRight:"10px"}}>
                  <Avatar src={item.imageUrl} alt="Antika photo" />
              </Stack>   
              <Stack>
                <Typography variant="body1" fontSize={"14px"} fontWeight={"500"}>{item.title}</Typography>
                <Typography variant="body1" fontSize={"12px"} fontWeight={"400"}>{item.description}</Typography>
                </Stack> 
            </Stack>  

            <Stack>
              <Typography color={"#3BAE49"} 
                fontSize={"16px"} 
                fontWeight={"700"}
              
                textAlign={"center"}
                margin={"auto"}
              > 
              {item.price}
              </Typography>

            </Stack> 

          </Stack>
          ))} 
          
      </Paper>
    </Stack>



    <Stack sx={{width:"25%" ,maxHeight: '300px',overflow: 'auto' ,  marginLeft:"10px" }}>
    <Paper sx={{padding:"20px 10px", borderRadius:"20px"}} >
        <Company /> 
    </Paper>
    </Stack>


</Stack>
  )
}
export default Row2 ; 

