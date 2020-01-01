<script>
  import Divider from "./Divider.svelte";
  import Page from "./Page.svelte";
  import Example from "./Example.svelte";
</script>

<Page>
  <span slot="header">Divider</span>
  <span slot="description">
    Divider is used to separate sections of lists or layouts.
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
        <Divider />
      </div>
    </Example>
    <Example>
      <span slot="header">Left aligned text</span>
      <div slot="vertical" class="mb-8">
        <Divider orientation="left" children="Left" />
      </div>
    </Example>
    <Example>
      <span slot="header">Right aligned text</span>
      <div slot="vertical" class="mb-8">
        <Divider orientation="right" children="Right" />
      </div>
    </Example>
    <Example>
      <span slot="header">Center aligned text</span>
      <div slot="vertical" class="mb-8">
        <Divider orientation="center" children="Center" />
      </div>
    </Example>
    <Example>
      <span slot="header">Dashed divider</span>
      <div slot="vertical" class="mb-8">
        <Divider type="dashed" />
      </div>
    </Example>
    <Example>
      <span slot="header">Dotted divider</span>
      <div slot="vertical" class="mb-8">
        <Divider type="dotted" />
      </div>
    </Example>
    <Example>
      <span slot="header">Vertical</span>
      <div slot="vertical" class="mb-8">
        <Divider direction="vertical" />
      </div>
    </Example>
  </div>
</Page>
