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
  .icon-indicators
    :global(.mdc-tab-indicator--active .mdc-tab-indicator__content) {
    opacity: 0.2;
  }
</style>

<Page>
  <span slot="header">Tab</span>
  <span slot="description">
    Tabs organize and allow navigation between groups of content that are related and at the same level of hierarchy.
  </span>
  <span slot="import">
    import Switch from "@smui/switch";
    <br />
    import FormField from "@smui/form-field";
  </span>
  <div slot="content">
    <Example>
      <span slot="header">Usage</span>

      <div slot="horizontal" class="mr-8 mb-8">
        <TabBar tabs={['Home', 'Merchandise', 'About Us']} let:tab bind:active>
          <!-- Notice that the `tab` property is required! -->
          <Tab {tab}>
            <Label>{tab}</Label>
          </Tab>
        </TabBar>
      </div>
    </Example>
    <Example>
      <span slot="header">Labels</span>
      <div slot="horizontal" class="mr-8 mb-8">
        <TabBar tabs={iconTabs} let:tab>
          <Tab {tab}>
            <Icon class="material-icons">{tab.icon}</Icon>
            <Label>{tab.label}</Label>
          </Tab>
        </TabBar>
      </div>
    </Example>
    <Example>
      <span slot="header">Labels</span>
      <div slot="horizontal" class="mr-8 mb-8">
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
      </div>
    </Example>
    <Example>
      <span slot="header">Labels</span>
      <div slot="horizontal" class="mr-8 mb-8">
        <TabBar tabs={[...Array(20)].map((v, i) => i + 1)} let:tab>
          <Tab {tab}>
            <Label>Tab {tab}</Label>
          </Tab>
        </TabBar>
      </div>
    </Example>
    <Example>
      <span slot="header">Labels</span>
      <div slot="horizontal" class="mr-8 mb-8">
        <TabBar tabs={['Home', 'Merchandise', 'About Us']} let:tab>
          <Tab {tab} minWidth>
            <Label>{tab}</Label>
          </Tab>
        </TabBar>
      </div>
    </Example>
  </div>
</Page>
