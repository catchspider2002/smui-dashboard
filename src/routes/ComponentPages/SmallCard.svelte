<script>
  import Button, { Group, GroupItem, Label, Icon } from "@smui/button";
  import SVGIcon from "svelte-awesome/components/Icon.svelte";
  import { beer, refresh, comment, camera } from "svelte-awesome/icons";

  export let iconBackground = "bg-red-400";
</script>

<div class="h-48 flex self-center items-center bg-gray-200 shadow-lg">
  <div class="text-gray-700 text-center {iconBackground} px-4 py-2 m-2">
    <SVGIcon data={refresh} scale="3" />
  </div>
  <div class="flex-auto text-gray-700">
    <div class="flex flex-col">
      <div class="text-gray-700 text-left px-4 py-2">Short</div>
      <div class="text-gray-700 text-left px-4 py-2">Length</div>
      <!-- <div class="text-gray-700 text-right px-4 py-2">Medium length</div> -->
      <Button color="secondary" class="text-right">
        <Label>Default</Label>
      </Button>
    </div>

  </div>
</div>
