<script>
  import Avatar from "./Avatar.svelte";
  let imageSource =
    "https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=1.75&w=200&h=200&q=80";
</script>

Image Avatar (Circle)
<div class="flex items-center">
  <Avatar image={imageSource} size="xs" />
  <Avatar image={imageSource} size="sm" />
  <Avatar image={imageSource} />
  <Avatar image={imageSource} size="lg" />
  <Avatar image={imageSource} size="xl" />
</div>
Image Avatar (Rounded)
<div class="flex items-center">
  <Avatar image={imageSource} size="xs" shape="square" />
  <Avatar image={imageSource} size="sm" shape="square" />
  <Avatar image={imageSource} shape="square" />
  <Avatar image={imageSource} size="lg" shape="square" />
  <Avatar image={imageSource} size="xl" shape="square" />
</div>
Letter Avatar (Circle)
<div class="flex items-center">
  <Avatar letter="TS" size="xs" color="default" />
  <Avatar letter="TS" size="sm" color="default" />
  <Avatar letter="TS" color="primary" />
  <Avatar letter="TS" size="lg" color="secondary" />
  <Avatar letter="TS" size="xl" color="secondary" />
</div>
Letter Avatar (Rounded)
<div class="flex items-center">
  <Avatar letter="TS" size="xs" shape="square" color="default" />
  <Avatar letter="TS" size="sm" shape="square" color="default" />
  <Avatar letter="TS" shape="square" color="primary" />
  <Avatar letter="TS" size="lg" shape="square" color="secondary" />
  <Avatar letter="TS" size="xl" shape="square" color="secondary" />
</div>
Icon Avatar (Circle)
<div class="flex items-center">
  <Avatar icon="AB" size="xs" color="default" />
  <Avatar icon="AB" size="sm" color="default" />
  <Avatar icon="P" color="primary" />
  <Avatar icon="TS" size="lg" color="secondary" />
  <Avatar icon="TS" size="xl" color="secondary" />
</div>
Icon Avatar (Rounded)
<div class="flex items-center">
  <Avatar icon="TS" size="xs" shape="square" color="default" />
  <Avatar icon="TS" size="sm" shape="square" color="default" />
  <Avatar icon="TS" shape="square" color="primary" />
  <Avatar icon="TS" size="lg" shape="square" color="secondary" />
  <Avatar icon="TS" size="xl" shape="square" color="secondary" />
</div>
