<script>
  import TimelineElement from "./TimelineElement.svelte";
  // Reference: https://assortment.io/posts/building-responsive-timelines-in-css-sass-bem
  import Page from "./Page.svelte";
  import Example from "./Example.svelte";
</script>


<style>
  .timeline:before {
    content: "";
    position: absolute;
    top: 2rem;
    left: 1.95rem;
    width: 0.1rem;
    height: calc(100% - 14rem);
    background: rgba(0, 0, 0, 0.12);
  }

  @media screen and (min-width: 640px) {
    .timeline:before {
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
    }
  }
</style>

<svelte:head>
  <title>Timeline - SMUI</title>
</svelte:head>

<Page>
  <span slot="header">Timeline</span>
  <span slot="description">
    A timeline is useful for stylistically displaying chronological information.
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
      </div>
    </Example>
  </div>
</Page>

<div class="mx-auto p-8 max-w-6xl bg-layer-color">
  <h1 class="pb-8 text-xl text-center text-black">WORK EXPERIENCE</h1>
  <ol class="timeline relative m-0 p-0">
    <TimelineElement
      dotSize="xs"
      header="2018 - 2019"
      title="FULL STACK DEVELOPER"
      subtitle="Amazon"
      text="Worked as part of a multi-disciplinary team, carrying out ad-hoc
      tasks as requested by the IT Manager. Had a specific brief to ensure the
      websites build for customer’s precisely matched their
      requirements.developers and marketers." />
    <TimelineElement
      dotSize="sm"
      header="2015 - 2018"
      position="left"
      title="WEB DEVELOPER"
      subtitle="Stack Overflow"
      text="Worked as part of a multi-disciplinary team, carrying out ad-hoc
      tasks as requested by the IT Manager. Had a specific brief to ensure the
      websites build for customer’s precisely matched their
      requirements.developers and marketers." />
    <TimelineElement
      dotSize="md"
      header="2013 - 2015"
      title="FRONT END DEVELOPER"
      subtitle="Uber"
      text="Worked as part of a multi-disciplinary team, carrying out ad-hoc
      tasks as requested by the IT Manager. Had a specific brief to ensure the
      websites build for customer’s precisely matched their
      requirements.developers and marketers." />
    <TimelineElement
      dotSize="lg"
      header="2012 - 2012"
      position="left"
      title="JUNIOR FRONT END DEVELOPER"
      subtitle="Google"
      text="Worked as part of a multi-disciplinary team, carrying out ad-hoc
      tasks as requested by the IT Manager. Had a specific brief to equested by
      the IT Manager. Had a specific brief to ensure the websites build for
      customer’s precisely matched ensure the websites build for customer’s
      precisely matched their requirements.developers and marketers." />
    <TimelineElement
      dotSize="xl"
      header="2010 - 2012"
      title="JUNIOR DEVELOPER"
      subtitle="Microsoft"
      text="Worked as part of a multi-disciplinary team, carrying out ad-hoc
      tasks as requested by the IT Manager. Had a specific brief to ensure the
      websites build for customer’s precisely matched their equested by the IT
      Manager. Had a specific brief to ensure the websites build for customer’s
      precisely matched equested by the IT Manager. Had a specific brief to
      ensure the websites build for customer’s precisely matched equested by the
      IT Manager. Had a specific brief to ensure the websites build for
      customer’s precisely matched requirements.developers and marketers." />
    <TimelineElement
      header="2007 - 2010"
      position="left"
      title="JUNIOR DEVELOPER"
      subtitle="Twitter"
      text="Worked as part of a multi-disciplinary team, carrying out ad-hoc
      tasks as requested by the IT Manager. Had a specific brief to ensure the
      websites build for customer’s precisely matched their
      requirements.developers and marketers." />
  </ol>
</div>
