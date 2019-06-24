<template>
  <button class="button-main">
    <svg
      class="button-main_icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        d="M469.333 282.895V106.667c0-23.53-19.135-42.667-42.667-42.667h-198.25l-39.542-39.542a10.66 10.66 0 0 0-7.542-3.125H42.667C19.135 21.333 0 40.47 0 64v298.667c0 23.53 19.135 42.667 42.667 42.667h239.215c13.977 49.173 59.2 85.333 112.785 85.333 64.698 0 117.333-52.635 117.333-117.333 0-36.357-16.624-68.9-42.667-90.44zM277.874 384H42.667c-11.76 0-21.333-9.573-21.333-21.333V64c0-11.76 9.573-21.333 21.333-21.333h134.25L216.46 82.2a10.66 10.66 0 0 0 7.542 3.125H426.67c11.76 0 21.333 9.573 21.333 21.333v162.286C431.977 260.733 413.88 256 394.667 256c-64.698 0-117.333 52.635-117.333 117.333-.001 3.6.22 7.15.54 10.667zm116.793 85.333c-52.938 0-96-43.063-96-96s43.063-96 96-96 96 43.063 96 96-43.063 96-96 96zm42.666-106.666h-32v-32a10.66 10.66 0 1 0-21.333 0v32h-32A10.66 10.66 0 1 0 352 384h32v32a10.66 10.66 0 1 0 21.334 0v-32h32a10.66 10.66 0 0 0 10.667-10.667c0-5.897-4.772-10.667-10.668-10.667z"
      ></path>
    </svg>
    <span>Send a request</span>
    <img class="button-main_decor" :src="ButtonDecor" alt="x" />
  </button>
</template>

<script>
import ButtonDecor from '@/static/x.png'

export default {
  name: 'Button',

  computed: {
    ButtonDecor: () => ButtonDecor
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/function.scss';
@import '@/assets/scss/breakpoints.scss';

.button-main {
  position: relative;
  display: flex;
  align-items: center;
  background-color: $red;
  border: 0;
  padding: 25px vw(140px);
  font-size: 14px;
  text-transform: uppercase;
  color: $white;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: $sm) {
    padding: 18px vw(140px);
  }

  &:hover {
    background-color: lighten($red, 10%);
  }

  span {
    position: relative;
    z-index: 1;
  }

  &_icon {
    margin-right: 15px;
    width: 17px;
    height: 17px;
    fill: $white;
  }

  &_decor {
    bottom: -30px;
    right: -30px;
    position: absolute;
    z-index: 0;
  }
}
</style>
