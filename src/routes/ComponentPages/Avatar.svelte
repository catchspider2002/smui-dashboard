<script>
  // import * as THEME from "./Variables.svelte";
  import Icon from "./Icon.svelte";
  export let shape = "circle"; // circle | square
  export let size = "md"; // xs | sm | md | lg | xl
  export let image;
  export let letter;
  export let icon;
  export let margin = "mx-auto";
  let textClass;
  let iconSize = 8,
    iconMargin = "mx-1";
  export let colorClass,
    sizeClass = "h-8 w-8",
    shapeClass = "rounded";
  export let color = "default"; // default | primary | secondary
  let newColor = color.toUpperCase();

  if (size == "xs") {
    sizeClass = "h-4 w-4 ";
    textClass = "text-xs font-semibold ";
    iconSize = "6";
    iconMargin = "mx-1";
  } else if (size == "sm") {
    sizeClass = "h-6 w-6 ";
    textClass = "text-sm font-semibold ";
    iconSize = "6";
    iconMargin = "mx-1";
  } else if (size == "lg") {
    sizeClass = "h-12 w-12 ";
    textClass = "text-xl font-semibold  ";
    iconSize = "10";
    iconMargin = "mx-2";
  } else if (size == "xl") {
    sizeClass = "h-16 w-16 ";
    textClass = "text-3xl font-semibold ";
    iconSize = "10";
    iconMargin = "mx-3";
  } else textClass = "text-base font-semibold ";

  if (shape != "square") shapeClass = "rounded-full";

  // colorClass = THEME["BG_" + newColor] + " " + THEME["BG_TEXT_" + newColor];
</script>

{#if image}
  <img
    class="{margin}
    {sizeClass}
    {shapeClass} flex-no-shrink"
    src={image}
    alt="" />
{:else}
  <div
    class="{margin}
    {sizeClass}
    {textClass}
    {shapeClass} flex items-center justify-center">
    {#if letter}{letter}{/if}
    {#if icon}
      <Icon size={iconSize} margin={iconMargin} />
    {/if}
  </div>
{/if}
