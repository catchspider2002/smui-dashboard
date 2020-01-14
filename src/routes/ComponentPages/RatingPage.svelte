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
    Ratings provide insight regarding others’ opinions and experiences with a product.
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
