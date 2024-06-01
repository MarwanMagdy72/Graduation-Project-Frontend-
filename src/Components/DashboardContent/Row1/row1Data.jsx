 
import Chart1 from "./Chart1/Chart1";
import Chart2 from "./Chart2/Chart2";
import Chart3 from "./Chart3/Chart3";


export const data = [
  {
    paper1: {
      icon: "💱",
      value: "Profit" ,
      subTitle: "Total Profit",
      chartValue: "500K EGP",
      chart: <Chart1 />,
      bgcolor:"#138843",

    },
    paper2: {
      icon:"💹",
      value: "Reward" ,
      subTitle: "Total Reward",
      chartValue: "200K Coins",
      chart: <Chart2 />,
      bgcolor:"#57CC71" , 

    },
    paper3: {
      icon:"♻️",
      value: "Recycle" ,
      subTitle: "Total Recycle Items",
      chartValue: "500M Items",
      chart: <Chart3 />,
      bgcolor:"#8FED80" , 

    },
  },
];
