<script>
  import Page from "./Page.svelte";
  import Example from "./Example.svelte";
</script>

<svelte:head>
  <title>Tooltip - SMUI</title>
</svelte:head>

<Page>
  <span slot="header">Tooltip</span>
  <span slot="description">
    Tooltips display informative text when users hover over, focus on, or tap an element.
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
