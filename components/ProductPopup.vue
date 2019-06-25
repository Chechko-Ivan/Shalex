<template>
  <div class="product-popup">
    <div class="product-popup_container">
      <div class="product-popup_title">
        <h3 data-aos="fade" data-aos-delay="100" data-aos-duration="1000">
          {{ data.title }}
        </h3>
        <span class="flesh"></span>
      </div>
      <p
        class="product-popup_text"
        data-aos="fade-up"
        data-aos-delay="250"
        data-aos-duration="1000"
      >
        {{ data.text }}
      </p>

      <div class="button-wrapper">
        <Button
          v-scroll-to="'#s-form'"
          data-aos="fade"
          data-aos-delay="500"
          data-aos-duration="1000"
          @handle-click="closePopup"
        ></Button>
      </div>
    </div>

    <Close @close-menu="closePopup"></Close>
  </div>
</template>

<script>
import Close from '@/components/Close.vue'
import Button from '@/components/Button.vue'

export default {
  name: 'ProductPopup',

  components: { Close, Button },

  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },

  methods: {
    closePopup() {
      setTimeout(() => {
        this.$emit('close-popup')
      }, 50)
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/function.scss';
@import '@/assets/scss/breakpoints.scss';

.product-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  max-width: 1300px;
  width: 100%;
  padding: vh(80px) vw(110px);
  transform: translate(-50%, -50%);
  background-color: $white;
  z-index: 8;

  &_container {
    @media (max-width: $sm) {
      display: flex;
      flex-direction: column;
    }
  }

  &_title {
    position: relative;
    display: inline-block;
    padding: 2px 3px;

    h3 {
      font-size: em(28px);
      font-weight: 400;
      line-height: 1;
    }

    .flesh {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 30%;
      z-index: 0;
      background-color: rgba($black, 0.19);

      @media (max-width: $sm) {
        width: 30px;
      }
    }
  }

  &_text {
    margin-top: vh(45px);
    width: 55%;
    line-height: 1.4;
    color: #717171;
    font-size: em(14px);

    @media (max-width: $sm) {
      width: 100%;
    }
  }

  .close {
    position: absolute;
    top: vh(35px);
    right: vw(35px);

    &:hover {
      &::before,
      &::after {
        background-color: $red;
      }
    }

    &::before,
    &::after {
      background-color: $black;
    }
  }

  .button-wrapper {
    display: flex;
    justify-content: flex-end;

    @media (max-width: $sm) {
      margin-top: 30px;
      justify-content: center;
    }
  }
}
</style>
