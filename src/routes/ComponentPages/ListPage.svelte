<script>
  import List, {
    Group,
    Item,
    Graphic,
    Meta,
    Label,
    Separator,
    Subheader,
    Text,
    PrimaryText,
    SecondaryText
  } from "@smui/list";
  import Radio from "@smui/radio";
  import Checkbox from "@smui/checkbox";
  import Page from "./Page.svelte";
  import Example from "./Example.svelte";

  let clickedSimple = "nothing yet";
  let clickedDense = "nothing yet";
  let optionsTwoLine = [
    {
      name: "Bruce Willis",
      description: "Actor",
      disabled: false
    },
    {
      name: "Austin Powers",
      description: "Fictional Character",
      disabled: true
    },
    {
      name: "Thomas Edison",
      description: "Inventor",
      disabled: false
    },
    {
      name: "Stephen Hawking",
      description: "Scientist",
      disabled: false
    }
  ];
  let selectionTwoLine = "Stephen Hawking";
  // This value is updated when the component is initialized, based on the
  // selected Item's `selected` prop.
  let selectionIndex = null;
  let clickedGroup = "nothing yet";
  let selectedRadio = "Tom Hanks";
  let selectedCheckbox = ["Tom Hanks"];
</script>

<style>
  * :global(.demo-list) {
    max-width: 600px;
    border: 1px solid;
    border-color: var(--chip-bg-color);
  }
</style>

<svelte:head>
  <title>List - SMUI</title>
</svelte:head>

<Page>
  <span slot="header">List</span>
  <span slot="description">
    Lists are continuous, vertical indexes of text or images.
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
        <List class="demo-list">
          <Item on:SMUI:action={() => (clickedSimple = 'Cut')}>
            <Text>Cut</Text>
          </Item>
          <Item on:SMUI:action={() => (clickedSimple = 'Copy')}>
            <Text>Copy</Text>
          </Item>
          <Item on:SMUI:action={() => (clickedSimple = 'Paste')}>
            <Text>Paste</Text>
          </Item>
          <Separator />
          <Item on:SMUI:action={() => (clickedSimple = 'Delete')}>
            <Text>Delete</Text>
          </Item>
        </List>
      </div>
    </Example>
    <Example>
      <span slot="header">List with icons</span>
      <div slot="vertical" class="mb-8">
        <List class="demo-list" dense>
          <Item on:SMUI:action={() => (clickedDense = 'Edit')}>
            <Graphic class="material-icons">edit</Graphic>
            <Text>Edit</Text>
          </Item>
          <Item on:SMUI:action={() => (clickedDense = 'Send')}>
            <Graphic class="material-icons">send</Graphic>
            <Text>Send</Text>
          </Item>
          <Item on:SMUI:action={() => (clickedDense = 'Archive')}>
            <Graphic class="material-icons">archive</Graphic>
            <Text>Archive</Text>
          </Item>
          <Separator />
          <Item on:SMUI:action={() => (clickedDense = 'Delete')}>
            <Graphic class="material-icons">clear</Graphic>
            <Text>Delete</Text>
          </Item>
        </List>
      </div>
    </Example>
    <Example>
      <span slot="header">Non-interactive list with activated item</span>
      <div slot="vertical" class="mb-8">
        <List class="demo-list" nonInteractive>
          <Item ripple={false}>
            <Text>Thing 1</Text>
          </Item>
          <Separator />
          <Item ripple={false} activated>
            <Text>Thing 2</Text>
          </Item>
          <Item ripple={false}>
            <Text>Thing 3</Text>
          </Item>
          <Separator />
          <Item ripple={false}>
            <Text>Thing 4</Text>
          </Item>
        </List>
      </div>
    </Example>
    <Example>
      <span slot="header">Two line List</span>
      <div slot="vertical" class="mb-8">
        <List
          class="demo-list"
          twoLine
          avatarList
          singleSelection
          bind:selectedIndex={selectionIndex}>
          {#each optionsTwoLine as item}
            <Item
              on:SMUI:action={() => (selectionTwoLine = item.name)}
              disabled={item.disabled}
              selected={selectionTwoLine === item.name}>
              <Graphic
                style="background-image:
                url(https://via.placeholder.com/40x40.png?text={item.name
                  .split(' ')
                  .map(val => val.substring(0, 1))
                  .join('')});" />
              <Text>
                <PrimaryText>{item.name}</PrimaryText>
                <SecondaryText>{item.description}</SecondaryText>
              </Text>
              <Meta class="material-icons">info</Meta>
            </Item>
          {/each}
        </List>
      </div>
    </Example>
    <Example>
      <span slot="header">Three line List</span>
      <div slot="vertical" class="mb-8">
        <List class="demo-list" threeLine nonInteractive>
          <Item>
            <Text>
              <PrimaryText>FruitPhone 11</PrimaryText>
              <SecondaryText>$1,100</SecondaryText>
              <SecondaryText>A beautiful phone with good specs.</SecondaryText>
            </Text>
          </Item>
          <Item>
            <Text>
              <PrimaryText>Addition Phone</PrimaryText>
              <SecondaryText>$700</SecondaryText>
              <SecondaryText>
                Pretty much the same phone, but a different brand name and OS.
              </SecondaryText>
            </Text>
          </Item>
        </List>
      </div>
    </Example>
    <Example>
      <span slot="header">List group</span>
      <div slot="vertical" class="mb-8">
        <Group>
          <Subheader>Actors</Subheader>
          <List class="demo-list">
            <Item on:SMUI:action={() => (clickedGroup = 'Bruce Willis')}>
              <Text>Bruce Willis</Text>
            </Item>
            <Item on:SMUI:action={() => (clickedGroup = 'Tom Hanks')}>
              <Text>Tom Hanks</Text>
            </Item>
            <Item on:SMUI:action={() => (clickedGroup = 'Jack Nicholson')}>
              <Text>Jack Nicholson</Text>
            </Item>
            <Item on:SMUI:action={() => (clickedGroup = 'Leonardo DiCaprio')}>
              <Text>Leonardo DiCaprio</Text>
            </Item>
            <Item on:SMUI:action={() => (clickedGroup = 'Matt Damon')}>
              <Text>Matt Damon</Text>
            </Item>
          </List>
          <Subheader>Books</Subheader>
          <List class="demo-list">
            <Item
              on:SMUI:action={() => (clickedGroup = 'To Kill a Mockingbird')}>
              <Text>To Kill a Mockingbird</Text>
            </Item>
            <Item on:SMUI:action={() => (clickedGroup = 'The Great Gatsby')}>
              <Text>The Great Gatsby</Text>
            </Item>
            <Item on:SMUI:action={() => (clickedGroup = '1984')}>
              <Text>1984</Text>
            </Item>
            <Item on:SMUI:action={() => (clickedGroup = 'Catch-22')}>
              <Text>Catch-22</Text>
            </Item>
            <Item
              on:SMUI:action={() => (clickedGroup = "Alice's Adventures in Wonderland")}>
              <Text>Alice's Adventures in Wonderland</Text>
            </Item>
          </List>
        </Group>
      </div>
    </Example>
    <Example>
      <span slot="header">Radio list</span>
      <div slot="vertical" class="mb-8">
        <List class="demo-list" radiolist>
          <Item>
            <Graphic>
              <Radio bind:group={selectedRadio} value="Bruce Willis" />
            </Graphic>
            <Label>Bruce Willis</Label>
          </Item>
          <Item>
            <Graphic>
              <Radio bind:group={selectedRadio} value="Tom Hanks" />
            </Graphic>
            <Label>Tom Hanks</Label>
          </Item>
          <Item>
            <Graphic>
              <Radio bind:group={selectedRadio} value="Jack Nicholson" />
            </Graphic>
            <Label>Jack Nicholson</Label>
          </Item>
          <Item>
            <Graphic>
              <Radio bind:group={selectedRadio} value="Leonardo DiCaprio" />
            </Graphic>
            <Label>Leonardo DiCaprio</Label>
          </Item>
          <Item>
            <Graphic>
              <Radio bind:group={selectedRadio} value="Matt Damon" />
            </Graphic>
            <Label>Matt Damon</Label>
          </Item>
        </List>
      </div>
    </Example>
    <Example>
      <span slot="header">Check list</span>
      <div slot="vertical" class="mb-8">
        <List class="demo-list" checklist>
          <Item>
            <Label>Bruce Willis</Label>
            <Meta>
              <Checkbox bind:group={selectedCheckbox} value="Bruce Willis" />
            </Meta>
          </Item>
          <Item>
            <Label>Tom Hanks</Label>
            <Meta>
              <Checkbox bind:group={selectedCheckbox} value="Tom Hanks" />
            </Meta>
          </Item>
          <Item>
            <Label>Jack Nicholson</Label>
            <Meta>
              <Checkbox bind:group={selectedCheckbox} value="Jack Nicholson" />
            </Meta>
          </Item>
          <Item>
            <Label>Leonardo DiCaprio</Label>
            <Meta>
              <Checkbox
                bind:group={selectedCheckbox}
                value="Leonardo DiCaprio" />
            </Meta>
          </Item>
          <Item>
            <Label>Matt Damon</Label>
            <Meta>
              <Checkbox bind:group={selectedCheckbox} value="Matt Damon" />
            </Meta>
          </Item>
        </List>
      </div>
    </Example>
  </div>
</Page>
