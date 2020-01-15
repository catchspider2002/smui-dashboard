<script>
  import Snackbar, { Actions, Label } from "@smui/snackbar";
  import Button from "@smui/button";
  import IconButton from "@smui/icon-button";
  import Textfield from "@smui/textfield";
  import Page from "./Page.svelte";
  import Example from "./Example.svelte";

  let mySnackbar;
  let mySnackbarB;
  let leadingSnackbar;
  let leadingReason = "nothing yet";
  let stackedSnackbar;
  let stackedReason = "nothing yet";
  let stackedAction = "nothing yet";
  let dynSnackbar;
  let dynText = "Snackbar with dynamic text.";

  function handleClosedLeading(e) {
    leadingReason = e.detail.reason;
  }

  function handleClosedStacked(e) {
    stackedReason = e.detail.reason;
  }
</script>

<style>
  * :global(.mdc-snackbar__action:not(:disabled)) {
    color: var(--primary-snackbar-color);
  }

  * :global(.mdc-snackbar__dismiss.mdc-snackbar__dismiss) {
    color: var(--primary-font-color);
  }
</style>

<svelte:head>
  <title>Snackbar - SMUI</title>
</svelte:head>

<Page>
  <span slot="header">Snackbar</span>
  <span slot="description">
    A snackbar is used to display a quick message to a user.
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
        <Snackbar bind:this={mySnackbar}>
          <Label>This is a snackbar.</Label>
        </Snackbar>
        <Button on:click={() => mySnackbar.open()}>
          <Label>Open Snackbar</Label>
        </Button>
      </div>
      <div slot="vertical" class="mb-8">
        <Snackbar bind:this={mySnackbarB}>
          <Label>This is a snackbar.</Label>
          <Actions>
            <IconButton class="material-icons" title="Dismiss">
              close
            </IconButton>
          </Actions>
        </Snackbar>

        <Button on:click={() => mySnackbarB.open()}>
          <Label>Open Snackbar With Dismiss</Label>
        </Button>
      </div>
    </Example>
    <Example>
      <span slot="header">Leading snackbar</span>
      <div slot="vertical" class="mb-8">
        <Snackbar
          leading
          bind:this={leadingSnackbar}
          on:MDCSnackbar:closed={handleClosedLeading}>
          <Label>This is a leading snackbar.</Label>
          <Actions>
            <Button>Action</Button>
          </Actions>
        </Snackbar>

        <Button on:click={() => leadingSnackbar.open()}>
          <Label>Open Snackbar</Label>
        </Button>
      </div>
    </Example>
    <Example>
      <span slot="header">Wide snackbar</span>
      <div slot="vertical" class="mb-8">
        <Snackbar
          variant="stacked"
          bind:this={stackedSnackbar}
          on:MDCSnackbar:closed={handleClosedStacked}>
          <Label>
            This is a stacked snackbar. Use it when you have really long text.
          </Label>
          <Actions>
            <Button on:click={() => (stackedAction = 'Something')}>
              Something
            </Button>
            <Button on:click={() => (stackedAction = 'Another')}>
              Another
            </Button>
            <IconButton
              on:click={() => (stackedAction = 'Dismissed')}
              class="material-icons"
              title="Dismiss">
              close
            </IconButton>
          </Actions>
        </Snackbar>

        <Button on:click={() => stackedSnackbar.open()}>
          <Label>Open Snackbar</Label>
        </Button>
      </div>
    </Example>
    <Example>
      <span slot="header">Snackbar with dynamic text</span>
      <div slot="horizontal" class="mb-8">
        <Snackbar bind:this={dynSnackbar} labelText={dynText}>
          <Label />
        </Snackbar>
        <Textfield
          class="w-64"
          bind:value={dynText}
          label="Dynamic Text"
          input$required />

        <Button on:click={() => dynSnackbar && dynSnackbar.open()}>
          <Label>Open Snackbar</Label>
        </Button>
      </div>
    </Example>
  </div>
</Page>
