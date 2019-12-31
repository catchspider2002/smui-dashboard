<script>
  export let id, text, header;
</script>

<div class="option relative mb-2">
  <input type="checkbox" {id} class="toggle hidden" />
  <label
    class="title cursor-pointer bg-white dark:bg-gray-700 p-4 block
    font-semibold text-gray-700 dark:text-gray-300 before:bg-gray-300
    after:bg-gray-300 before:w-1 before:h-3 after:w-1 after:h-3"
    for={id}>
    {header}
  </label>
  <div
    class="content bg-white dark:bg-gray-700 text-black dark:text-gray-500
    overflow-hidden">
    <p class="text-sm px-4 pb-4">{text}</p>
  </div>
</div>
