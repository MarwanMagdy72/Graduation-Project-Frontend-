
import CompanyCards from "../../Components/CompaniesComponent/CompanyCards";
import ProfitChart from "../../Components/CompaniesComponent/ProfitChart";
import ContributionChart from "../../Components/CompaniesComponent/ContributionChart";
import { Grid } from "@mui/material";
import CompaniesData from "../../Components/CompaniesComponent/CompaniesData";




const Companies = () => {
  return (
    <>
      <CompanyCards />


      <Grid container spacing={3} sx={{marginTop:'10px'}}>


        <Grid item xs={12} md={6}>
          <ProfitChart />
        </Grid>


        <Grid item xs={12} md={6}>
          <ContributionChart />
        </Grid>


      </Grid>
      
      <CompaniesData/>
    </>
  );
};

export default Companies;
