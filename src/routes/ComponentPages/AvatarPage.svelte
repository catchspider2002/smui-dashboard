<script>
  import Avatar from "./Avatar.svelte";
  import Page from "./Page.svelte";
  import Example from "./Example.svelte";

  let imageSource =
    "https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=1.75&w=200&h=200&q=80";
</script>

<svelte:head>
  <title>Avatar</title>
</svelte:head>

<Page>
  <span slot="header">Avatar</span>
  <span slot="description">
    Avatars are used to used to display circular user profile pictures.
  </span>
  <span slot="import">
    import Icon from "@smui/select/icon/index";
    <br />
    import HelperText from "@smui/select/helper-text/index";
  </span>
  <div slot="content">
    <Example>
      <span slot="header">Image Avatar (Circle)</span>
      <div slot="horizontal" class="mr-8 mb-8">
        <Avatar image={imageSource} size="xs" />
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Avatar image={imageSource} size="sm" />
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Avatar image={imageSource} />
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Avatar image={imageSource} size="lg" />
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Avatar image={imageSource} size="xl" />
      </div>
    </Example>
    <Example>
      <span slot="header">Image Avatar (Rounded)</span>
      <div slot="horizontal" class="mr-8 mb-8">
        <Avatar image={imageSource} size="xs" shape="square" />
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Avatar image={imageSource} size="sm" shape="square" />
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Avatar image={imageSource} shape="square" />
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Avatar image={imageSource} size="lg" shape="square" />
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Avatar image={imageSource} size="xl" shape="square" />
      </div>
    </Example>
    <Example>
      <span slot="header">Letter Avatar (Circle)</span>
      <div slot="horizontal" class="mr-8 mb-8">
        <Avatar letter="TS" size="xs" color="default" />
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Avatar letter="TS" size="sm" color="default" />
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Avatar letter="TS" color="primary" />
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Avatar letter="TS" size="lg" color="secondary" />
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Avatar letter="TS" size="xl" color="secondary" />
      </div>
    </Example>
    <Example>
      <span slot="header">Letter Avatar (Rounded)</span>
      <div slot="horizontal" class="mr-8 mb-8">
        <Avatar letter="TS" size="xs" shape="square" color="default" />
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Avatar letter="TS" size="sm" shape="square" color="default" />
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Avatar letter="TS" shape="square" color="primary" />
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Avatar letter="TS" size="lg" shape="square" color="secondary" />
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Avatar letter="TS" size="xl" shape="square" color="secondary" />
      </div>
    </Example>
    <Example>
      <span slot="header">Icon Avatar (Circle)</span>
      <div slot="horizontal" class="mr-8 mb-8">
        <Avatar icon="AB" size="xs" color="default" />
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Avatar icon="AB" size="sm" color="default" />
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Avatar icon="P" color="primary" />
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Avatar icon="TS" size="lg" color="secondary" />
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Avatar icon="TS" size="xl" color="secondary" />
      </div>
    </Example>
    <Example>
      <span slot="header">Icon Avatar (Rounded)</span>
      <div slot="horizontal" class="mr-8 mb-8">
        <Avatar icon="TS" size="xs" shape="square" color="default" />
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Avatar icon="TS" size="sm" shape="square" color="default" />
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Avatar icon="TS" shape="square" color="primary" />
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Avatar icon="TS" size="lg" shape="square" color="secondary" />
      </div>
      <div slot="horizontal" class="mr-8 mb-8">
        <Avatar icon="TS" size="xl" shape="square" color="secondary" />
      </div>
    </Example>
  </div>
</Page>

<div class="flex items-center" />
