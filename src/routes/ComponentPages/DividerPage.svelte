<script>
  import Divider from "./Divider.svelte";
</script>

<Divider
  classNames="text-red-500 font-semibold"
  type="dashed"
  orientation="left"
  children="Left" />
<Divider orientation="right" children="Right" />
<Divider orientation="center" children="Center" />
<Divider />
<Divider direction="vertical" />
