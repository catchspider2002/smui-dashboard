<script>
  import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
    Actions,
    ActionButtons,
    ActionIcons
  } from "@smui/card";
  import Button, { Label } from "@smui/button";
  import IconButton, { Icon } from "@smui/icon-button";
  import List, { Item, Text } from "@smui/list";
  import Page from "./Page.svelte";
  import Example from "./Example.svelte";

  let clicked = 0;
</script>

<style>
  .card-container {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    /* min-height: 400px; */
    min-width: 380px;
    background-color: var(--bg-layer-color);
    /* margin-right: 20px; */
    margin-bottom: 20px;
    padding: 40px 0;
  }

  * :global(.mdc-card--outlined) {
    border-color: var(--disabled-font-color);
  }

  * :global(.mdc-card) {
    background-color: var(--bg-card-color);
    min-width: 360px;
  }

  * :global(.card-media-16x9) {
    background-image: url(https://via.placeholder.com/320x180.png/606060/808080?text=16x9);
  }

  * :global(.card-media-square) {
    background-image: url(https://via.placeholder.com/320x320.png/606060/808080?text=square);
  }

  * :global(.mdc-card__action--icon:not(:disabled)) {
    color: var(--enabled-color);
  }
</style>

<svelte:head>
  <title>Card</title>
</svelte:head>

<Page>
  <span slot="header">Card</span>
  <span slot="description">
    Cards contain content and actions about a single subject.
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
        <div class="card-container w-full">
          <Card class="mx-auto" padded>A simple padded card.</Card>
        </div>
      </div>
    </Example>
    <Example>
      <span slot="header">Card with content</span>
      <div slot="vertical" class="mb-8">
        <div class="card-container w-full">
          <Card class="mx-auto">
            <Content>
              You can also use
              <code>Content</code>
              .
            </Content>
          </Card>
        </div>
      </div>
    </Example>
    <Example>
      <span slot="header">Card with outline</span>
      <div slot="vertical" class="mb-8">
        <div class="card-container w-full">
          <Card class="mx-auto" variant="outlined" padded>
            An outlined, padded card.
          </Card>
        </div>
      </div>
    </Example>
    <Example>
      <span slot="header">Card with actions</span>
      <div slot="vertical" class="mb-8">
        <div class="card-container w-full">
          <Card class="mx-auto">
            <Content>A card with actions.</Content>
            <Actions>
              <Button on:click={() => clicked++}>
                <Label>Action</Label>
              </Button>
              <Button on:click={() => clicked++}>
                <Label>Another</Label>
              </Button>
            </Actions>
          </Card>
        </div>
      </div>
    </Example>
    <Example>
      <span slot="header">Card with a full-bleed action</span>
      <div slot="vertical" class="mb-8">
        <div class="card-container w-full">
          <Card class="w-1/4 mx-auto">
            <Content>A card with a full-bleed action.</Content>
            <Actions fullBleed>
              <Button on:click={() => clicked++}>
                <Label>Action</Label>
                <i class="material-icons" aria-hidden="true">arrow_forward</i>
              </Button>
            </Actions>
          </Card>
        </div>
      </div>
    </Example>
    <Example>
      <span slot="header">Card with action icons</span>
      <div slot="vertical" class="mb-8">
        <div class="card-container w-full">
          <Card class="w-1/4 mx-auto">
            <Content>A card with action icons.</Content>
            <Actions>
              <IconButton
                on:click={() => clicked++}
                toggle
                aria-label="Add to favorites"
                title="Add to favorites">
                <Icon class="material-icons" on>favorite</Icon>
                <Icon class="material-icons">favorite_border</Icon>
              </IconButton>
              <IconButton
                class="material-icons"
                on:click={() => clicked++}
                title="Share">
                share
              </IconButton>
              <IconButton
                class="material-icons"
                on:click={() => clicked++}
                title="More options">
                more_vert
              </IconButton>
            </Actions>
          </Card>
        </div>
      </div>
    </Example>
    <Example>
      <span slot="header">Card with actions and action icons</span>
      <div slot="vertical" class="mb-8">
        <div class="card-container w-full">
          <Card class="w-1/4 mx-auto">
            <Content>A card with Both.</Content>
            <Actions>
              <ActionButtons>
                <Button on:click={() => clicked++}>
                  <Label>Action</Label>
                </Button>
                <Button on:click={() => clicked++}>
                  <Label>Another</Label>
                </Button>
              </ActionButtons>
              <ActionIcons>
                <IconButton
                  on:click={() => clicked++}
                  toggle
                  aria-label="Add to favorites"
                  title="Add to favorites">
                  <Icon class="material-icons" on>favorite</Icon>
                  <Icon class="material-icons">favorite_border</Icon>
                </IconButton>
                <IconButton
                  class="material-icons"
                  on:click={() => clicked++}
                  title="Share">
                  share
                </IconButton>
                <IconButton
                  class="material-icons"
                  on:click={() => clicked++}
                  title="More options">
                  more_vert
                </IconButton>
              </ActionIcons>
            </Actions>
          </Card>
        </div>
      </div>
    </Example>
     <Example>
      <span slot="header">Card with media 1</span>
      <div slot="vertical" class="mb-8">
        <div class="card-container w-full">
          <Card class="w-1/4 mx-auto">
            <Media class="card-media-16x9" aspectRatio="16x9">
              <MediaContent>
                <h2
                  class="mdc-typography--headline6"
                  style="color: #fff; position: absolute; bottom: 16px; left:
                  16px; margin: 0;">
                  A card with 16x9 media.
                </h2>
              </MediaContent>
            </Media>
            <Content style="color: #888;">
              Here's some gray text down here.
            </Content>
          </Card>
        </div>
      </div>
    </Example>
    <Example>
      <span slot="header">Card with media 2</span>
      <div slot="vertical" class="mb-8">
        <div class="card-container w-full">
          <Card class="w-1/4 mx-auto">
            <Media class="card-media-square" aspectRatio="square">
              <div
                style="color: #fff; position: absolute; bottom: 16px; left:
                16px;">
                <h2 class="mdc-typography--headline6" style="margin: 0;">
                  A card with square media.
                </h2>
                <h3 class="mdc-typography--subtitle2" style="margin: 0;">
                  And a subtitle.
                </h3>
              </div>
            </Media>
          </Card>
        </div>
      </div>
    </Example>
    <Example>
      <span slot="header">Card with media 3</span>
      <div slot="vertical" class="mb-8">
        <div class="card-container w-full">
          <Card class="w-1/4 mx-auto">
            <div style="padding: 1rem;">
              <h2 class="mdc-typography--headline6" style="margin: 0;">
                A card with media.
              </h2>
              <h3
                class="mdc-typography--subtitle2"
                style="margin: 0; color: #888;">
                And a subtitle.
              </h3>
            </div>
            <PrimaryAction on:click={() => clicked++}>
              <Media class="card-media-16x9" aspectRatio="16x9" />
              <Content class="mdc-typography--body2">
                And some info text. And it's a primary action for the card.
              </Content>
            </PrimaryAction>
          </Card>
        </div>
      </div>
    </Example>
    <Example>
      <span slot="header">Card with media 4</span>
      <div slot="vertical" class="mb-8">
        <div class="card-container w-full">
          <Card class="w-1/4 mx-auto">
            <PrimaryAction on:click={() => clicked++}>
              <Media class="card-media-16x9" aspectRatio="16x9">
                <MediaContent>
                  <div
                    style="color: #fff; position: absolute; bottom: 16px; left:
                    16px;">
                    <h2 class="mdc-typography--headline6" style="margin: 0;">
                      A card with media.
                    </h2>
                    <h3 class="mdc-typography--subtitle2" style="margin: 0;">
                      And a subtitle.
                    </h3>
                  </div>
                </MediaContent>
              </Media>
              <Content class="mdc-typography--body2">
                It's all in this card. It's a veritable smorgasbord of card
                features.
              </Content>
            </PrimaryAction>
            <Actions>
              <ActionButtons>
                <Button on:click={() => clicked++}>
                  <Label>Action</Label>
                </Button>
                <Button on:click={() => clicked++}>
                  <Label>Another</Label>
                </Button>
              </ActionButtons>
              <ActionIcons>
                <IconButton
                  on:click={() => clicked++}
                  toggle
                  aria-label="Add to favorites"
                  title="Add to favorites">
                  <Icon class="material-icons" on>favorite</Icon>
                  <Icon class="material-icons">favorite_border</Icon>
                </IconButton>
                <IconButton
                  class="material-icons"
                  on:click={() => clicked++}
                  title="Share">
                  share
                </IconButton>
                <IconButton
                  class="material-icons"
                  on:click={() => clicked++}
                  title="More options">
                  more_vert
                </IconButton>
              </ActionIcons>
            </Actions>
          </Card>
        </div>
      </div>
    </Example>
    <Example>
      <span slot="header">Card with media 5</span>
      <div slot="vertical" class="mb-8">
        <div class="card-container w-full">
          <Card class="w-1/4 mx-auto">
            <PrimaryAction on:click={() => clicked++}>
              <Media class="card-media-16x9" aspectRatio="16x9" />
              <Content class="mdc-typography--body2">
                <h2 class="mdc-typography--headline6" style="margin: 0;">
                  A card with media.
                </h2>
                <h3
                  class="mdc-typography--subtitle2"
                  style="margin: 0 0 10px; color: #888;">
                  And a subtitle.
                </h3>
                It's all in this card. It's a veritable smorgasbord of card
                features.
              </Content>
            </PrimaryAction>
            <Actions>
              <ActionButtons>
                <Button on:click={() => clicked++}>
                  <Label>Action</Label>
                </Button>
                <Button on:click={() => clicked++}>
                  <Label>Another</Label>
                </Button>
              </ActionButtons>
              <ActionIcons>
                <IconButton
                  on:click={() => clicked++}
                  toggle
                  aria-label="Add to favorites"
                  title="Add to favorites">
                  <Icon class="material-icons" on>favorite</Icon>
                  <Icon class="material-icons">favorite_border</Icon>
                </IconButton>
                <IconButton
                  class="material-icons"
                  on:click={() => clicked++}
                  title="Share">
                  share
                </IconButton>
                <IconButton
                  class="material-icons"
                  on:click={() => clicked++}
                  title="More options">
                  more_vert
                </IconButton>
              </ActionIcons>
            </Actions>
          </Card>
        </div>
      </div>
    </Example>
    <Example>
      <span slot="header">Card with list content</span>
      <div slot="vertical" class="mb-8">
        <div class="card-container w-full">
          <Card class="w-1/4 mx-auto">
            <Content component={List}>
              {#each [...Array(6)].map((v, i) => i + 1) as item}
                <Item on:click={() => clicked++}>
                  <Text>Item #{item}</Text>
                </Item>
              {/each}
            </Content>
          </Card>
        </div>
      </div>
    </Example>
  </div>
</Page>
