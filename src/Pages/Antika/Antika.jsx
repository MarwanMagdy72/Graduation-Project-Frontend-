
import { Paper, Typography, useTheme } from "@mui/material";
import { Stack } from "@mui/system";
import {dataAntika} from'../Antika/AntikaData' ;
import bidsImage from '/bid.png';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { AllAntika } from "./AllAntika/AllAntika";


const getIcon = (type, color) => {
  switch (type) {
    case 'TrendingUp':
      return <TrendingUpIcon style={{ color: color }} />;
    case 'TrendingDown':
      return <TrendingDownIcon style={{ color: color }} />;
    default:
      return null;
  }
};




const Antika = () => {
  const theme = useTheme();
  return (
    <>
    
    <Stack>
      <Stack direction={"row"} gap={10} >
        {dataAntika.map((item , index) =>(
            <Paper key={index}
              sx={{
                padding: "15px 20px",
                borderRadius: "20px",
                backgroundColor: theme.palette.bgcolortopbar.main,
                width: "30%" 
              }}>


              <Stack  direction={"row"} justifyContent={"space-between"}>
                <Stack >
                  <Typography fontSize="20px" fontWeight={500} sx={{ marginBottom: "10px" }}>
                      {item.name}
                    
                  </Typography>
                  <Typography fontSize="14px" fontWeight={400}>
                    <img width="24px" height="24px" src={bidsImage} alt="bids" style={{ marginRight: "12px" }} />
                    {item.bids}  bids
                  
                  </Typography>
                </Stack>

                <Stack direction={"row"} sx={{
                  border: `2px solid ${item.borderColor}`,
                  backgroundColor: item.bgcolor,
                  textAlign: "center",
                  width: "95px",
                  height: "95px",
                  borderRadius: "50%",
                  justifyContent: "center",
                  alignItems: "center"
                }}>
                  {getIcon(item.iconType, item.iconColor)}
                  <Typography sx={{ color:"black" , fontSize: "14px", fontWeight: "700" ,marginLeft:"8px"}}>
                      {item.value}  
                  </Typography>
                </Stack>

              </Stack>
            

            </Paper>
              ) )}  
      </Stack>

    </Stack>  {/* row 1 */}
    
    

    <Stack>
      <AllAntika />
    </Stack> {/* row 2 */}
  
</>
  )
}
export default Antika

