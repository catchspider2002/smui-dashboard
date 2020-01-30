<script>
  import Page from "./Page.svelte";
  import Example from "./Example.svelte";
  import ChartLine from "./ChartLine.svelte";
  import Chart from "chart.js";
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
  <span slot="header">Menu</span>
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
            showYGrid={true} />
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
            lineArea={true} />
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
            lineCurve={true} />
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
        <div class="w-full h-64 lg:w-1/2 mb-4 custom-card">
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
      </div>
    </Example>
    <Example>
      <span slot="header">Bar Chart - Grouped</span>
      <div slot="vertical" class="mb-8">
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
            showLegend="true" />
        </div>
      </div>
    </Example>
    <Example>
      <span slot="header">Pie Chart</span>
      <div slot="vertical" class="mb-8">
        <div class="w-full h-64 xl:w-1/3 mb-4 custom-card">
          <ChartLine type="pie" showLegend={true} />
        </div>
      </div>
    </Example>
    <Example>
      <span slot="header">Doughnut Chart</span>
      <div slot="vertical" class="mb-8">
        <div class="w-full h-64 xl:w-1/3 mb-4 custom-card">
          <ChartLine type="doughnut" showLegend={true} />
        </div>
      </div>
    </Example>
    <Example>
      <span slot="header">Doughnut Chart - Custom Percentage</span>
      <div slot="vertical" class="mb-8">
        <div class="w-full h-64 xl:w-1/3 mb-4 custom-card">
          <ChartLine type="doughnut" showLegend={true} donutPercent="80" />
        </div>
      </div>
    </Example>
  </div>
</Page>
