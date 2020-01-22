<script>
  import ChartLine from "./ChartLine.svelte";

  // import Timeline from "./Timeline.svelte;
  import Chart from "chart.js";
</script>

<style>
  .bg-dark-grad {
    background-image: linear-gradient(to right, #2b6cb0, #3182ce);
  }
  .bg-light-grad {
    background-image: linear-gradient(to right, #ed64a6, #d53f8c);
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
  <div class="w-full h-64 lg:w-1/2 mb-4 bg-gray-500">
    <ChartLine
      type="bar"
      barType="stacked"
      beginYZero={true}
      showXLabel={true}
      showYLabel={true}
      showXGrid={true}
      showYGrid={true}
      showLegend={true} />
  </div>
  <div class="w-full h-64 lg:w-1/2 mb-4 bg-gray-400">
    <ChartLine
      type="bar"
      barType="grouped"
      barPercent="60"
      beginYZero={true}
      showXLabel={true}
      showYLabel={true}
      showXGrid={true}
      showYGrid={true}
      showLegend="true" />
  </div>
</div>

<div class="flex flex-wrap">
  <div class="w-full h-64 xl:w-1/3 mb-4 bg-gray-500">
    <ChartLine
      type="line"
      lineColor="#38A169"
      beginYZero={true}
      showXLabel={true}
      showYLabel={true}
      showXGrid={true}
      showYGrid={true} />
  </div>
  <div class="w-full h-64 xl:w-1/3 mb-4 bg-gray-400">
    <ChartLine
      type="line"
      lineColor="#38A169"
      showXLabel={true}
      showYLabel={true}
      showXGrid={true}
      showYGrid={true}
      lineArea={true} />
  </div>
  <div class="w-full h-64 xl:w-1/3 mb-4 bg-gray-500">
    <ChartLine
      type="line"
      lineColor="#ffffff"
      pointColor="#ffffff"
      showXLabel={true}
      showYLabel={true}
      showXGrid={true}
      showYGrid={true}
      lineCurve={true} />
  </div>
</div>

<div class="flex flex-wrap">
  <div class="w-full h-64 lg:w-1/2 xl:w-1/4 mb-4 bg-gray-500">
    <ChartLine type="pie" showLegend={true} />
  </div>
  <div class="w-full h-64 lg:w-1/2 xl:w-1/4 mb-4 bg-gray-400">
    <ChartLine type="pie" showLegend={true} />
  </div>
  <div class="w-full h-64 lg:w-1/2 xl:w-1/4 mb-4 bg-gray-500">
    <ChartLine type="doughnut" showLegend={true} donutPercent="80" />
  </div>
  <div class="w-full h-64 lg:w-1/2 xl:w-1/4 mb-4 bg-gray-400">
    <ChartLine type="doughnut" showLegend={true} />
  </div>
</div>

<div class="flex flex-wrap">
  <div class="w-full h-64 xl:w-1/3 mb-4 bg-gray-500">
    <ChartLine
      type="bar"
      beginYZero={true}
      lineColor="#ffffff"
      showXLabel={true}
      showYLabel={true}
      showXGrid={true}
      showYGrid={true} />
  </div>
  <div class="w-full h-64 xl:w-1/3 mb-4 bg-gray-400">
    <ChartLine
      type="horizontalBar"
      lineColor="#38a169"
      showXLabel={true}
      showYLabel={true}
      showXGrid={true}
      showYGrid={true}
      beginXZero={true} />
  </div>
  <div class="w-full h-64 xl:w-1/3 mb-4 bg-gray-500">
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
