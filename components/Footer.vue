<template>
  <footer class="footer" :class="{ footerLogistics: !formTrade }">
    <div class="footer_container">
      <h2 data-aos="fade" data-aos-delay="250" data-aos-duration="1000">
        {{ title }}
      </h2>
      <nuxt-link
        :to="exLink"
        class="external-link"
        data-aos="fade-right"
        data-aos-delay="300"
        data-aos-offset="-500"
        data-aos-duration="1000"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 407.437 407.437">
          <path
            d="M203.718 322.93L21.18 140.984 0 162.232l203.718 203.055 203.72-203.055-21.18-21.248zm203.72-259.532l-21.18-21.248-182.54 181.945L21.18 42.15 0 63.398l203.718 203.055z"
          ></path>
        </svg>
        <div>
          <span class="external-link_title">{{ exTitle }}</span>
          <span class="external-link_subtitle">
            {{ exSubTitle }}
            <b>{{ exSubTitleBold }}</b>
          </span>
        </div>
      </nuxt-link>
    </div>

    <div
      class="footer_preview"
      :style="`background-image: url('${formTrade ? img1 : img2}');`"
    ></div>

    <img v-if="formTrade" src="@/static/x.png" class="footer_decor" alt="x" />
  </footer>
</template>

<script>
import img1 from '../static/trade-footer-img.jpg'
import img2 from '../static/logistics-footer-img.jpg'

export default {
  name: 'Footer',

  props: {
    title: {
      type: String,
      default: 'Using mature market instruments'
    },
    formTrade: {
      type: Boolean,
      default: true
    },
    exTitle: {
      type: String,
      default: 'Logistics'
    },
    exLink: {
      type: String,
      default: '/logistics'
    },
    exSubTitle: {
      type: String,
      default: 'PRESS HERE TO EXPLORE'
    },
    exSubTitleBold: {
      type: String,
      default: 'LOGISTICS SECTION'
    }
  },

  computed: {
    img1: () => img1,
    img2: () => img2
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/function.scss';
@import '@/assets/scss/breakpoints.scss';

.footer {
  position: relative;
  background-color: $red;

  &.footerLogistics {
    .footer_preview {
      width: vw(1580px);
    }
  }

  &_container {
    padding: vh(110px) 0 vh(120px) vw(490px);

    @media (max-width: $lg) {
      padding-left: vw(300px);
    }

    @media (max-width: $sm) {
      padding: vh(80px) vw(90px);
    }
  }

  h2 {
    position: relative;
    font-size: em(47px);
    font-weight: 400;
    color: $white;
    z-index: 1;

    @media (max-width: $xl) {
      font-size: em(35px);
    }

    @media (max-width: $sm) {
      text-align: center;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -5px;
      width: 55px;
      height: 100%;
      background-color: rgba($black, 0.2);
      z-index: -1;

      @media (max-width: $sm) {
        display: none;
      }
    }
  }

  .external-link {
    margin-top: 35px;
  }

  &_decor {
    position: absolute;
    bottom: 0;
    left: vw(200px);

    @media (max-width: $osx) {
      left: vw(100px);
    }

    @media (max-width: $xl) {
      width: 150px;
    }

    @media (max-width: $sm) {
      left: 50%;
      bottom: 50%;
      transform: translate(-50%, 50%);
    }
  }

  &_preview {
    position: absolute;
    top: 0;
    right: 25px;
    width: vw(915px);
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media (max-width: $sm) {
      display: none;
    }
  }
}

.external-link {
  position: relative;
  display: flex;
  align-items: center;
  z-index: 1;

  &:hover {
    .external-link_title {
      color: $black;
    }

    svg {
      transform: rotate(-90deg) translateY(10px);
    }
  }

  > div {
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    color: $white;
  }

  &_title {
    font-size: em(28px);
  }

  &_subtitle {
    margin-top: 10px;
    font-size: em(14px);
    text-transform: uppercase;
  }

  svg {
    width: vw(45px);
    height: vw(45px);
    fill: $white;
    transform: rotate(-90deg);

    @media (max-width: $md) {
      width: 25px;
      height: 25px;
    }
  }
}
</style>
