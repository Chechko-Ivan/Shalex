<template>
  <nav class="nav">
    <div class="nav_container">
      <div class="nav_header">
        <div
          class="nav_logo"
          data-aos="fade"
          data-aos-delay="50"
          data-aos-duration="1200"
        >
          <Logo></Logo>
        </div>

        <div class="nav_local-button">
          <button data-aos="fade" data-aos-delay="100" data-aos-duration="1200">
            Ru
          </button>
          <button data-aos="fade" data-aos-delay="150" data-aos-duration="1200">
            En
          </button>
        </div>

        <Close
          data-aos="fade"
          data-aos-delay="300"
          @close-menu="closeMenu"
        ></Close>
      </div>

      <div class="nav_body">
        <ul class="nav_list">
          <li class="nav_item">
            <a
              v-scroll-to="'#s-about'"
              class="nav_link"
              href="#"
              data-aos="fade-right"
              data-aos-delay="350"
              @close-menu="closeMenu"
              >About us</a
            >
          </li>
          <li class="nav_item">
            <a
              v-scroll-to="'#s-products'"
              class="nav_link"
              href="#"
              data-aos="fade-right"
              data-aos-delay="450"
              @close-menu="closeMenu"
              >Products</a
            >
          </li>
          <li class="nav_item">
            <a
              v-scroll-to="'#s-whu-us'"
              class="nav_link"
              href="#"
              data-aos="fade-right"
              data-aos-delay="550"
              @close-menu="closeMenu"
              >Why us</a
            >
          </li>
          <li class="nav_item">
            <a
              v-scroll-to="'#s-contacts'"
              class="nav_link"
              href="#"
              data-aos="fade-right"
              data-aos-delay="650"
              @close-menu="closeMenu"
              >Contacts</a
            >
          </li>
        </ul>
      </div>

      <div class="nav_link-to">
        <nuxt-link
          to="/logistics"
          data-aos="fade-right"
          data-aos-delay="700"
          data-aos-offset="-1000"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 407.437 407.437">
            <path
              d="M203.718 322.93L21.18 140.984 0 162.232l203.718 203.055 203.72-203.055-21.18-21.248zm203.72-259.532l-21.18-21.248-182.54 181.945L21.18 42.15 0 63.398l203.718 203.055z"
            ></path>
          </svg>
          Logistics
        </nuxt-link>
      </div>

      <div class="nav_footer">
        <span
          class="developer"
          data-aos="fade"
          data-aos-delay="1000"
          data-aos-offset="-1000"
        >
          Developed in
          <a href="https://maksis.by">
            <img :src="LogoMaksis" alt="Maksis digital agency logo" />Maksis
            digital agency
          </a>
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
import LogoMaksis from '@/static/maksis-logo.png'
import Logo from '@/components/Logo.vue'
import Close from '@/components/Close.vue'

export default {
  name: 'Nav',

  components: { Logo, Close },

  computed: {
    LogoMaksis: () => LogoMaksis
  },

  methods: {
    closeMenu() {
      this.$emit('close-menu')
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/function.scss';
@import '@/assets/scss/breakpoints.scss';

.nav {
  position: fixed;
  top: 0;
  left: 0;
  max-width: vw(830px);
  width: 100%;
  background-color: $red;
  z-index: 10;
  padding: vh(50px) vw(50px) vh(50px) vw(70px);

  @media (max-width: $lg) {
    max-width: 450px;
  }

  @media (max-width: $sm) {
    height: 100vh;
  }

  &_container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &_logo {
    width: vw(155px);

    @media (max-width: $lg) {
      width: 90px;
    }

    svg {
      fill: $white;
    }
  }

  &_local-button {
    margin-left: auto;
    margin-right: vw(45px);

    button {
      position: relative;
      background-color: transparent;
      border: 0;
      font-size: 14px;
      text-transform: uppercase;
      color: $white;
      padding: 0 2px;
      cursor: pointer;

      &:hover {
        color: $black;
      }

      &:not(:last-of-type) {
        &:after {
          content: '';
          position: absolute;
          top: 50%;
          margin-top: -4px;
          right: -2px;
          height: 10px;
          width: 1px;
          background-color: $white;
        }
      }
    }
  }

  &_list {
    margin: vh(110px) 0 0 vw(115px);
    padding: 0;
    text-indent: 0;
    list-style: none;
    list-style-position: outside;
  }

  &_item {
    &:not(:last-of-type) {
      margin-bottom: vh(20px);
    }
  }

  &_link {
    display: inline-block;
    font-size: em(64px);
    font-weight: 900;
    color: $white;
    line-height: 1;
    transition: color 0.4s ease;

    @media (max-width: $lg) {
      font-size: em(40px);
    }

    @media (max-width: $sm) {
      font-size: em(50px);
    }

    &:hover {
      color: $black;
    }
  }

  &_link-to {
    margin-top: vh(115px);
    text-align: right;

    @media (max-width: $sm) {
      margin-top: auto !important;
    }

    a {
      position: relative;
      font-size: em(28px);
      padding-left: 25px;
      color: $white;

      &:hover {
        color: $black;

        svg {
          transform: rotate(-90deg) translateX(50%) translateY(10px);
        }
      }

      svg {
        position: absolute;
        top: 50%;
        fill: $white;
        left: 0;
        width: 13px;
        height: 13px;
        transform: rotate(-90deg) translateX(50%);
      }
    }
  }

  &_footer {
    margin-top: vh(15px);
    display: flex;
    justify-content: flex-end;
  }
}

.developer {
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 10px;
  color: $white;

  a {
    display: flex;
    align-items: center;
    color: $white;

    &:hover {
      color: $black;
    }
  }

  img {
    width: 38px;
    margin: 0 3px 0 10px;
  }
}
</style>
