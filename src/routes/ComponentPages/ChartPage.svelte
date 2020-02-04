<script>
  import Page from "./Page.svelte";
  import Example from "./Example.svelte";
  import ChartLine from "./ChartLine.svelte";
  import Chart from "chart.js";

  let singleDataset = [
    {
      label: "Men",
      data: [590, 691, 636, 662, 686, 668, 622]
    }
  ];

  let multipleDataset = [
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

  let salesAxisLabel = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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
</style>

<svelte:head>
  <title>Chart - SMUI</title>
</svelte:head>

<Page>
  <span slot="header">Chart</span>
  <span slot="description">
    A menu displays a list of choices on a temporary surface. They appear when
    users interact with a button, action, or other control.
  </span>
  <span slot="import">
    import Icon from "@smui/select/icon/index";
    <br />
    import HelperText from "@smui/select/helper-text/index";
  </span>
  <div slot="content">
    <Example>
      <span slot="header">Line Chart</span>
      <div slot="vertical" class="mb-8">
        <div class="w-full h-64 mb-4 custom-card">
          <ChartLine
            type="line"
            lineColor="#38A169"
            beginYZero={true}
            showXLabel={true}
            showYLabel={true}
            showXGrid={true}
            showYGrid={true}
            data={multipleDataset} />
        </div>
      </div>
    </Example>
    <Example>
      <span slot="header">Line Chart - Area</span>
      <div slot="vertical" class="mb-8">
        <div class="w-full h-64 mb-4 custom-card">
          <ChartLine
            type="line"
            lineColor="#38A169"
            showXLabel={true}
            showYLabel={true}
            showXGrid={true}
            showYGrid={true}
            lineArea={true}
            data={singleDataset} />
        </div>
      </div>
    </Example>
    <Example>
      <span slot="header">
        Line Chart - Bezier Curve and Gradient Background
      </span>
      <div slot="vertical" class="mb-8">
        <div class="w-full h-64 mb-4 bg-dark-grad">
          <ChartLine
            type="line"
            labelColor="#ffffff"
            pointColor="#ffffff"
            showXLabel={true}
            showYLabel={true}
            showXGrid={true}
            showYGrid={true}
            lineCurve={true}
            data={multipleDataset} />
        </div>
      </div>
    </Example>
    <Example>
      <span slot="header">Bar Chart</span>
      <div slot="vertical" class="mb-8">
        <div class="w-full h-64 mb-4 custom-card">
          <ChartLine
            type="bar"
            lineColor="#38a169"
            showXLabel={true}
            showYLabel={true}
            beginYZero={true} />
        </div>
      </div>
    </Example>
    <Example>
      <span slot="header">Bar Chart - Gradient Background</span>
      <div slot="vertical" class="mb-8">
        <div class="w-full h-64 mb-4 bg-light-grad">
          <ChartLine
            type="bar"
            beginYZero={true}
            labelColor="#ffffff"
            showXLabel={true}
            showYLabel={true}
            showXGrid={true}
            showYGrid={true} />
        </div>
      </div>
    </Example>
    <Example>
      <span slot="header">Bar Chart - Horizontal</span>
      <div slot="vertical" class="mb-8">
        <div class="w-full h-64 mb-4 custom-card">
          <ChartLine
            type="horizontalBar"
            lineColor="#38a169"
            showXLabel={true}
            showYLabel={true}
            showXGrid={true}
            showYGrid={true}
            beginXZero={true} />
        </div>
      </div>
    </Example>
    <Example>
      <span slot="header">Bar Chart - Stacked</span>
      <div slot="vertical" class="mb-8">
        <div class="w-full h-64 mb-4 custom-card">
          <ChartLine
            type="bar"
            barType="stacked"
            beginYZero={true}
            showXLabel={true}
            showYLabel={true}
            showXGrid={true}
            showYGrid={true}
            showLegend={true}
            data={multipleDataset} />
        </div>
      </div>
    </Example>
    <Example>
      <span slot="header">Bar Chart - Grouped</span>
      <div slot="vertical" class="mb-8">
        <div class="w-full h-64 mb-4 custom-card">
          <ChartLine
            type="bar"
            barType="grouped"
            barPercent="60"
            beginYZero={true}
            showXLabel={true}
            showYLabel={true}
            showXGrid={true}
            showYGrid={true}
            showLegend="true"
            data={multipleDataset} />
        </div>
      </div>
    </Example>
    <Example>
      <span slot="header">Pie Chart</span>
      <div slot="vertical" class="mb-8">
        <div class="w-full h-64 mb-4 custom-card">
          <ChartLine
            type="pie"
            showLegend={true}
            data={multipleDataset}
            axisLabel={salesAxisLabel} />
        </div>
      </div>
    </Example>
    <Example>
      <span slot="header">Doughnut Chart</span>
      <div slot="vertical" class="mb-8">
        <div class="w-full h-64 mb-4 custom-card">
          <ChartLine
            type="doughnut"
            showLegend={true}
            data={multipleDataset}
            axisLabel={salesAxisLabel} />
        </div>
      </div>
    </Example>
    <Example>
      <span slot="header">Doughnut Chart - Custom Percentage</span>
      <div slot="vertical" class="mb-8">
        <div class="w-full h-64 mb-4 custom-card">
          <ChartLine
            type="doughnut"
            showLegend={true}
            donutPercent="80"
            data={multipleDataset}
            axisLabel={salesAxisLabel} />
        </div>
      </div>
    </Example>
  </div>
</Page>
