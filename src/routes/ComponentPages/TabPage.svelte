<script>
  import Tab, { Icon, Label } from "@smui/tab";
  import TabBar from "@smui/tab-bar";
  import Button from "@smui/button";
  import Page from "./Page.svelte";
  import Example from "./Example.svelte";

  let active = "Home";
  let iconTabs = [
    {
      icon: "access_time",
      label: "Recents"
    },
    {
      icon: "near_me",
      label: "Nearby"
    },
    {
      icon: "favorite",
      label: "Favorites"
    }
  ];
  let keyedTabs = [
    {
      k: 1,
      icon: "code",
      label: "Code"
    },
    {
      k: 2,
      icon: "code",
      label: "Code"
    },
    {
      k: 3,
      icon: "code",
      label: "Code"
    },
    {
      k: 4,
      icon: "code",
      label: "Code"
    }
  ];
  let keyedTabsActive = keyedTabs[2];
</script>

<style>
  section > div {
    margin-bottom: 40px;
  }

  * :global(.mdc-tab .mdc-tab__icon, .mdc-tab .mdc-tab__text-label) {
    color: var(--enabled-color);
  }

  *
    :global(.mdc-tab--active .mdc-tab__icon, .mdc-tab--active
      .mdc-tab__text-label) {
    color: var(--mdc-theme-primary, #6200ee);
  }
</style>

<svelte:head>
  <title>Tab</title>
</svelte:head>

<Page>
  <span slot="header">Tab</span>
  <span slot="description">
    Tabs organize and allow navigation between groups of content that are
    related and at the same level of hierarchy.
  </span>
  <span slot="import">
    import Switch from "@smui/switch";
    <br />
    import FormField from "@smui/form-field";
  </span>
  <div slot="content">
    <div class="text-base font-semibold py-4">Usage</div>
    <TabBar tabs={['Home', 'Merchandise', 'About Us']} let:tab bind:active>
      <!-- Notice that the `tab` property is required! -->
      <Tab {tab}>
        <Label>{tab}</Label>
      </Tab>
    </TabBar>
    <div class="text-base font-semibold py-4">Icons beside Labels</div>
    <TabBar tabs={iconTabs} let:tab>
      <Tab {tab}>
        <Icon class="material-icons">{tab.icon}</Icon>
        <Label>{tab.label}</Label>
      </Tab>
    </TabBar>
    <div class="text-base font-semibold py-4">Icons above Labels</div>
    <TabBar
      tabs={keyedTabs}
      let:tab
      key={tab => tab.k}
      bind:active={keyedTabsActive}>
      <Tab
        {tab}
        stacked={true}
        indicatorSpanOnlyContent={true}
        tabIndicator$transition="fade">
        <Icon class="material-icons">{tab.icon}</Icon>
        <Label>{tab.label}</Label>
      </Tab>
    </TabBar>
    <!-- <Example> -->
    <div class="text-base font-semibold py-4">Scrolling Tabs</div>
    <TabBar tabs={[...Array(20)].map((v, i) => i + 1)} let:tab>
      <Tab {tab}>
        <Label>Tab {tab}</Label>
      </Tab>
    </TabBar>
    <div class="text-base font-semibold py-4">Minimum Width Labels</div>
    <TabBar tabs={['Home', 'Merchandise', 'About Us']} let:tab>
      <Tab {tab} minWidth>
        <Label>{tab}</Label>
      </Tab>
    </TabBar>
  </div>
</Page>
