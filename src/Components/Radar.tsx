import React, {useState} from 'react'
import ReactApexChart from "react-apexcharts";


interface RadarChart {
  series: { name: string; data: number[] }[];
  options: any;
}

const Radar = () => {
    const [radarData, setRadarData] = useState<RadarChart>({
      series: [
        {
          name: "Income",
          data: [70, 68, 80, 95, 75, 77],
        },
        {
          name: "Net Worth",
          data: [90, 72, 62, 65, 80, 75], // Jan - Jun
        },
      ],
      options: {
        colors: ["#F8C04B", "#72E028"],
        chart: {
          height: 350,
          type: "radar",
          menu: false,
          toolbar: {
            show: false,
          },
        },
        title: {
          text: "",
        },
        stroke: {
          width: 2,
        },
        fill: {
          opacity: 1,
        },
        markers: {
          size: 0,
        },
        xaxis: {
          categories: ["Jan", "Feb", "March", "April", "May", "June"],
        },
        yaxis: {
          show: false,
        },
      },
    });
  return (
    <ReactApexChart
      options={radarData.options}
      series={radarData.series}
      type="radar"
      height={260}
    />
  );
}

export default Radar