<template>
  <div class="hero">
    <!-- <Logo></Logo> -->
    <div class="hero_container">
      <nuxt-link class="hero_link" to="/">
        <TitleBox :title="trade.title" :text="trade.text"></TitleBox>
      </nuxt-link>
      <nuxt-link class="hero_link" to="/">
        <TitleBox :title="logistics.title" :text="logistics.text"></TitleBox>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'
import TitleBox from '@/components/TitleBox.vue'

export default {
  components: {
    // Logo,
    TitleBox
  },

  data() {
    return {
      trade: {
        title: 'Trade',
        text: 'Meeting the highest quality demands is our commitment to quality'
      },
      logistics: {
        title: 'Logistics',
        text: 'Meeting the highest quality demands is our commitment to quality'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/function.scss';
@import '@/assets/scss/breakpoints.scss';

.hero {
  position: relative;
  height: 100vh;

  &_container {
    display: flex;
    height: 100%;
    overflow: hidden;

    @media (max-width: $lg) {
      flex-direction: column;
    }
  }

  &_link {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: vh(160px);
    flex-basis: 50%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    filter: grayscale(100%);
    transition: filter 1.5s;

    @media (max-width: $lg) {
      padding: 0;
      align-items: center;
    }

    &:first-of-type {
      background-image: url('../static/hero-trade.jpg');

      &:hover,
      &:focus {
        filter: grayscale(0%);
      }
    }

    &:last-of-type {
      background-image: url('../static/hero-logistics.jpg');

      &:hover,
      &:focus {
        filter: grayscale(0%);
      }
    }
  }
}
</style>
