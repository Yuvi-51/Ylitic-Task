import React from "react";
import ReactApexChart from "react-apexcharts";
import "./Newchart.css";
class Newchart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Sum of report.SubscribersGained",
          type: "column",
          data: [
            710, 990, 810, 2890, 2500, 6380, 6200, 4830, 1700, 530, 250, 470,
            3080, 2090, 990, 710, 1010, 850, 910, 1200, 910, 920, 1050, 900,
            980,
          ],
        },
        {
          name: "Sum of Net subscribers gained",
          type: "line",
          data: [
            300, 520, 461, 2427, 2656, 5525, 5641, 4380, 1869, 668, 400, 601,
            3316, 2321, 1201, 954, 1257, 1068, 1262, 1311, 1047, 1144, 1394,
            1117, 1275,
          ],
        },
        {
          name: "Sum of report.SubscribersLost",
          type: "column",
          data: [
            -211, -260, -320, -410, -525, -699, -889, -650, -520, -260, -120,
            -100, -400, -325, -290, -270, -310, -400, -390, -510, -480, -470,
            -520, -480, -380,
          ],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 440,
          stacked: true,
        },

        stroke: {
          width: [0, 2],
        },

        dataLabels: {
          enabled: true,
          enabledOnSeries: [1],
        },
        labels: [
          "w14",
          "w15",
          "w16",
          "w17",
          "w18",
          "w19",
          "w20",
          "w21",
          "w22",
          "w23",
          "w24",
          "w25",
          "w26",
          "w27",
          "w28",
          "w29",
          "w30",
          "w31",
          "w32",
          "w33",
          "w34",
          "w35",
          "w36",
          "w37",
          "w38",
        ],
        xaxis: {
          type: "string",
        },
        yaxis: {
          min: -1000,
          tickAmount: 8,
          max: 7000,
        },
        plotOptions: {
          bar: {
            columnWidth: "25%",
            // stacked:true,
            colors: {
              barColors: ["grey"],

              backgroundBarColors: [],
              backgroundBarOpacity: 1,
              backgroundBarRadius: 0,
            },
          },
        },
        colors: ["grey", "lightgreen", "pink"],
      },
    };
  }

  render() {
    return (
      <>
        <div id="chart">
        <h1>Weekly Subscriber Gain and Loss</h1>
          <h2 className="chart-subheading">
            Takeway: Majority of Subscribers are gained in spike (viral) events
            that mostly occurred in Apr - Jun '22{" "}
          </h2>
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="line"
            height={350}
          />
        </div>
      </>
    );
  }
}
export default Newchart;
