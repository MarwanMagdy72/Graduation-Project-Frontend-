

import { useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { ResponsivePie } from '@nivo/pie';

const YearRangeChart = () => {
    const theme=useTheme() ;
    const data =
        [
        
            {
                "id": "Active",
                "label": "Active",
                "value": 135,
                "color": "hsl(119, 20%, 10%)"
            },
            {
                "id": "Not Active",
                "label": "Not Active",
                "value":45,
                "color": "hsl(347, 70%, 50%)"
            }
        ]
    
    
    return (
        <Box  width={"100%"} height={"160px"}  fontSize={"18px"}  color={"black"} marginTop={"10px"}>
            <ResponsivePie
                data={data}
                margin={{ top:5, right: 60, bottom: 5, left: 60 }}
                startAngle={-132}
                sortByValue={true}
                innerRadius={0.85}
                activeOuterRadiusOffset={8}
                
                colors={{ scheme: 'pastel1' }}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            '0.1'
                        ]
                    ]
                }}
                enableArcLinkLabels={false}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                enableArcLabels={false}
                arcLabelsRadiusOffset={0.25}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            2
                        ]
                    ]
                }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'ruby'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'c'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'go'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'python'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'scala'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'lisp'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'elixir'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'javascript'
                        },
                        id: 'lines'
                    }
                ]}
                legends={[]}
                
            />
 
        </Box>
    )
}
export default YearRangeChart; 