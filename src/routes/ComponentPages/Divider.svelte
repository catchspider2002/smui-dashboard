<script>
  export let direction = "horizontal"; // 'horizontal' | 'vertical';
  export let orientation = "center"; //?: 'left' | 'right' | 'center';
  export let classNames = ""; //?: string;
  export let type = "solid"; // solid | dashed | dotted | double
  export let children;

  let typeClass,
    orientationClass = "",
    transformClass = "";

  if (type == "solid")
    typeClass = "border-solid before:border-solid after:border-solid";
  else if (type == "dashed")
    typeClass = "border-dashed before:border-dashed after:border-dashed";
  else if (type == "dotted")
    typeClass = "border-dotted before:border-dotted after:border-dotted";
  else if (type == "double")
    typeClass = "border-double before:border-double after:border-double";

  if (children) {
    transformClass = "before:translate-y-50 after:translate-y-50";

    if (orientation == "left") orientationClass = "before:w-1/20 after:w-19/20";
    else if (orientation == "right")
      orientationClass = "before:w-19/20 after:w-1/20";
    else orientationClass = "before:w-1/2 after:w-1/2";
  }
</script>

{#if direction == 'horizontal'}
  <div
    class="table before:border-t after:border-t before:border-gray-400
    after:border-gray-400 before:table-cell after:table-cell
    before:content-blank after:content-blank w-full min-w-full {classNames}
    {typeClass}
    {orientationClass}
    {transformClass}"
    role="separator">
    {#if children}
      <span class="inner-text inline-block px-6">{children}</span>
    {/if}
  </div>
{/if}

{#if direction == 'vertical'}
  <div
    class="border-r align-middle inline-block h-3 border-gray-500 mx-3 {typeClass}"
    role="separator" />
{/if}
