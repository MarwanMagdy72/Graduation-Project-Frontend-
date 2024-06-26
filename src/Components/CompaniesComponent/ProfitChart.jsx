
import { ResponsiveBar } from "@nivo/bar";
import { Card } from "@mui/material";
import { Typography } from "@mui/material";

const profitData = [
  { month: "Jan", companyProfit: 10000, factoryProfit: 5000 },
  { month: "Feb", companyProfit: 15000, factoryProfit: 7000 },
  { month: "Mar", companyProfit: 12000, factoryProfit: 8000 },
  { month: "Apr", companyProfit: 18000, factoryProfit: 9000 },
  { month: "May", companyProfit: 14000, factoryProfit: 6000 },
  { month: "Jun", companyProfit: 16000, factoryProfit: 11000 },
  { month: "Jul", companyProfit: 17000, factoryProfit: 10000 },
  { month: "Aug", companyProfit: 15000, factoryProfit: 12000 },
  { month: "Sep", companyProfit: 13000, factoryProfit: 9000 },
  { month: "Oct", companyProfit: 20000, factoryProfit: 13000 },
  { month: "Nov", companyProfit: 17000, factoryProfit: 14000 },
  { month: "Dec", companyProfit: 22000, factoryProfit: 15000 },
];

const ProfitChart = () => {
  return (
    <Card sx={{borderRadius : "20px"}}>
      <div style={{ height: 400 ,padding: "15px" }}>
        <Typography variant="h5" fontWeight={"600"}>
          Profit
        </Typography>
        <ResponsiveBar
        data={profitData}
        keys={["companyProfit", "factoryProfit"]}
        indexBy="month"
        
        margin={{ top: 50, right: 130, bottom: 80, left: 60 }}
        padding={0.6}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '1.4'
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 8,
            tickRotation: 1,
            legend: ' ',
            legendPosition: 'middle',
            legendOffset: 33,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -40,
            truncateTickAt: 0
        }}
        enableLabel={false}
        labelSkipWidth={7}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '1.6'
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 131,
                translateY: 52,
                itemWidth: 106,
                itemHeight: 24,
                itemsSpacing: 4,
                symbolSize: 10,
                itemDirection: 'left-to-right'
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
    />
      </div>
    </Card>
  );
};

export default ProfitChart;
