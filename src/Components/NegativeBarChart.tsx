import React, {useState} from "react";
import ReactApexChart from "react-apexcharts";

interface NegativeState {
  series: {
    name: string;
    data: number[];
  }[];
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
      stacked: boolean;
      menu: boolean;
      toolbar: {
        show: boolean;
      };
    };
    grid: {
      xaxis: {
        lines: {
          show: boolean;
        };
      };
      yaxis: {
        lines: {
          show: boolean;
        };
      };
    };
    colors: string[];
    plotOptions: {
      bar: {
        horizontal: boolean;
        barWidth: string;
        barHeight: string;
        borderRadius: number;
        borderRadiusApplication: "end" | "around";
        borderRadiusOnAllStackedSeries: boolean;
        dataLabels: {
          position: string;
        };
      };
    };
    dataLabels: {
      enabled: boolean;
    };
    stroke: {
      show: boolean;
      width: number;
      colors: string[];
      lineCap: "round";
    };
    yaxis: {
      categories: string[];
      title: {
        // text: 'Age',
      };
      show: boolean;
    };
    tooltip: {
      shared: boolean;
      intersect: boolean;
    };

    xaxis: {
      categories: string[];
      position: "top";
      title: {
        text: string;
      };
      grid: {
        xaxis: {
          show: boolean;
        };
        yaxis: {
          show: boolean;
        };
      };
    };
    legend: {
      show: boolean
    };
  };
}

const NegativeBarChart = () => {
  const [state, setState] = useState<NegativeState>({
    series: [
      {
        name: "Last Week",
        data: [0, 103, 121, 109, 200, 124, 83], // Mon - Sun
      },
      {
        name: "This Week",
        data: [-84, -180, -202, -88, -111, -124, -84],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: "440px",
        stacked: true,
        menu: false,
        toolbar: {
          show: false,
        },
      },
      colors: ["#72E028"],
      plotOptions: {
        bar: {
          horizontal: true,
          barWidth: "30%",
          barHeight: "50%",
          borderRadius: 4,
          borderRadiusApplication: "end",
          borderRadiusOnAllStackedSeries: true,
          dataLabels: {
            position: "hello",
          },
          
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: false,
        width: 1,
        colors: ["#fff"],
        lineCap: 'round',
      },

      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      yaxis: {
        categories: [],
        show: false,
        title: {
          // text: 'Age',
        },
      },
      tooltip: {
        shared: false,
        intersect: false,
      },
      xaxis: {
        categories: [],
        grid: {
          xaxis: {
            show: true,
          },
          yaxis: {
            show: false,
          },
        },
        position: "top",
        title: {
          text: "",
        },
      },
      legend: {
      show: false
    },
    },
  });

  return (
    <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={250}
      />
    </div>
  );
};

export default NegativeBarChart;
