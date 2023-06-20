/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef } from "react";
import ApexCharts, { ApexOptions } from "apexcharts";
import { KTSVG } from "../../../helpers";
import { Dropdown1 } from "../../content/dropdown/Dropdown1";
import { getCSS, getCSSVariableValue } from "../../../assets/ts/_utils";
import { useThemeMode } from "../../layout/theme-mode/ThemeModeProvider";
import { useQuery } from "@apollo/client";
import { getRecentGamesStats } from "../../../../app/modules/game/core/request";

type Props = {
  className: string;
};

const ChartsWidget1: React.FC<Props> = ({ className }) => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const { mode } = useThemeMode();
  const [data, setdata] = React.useState<any>();
  useQuery(getRecentGamesStats, {
    onCompleted: ({ getRecentGamesStats }) => {
      setdata(getRecentGamesStats);
    },
  });
  console.log(data?.map((row: any) => row));

  useEffect(() => {
    const chart = refreshChart();

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [chartRef, mode, data]);

  const refreshChart = () => {
    if (!chartRef.current) {
      return;
    }

    const height = parseInt(getCSS(chartRef.current, "height"));

    const chart = new ApexCharts(
      chartRef.current,
      getChartOptions(height, data)
    );
    if (chart) {
      chart.render();
    }

    return chart;
  };

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div
        className="card-header border-0  pt-5 cursor-pointer"
        role="button"
        data-bs-toggle="collapse"
        data-bs-target="#kt_account_profile_stats"
        aria-expanded="true"
        aria-controls="kt_account_profile_stats"
      >
        {/* begin::Title */}
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-3 mb-1">
            Recent Statistics
          </span>
        </h3>
        {/* end::Title */}
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className=" card-body collapse show" id="kt_account_profile_stats">
        {/* begin::Chart */}
        <div
          ref={chartRef}
          id="kt_charts_widget_1_chart"
          style={{ height: "350px" }}
        />
        {/* end::Chart */}
      </div>
      {/* end::Body */}
    </div>
  );
};

export { ChartsWidget1 };

function getChartOptions(height: number, data: any): ApexOptions {
  const labelColor = getCSSVariableValue("--bs-gray-500");
  const borderColor = getCSSVariableValue("--bs-gray-200");
  const baseColor = getCSSVariableValue("--bs-primary");
  const secondaryColor = getCSSVariableValue("--bs-info");
  const thirdColor = getCSSVariableValue("--bs-danger");
  const forthColor = getCSSVariableValue("--bs-warning");
  const fifthColor = getCSSVariableValue("--bs-success");
  const sixthColor = getCSSVariableValue("----bs-gray-300");

  return {
    series: [
      {
        name: "Points",
        data: data && data?.map((row: any) => row.Points),
      },
      {
        name: "Rebounds",
        data: data && data?.map((row: any) => row.ReboundDEF + row.ReboundOFF),
      },
      {
        name: "Assists",
        data: data && data?.map((row: any) => row.Assist),
      },
      {
        name: "Steals",
        data: data && data?.map((row: any) => row.Steal),
      },
      {
        name: "Blocks",
        data: data && data?.map((row: any) => row.BLOCK),
      },
      {
        name: "Turnovers",
        data: data && data?.map((row: any) => row.TournOvers),
      },
    ],
    chart: {
      fontFamily: "inherit",
      type: "bar",
      height: height,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        borderRadius: 5,
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: data && data?.map((row: any) => row._id),
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: labelColor,
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: labelColor,
          fontSize: "12px",
        },
      },
    },
    fill: {
      opacity: 1,
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      hover: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: "12px",
      },
      y: {
        formatter: function (val) {
          return val.toString();
        },
      },
    },
    colors: [
      baseColor,
      secondaryColor,
      thirdColor,
      forthColor,
      fifthColor,
      sixthColor,
    ],
    grid: {
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  };
}
