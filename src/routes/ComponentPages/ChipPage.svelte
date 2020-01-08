<script>
  import Chip, { Set, Icon, Checkmark, Text } from "@smui/chips";
  import Button, { Label } from "@smui/button";
  import Page from "./Page.svelte";
  import Example from "./Example.svelte";

  let choice = "Morning";
  let filter = ["Shoes", "Shirts"];
  let input = [1, 2, 3, 4];
  let keyed = [
    { k: 1, v: "Apple" },
    { k: 2, v: "Apple" },
    { k: 3, v: "Apple" },
    { k: 4, v: "Apple" }
  ];

  function addInputChip() {
    if (input.length) {
      input.push(input[input.length - 1] + 1);
      input = input;
    } else {
      input.push(1);
      input = input;
    }
  }

  function addKeyedChip() {
    if (keyed.length) {
      keyed.push({ k: keyed[keyed.length - 1].k + 1, v: "Apple" });
      keyed = keyed;
    } else {
      keyed.push({ k: 1, v: "Apple" });
      keyed = keyed;
    }
  }
</script>

<style>
  * :global(.mdc-chip, .mdc-chip:hover) {
    color: var(--font-color);
  }
</style>

<svelte:head>
  <title>Chip</title>
</svelte:head>

<Page>
  <span slot="header">Chip</span>
  <span slot="description">
    Chips are compact elements that allow users to enter information, select a
    choice, filter content, or trigger an action.
  </span>
  <span slot="import">
    import Icon from "@smui/select/icon/index";
    <br />
    import HelperText from "@smui/select/helper-text/index";
  </span>
  <div slot="content">
    <Example>
      <span slot="header">Leading icon</span>
      <div slot="vertical" class="mb-8" />
    </Example>
    <Example>
      <span slot="header">Trailing icon</span>
      <div slot="vertical" class="mb-8" />
    </Example>
    <Example>
      <span slot="header">Choice Chips</span>
      <div slot="vertical" class="mb-8">
        <Set
          chips={['Morning', 'Afternoon', 'Evening', 'Night']}
          let:chip
          choice
          bind:selected={choice}>
          <Chip tabindex="0">{chip}</Chip>
        </Set>
      </div>
    </Example>
    <Example>
      <span slot="header">Filter Chips</span>
      <div slot="vertical" class="mb-8">
        <Set
          chips={['Shoes', 'Pants', 'Shirts', 'Hats']}
          let:chip
          filter
          bind:selected={filter}>
          <Chip tabindex="0">
            <Checkmark />
            <Text>{chip}</Text>
          </Chip>
        </Set>
      </div>
    </Example>
    <Example>
      <span slot="header">Input Chips</span>
      <div slot="vertical" class="mb-8">
        <Set chips={input} let:chip input>
          <Chip>
            <Text>{chip}</Text>
            <Icon class="material-icons" trailing tabindex="0">cancel</Icon>
          </Chip>
        </Set>
        <Button on:click={addInputChip}>
          <Label>Add</Label>
        </Button>
      </div>
    </Example>
    <Example>
      <span slot="header">Keyed Chips</span>
      <div slot="vertical" class="mb-8">
        <Set chips={keyed} let:chip key={chip => chip.k} input>
          <Chip>
            <Text>{chip.v}</Text>
            <Icon class="material-icons" trailing tabindex="0">cancel</Icon>
          </Chip>
        </Set>
        <Button on:click={addKeyedChip}>
          <Label>Add</Label>
        </Button>
      </div>
    </Example>
  </div>
</Page>

<div>
  <Set chips={['one', 'two', 'three', 'four', 'five']} let:chip>
    <Chip shouldRemoveOnTrailingIconClick={false}>
      {#if chip === 'four'}
        <Icon class="material-icons" leading>book</Icon>
      {/if}
      <Text>{chip}</Text>
      {#if chip === 'five'}
        <Icon class="material-icons" trailing>commute</Icon>
      {/if}
    </Chip>
  </Set>
</div>
