<script>
  import { onMount } from "svelte";
  import Icon from "svelte-awesome/components/Icon.svelte";
  import {
    beer,
    refresh,
    comment,
    codeFork,
    camera,
    ban
  } from "svelte-awesome/icons";
  import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
</script>

<style>
  :root {
    --color-background-body: #333;
    --color-particle-fill: #ababab;
    --color-ring-stroke: #ff8c8c;
  }
  div {
    background-color: var(--color-background-body);
    overflow: hidden;
    /* width: 100vw;
    height: 100vh; */
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: background-color 0.5s ease-in-out;
  }
  /* .atom {
	  width: 200vw;
	  height: 200vh;
	} */
  .nucleus {
    fill: var(--color-particle-fill);
    stroke: var(--color-particle-fill);
    transition: all 0.5s ease-in-out;
  }
  .electron {
    fill: var(--color-particle-fill);
    stroke: var(--color-particle-fill);
    transition: all 0.5s ease-in-out;
    animation: rotate 10s infinite linear;
  }
  .ring {
    stroke: var(--color-ring-stroke);
  }
  .ring:nth-of-type(1) {
    animation-delay: 0.1s;
  }
  .ring:nth-of-type(2) {
    animation-delay: 0.2s;
  }
  .ring:nth-of-type(3) {
    animation-delay: 0.3s;
  }
  .ring:nth-of-type(4) {
    animation-delay: 0.4s;
  }
  .ring:nth-of-type(5) {
    animation-delay: 0.5s;
  }
  .ring:nth-of-type(6) {
    animation-delay: 0.6s;
  }
  .ring:nth-of-type(7) {
    animation-delay: 0.7s;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

<!-- basic -->
<!-- <Icon data={beer} />
<Icon data={refresh} scale="2" />
<Icon data={comment} flip="horizontal" />
<Icon data={codeFork} label="Forked Repository" />
<Icon data={camera} />
<Icon name={ban} scale="2" class="alert" /> -->
<!-- FontAwesome v5 Icons!! -->
<!-- <Icon data={faSun} />
<Icon data={faMoon} /> -->

<div class="h-64 w-64">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox='-1024 -1024 2048 2048' class="atom">
  <g>
    <circle class="nucleus" fill="#ababab" stroke="#ff0087" r="132" />
    <circle class="ring" r="230" fill="none" stroke="#ff0087" stroke-width="15" />
    <circle class="ring" r="320" fill="none" stroke="#ff0087" stroke-width="15" />
    <circle class="ring" r="410" fill="none" stroke="#ff0087" stroke-width="15" />
    <circle class="ring" r="500" fill="none" stroke="#ff0087" stroke-width="15" />
    <circle class="ring" r="590" fill="none" stroke="#ff0087" stroke-width="15" />
    <circle class="ring" r="680" fill="none" stroke="#ff0087" stroke-width="15" />
    <circle class="ring" r="770" fill="none" stroke="#ff0087" stroke-width="15" />
    <circle class="electron" fill="#ababab" stroke="#ababab" stroke-width="12" cx="225" r="28" />
    <circle class="electron" fill="#ababab" stroke="#ababab" stroke-width="12" cx="-290" cy="-142" r="28" />
    <circle class="electron" fill="#ababab" stroke="#ababab" stroke-width="12" cx="310" cy="270" r="28" />
    <circle class="electron" fill="#ababab" stroke="#ababab" stroke-width="12" cx="400" cy="-295" r="28" />
    <circle class="electron" fill="#ababab" stroke="#ababab" stroke-width="12" cx="-400" cy="295" r="28" />
    <circle class="electron" fill="#ababab" stroke="#ababab" stroke-width="12" cx="-515" cy="-295" r="28" />
  </g>
</svg>
</div>
