<script>
  import AccordionElement from "./AccordionElement.svelte";
  // Reference: https://codepen.io/vinsongrant/pen/qbGKed
  import Page from "./Page.svelte";
  import Example from "./Example.svelte";
</script>

<svelte:head>
  <title>Accordion - SMUI</title>
</svelte:head>

<Page>
  <span slot="header">Accordion</span>
  <span slot="description">
    The accordion is used to create regions of content that can expand/collapse with a simple animation. It helps to hide content that's not immediately relevant to the user.
  </span>
  <span slot="import">
    import Icon from "@smui/select/icon/index";
    <br />
    import HelperText from "@smui/select/helper-text/index";
  </span>
  <div slot="content">
    <Example>
      <span slot="header">Usage</span>
      <div slot="vertical" class="mb-8" />
    </Example>
  </div>
</Page>

<div class="max-w-md mx-auto p-4 bg-gray-200">
  <AccordionElement
    id="toggle1"
    header="Well, hello there"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat." />
  <AccordionElement
    id="toggle2"
    header="I am here to assist you"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat." />
  <AccordionElement
    id="toggle3"
    header="Let's get started"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat." />
</div>
