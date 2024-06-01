
import {
  Box,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { data } from "./row1Data";
import { Stack } from "@mui/system";
import LineChart from "../../../Pages/LineChart/LineChart";
import YearRange from "./YearRange/YearRange";



export default function Row1() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Stack direction={"row"} gap={3}  >

    <Stack direction={"column"} width="100%" justifyContent={"left"}  gap={1} >

        <Stack sx={{width:"100%"}}  flex={1} >
        <Box >
          {data.map((papers, index) => (
            <Grid 
              key={index}
              container
              spacing={2}
              direction="row"
              alignItems="stretch"
              my={1} 
              sx={{ width:"100%"}}
              
            >
              {Object.values(papers).map((paper, paperIndex) => (
                <Grid
                  key={paperIndex}
                  item
                  xs={12}
                  md={isLargeScreen ? 6 : 12}
                  lg={isLargeScreen ? 4 : 12}
                  sx={{ width:"100px"}}
                  

                >
                  <Paper
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      height: "120px",
                      borderRadius: "20px",
                      padding:"20px 10px 16px 15px",
                      backgroundColor:paper.bgcolor ,
                      width:"100%" ,
                      flex :1
                    }}
                    
                    >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flex :1 ,
                      
                    }}

                      
                    >
                      <Box
                        sx={{
                          flex: 1,
                        }}

                      >
                        <Typography 
                        sx={{padding : "5px 8px", 
                          borderRadius:"20px" , 
                          backgroundColor:"white" , 
                          width  :"100px",
                          marginBottom:"15px" ,
                          fontSize:"14px" ,
                          fontWeight:500 , 
                          color:"black", 
                        }}>
                          {paper.icon} {paper.value}
                        </Typography>
                        
                        <Typography sx={{color:theme.palette.textColor.dark ,fontWeight:500 ,fontFamily:"Roboto", fontSize:"15px"}}>{paper.subTitle}</Typography>
                        <Typography sx={{color:"#FFFFFF" ,fontFamily:"Roboto", fontSize:"12px" , marginLeft:"10px"}}>{paper.chartValue}</Typography>
                      </Box>
                    
                      <Box
                        sx={{
                          flex: 1 ,
                          display:"flex"  ,
                          justifyContent: 'flex-end',
                          marginRight:"-15px" ,
                          marginTop:"30px"
                        }}
                      >
                        <Typography > {paper.chart}</Typography>

                      </Box>

                    </Box>
                  
                  </Paper>


                </Grid>
              ))}
            </Grid>
          ))}
        </Box>
        </Stack>

        <Stack>
        <Paper sx={{width:"100%" , borderRadius:"20px"}} > 
          <LineChart inDashboard ="true"/>
        </Paper>
        </Stack>

    </Stack>


    <Stack  width="35%">
        <Paper sx={{height:"100%",  borderRadius:"20px" , padding:"20px 20px"}}   >
          <YearRange />
        </Paper>
    </Stack>


    </Stack>
  );
}
