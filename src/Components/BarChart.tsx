import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import Radar from "../Components/Radar";

interface ChartData {
  series: { name: string; data: number[] }[];
  options: {
    chart: {
      type:
        | "area"
        | "line"
        | "bar"
        | "pie"
        | "donut"
        | "radialBar"
        | "scatter"
        | "bubble"
        | "heatmap"
        | "treemap"
        | "boxPlot"
        | "candlestick"
        | "radar"
        | "polarArea"
        | "rangeBar"
        | "rangeArea"
        | undefined;
      height: string;
      menu: boolean;
      toolbar: {
        show: boolean;
      };
    };
    title: {
      text: string;
    };
    grid: {
      show: boolean;
    };
    colors: string[];
    plotOptions: {
      bar: {
        horizontal: boolean;
        columnWidth: string;
        barHeight: string;
        borderRadius: number;
        borderRadiusApplication: "end" | "around";
        dataLabels: {
          position: string;
        };
      };
    };
    dataLabels: {
      enabled: boolean;
      offsetX: number;
      style: {
        fontSize: string;
        colors: string[];
      };
    };
    stroke: {
      show: boolean;
      width: number;
      colors: string[];
    };
    tooltip: {
      shared: boolean;
      intersect: boolean;
    };
    xaxis: {
      categories: string[];
    };
    yaxis: {
      title: {
        text: string;
      };
      show: boolean;
    };
    legend: {
      position: "top" | "bottom" | "left" | "right";
      offsetY: number;
    };
  };
}

const BarChart = () => {
  const [chartData, setChartData] = useState<ChartData>({
    series: [
  {
    name: 'Earning',
    data: [120, 200, 150, 120]
  },
  {
    name: 'Expense',
    data: [72, 120, 50, 65]
  }
],
    options: {
      chart: {
        type: "bar",
        height: '10px',
        menu: false,
        toolbar: {
          show: false,
        },
      },
      title: {
        text: "Total FX",
      },
      grid: {
        show: false,
      },
      colors: ["#72E028", "#F8C04B"],
      plotOptions: {
        bar: {
          borderRadius: 5,
          borderRadiusApplication: "end",
          horizontal: false,
          columnWidth: "50%",
          barHeight: '1000%',
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: false,
        offsetX: -6,
        style: {
          fontSize: "6px",
          colors: ["#fff"],
        },
      },
      stroke: {
        show: false,
        width: 1,
        colors: ["#fff"],
      },
      tooltip: {
        shared: false,
        intersect: false,
      },
      xaxis: {
        categories: ["", "", "", ""],
      },
      yaxis: {
        title: {
          text: "",
        },
        show: false,
      },
      legend: {
        position: "bottom",
        offsetY: -5,
      },
    },
  });

  return (
    <ReactApexChart
      options={chartData.options}
      series={chartData.series}
      type="bar"
      height={155}
    />
  );
};

export default BarChart;
