<template>
  <div class="hero">
    <Logo fill="#ffffff" class="hero_logo"></Logo>
    <div id="hero-animation-bg" class="hero_animation-bg"></div>
    <div class="hero_container">
      <nuxt-link
        class="hero_link"
        to="/"
        data-aos="slide-up"
        data-aos-duration="750"
        data-aos-delay="1800"
      >
        <div class="hero_bg"></div>
        <TitleBox
          class="hero_title-box"
          :title="trade.title"
          :text="trade.text"
        ></TitleBox>
      </nuxt-link>
      <nuxt-link
        class="hero_link"
        to="/"
        data-aos="slide-up"
        data-aos-duration="750"
        data-aos-delay="1900"
      >
        <div class="hero_bg"></div>
        <TitleBox
          class="hero_title-box"
          :title="logistics.title"
          :text="logistics.text"
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
    const bg = document.getElementById('hero-animation-bg')
    hero.style.opacity = 0
    bg.classList.add('action')
    setTimeout(() => {
      bg.classList.add('pause')
      hero.style.opacity = 1
      // hero.style.backgroundColor = '#000000'
      setTimeout(() => {
        bg.classList.remove('pause')
      }, 800)
    }, 1000)
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
    animation-name: logoAnimation;
    animation-delay: 0.68s;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: linear;

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
    left: 0;
    width: 100%;
    background-color: $black;
    z-index: 100;

    &.action {
      animation-name: heroAnimation;
      animation-duration: 2s;
      animation-timing-function: ease;
    }

    &.pause {
      animation-play-state: paused;
    }
  }
}

@keyframes heroAnimation {
  0% {
    height: 0%;
    bottom: 0;
  }

  52% {
    height: 100%;
    bottom: 0%;
  }

  100% {
    height: 0%;
    bottom: 100%;
  }
}

@keyframes logoAnimation {
  0% {
    opacity: 0;
    transform: translate(-50%, 20%);
  }

  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
</style>
