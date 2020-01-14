<script>
  import Page from "./Page.svelte";
  import Example from "./Example.svelte";
</script>

<svelte:head>
  <title>Badge - SMUI</title>
</svelte:head>

<Page>
  <span slot="header">Badge</span>
  <span slot="description">
    Badge generates a small badge to the top-right or bottom-right of its children.
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
