<script>
  import Drawer, {
    AppContent,
    Content,
    Header,
    Title,
    Subtitle,
    Scrim
  } from "@smui/drawer";
  import Button, { Label } from "@smui/button";
  import List, { Item, Text, Graphic, Separator, Subheader } from "@smui/list";
  import H6 from "@smui/common/H6.svelte";
  import Page from "./Page.svelte";
  import Example from "./Example.svelte";

  let clicked = "nothing yet";
  let myDrawer;
  let myDrawerOpen = false;
  let active = "Gray Kittens";
  let myDrawer2;
  let myDrawer2Open = false;
  let active2 = "Inbox";

  function setActive(value) {
    active = value;
    myDrawerOpen = false;
  }

  function setActive2(value) {
    active2 = value;
    myDrawer2Open = false;
  }
</script>

<style>
  .drawer-container {
    position: relative;
    display: flex;
    height: 350px;
    max-width: 600px;
    /* border: 1px solid rgba(0, 0, 0, 0.1); */
    border: 1px solid;
    border-color: var(--chip-bg-color);
    overflow: hidden;
    z-index: 0;
  }

  * :global(.mdc-drawer--modal, .mdc-drawer-scrim) {
    /* This is not needed for a page-wide modal. */
    position: absolute;
  }

  * :global(.app-content) {
    flex: auto;
    overflow: auto;
    position: relative;
    flex-grow: 1;
  }

  .main-content {
    overflow: auto;
    padding: 16px;
    height: 100%;
    box-sizing: border-box;
  }

  /* * :global(.mdc-drawer) {
    border-color: var(--chip-bg-color);
    background-color: var(--mdc-theme-surface, #fff);
  } */

  /* * :global(.mdc-drawer .mdc-drawer__title) {
    color: var(--font-color);
  }

  *
    :global(.mdc-drawer .mdc-drawer__subtitle, .mdc-drawer
      .mdc-list-group__subheader, .mdc-drawer .mdc-list-item__graphic) {
    color: var(--enabled-color);
  }

  *
    :global(.mdc-list-item--activated, .mdc-list-item--activated
      .mdc-list-item__graphic, .mdc-list-item--selected, .mdc-list-item--selected
      .mdc-list-item__graphic, .mdc-drawer
      .mdc-list-item--activated
      .mdc-list-item__graphic) {
    color: var(--mdc-theme-primary, #6200ee);
  } */
</style>

<svelte:head>
  <title>Drawer - SMUI</title>
</svelte:head>

<Page>
  <span slot="header">Drawer</span>
  <span slot="description">
    Drawer is used to organize access to destinations and other functionality on
    an app.
  </span>
  <span slot="import">
    import Icon from "@smui/select/icon/index";
    <br />
    import HelperText from "@smui/select/helper-text/index";
  </span>
  <div slot="content">
    <Example>
      <span slot="header">Permanent Drawer</span>
      <div slot="vertical" class="mb-8">
        <div class="drawer-container">
          <Drawer>
            <Content>
              <List>
                <Item
                  href="javascript:void(0)"
                  on:click={() => (clicked = 'Gray Kittens')}>
                  <Text>Gray Kittens</Text>
                </Item>
                <Item
                  href="javascript:void(0)"
                  on:click={() => (clicked = 'A Space Rocket')}>
                  <Text>A Space Rocket</Text>
                </Item>
                <Item
                  href="javascript:void(0)"
                  on:click={() => (clicked = '100 Pounds of Gravel')}>
                  <Text>100 Pounds of Gravel</Text>
                </Item>
                <Item
                  href="javascript:void(0)"
                  on:click={() => (clicked = 'All of the Shrimp')}>
                  <Text>All of the Shrimp</Text>
                </Item>
                <Item
                  href="javascript:void(0)"
                  on:click={() => (clicked = 'A Planet with a Mall')}>
                  <Text>A Planet with a Mall</Text>
                </Item>
              </List>
            </Content>
          </Drawer>

          <AppContent class="app-content">
            <main class="main-content">
              App content.
              <br />
              <pre class="status">Clicked: {clicked}</pre>
            </main>
          </AppContent>
        </div>
      </div>
    </Example>
    <Example>
      <span slot="header">Dismissible Drawer</span>
      <div slot="vertical" class="mb-8">
        <div class="drawer-container">
          <Drawer
            variant="dismissible"
            bind:this={myDrawer}
            bind:open={myDrawerOpen}>
            <Header>
              <Title>Super Drawer</Title>
              <Subtitle>It's the best drawer.</Subtitle>
            </Header>
            <Content>
              <List>
                <Item
                  href="javascript:void(0)"
                  on:click={() => setActive('Gray Kittens')}
                  activated={active === 'Gray Kittens'}>
                  <Text>Gray Kittens</Text>
                </Item>
                <Item
                  href="javascript:void(0)"
                  on:click={() => setActive('A Space Rocket')}
                  activated={active === 'A Space Rocket'}>
                  <Text>A Space Rocket</Text>
                </Item>
                <Item
                  href="javascript:void(0)"
                  on:click={() => setActive('100 Pounds of Gravel')}
                  activated={active === '100 Pounds of Gravel'}>
                  <Text>100 Pounds of Gravel</Text>
                </Item>
                <Item
                  href="javascript:void(0)"
                  on:click={() => setActive('All of the Shrimp')}
                  activated={active === 'All of the Shrimp'}>
                  <Text>All of the Shrimp</Text>
                </Item>
                <Item
                  href="javascript:void(0)"
                  on:click={() => setActive('A Planet with a Mall')}
                  activated={active === 'A Planet with a Mall'}>
                  <Text>A Planet with a Mall</Text>
                </Item>
              </List>
            </Content>
          </Drawer>

          <AppContent class="app-content">
            <main class="main-content">
              <Button on:click={() => (myDrawerOpen = !myDrawerOpen)}>
                <Label>Toggle Drawer</Label>
              </Button>
              <br />
              <pre class="status">Active: {active}</pre>
            </main>
          </AppContent>
        </div>
      </div>
    </Example>
    <Example>
      <span slot="header">Modal Drawer</span>
      <div slot="vertical" class="mb-8">
        <div class="drawer-container">
          <Drawer
            variant="modal"
            bind:this={myDrawer2}
            bind:open={myDrawer2Open}>
            <Header>
              <Title>Super Mail</Title>
              <Subtitle>It's the best fake mail app drawer.</Subtitle>
            </Header>
            <Content>
              <List>
                <Item
                  href="javascript:void(0)"
                  on:click={() => setActive2('Inbox')}
                  activated={active2 === 'Inbox'}>
                  <Graphic class="material-icons" aria-hidden="true">
                    inbox
                  </Graphic>
                  <Text>Inbox</Text>
                </Item>
                <Item
                  href="javascript:void(0)"
                  on:click={() => setActive2('Star')}
                  activated={active2 === 'Star'}>
                  <Graphic class="material-icons" aria-hidden="true">
                    star
                  </Graphic>
                  <Text>Star</Text>
                </Item>
                <Item
                  href="javascript:void(0)"
                  on:click={() => setActive2('Sent Mail')}
                  activated={active2 === 'Sent Mail'}>
                  <Graphic class="material-icons" aria-hidden="true">
                    send
                  </Graphic>
                  <Text>Sent Mail</Text>
                </Item>
                <Item
                  href="javascript:void(0)"
                  on:click={() => setActive2('Drafts')}
                  activated={active2 === 'Drafts'}>
                  <Graphic class="material-icons" aria-hidden="true">
                    drafts
                  </Graphic>
                  <Text>Drafts</Text>
                </Item>

                <Separator nav />
                <Subheader component={H6}>Labels</Subheader>
                <Item
                  href="javascript:void(0)"
                  on:click={() => setActive2('Family')}
                  activated={active2 === 'Family'}>
                  <Graphic class="material-icons" aria-hidden="true">
                    bookmark
                  </Graphic>
                  <Text>Family</Text>
                </Item>
                <Item
                  href="javascript:void(0)"
                  on:click={() => setActive2('Friends')}
                  activated={active2 === 'Friends'}>
                  <Graphic class="material-icons" aria-hidden="true">
                    bookmark
                  </Graphic>
                  <Text>Friends</Text>
                </Item>
                <Item
                  href="javascript:void(0)"
                  on:click={() => setActive2('Work')}
                  activated={active2 === 'Work'}>
                  <Graphic class="material-icons" aria-hidden="true">
                    bookmark
                  </Graphic>
                  <Text>Work</Text>
                </Item>
              </List>
            </Content>
          </Drawer>

          <Scrim />
          <AppContent class="app-content">
            <main class="main-content">
              <Button on:click={() => (myDrawer2Open = !myDrawer2Open)}>
                <Label>Toggle Drawer</Label>
              </Button>
              <br />
              <pre class="status">Active: {active2}</pre>
              <div style="height: 700px;">&nbsp;</div>
              And some stuff at the bottom.
            </main>
          </AppContent>
        </div>
      </div>
    </Example>
  </div>
</Page>
