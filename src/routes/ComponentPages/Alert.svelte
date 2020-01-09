<script>
  import IconButton, { Icon } from "@smui/icon-button";

  export let variant = "default"; // solid || outline
  export let border; // top || left
  // export let color = "green";
  // export let iconAlignment = "center"; // center || top
  export let title;

  let borderClass,
    variantClass = "alert-" + variant;

  if (variant == "outline") variantClass += " border border-solid ";

  if (border) {
    // borderClass = variant == "solid" ? outlineBorderColor : outlineBorderColor2;

    if (border == "top") borderClass += " border-solid border-t-4";
    else if (border == "left") borderClass += " border-solid border-l-4";
  }
</script>

<div
  class="{variantClass}
  {borderClass} py-2 rounded relative flex items-center"
  role="alert">
  <slot />
  <div class="px-4 flex-1-0-auto">
    {#if title}
      <div class="py-1 font-bold">{title}</div>
    {/if}
    <div class="py-1">
      <slot name="description" />
    </div>
  </div>
  <div class="pr-4 py-1">
    <IconButton class="material-icons" title="Dismiss">close</IconButton>
  </div>
  <!-- <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
    <IconButton class="material-icons" title="Dismiss">close</IconButton>
  </span> -->
</div>
