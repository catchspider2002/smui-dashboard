<script>
  import { onMount, onDestroy } from "svelte";
  import LinearProgress from "@smui/linear-progress";
  import Checkbox from "@smui/checkbox";
  import FormField from "@smui/form-field";
  import Button from "@smui/button";
  import Page from "./Page.svelte";
  import Example from "./Example.svelte";

  import "./linear-progress.scss";

  let progress = 0;
  let closed = false;
  let timer;
  onMount(reset);
  onDestroy(() => {
    clearInterval(timer);
  });
  function reset() {
    progress = 0;
    closed = false;
    clearInterval(timer);
    timer = setInterval(() => {
      progress += 0.01;
      if (progress >= 1) {
        progress = 1;
        closed = true;
        clearInterval(timer);
      }
    }, 100);
  }
</script>

<style>
  /* * :global(.mdc-linear-progress__buffering-dots) {
    fill: var(--chip-bg-color);
  } */
</style>

<svelte:head>
  <title>Linear Progress - SMUI</title>
</svelte:head>

<Page>
  <span slot="header">Linear Progress</span>
  <span slot="description">
    Linear Progress indicators display the length of a process or express an unspecified wait time.
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
        <LinearProgress {progress} />
      </div>
    </Example>
    <Example>
      <span slot="header">Buffered</span>
      <div slot="vertical" class="mb-8">
        <LinearProgress progress={0.5} buffer={0.75} />
      </div>
    </Example>
    <Example>
      <span slot="header">Indeterminate</span>
      <LinearProgress indeterminate />
      <div slot="vertical" class="mb-8" />
    </Example>
    <Example>
      <span slot="header">Reversed</span>
      <div slot="vertical" class="mb-8">
        <LinearProgress progress={0.5} reversed />
      </div>
    </Example>
    <Example>
      <span slot="header">Reversed Buffered</span>
      <div slot="vertical" class="mb-8">
        <LinearProgress progress={0.5} buffer={0.75} reversed />
      </div>
    </Example>
    <Example>
      <span slot="header">Colored (using Sass mixins)</span>
      <div slot="vertical" class="mb-8">
        <LinearProgress class="my-colored-bar" progress={0.5} buffer={0.75} />
      </div>
    </Example>
  </div>
</Page>
