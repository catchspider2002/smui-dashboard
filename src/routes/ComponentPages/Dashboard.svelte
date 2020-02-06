<script>
  import { onMount } from "svelte";
  import ChartLine from "./ChartLine.svelte";
  import Chart from "chart.js";
  import Tab, { Icon, Label } from "@smui/tab";
  import TabBar from "@smui/tab-bar";
  import Button from "@smui/button";
  import SVGIcon from "svelte-awesome/components/Icon.svelte";
  import {
    beer,
    refresh,
    comment,
    camera,
  } from "svelte-awesome/icons";

  let active = "Today";

  onMount(checkActive);
  console.log(active);

  function checkActive() {
    console.log("checkActive");
    let contentEls = document.querySelectorAll(".content");
    // Hide currently-active content
    document
      .querySelector(".content--active")
      .classList.remove("content--active");

    // Show content for newly-activated tab
    // contentEls[event.detail.index].classList.add("content--active");
  }

  let stackedDataset = [
    {
      label: "Men",
      data: [590, 691, 636, 662, 686, 668, 622]
    },
    {
      label: "Women",
      data: [106, 131, 156, 184, 186, 142, 124]
    }
  ];

  let newSalesAxisLabel = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Product Sales - Bar stacked
  let salesDataset = [
    {
      label: "Men",
      data: [590, 691, 636, 662, 686, 668, 622]
    },
    {
      label: "Women",
      data: [106, 131, 156, 184, 186, 142, 124]
    },
    {
      label: "Kids",
      data: [56, 91, 76, 84, 106, 102, 104]
    }
  ];

  let salesAxisLabel = ["Q1", "Q2", "Q3", "Q4"];

  let salesBackgroundColors = ["red", "green", "blue"];

  // Statistics - Line
  let statsDataset = [
    {
      label: "Sales",
      data: [
        1800,
        1700,
        1600,
        1625,
        1750,
        1668,
        1622,
        1500,
        1725,
        1550,
        1468,
        1322
      ]
    },
    {
      label: "Visits",
      data: [
        1306,
        1131,
        1056,
        1284,
        1186,
        1142,
        1024,
        1326,
        1214,
        1086,
        1342,
        1244
      ]
    },
    {
      label: "Clicks",
      data: [156, 291, 476, 384, 106, 402, 126, 211, 276, 184, 206, 404]
    }
  ];

  let statsAxisLabel = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  // Total Sales - Pi
  let totalSalesDataset = [
    {
      label: "Sales",
      data: [542, 154, 82, 198]
    }
  ];

  let totalSalesAxisLabel = ["Direct", "Affiliate", "Sponsored", "E-mail"];
</script>

<style>
  .bg-dark-grad {
    background-image: linear-gradient(to right, #2b6cb0, #3182ce);
  }
  .bg-light-grad {
    background-image: linear-gradient(to right, #ed64a6, #d53f8c);
  }

  .custom-card {
    background-color: var(--bg-card-color);
  }

  .content {
    display: none;
  }

  .content--active {
    display: block;
  }
</style>

<!-- <div class="flex flex-wrap">
  <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500" />
  <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400" />
  <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500" />
  <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400" />
  <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-gray-500" />
  <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-gray-400" />
</div> -->

<!-- <div class="flex flex-wrap">
  <div class="w-full h-64 lg:w-1/2 xl:w-1/4 mb-4 bg-gray-500" />
  <div class="w-full h-64 lg:w-1/2 xl:w-1/4 mb-4 bg-gray-400" />
  <div class="w-full h-64 lg:w-1/2 xl:w-1/4 mb-4 bg-gray-500" />
  <div class="w-full h-64 lg:w-1/2 xl:w-1/4 mb-4 bg-gray-400" />
</div>

<div class="flex flex-wrap">
  <div class="w-full h-64 xl:w-1/3 mb-4 bg-gray-500" />
  <div class="w-full h-64 xl:w-1/3 mb-4 bg-gray-400" />
  <div class="w-full h-64 xl:w-1/3 mb-4 bg-gray-500" />
</div>

<div class="flex flex-wrap">
  <div class="w-full h-64 lg:w-1/2 mb-4 bg-gray-500" />
  <div class="w-full h-64 lg:w-1/2 mb-4 bg-gray-400" />
</div> -->

<div class="flex flex-wrap">
  <div class="w-full h-64 lg:w-1/2 xl:w-1/4 mb-4 bg-gray-500">
  <Icon data={refresh} scale="2" />
  </div>
  <div class="w-full h-64 lg:w-1/2 xl:w-1/4 mb-4 bg-gray-400"></div>
  <div class="w-full h-64 lg:w-1/2 xl:w-1/4 mb-4 bg-gray-500"></div>
  <div class="w-full h-64 lg:w-1/2 xl:w-1/4 mb-4 bg-gray-400"></div>
</div>

<div class="flex flex-wrap">
  <div class="w-full h-64 mb-4 bg-dark-grad">
    <TabBar tabs={['Today', 'This week', 'All Time']} let:tab bind:active>
      <Tab {tab} minWidth>
        <Label>{tab}</Label>
      </Tab>
    </TabBar>
    <!-- <div style="margin-top: 15px;">
      Programmatically select:
      {#each ['Today', 'This week', 'All Time'] as tab}
        <Button on:click={() => (active = tab)}>
          <Label>{tab}</Label>
        </Button>
      {/each}
    </div> -->
    <div class="content content--active">
      <p>Content one</p>
    </div>
    <div class="content">
      <p>Content two</p>
    </div>
    <div class="content">
      <p>Content three</p>
    </div>
    <!-- <ChartLine
      type="bar"
      barType="grouped"
      barPercent="60"
      beginYZero={true}
      showXLabel={true}
      showYLabel={true}
      showXGrid={true}
      showYGrid={true}
      showLegend="true" /> -->
  </div>
</div>
<div class="flex flex-wrap">
  <div class="w-full h-64 mb-4 custom-card">
    Product Sales
    <ChartLine
      type="bar"
      barType="stacked"
      beginYZero={true}
      showXLabel={true}
      showYLabel={true}
      showXGrid={true}
      showYGrid={true}
      showLegend={true}
      data={salesDataset}
      backgroundColors={salesBackgroundColors} />
  </div>
</div>

<div class="flex flex-wrap">
  <div class="w-full h-64 lg:w-1/2 mb-4 custom-card">
    <ChartLine
      type="bar"
      barType="stacked"
      beginYZero={true}
      showXLabel={true}
      showYLabel={true}
      showXGrid={true}
      showYGrid={true}
      showLegend={true}
      data={stackedDataset} />
  </div>
  <div class="w-full h-64 lg:w-1/2 mb-4 custom-card">
    <ChartLine
      type="bar"
      barType="grouped"
      barPercent="60"
      beginYZero={true}
      showXLabel={true}
      showYLabel={true}
      showXGrid={true}
      showYGrid={true}
      showLegend={true}
      data={stackedDataset} />
  </div>
</div>

<div class="flex flex-wrap">
  <div class="w-full h-64 xl:w-1/3 mb-4 custom-card">
    <ChartLine
      type="line"
      lineColor="#38A169"
      beginYZero={true}
      showXLabel={true}
      showYLabel={true}
      showXGrid={true}
      showYGrid={true}
      data={stackedDataset} />
  </div>
  <div class="w-full h-64 xl:w-1/3 mb-4 bg-dark-grad">
    <ChartLine
      type="line"
      labelColor="#ffffff"
      pointColor="#ffffff"
      showXLabel={true}
      showYLabel={true}
      showXGrid={true}
      showYGrid={true}
      lineArea={true}
      data={stackedDataset} />
  </div>
  <div class="w-full h-64 xl:w-1/3 mb-4 custom-card">
    <ChartLine
      type="line"
      lineColor="#38A169"
      showLegend={true}
      showXLabel={true}
      showYLabel={true}
      showXGrid={true}
      showYGrid={true}
      lineCurve={true}
      pointRadius="0"
      data={statsDataset}
      axisLabel={statsAxisLabel} />
  </div>
</div>

<div class="flex flex-wrap">
  <!-- <div class="w-full h-64 xl:w-1/3 mb-4 custom-card">
    <ChartLine type="pie" showLegend={true} axisLabel={salesAxisLabel} />
  </div> -->
  <div class="w-full h-64 xl:w-1/3 mb-4 custom-card">
    Total Sales
    <ChartLine
      type="doughnut"
      showLegend={true}
      donutPercent="80"
      data={totalSalesDataset}
      axisLabel={totalSalesAxisLabel} />
  </div>
  <!-- <div class="w-full h-64 xl:w-1/3 mb-4 custom-card">
    <ChartLine type="doughnut" showLegend={true} axisLabel={salesAxisLabel} />
  </div> -->
</div>

<div class="flex flex-wrap">
  <div class="w-full h-64 xl:w-1/3 mb-4 bg-light-grad">
    <ChartLine
      type="bar"
      beginYZero={true}
      labelColor="#ffffff"
      showXLabel={true}
      showYLabel={true}
      showXGrid={true}
      showYGrid={true} />
  </div>
  <div class="w-full h-64 xl:w-1/3 mb-4 custom-card">
    <ChartLine
      type="horizontalBar"
      lineColor="#38a169"
      showXLabel={true}
      showYLabel={true}
      showXGrid={true}
      showYGrid={true}
      beginXZero={true} />
  </div>
  <div class="w-full h-64 xl:w-1/3 mb-4 custom-card">
    <ChartLine
      type="bar"
      lineColor="#38a169"
      showXLabel={true}
      showYLabel={true}
      beginYZero={true} />
  </div>
</div>

<!-- <div class="bg-gray-400 w-full h-64 flex text-center px-2">
  <div class="bg-gray-400 flex w-full lg:flex-1">
    <div class="bg-light-grad w-1/2 m-2 border-t-4 border-green-400 rounded" />
    <div class="bg-gray-800 w-1/2 m-2 border-t-4 border-red-500 rounded">
     
    </div>
  </div>
  <div class="bg-gray-400 flex w-full lg:flex-1">
    <div class="bg-gray-800 flex-1 m-2 border-t-4 border-blue-400 rounded">
      
    </div>
    <div class="bg-gray-200 flex-1 m-2 border-t-4 border-purple-400 rounded" />
  </div>
</div>
<div class="bg-gray-400 w-full h-64 flex text-center px-2">
  <div class="bg-gray-800 w-full lg:flex-1 m-2 rounded">
    
  </div>
  <div class="bg-gray-100 w-full lg:flex-1 m-2 rounded">
   
  </div>
  <div class="bg-dark-grad w-full lg:flex-1 m-2 rounded">
   
  </div>
</div>
<div class="bg-gray-400 w-full h-64 flex text-center px-2">
  <div class="bg-gray-800 w-full lg:flex-1 m-2 rounded">
  </div>
  <div class="bg-gray-100 w-full lg:flex-1 m-2 rounded">
  </div>
</div>
<div class="bg-gray-400 w-full h-64 flex text-center px-2">
  <div class="bg-gray-800 w-full lg:flex-1 m-2 rounded">
  </div>
  <div class="bg-gray-100 w-full lg:flex-1 m-2 rounded">
  </div>
</div>
<div class="bg-gray-400 w-full h-64 flex text-center px-2">
  <div class="bg-light-grad w-full lg:flex-1 m-2 rounded">
   
  </div>
  <div class="bg-gray-800 w-full lg:flex-1 m-2 rounded">
   
  </div>
  <div class="bg-gray-100 w-full lg:flex-1 m-2 rounded">
    
  </div>
</div> -->
