<template>
  <button class="close" @click="$emit('close-menu')"></button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/function.scss';
@import '@/assets/scss/breakpoints.scss';

.close {
  position: relative;
  width: vw(44px);
  height: vw(44px);
  background-color: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  outline: none !important;

  &:hover {
    &::after,
    &::before {
      background-color: $black;
    }
  }

  @media (max-width: $lg) {
    width: 20px;
    height: 20px;
  }

  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -3px;
    width: 100%;
    height: 6px;
    background-color: $white;

    @media (max-width: $lg) {
      height: 4px;
    }
  }

  &::after {
    transform: rotate(45deg);
  }

  &::before {
    transform: rotate(-45deg);
  }
}
</style>
