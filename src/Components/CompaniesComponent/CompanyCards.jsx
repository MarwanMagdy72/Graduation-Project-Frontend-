import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import {
  Business,
  AddBusiness,
  Factory,
  AddCircleOutline,
} from "@mui/icons-material";
import { Box, Stack } from "@mui/system";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';


const CompanyCards = () => {
  const cards = [
    {
      icon: <Business />,
      title: "All Companies",
      count: "15 companies",
      amount: "2,500 EGP",
    },
    {
      icon: <AddBusiness />,
      title: "New Companies",
      count: "21 companies",
      amount: "4,500 EGP",
    },
    {
      icon: <Factory />,
      title: "All Factories",
      count: "15 factories",
      amount: "2,500 EGP",
    },
    {
      icon: <AddCircleOutline />,
      title: "New Factories",
      count: "3 factories",
      amount: "2,500 EGP",
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

                <Stack
                direction={'row'}
                  sx={{
                    border: 2,
                    borderRadius: "50% ",
                    width: 120,
                    height: 120,
                    alignItems: "center",
                    justifyContent:  "center",
                    paddingBlock: "20px",
                    borderColor: "#E73232",
                    backgroundColor: "#FCE0E0",
                  }}
                >
                  <TrendingUpIcon sx={{marginInlineEnd:'5px' , fontSize:"35px" ,color:'#E73232'}  } />
                  <Typography color={"black"}>{card.amount}</Typography>
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
