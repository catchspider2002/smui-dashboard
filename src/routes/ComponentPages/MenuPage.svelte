<script>
  import Menu, { SelectionGroup, SelectionGroupIcon } from "@smui/menu";
  import { Anchor } from "@smui/menu-surface";
  import List, {
    Item,
    Separator,
    Text,
    PrimaryText,
    SecondaryText,
    Graphic
  } from "@smui/list";
  import Button from "@smui/button";
  import Page from "./Page.svelte";
  import Example from "./Example.svelte";

  let menu;
  let menu2;
  let menu3;
  let anchor2;
  let clicked = "nothing yet";
  let clicked2 = "nothing yet";
  let selected1 = "Red";
  let selected2 = "Small";
</script>

<svelte:head>
  <title>Menu - SMUI</title>
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
      <span slot="header">Usage</span>
      <div slot="vertical" class="mb-8">
        <Menu static>
          <List>
            <Item on:SMUI:action={() => (clicked = 'Cut')}>
              <Text>Cut</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'Copy')}>
              <Text>Copy</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'Paste')}>
              <Text>Paste</Text>
            </Item>
            <Separator />
            <Item on:SMUI:action={() => (clicked = 'Delete')}>
              <Text>Delete</Text>
            </Item>
          </List>
        </Menu>
      </div>
    </Example>
    <Example>
      <span slot="header">Automatic Anchor</span>
      <div slot="vertical" class="mb-8">
        <div>
          <Button on:click={() => menu.setOpen(true)}>Open Menu</Button>
          <Menu bind:this={menu}>
            <List>
              <Item on:SMUI:action={() => (clicked = 'Cut')}>
                <Text>Cut</Text>
              </Item>
              <Item on:SMUI:action={() => (clicked = 'Copy')}>
                <Text>Copy</Text>
              </Item>
              <Item on:SMUI:action={() => (clicked = 'Paste')}>
                <Text>Paste</Text>
              </Item>
              <Separator />
              <Item on:SMUI:action={() => (clicked = 'Delete')}>
                <Text>Delete</Text>
              </Item>
            </List>
          </Menu>
        </div>
      </div>
    </Example>
    <Example>
      <span slot="header">Multi-line</span>
      <div slot="vertical" class="mb-8">

        <div use:Anchor bind:this={anchor2}>
          <Button on:click={() => menu2.setOpen(true)}>Open Menu</Button>
          <Menu
            bind:this={menu2}
            anchor={false}
            bind:anchorElement={anchor2}
            anchorCorner="BOTTOM_LEFT">
            <List twoLine>
              <Item on:SMUI:action={() => (clicked = 'Cut')}>
                <Text>
                  <PrimaryText>Cut</PrimaryText>
                  <SecondaryText>Copy to clipboard and remove.</SecondaryText>
                </Text>
              </Item>
              <Item on:SMUI:action={() => (clicked = 'Copy')}>
                <Text>
                  <PrimaryText>Copy</PrimaryText>
                  <SecondaryText>Copy to clipboard.</SecondaryText>
                </Text>
              </Item>
              <Item on:SMUI:action={() => (clicked = 'Paste')}>
                <Text>
                  <PrimaryText>Paste</PrimaryText>
                  <SecondaryText>Paste from clipboard.</SecondaryText>
                </Text>
              </Item>
              <Separator />
              <Item on:SMUI:action={() => (clicked = 'Delete')}>
                <Text>
                  <PrimaryText>Delete</PrimaryText>
                  <SecondaryText>Remove item.</SecondaryText>
                </Text>
              </Item>
            </List>
          </Menu>
        </div>
      </div>
    </Example>
    <Example>
      <span slot="header">Selection groups</span>
      <div slot="vertical" class="mb-8">
        <div>
          <Button on:click={() => menu3.setOpen(true)}>Open Menu</Button>
          <Menu bind:this={menu3}>
            <List>
              <SelectionGroup>
                {#each ['Red', 'Green', 'Blue'] as item}
                  <Item
                    on:SMUI:action={() => (selected1 = item)}
                    selected={selected1 === item}>
                    <SelectionGroupIcon>
                      <i class="material-icons">check</i>
                    </SelectionGroupIcon>
                    <Text>{item}</Text>
                  </Item>
                {/each}
              </SelectionGroup>
              <Separator />
              <SelectionGroup>
                {#each ['Small', 'Medium', 'Large'] as item}
                  <Item
                    on:SMUI:action={() => (selected2 = item)}
                    selected={selected2 === item}>
                    <SelectionGroupIcon>
                      <i class="material-icons">check</i>
                    </SelectionGroupIcon>
                    <Text>{item}</Text>
                  </Item>
                {/each}
              </SelectionGroup>
              <Separator />
              <Item on:SMUI:action={() => (clicked2 = 'Save for Later')}>
                <Text>Save for Later</Text>
              </Item>
            </List>
          </Menu>
        </div>
      </div>
    </Example>
  </div>
</Page>
