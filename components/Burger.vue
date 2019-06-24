<template>
  <button class="burger" @click="$emit('open-menu')">
    <span class="burger_line"></span>
  </button>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/breakpoints.scss';

.burger {
  position: relative;
  width: 54px;
  height: 33px;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  outline: none !important;

  @media (max-width: $md) {
    width: 35px;
    height: 23px;
  }

  &:hover {
    &:after,
    &:before {
      background-color: $white;
    }
    .burger_line {
      width: 100%;
      background-color: $white;
    }
  }

  &:after,
  &:before {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: $red;
    transition: 0.3s ease;
  }

  &:before {
    top: 0;
  }

  &:after {
    top: 50%;
    margin-top: -2px;
  }

  &_line {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 50%;
    height: 4px;
    background-color: $red;
    transition: 0.3s ease;
  }
}
</style>
