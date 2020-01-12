<script>
  import Page from "./Page.svelte";
  import Example from "./Example.svelte";
</script>

<svelte:head>
  <title>Rating - SMUI</title>
</svelte:head>

<Page>
  <span slot="header">Rating</span>
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
      </div>
    </Example>
  </div>
</Page>
