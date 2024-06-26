 
import { Grid, Card, CardContent, Typography } from "@mui/material";
import {
  Business,
  AddBusiness,
  Factory,
  AddCircleOutline,
} from "@mui/icons-material";
import { Box, Stack } from "@mui/system";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

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



const CompanyCards = () => {
  const cards = [
    {
      icon: <Business />,
      title: "All Companies",
      count: "15 companies",
      amount: "2,500 EGP",
      borderColor: "red",
      bgcolor: "#f5cfcf",
      iconType: "TrendingDown",
    },
    {
      icon: <AddBusiness />,
      title: "New Companies",
      count: "21 companies",
      amount: "4,500 EGP",
      borderColor: "green",
      bgcolor: "#dff3e2",
      iconType: "TrendingUp",

    },
    {
      icon: <Factory />,
      title: "All Factories",
      count: "15 factories",
      amount: "2,500 EGP",
      borderColor: "red",
      bgcolor: "#f5cfcf",
      iconType: "TrendingDown",
    },
    {
      icon: <AddCircleOutline />,
      title: "New Factories",
      count: "31 factories",
      amount: "2,500 EGP",
      borderColor: "green",
      bgcolor: "#dff3e2",
      iconType: "TrendingUp",
    },
  ];

  return (
    <Grid container spacing={2}>
      {cards.map((card, index) => (
        <Grid item xs={12} md={6} lg={3} key={index}>
          <Card sx={{ borderRadius: "20px", paddingTop: "15px" }}>
            <CardContent>
              <Stack spacing={{ xs: 1, sm: 5 }} direction="row" useFlexGap>
                <Box>
                  <Typography
                    variant="h6"
                    color={"black"}
                    sx={{ marginBottom: "16px" }}
                  >
                    {card.title}
                  </Typography>
                  <Typography variant="subtitle1"> {card.icon} {card.count}</Typography>
                </Box>

  
                <Stack direction={"row"} sx={{
                  border: `2px solid ${card.borderColor}`,
                  backgroundColor: card.bgcolor,
                  textAlign: "center",
                  width: "95px",
                  height: "95px",
                  borderRadius: "50%",
                  justifyContent: "center",
                  alignItems: "center" , 
                  padding:"5px", 
                }}>
                  {getIcon(card.iconType, card.iconColor)}
                  <Typography sx={{ color:"black" , fontSize: "14px", fontWeight: "700" ,marginLeft:"8px"}}>
                      {card.amount}  
                  </Typography>
                </Stack>



              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CompanyCards;
