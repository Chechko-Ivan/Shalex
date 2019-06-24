<template>
  <div class="hero">
    <Logo fill="#ffffff" class="hero_logo"></Logo>
    <div class="hero_animation-bg"></div>
    <div class="hero_animation-bg second"></div>
    <div class="hero_container">
      <nuxt-link class="hero_link hero_link-first" to="/trade">
        <div class="hero_bg"></div>
        <TitleBox
          class="hero_title-box"
          :title="trade.title"
          :text="trade.text"
          data-aos="fade-up"
          data-aos-delay="2200"
          data-aos-duration="1000"
        ></TitleBox>
      </nuxt-link>

      <nuxt-link class="hero_link" to="/logistics">
        <div class="hero_bg"></div>
        <TitleBox
          class="hero_title-box"
          :title="logistics.title"
          :text="logistics.text"
          data-aos="fade-up"
          data-aos-delay="2300"
          data-aos-duration="1000"
        ></TitleBox>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import TitleBox from '@/components/TitleBox.vue'

export default {
  components: {
    Logo,
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
  },

  mounted() {
    const hero = document.querySelector('.hero_container')
    const bg = document.querySelectorAll('.hero_animation-bg')
    hero.style.opacity = 0
    for (let i = 0; i < bg.length; i++) {
      bg[i].classList.add('firstAction')
      setTimeout(() => {
        bg[i].classList.add('secondAction')
        hero.style.opacity = 1
      }, 1800)
    }
  }
}
</script>

<style lang="scss">
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

  &_logo {
    position: absolute;
    top: 25%;
    left: 50%;
    width: 480px;
    z-index: 101;
    opacity: 0;
    animation-name: thirdAction;
    animation-fill-mode: forwards;
    animation-delay: 0.9s;
    animation-duration: 0.9s;
    animation-timing-function: ease;

    @media (max-width: $xl) {
      width: 400px;
    }

    @media (max-width: $lg) {
      top: 50%;
      width: 350px;
    }

    @media (max-width: $sm) {
      width: 250px;
    }
  }

  &_link {
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-basis: 50%;

    &:first-of-type {
      .hero_bg {
        background-image: url('../static/hero-trade.jpg');
        background-position: 100% center;
      }

      &:hover {
        .hero_bg {
          filter: grayscale(0%);
        }

        .red-flesh {
          width: 100% !important;
        }
      }
    }

    &:last-of-type {
      .hero_bg {
        background-image: url('../static/hero-logistics.jpg');
        background-position: 40% center;
      }

      &:hover {
        .hero_bg {
          filter: grayscale(0%);
        }

        .red-flesh {
          width: 100%;
        }
      }
    }
  }

  &_bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    filter: grayscale(100%);
    transition: filter 0.8s;
    z-index: -1;
  }

  .title-box {
    margin-bottom: vh(160px);

    @media (max-width: $lg) {
      margin-top: auto;
      margin-bottom: auto;
    }
  }

  &_animation-bg {
    position: absolute;
    bottom: 0;
    width: 50%;
    height: 100%;
    background-color: $black;
    z-index: 100;
    transform: translateY(100%);

    &:first-of-type {
      left: 0;

      &.secondAction {
        animation-name: secondAction;
        animation-duration: 0.8s;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.6, 0.05, 0.4, 1);
      }
    }

    &.second {
      right: 0;

      &.secondAction {
        animation-name: secondAction;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.6, 0.05, 0.4, 1);
      }
    }

    &.firstAction {
      animation-name: firstAction;
      animation-duration: 0.9s;
      animation-fill-mode: forwards;
      animation-timing-function: cubic-bezier(0.6, 0.05, 0.4, 1);
    }
  }
}

@keyframes firstAction {
  100% {
    transform: translateY(0%);
  }
}

@keyframes secondAction {
  0% {
    transform: translateY(0%);
  }

  100% {
    transform: translateY(-100%);
  }
}

@keyframes thirdAction {
  0% {
    opacity: 0;
    transform: translate(-50%, 0%);
  }

  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
</style>
