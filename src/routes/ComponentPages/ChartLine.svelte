<script>
  import { onMount, afterUpdate } from "svelte";
  import { theme } from "../stores.js";

  export let type,
    showXGrid = false,
    showYGrid = false,
    showXLabel = false,
    showYLabel = false,
    showLegend = false,
    beginXZero = false,
    beginYZero = false,
    lineColor = "#ffffff", // hex
    pointColor, // hex
    labelColor, // hex
    // Line
    lineArea = false,
    lineCurve = false,
    pointRadius = 4,
    lineThickness = 3,
    // Bar
    barType = "",
    barPercent = 30,
    // Donut
    donutPercent = type == "doughnut" ? 50 : 0,
    //  Pie
    pieSpacing = 3,
    color1 = "#38a169",
    color2 = "#e53e3e",
    color3 = "#d69e2e",
    color4 = "#319795",
    color5 = "#3182ce",
    color6 = "#805ad5",
    color7 = "#d000d5",
    chartLabel = "Total Sales",
    xAxisLabel = ["Q1", "Q2", "Q3", "Q4"];

  let chartId = "random" + Math.floor(Math.random() * 10000 + 1),
    backgroundColor,
    gridColor; // hex;

  // let currentTheme = localStorage.getItem("theme") || "light";
  // console.log("currentTheme: " + currentTheme);
  // $: newTheme = localStorage.getItem("theme") || "light";

  // let themeColor = "#805ad5"; // purple-600
  // let themeColor = hexToHSL("38a169", 1);

  let curr_theme, currentLabelColor, currentBackgroundColor;

  const unsubscribe = theme.subscribe(value => {
    curr_theme = value;
  });

  afterUpdate(createLineChart);

  $: curr_theme, afterUpdate(createLineChart);

  function createLineChart() {
    curr_theme = localStorage.getItem("theme") || "light";
    console.log("createLineChart curr_theme: " + curr_theme);

    if (!labelColor) {
      if (backgroundColor) {
        if (RGBLuminance(backgroundColor) > 0.5) currentLabelColor = "#000000";
        else currentLabelColor = "#FFFFFF";
      } else {
        if (curr_theme == "light") currentLabelColor = "#000000";
        else currentLabelColor = "#FFFFFF";
      }
    }

    currentLabelColor = labelColor || currentLabelColor;
    if (!backgroundColor) {
      if (curr_theme == "light") currentBackgroundColor = "hsl(0, 0%, 100%)";
      else currentBackgroundColor = "hsl(0, 0%, 25.9%)";
    }
    currentBackgroundColor = backgroundColor || currentBackgroundColor;
    if (type == "pie" || type == "doughnut") {
      if (curr_theme == "light") gridColor = "hsl(0, 0%, 100%)";
      else gridColor = "hsl(0, 0%, 25.9%)";
    } else gridColor = hexToHSL(currentLabelColor, 0.1);
    // console.log("gridColor: " + gridColor);
    let newLabelColor = hexToHSL(currentLabelColor, 0.9);
    pointColor = pointColor || backgroundColor;

    let dataset = [
      {
        label: chartLabel,
        data: [12, 19, 3, 5, 2, 3, 4],
        lineTension: lineCurve ? 0.4 : 0,
        fill: lineArea,
        backgroundColor: hexToHSL(lineColor, 0.2),
        borderColor: hexToHSL(lineColor, 1),
        borderWidth: lineThickness,
        pointRadius: pointRadius,
        pointBackgroundColor: pointColor
      }
    ];

    if (type == "bar" || type == "horizontalBar") {
      if (barType == "stacked" || barType == "grouped") {
        dataset = [
          {
            label: "New Clients",
            backgroundColor: color1,
            data: [590, 691, 636, 662, 686, 668, 622],
            barPercentage: barPercent / 100
          },
          {
            label: "Retained Clients",
            backgroundColor: color2,
            data: [106, 131, 156, 184, 186, 142, 124],
            barPercentage: barPercent / 100
          }
        ];
      } else {
        dataset = [
          {
            label: chartLabel,
            data: [12, 19, 3, 5, 2, 3, 4],
            backgroundColor: hexToHSL(lineColor, 1),
            barPercentage: barPercent / 100
          }
        ];
      }
    } else if (type == "pie" || type == "doughnut") {
      dataset = [
        {
          label: chartLabel,
          data: [12, 19, 3, 5, 2, 3, 5],
          backgroundColor: [
            color1,
            color2,
            color3,
            color4,
            color5,
            color6,
            color7
          ],
          borderColor: currentBackgroundColor,
          borderWidth: pieSpacing
        }
      ];
    }

    if (document.getElementById(chartId)) {
      var ctx = document.getElementById(chartId).getContext("2d");

      var myChart = new Chart(ctx, {
        type: type,
        data: {
          labels: xAxisLabel,
          datasets: dataset
        },
        options: {
          segmentShowStroke: true,
          segmentStrokeColor: "#fff",
          segmentStrokeWidth: 2,
          percentageInnerCutout: 50,
          animationSteps: 100,
          animationEasing: "easeOutBounce",
          animateRotate: true,
          animateScale: false,
          responsive: true,
          maintainAspectRatio: false,
          showScale: true,
          animateScale: true,
          cutoutPercentage: donutPercent,
          scales: {
            yAxes: [
              {
                stacked: barType == "stacked",
                ticks: {
                  beginAtZero: beginYZero,
                  fontColor: newLabelColor,
                  display: showYLabel
                },
                gridLines: {
                  display: true,
                  color: showYGrid ? gridColor : currentBackgroundColor,
                  zeroLineColor: showYGrid ? gridColor : currentBackgroundColor
                }
              }
            ],
            xAxes: [
              {
                stacked: barType == "stacked",
                ticks: {
                  beginAtZero: beginXZero,
                  fontColor: newLabelColor,
                  display: showXLabel
                },
                gridLines: {
                  display: true,
                  color: showXGrid ? gridColor : currentBackgroundColor,
                  zeroLineColor: showXGrid ? gridColor : currentBackgroundColor
                }
              }
            ]
          },
          legend: {
            labels: {
              fontColor: newLabelColor,
              display: showLegend
            },
            display: showLegend
          },
          tooltips: {
            mode: barType == "stacked" ? "index" : "nearest"
          }
        }
      });
      Chart.defaults.global.defaultFontFamily = "'Montserrat', sans-serif";
    }
  }

  const hexToHSL = (hex, percent) => {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      let r = parseInt(result[1], 16);
      let g = parseInt(result[2], 16);
      let b = parseInt(result[3], 16);
      (r /= 255), (g /= 255), (b /= 255);
      var max = Math.max(r, g, b),
        min = Math.min(r, g, b);
      var h,
        s,
        l = (max + min) / 2;
      if (max == min) {
        h = s = 0; // achromatic
      } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }
      var HSL =
        "hsla(" +
        Math.round(h * 360) +
        "," +
        Math.round(s * 100) +
        "%," +
        Math.round(l * 100) +
        "%," +
        percent +
        ")";
      return HSL;
    }
  };

  const RGBToHex = rgb => {
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    // Turn "rgb(r,g,b)" into [r,g,b]
    rgb = rgb
      .substr(4)
      .split(")")[0]
      .split(sep);

    let r = (+rgb[0]).toString(16),
      g = (+rgb[1]).toString(16),
      b = (+rgb[2]).toString(16);

    if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b;

    return "#" + r + g + b;
  };

  const RGBLuminance = rgb => {
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    rgb = rgb
      .substr(4)
      .split(")")[0]
      .split(sep);
    //sRGB Luma
    let luminance = (rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722) / 255;
    return luminance;
  };

  function onResize() {
    console.log("Resized");
    afterUpdate(createLineChart);
    // location.reload();
    // console.log("Resized agter");
  }

  // window.addEventListener("resize", onResize, true);
</script>

<svelte:window on:resize={onResize} />
<canvas id={chartId} width="1" height="1" />
