<script>
  import Dialog, { Title, Content, Actions, InitialFocus } from "@smui/dialog";
  import Button, { Label } from "@smui/button";
  import List, { Item, Graphic, Text } from "@smui/list";
  import Radio from "@smui/radio";
  import Slider from "@smui/slider";
  import FormField from "@smui/form-field";
  import Page from "./Page.svelte";
  import Example from "./Example.svelte";

  let simpleDialog;
  let eventDialog;
  let listDialog;
  let listSelectionDialog;
  let sliderDialog;
  let clicked = "Nothing yet.";
  let response = "Nothing yet.";
  let clickedList = "Nothing yet.";
  let selection = "Radishes";
  let selected = "Nothing yet.";
  let volumeMedia = 100;
  let volumeRingtone = 80;
  let volumeAlarm = 80;

  function closeHandler(e) {
    switch (e.detail.action) {
      case "none":
        response = "Ok, well, you're wrong.";
        break;
      case "all":
        response = "You are correct. All dogs are the best dog.";
        break;
      default:
        response = "It's a simple question. You should be able to answer it.";
        break;
    }
  }

  function selectionCloseHandler(e) {
    if (e.detail.action === "accept") {
      selected = selection;
    }
    selection = "Radishes";
  }
</script>

<style>
  * :global(.mdc-dialog .mdc-dialog__content) {
    color: var(--enabled-color);
  }
</style>

<svelte:head>
  <title>Dialogs - SMUI</title>
</svelte:head>

<Page>
  <span slot="header">Dialog</span>
  <span slot="description">
    Dialogs inform users about a task and can contain critical information,
    require decisions, or involve multiple tasks.
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

        <Dialog
          bind:this={simpleDialog}
          aria-labelledby="simple-title"
          aria-describedby="simple-content">
          <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
          <Title id="simple-title">Dialog Title</Title>
          <Content id="simple-content">Super awesome dialog body text?</Content>
          <Actions>
            <Button on:click={() => (clicked = 'No')}>
              <Label>No</Label>
            </Button>
            <Button on:click={() => (clicked = 'Yes')}>
              <Label>Yes</Label>
            </Button>
          </Actions>
        </Dialog>

        <Button on:click={() => simpleDialog.open()}>
          <Label>Open Dialog</Label>
        </Button>
      </div>
    </Example>
    <Example>
      <span slot="header">Focused Button Dialog</span>
      <div slot="vertical" class="mb-8">

        <Dialog
          bind:this={eventDialog}
          aria-labelledby="event-title"
          aria-describedby="event-content"
          on:MDCDialog:closed={closeHandler}>
          <Title id="event-title">The Best Dog</Title>
          <Content id="event-content">
            Out of all the dogs, which is the best dog?
          </Content>
          <Actions>
            <Button action="none">
              <Label>None of Them</Label>
            </Button>
            <Button action="all" default use={[InitialFocus]}>
              <Label>All of Them</Label>
            </Button>
          </Actions>
        </Dialog>

        <Button on:click={() => eventDialog.open()}>
          <Label>Open Dialog</Label>
        </Button>
      </div>
    </Example>
    <Example>
      <span slot="header">List Dialog</span>
      <div slot="vertical" class="mb-8">

        <Dialog
          bind:this={listDialog}
          aria-labelledby="list-title"
          aria-describedby="list-content">
          <Title id="list-title">Dialog Title</Title>
          <Content component={List} id="list-content">
            {#each [...Array(100)].map((v, i) => i + 1) as item}
              <Item
                on:click={() => {
                  clickedList = item;
                  listDialog.close();
                }}>
                <Text>Item #{item}</Text>
              </Item>
            {/each}
          </Content>
        </Dialog>

        <Button on:click={() => listDialog.open()}>
          <Label>Open Dialog</Label>
        </Button>
      </div>
    </Example>
    <Example>
      <span slot="header">Selection Dialog</span>
      <div slot="vertical" class="mb-8">

        <Dialog
          bind:this={listSelectionDialog}
          aria-labelledby="list-selection-title"
          aria-describedby="list-selection-content"
          on:MDCDialog:closed={selectionCloseHandler}>
          <Title id="list-selection-title">Dialog Title</Title>
          <Content id="list-selection-content">
            <List radioList>
              <Item use={[InitialFocus]}>
                <Graphic>
                  <Radio bind:group={selection} value="Radishes" />
                </Graphic>
                <Text>Radishes</Text>
              </Item>
              <Item>
                <Graphic>
                  <Radio bind:group={selection} value="Turnips" />
                </Graphic>
                <Text>Turnips</Text>
              </Item>
              <Item>
                <Graphic>
                  <Radio bind:group={selection} value="Broccoli" />
                </Graphic>
                <Text>Broccoli</Text>
              </Item>
            </List>
          </Content>
          <Actions>
            <Button>
              <Label>Cancel</Label>
            </Button>
            <Button action="accept">
              <Label>Accept</Label>
            </Button>
          </Actions>
        </Dialog>

        <Button on:click={() => listSelectionDialog.open()}>
          <Label>Open Dialog</Label>
        </Button>
      </div>
    </Example>
    <Example>
      <span slot="header">Slider Dialog</span>
      <div slot="vertical" class="mb-8">

        <Dialog
          bind:this={sliderDialog}
          aria-labelledby="slider-title"
          aria-describedby="slider-content">
          <Title id="slider-title">Volumes</Title>
          <Content id="slider-content">
            <div>
              <FormField
                align="end"
                style="display: flex; flex-direction: column;">
                <Slider bind:value={volumeMedia} use={[InitialFocus]} />
                <span slot="label">Media Volume</span>
              </FormField>
            </div>
            <div>
              <FormField
                align="end"
                style="display: flex; flex-direction: column;">
                <Slider bind:value={volumeRingtone} />
                <span slot="label">Ringtone Volume</span>
              </FormField>
            </div>
            <div>
              <FormField
                align="end"
                style="display: flex; flex-direction: column;">
                <Slider bind:value={volumeAlarm} />
                <span slot="label">Alarm Volume</span>
              </FormField>
            </div>
          </Content>
          <Actions>
            <Button action="accept">
              <Label>Done</Label>
            </Button>
          </Actions>
        </Dialog>

        <Button on:click={() => sliderDialog.open()}>
          <Label>Open Dialog</Label>
        </Button>
      </div>
    </Example>
  </div>
</Page>
