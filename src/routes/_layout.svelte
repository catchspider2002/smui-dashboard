<script>
  import { onMount } from "svelte";
  import { stores } from "@sapper/app";

  import "./_app.scss";
  import "./tailwind.css";

  import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
  import Drawer, { Content, Scrim, AppContent } from "@smui/drawer";
  import Button from "@smui/button";
  import IconButton from "@smui/icon-button";
  import List, { Item, Text } from "@smui/list";
  import { Label, Icon } from "@smui/common";
  import A from "@smui/common/A.svelte";

  const { page } = stores();
  const iframe = $page.path.startsWith("/demo/top-app-bar-iframe");

  let mainContent;
  let miniWindow = false;
  let drawerOpen = false;

  const sections = [
    {
      name: "Alert",
      route: "/ComponentPages/AlertPage",
      indent: 0
    },
    {
      name: "Avatar",
      route: "/ComponentPages/AvatarPage",
      indent: 1
    },
    {
      name: "Button",
      route: "/ComponentPages/ButtonPage",
      indent: 0
    },
    {
      name: "Card",
      route: "/ComponentPages/CardPage",
      indent: 1
    },
    {
      name: "Checkbox",
      route: "/ComponentPages/CheckboxPage",
      indent: 0
    },
    {
      name: "Chip",
      route: "/ComponentPages/ChipPage",
      indent: 0
    },
    {
      name: "Dialog",
      route: "/ComponentPages/DialogPage",
      indent: 0
    },
    {
      name: "Divider",
      route: "/ComponentPages/DividerPage",
      indent: 0
    },
    {
      name: "Drawer",
      route: "/ComponentPages/DrawerPage",
      indent: 2
    },
    {
      name: "Linear Progress",
      route: "/ComponentPages/ChipPage",
      indent: 2
    },
    {
      name: "List",
      route: "/ComponentPages/ListPage",
      indent: 2
    },
    {
      name: "Menu",
      route: "/ComponentPages/MenuPage",
      indent: 0
    },
    {
      name: "Radio",
      route: "/ComponentPages/RadioPage",
      indent: 0
    },
    {
      name: "Select",
      route: "/ComponentPages/SelectPage",
      indent: 0
    },
    {
      name: "Slider",
      route: "/ComponentPages/SliderPage",
      indent: 0
    },
    {
      name: "Snackbar",
      route: "/ComponentPages/SnackbarPage",
      indent: 2
    },
    {
      name: "Switch",
      route: "/ComponentPages/SwitchPage",
      indent: 0
    },
    {
      name: "Tab",
      route: "/ComponentPages/TabPage",
      indent: 1
    },
    {
      name: "Table",
      route: "/ComponentPages/TablePage",
      indent: 0
    },
    {
      name: "Textarea",
      route: "/ComponentPages/TextareaPage",
      indent: 0
    },
    {
      name: "Textfield",
      route: "/ComponentPages/TextfieldPage",
      indent: 0
    },
    {
      name: "Accordion (PRO)",
      route: "/ComponentPages/Accordion",
      indent: 2
    },
    {
      name: "Badge (PRO)",
      route: "/ComponentPages/ChipPage",
      indent: 2
    },
    {
      name: "Rating (PRO)",
      route: "/ComponentPages/ChipPage",
      indent: 2
    },
    {
      name: "Timeline (PRO)",
      route: "/ComponentPages/Timeline",
      indent: 2
    },
    {
      name: "Tooltip (PRO)",
      route: "/ComponentPages/ChipPage",
      indent: 2
    },
    {
      name: "Dashboard",
      route: "/ComponentPages/Dashboard",
      indent: 2
    }
  ];

  onMount(setMiniWindow);

  function pickSection(section) {
    drawerOpen = false;
    mainContent.scrollTop = 0;

    // Svelte/Sapper is not updated the components correctly, so I need this.
    sections.forEach(section => section.component.$set({ activated: false }));
    section.component.$set({ activated: true });
  }

  function setMiniWindow() {
    miniWindow = window.innerWidth < 720;
  }

  // Dark Theme
  let initialOff, currentTheme;

  const checkTheme = () => {
    currentTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
    initialOff = currentTheme === "dark" ? false : true;
  };

  onMount(checkTheme);

  const switchTheme = () => {
    currentTheme = initialOff ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
  };
</script>

<style>

</style>

<svelte:window on:resize={setMiniWindow} />
{#if iframe}
  <slot />
{:else}
  <div class="drawer-container">

    <!-- <Drawer
      variant="modal"
      bind:open={drawerOpen}
      class="demo-drawer mdc-theme--primary-bg {miniWindow ? 'demo-drawer-adjust' : ''}"> -->
    <Drawer
      variant={miniWindow ? 'modal' : null}
      bind:open={drawerOpen}
      class="demo-drawer mdc-theme--primary-bg {miniWindow ? 'demo-drawer-adjust' : ''}">
      <Content>
        <Row>
          <Section>
            <IconButton>
              <Icon class="material-icons text-yellow-400">ac_unit</Icon>
            </IconButton>
            <Title component={A} href="/">SMUI</Title>
          </Section>
          <Section align="end">
            <IconButton
              toggle
              bind:pressed={initialOff}
              on:click={switchTheme}
              title="Disable {currentTheme} mode">
              <Icon class="material-icons text-yellow-600" on>
                chevron_right
              </Icon>
              <Icon class="material-icons text-yellow-400">chevron_left</Icon>
            </IconButton>
          </Section>
        </Row>
        <List>
          {#each sections as section (section.name)}
            <Item
              bind:this={section.component}
              href={'route' in section ? section.route : section.shortcut}
              on:click={() => pickSection(section)}
              activated={'route' in section && section.route === $page.path}
              title={section.name}
              style={section.indent ? 'margin-left: ' + section.indent * 25 + 'px;' : ''}>
              <Text class="mdc-theme--on-secondary">{section.name}</Text>
            </Item>
          {/each}
        </List>
      </Content>
    </Drawer>

    {#if miniWindow}
      <Scrim />
    {/if}
    <AppContent class="demo-app-content">
      <TopAppBar variant="static" class="demo-top-app-bar">
        <Row>
          <Section>
            {#if miniWindow}
              <IconButton
                class="material-icons"
                style="color: var(--font-color);"
                on:click={() => (drawerOpen = !drawerOpen)}>
                menu
              </IconButton>
            {/if}
            <Title
              component={A}
              href="/"
              class="mdc-theme--primary"
              style={miniWindow ? 'padding-left: 0;' : ''}>
              Dashboard
            </Title>
          </Section>
          <Section align="end" toolbar>
            <IconButton on:click={() => (drawerOpen = !drawerOpen)}>
              <Icon class="material-icons text-yellow-400">chevron_right</Icon>
            </IconButton>
            <IconButton
              toggle
              bind:pressed={initialOff}
              on:click={switchTheme}
              title="Disable {currentTheme} mode">
              <Icon class="material-icons text-yellow-600" on>
                brightness_2
              </Icon>
              <Icon class="material-icons text-yellow-400">wb_sunny</Icon>
            </IconButton>
          </Section>
        </Row>
      </TopAppBar>
      <main class="demo-main-content p-4" bind:this={mainContent}>
        <slot />
      </main>
    </AppContent>
  </div>
{/if}
