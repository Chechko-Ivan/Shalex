<template>
  <div class="app-wrapper">
    <div class="app-header_fixed-nav">
      <Burger
        data-aos="fade"
        data-aos-duration="800"
        data-aos-delay="700"
        @open-menu="toggleMenu"
      ></Burger>
      <div
        class="app-header_logo"
        data-aos="fade"
        data-aos-duration="800"
        data-aos-delay="800"
      >
        <Logo></Logo>
      </div>
    </div>
    <Nav
      v-if="menuOpen"
      data-aos="zoom-out-right"
      data-aos-delay="50"
      data-aos-duration="500"
      @close-menu="toggleMenu"
    ></Nav>
    <header
      class="app-header"
      :style="`background-image: url(${Headerbackground});`"
    >
      <div class="app-header_container">
        <TitleBox
          :title="HeaderTitle"
          :text="HeaderText"
          :is-link="false"
          data-aos="fade"
          data-aos-delay="600"
          data-aos-duration="1000"
        ></TitleBox>
      </div>
    </header>

    <section
      class="aubout-us"
      data-aos="slide-up"
      data-aos-delay="900"
      data-aos-duration="800"
    >
      <a
        v-scroll-to="'#s-about'"
        class="aubout-us_scroll-bottom"
        href="#"
        data-scroll-link="s-about"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 407.437 407.437">
          <path
            d="M203.718 322.93L21.18 140.984 0 162.232l203.718 203.055 203.72-203.055-21.18-21.248zm203.72-259.532l-21.18-21.248-182.54 181.945L21.18 42.15 0 63.398l203.718 203.055z"
          ></path>
        </svg>
      </a>
      <div id="s-about" class="aubout-us_content">
        <h2
          class="aubout-us_title"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          Meeting the highest quality demands is our commitment to quality
        </h2>
        <p
          class="aubout-us_text"
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="1000"
        >
          We’re living in exciting times of an exponential audio technology
          revolution. Remember how not long ago people didn’t have mobile
          phones? Or internet? In the blink of an eye it’s become impossible to
          imagine life before the eruption of such technologies.
        </p>
      </div>
      <span class="aubout-us_label">Trade</span>
    </section>

    <section class="s-products">
      <div class="s-products_container">
        <div class="s-products_preview">
          <div
            class="s-products_image"
            :style="`background-image: url('${ProductImage}');`"
            data-aos="fade"
            data-aos-delay="100"
            data-aos-duration="1000"
          ></div>
          <span
            class="s-products_image-desc"
            data-aos="fade"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            Own WAREHOUSES /
            <strong>Best QUALITY & SERVICE</strong>
          </span>
        </div>
        <div class="s-products_title">
          <h2 data-aos="fade" data-aos-delay="100" data-aos-duration="1000">
            What we offer
          </h2>
          <ul data-aos="fade" data-aos-delay="100" data-aos-duration="1000">
            <li>- Metals and scrap</li>
            <li>- Ferroalloys</li>
            <li>- Oxides</li>
          </ul>
        </div>
      </div>

      <div
        id="s-products"
        class="s-products_items-wrapper"
        data-aos="fade"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <template v-for="product in productData">
          <div :key="product.id" class="s-products_items">
            <div class="s-products_items-title">
              <h3>{{ product.title }}</h3>
              <span class="flesh"></span>
            </div>
            <ul>
              <li v-for="item in product.items" :key="item.id">
                <button @click="openProductPopup(product.id, item.id)">
                  {{ item.title }}
                </button>
              </li>
            </ul>
          </div>
        </template>
      </div>
      <img :src="ProductSxema" alt="Sxema" class="s-products_sxema" />
    </section>

    <section id="s-whu-us" class="s-whu-us">
      <div class="s-whu-us_container">
        <div class="s-whu-us_title">
          <h2 data-aos="fade" data-aos-delay="100" data-aos-duration="1000">
            Why you should work with us
          </h2>
          <span class="s-whu-us_breadcrumbs">
            <span class="accent">01</span>
            / PASSIONED
            <span class="accent">02</span>
            / MOTIVATED
            <span class="accent">03</span>
            / HARD WORKING
          </span>
        </div>
        <div class="s-whu-us_content">
          <ul class="s-whu-us_nav">
            <li
              v-for="navItem in tabNav"
              :key="navItem.id"
              data-aos="fade-up"
              :data-aos-delay="`${navItem.id}00`"
              data-aos-duration="1000"
            >
              <button
                :class="{ active: navItem.active }"
                @click="changeTab(navItem.id)"
              >
                {{ navItem.title }}
              </button>
            </li>
          </ul>
          <span
            class="s-whu-us_breadcrumbs"
            data-aos="fade"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            OWN WAREHOUSES /
            <span class="accent">{{ tabData[currentTabData - 1].title }}</span>
          </span>
          <p
            v-for="(text, index) in tabData[currentTabData - 1].text"
            :key="index"
            class="s-whu-us_text"
            data-aos="fade-up"
            :data-aos-delay="`${index}00`"
            data-aos-duration="1000"
          >
            {{ text }}
          </p>
        </div>
      </div>
    </section>

    <section id="s-contacts" class="s-contacts">
      <div class="s-contacts_container">
        <div
          class="s-contacts_banner"
          data-aos="fade"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <span
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 407.437 407.437"
            >
              <path
                d="M203.718 322.93L21.18 140.984 0 162.232l203.718 203.055 203.72-203.055-21.18-21.248zm203.72-259.532l-21.18-21.248-182.54 181.945L21.18 42.15 0 63.398l203.718 203.055z"
              ></path>
            </svg>
            <h2 class="s-contacts_title">Feel free to contact us</h2>
            <span class="s-contacts_subtitle"
              >If you need any help / beneficial partnership proposals</span
            >
          </span>
        </div>

        <div
          class="s-contacts_form"
          data-aos="zoom-out"
          data-aos-delay="500"
          data-aos-duration="900"
        >
          <Form></Form>
        </div>
      </div>
      <div
        class="s-contacts_image"
        :style="`background-image: url(${ContactDecor});`"
      ></div>
    </section>

    <section class="s-banner">
      <div class="s-banner_container">
        <div class="s-banner_col">
          <h2
            class="s-banner_title"
            data-aos="fade"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            Simple as bottle of water.
            <br />Trust & security is our priority.
          </h2>
          <p
            class="s-banner_text"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            This is the perfect app for coffee lovers, which can build a route
            to your favourite coffee house, or find the nearest replacement. You
            can also enter the name of the coffee shop in the search space and
            get a detailed description, read reviews and recommendations and get
            acquainted with the menu.
          </p>
        </div>
        <div class="s-banner_col">
          <Button
            data-aos="fade"
            data-aos-delay="300"
            data-aos-duration="900"
          ></Button>
        </div>
      </div>
    </section>

    <Contact></Contact>

    <Footer></Footer>

    <ProductPopup
      v-if="popupOpen"
      :data="productPopupData"
      @close-popup="togglePopup"
    ></ProductPopup>
  </div>
</template>

<script>
import Headerbackground from '@/static/hero-trade.jpg'
import ProductImage from '@/static/trade-product-img.jpg'
import ProductSxema from '@/static/trade-sxema-1.png'
import ContactDecor from '@/static/trade-contacts-image.jpg'

import Burger from '@/components/Burger.vue'
import Logo from '@/components/Logo.vue'
import TitleBox from '@/components/TitleBox.vue'
import Nav from '@/components/Nav.vue'
import ProductPopup from '@/components/ProductPopup.vue'
import Form from '@/components/Form.vue'
import Button from '@/components/Button.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Trade',

  components: {
    Burger,
    Logo,
    TitleBox,
    Nav,
    ProductPopup,
    Form,
    Button,
    Contact,
    Footer
  },

  data() {
    return {
      menuOpen: false,
      popupOpen: false,
      productPopupData: {},
      HeaderTitle: 'Trade',
      HeaderText:
        'Meeting the highest quality demands is our commitment to quality',
      productData: [
        {
          id: 1,
          title: 'Metals and scrap',
          items: [
            {
              id: 1,
              title: 'Tantalum',
              text:
                'A chemical element with the symbol Ta and atomic number 73. Previously known as tantalium, its name comes from Tantalus, a villain from Greek mythology. Tantalum is a rare, hard, blue-gray, lustrous transition metal that is highly corrosion-resistant.'
            },
            {
              id: 2,
              title: 'Niobium',
              text:
                'A chemical element with the symbol Ta and atomic number 73. Previously known as tantalium, its name comes from Tantalus, a villain from Greek mythology. Tantalum is a rare, hard, blue-gray, lustrous transition metal that is highly corrosion-resistant.'
            },
            {
              id: 3,
              title: 'Hafnium',
              text:
                'A chemical element with the symbol Ta and atomic number 73. Previously known as tantalium, its name comes from Tantalus, a villain from Greek mythology. Tantalum is a rare, hard, blue-gray, lustrous transition metal that is highly corrosion-resistant.'
            },
            {
              id: 4,
              title: 'Vanadium',
              text:
                'A chemical element with the symbol Ta and atomic number 73. Previously known as tantalium, its name comes from Tantalus, a villain from Greek mythology. Tantalum is a rare, hard, blue-gray, lustrous transition metal that is highly corrosion-resistant.'
            },
            {
              id: 5,
              title: 'Tungsten',
              text:
                'A chemical element with the symbol Ta and atomic number 73. Previously known as tantalium, its name comes from Tantalus, a villain from Greek mythology. Tantalum is a rare, hard, blue-gray, lustrous transition metal that is highly corrosion-resistant.'
            },
            {
              id: 6,
              title: 'Molybdenum',
              text:
                'A chemical element with the symbol Ta and atomic number 73. Previously known as tantalium, its name comes from Tantalus, a villain from Greek mythology. Tantalum is a rare, hard, blue-gray, lustrous transition metal that is highly corrosion-resistant.'
            },
            {
              id: 7,
              title: 'Nickel',
              text:
                'A chemical element with the symbol Ta and atomic number 73. Previously known as tantalium, its name comes from Tantalus, a villain from Greek mythology. Tantalum is a rare, hard, blue-gray, lustrous transition metal that is highly corrosion-resistant.'
            },
            {
              id: 8,
              title: 'Stainless',
              text:
                'A chemical element with the symbol Ta and atomic number 73. Previously known as tantalium, its name comes from Tantalus, a villain from Greek mythology. Tantalum is a rare, hard, blue-gray, lustrous transition metal that is highly corrosion-resistant.'
            }
          ]
        },
        {
          id: 2,
          title: 'Ferroalloys',
          items: [
            {
              id: 1,
              title: 'Ferronickel',
              text:
                'A chemical element with the symbol Ta and atomic number 73. Previously known as tantalium, its name comes from Tantalus, a villain from Greek mythology. Tantalum is a rare, hard, blue-gray, lustrous transition metal that is highly corrosion-resistant.'
            },
            {
              id: 2,
              title: 'Ferromolybdenum',
              text:
                'A chemical element with the symbol Ta and atomic number 73. Previously known as tantalium, its name comes from Tantalus, a villain from Greek mythology. Tantalum is a rare, hard, blue-gray, lustrous transition metal that is highly corrosion-resistant.'
            },
            {
              id: 3,
              title: 'Ferroniobium',
              text:
                'A chemical element with the symbol Ta and atomic number 73. Previously known as tantalium, its name comes from Tantalus, a villain from Greek mythology. Tantalum is a rare, hard, blue-gray, lustrous transition metal that is highly corrosion-resistant.'
            },
            {
              id: 4,
              title: 'Ferrotangsten',
              text:
                'A chemical element with the symbol Ta and atomic number 73. Previously known as tantalium, its name comes from Tantalus, a villain from Greek mythology. Tantalum is a rare, hard, blue-gray, lustrous transition metal that is highly corrosion-resistant.'
            },
            {
              id: 5,
              title: 'Ferrovanadium',
              text:
                'A chemical element with the symbol Ta and atomic number 73. Previously known as tantalium, its name comes from Tantalus, a villain from Greek mythology. Tantalum is a rare, hard, blue-gray, lustrous transition metal that is highly corrosion-resistant.'
            }
          ]
        },
        {
          id: 3,
          title: 'Oxides',
          items: [
            {
              id: 1,
              title: 'Niobium Pentoxide (Nb2O5)',
              text:
                'A chemical element with the symbol Ta and atomic number 73. Previously known as tantalium, its name comes from Tantalus, a villain from Greek mythology. Tantalum is a rare, hard, blue-gray, lustrous transition metal that is highly corrosion-resistant.'
            },
            {
              id: 2,
              title: 'Tantalum Pentoxide (Ta2O5)',
              text:
                'A chemical element with the symbol Ta and atomic number 73. Previously known as tantalium, its name comes from Tantalus, a villain from Greek mythology. Tantalum is a rare, hard, blue-gray, lustrous transition metal that is highly corrosion-resistant.'
            }
          ]
        }
      ],

      currentTabData: 1,

      tabNav: [
        {
          id: 1,
          active: true,
          title: 'Reliable supplier'
        },
        {
          id: 2,
          active: false,
          title: 'Best quality you can find'
        },
        {
          id: 3,
          active: false,
          title: 'Always on time'
        },
        {
          id: 4,
          active: false,
          title: 'Prices will satisfy you'
        }
      ],

      tabData: [
        {
          id: 1,
          title: 'BEST QUALITY & SERVICE',
          text: [
            'We’re living in exciting times of an exponential audio technology revolution. Remember how not long ago people didn’t have mobile phones?',
            'Or internet? In the blink of an eye it’s become impossible to imagine life before the eruption of such technologies.'
          ]
        },
        {
          id: 2,
          title: 'BESTTT QUALITY & SERVICE',
          text: [
            'We’re living in exciting times of an exponential audio technology revolution. Remember how not long ago people didn’t have mobile phones?',
            'Or internet? In the blink of an eye it’s become impossible to imagine life before the eruption of such technologies.'
          ]
        },
        {
          id: 3,
          title: 'BESTTT QUALITY & SERVICE',
          text: [
            'We’re living in exciting times of an exponential audio technology revolution. Remember how not long ago people didn’t have mobile phones?'
          ]
        },
        {
          id: 4,
          title: 'BESTTTT QQQQUALITY & SERVICE',
          text: [
            'Or internet? In the blink of an eye it’s become impossible to imagine life before the eruption of such technologies.'
          ]
        }
      ]
    }
  },

  computed: {
    Headerbackground: () => Headerbackground,
    ProductImage: () => ProductImage,
    ProductSxema: () => ProductSxema,
    ContactDecor: () => ContactDecor
  },

  mounted() {
    document.addEventListener('scroll', this.handleScroll)
  },

  beforeDestroy() {
    document.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },

    handleScroll() {
      const menu = document.querySelector('.app-header_fixed-nav')
      const menuHeight = menu.clientHeight
      const headerHeight = document.querySelector('.app-header').clientHeight
      if (window.pageYOffset + menuHeight > headerHeight) {
        menu.classList.add('black')
      } else {
        menu.classList.remove('black')
      }
      if (window.pageYOffset > 0) {
        menu.classList.add('scrolled')
      } else {
        menu.classList.remove('scrolled')
      }
    },

    togglePopup() {
      this.popupOpen = !this.popupOpen
    },

    openProductPopup(productId, itemId) {
      const data = this.productData
        .find(list => list.id === productId)
        .items.find(item => item.id === itemId)
      this.productPopupData = data
      this.togglePopup()
    },

    changeTab(id) {
      const currentTabNav = this.tabNav.find(tab => tab.active)
      // eslint-disable-next-line no-useless-return
      if (currentTabNav.id === id) return

      currentTabNav.active = false
      this.currentTabData = id
      this.tabNav.find(tab => tab.id === id).active = true
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/function.scss';
@import '@/assets/scss/breakpoints.scss';

.app-wrapper {
  background-color: #f7f7f7;
}

.app-header {
  width: 100%;
  height: 100vh;
  min-height: 550px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &_container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &_fixed-nav {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    padding: vh(70px) vw(65px);
    z-index: 5;

    @media (max-width: $md) {
      padding: vh(45px) vw(65px);
    }

    &.scrolled {
      background-color: $white;

      .burger {
        &::after,
        &::before,
        .burger_line {
          background-color: $black;
        }
      }

      .app-header_logo {
        svg {
          fill: $black;
        }
      }
    }

    &.black {
      background-color: $black !important;

      .burger {
        &::after,
        &::before,
        .burger_line {
          background-color: $white !important;
        }
      }

      .app-header_logo {
        svg {
          fill: $white;
        }
      }
    }
  }

  &_logo {
    width: 155px;
    margin-left: vw(45px);

    @media (max-width: $lg) {
      width: 90px;
    }

    @media (max-width: $md) {
      margin-left: 20px;
    }

    svg {
      fill: $white;
      transition-duration: 0s;
    }
  }
}

.aubout-us {
  margin-top: vh(-165px);
  position: relative;
  overflow: hidden;
  display: flex;
  z-index: 0;
  justify-content: flex-end;

  @media (max-width: $md) {
    margin-top: vh(-120px);
  }

  &_content {
    width: 61%;
    background-color: $red;
    padding: vh(165px) vw(155px) vh(150px) vw(155px);

    @media (max-width: $md) {
      padding: vh(165px) vw(90px) vh(80px) vw(90px);
    }

    @media (max-width: $sm) {
      width: 100%;
      padding: vh(165px) vw(90px) vh(80px) vw(90px);
    }
  }

  &_title {
    font-size: em(47px);
    font-weight: 400;
    color: $white;

    @media (max-width: $osx) {
      font-size: em(35px);
    }

    @media (max-width: $lg) {
      font-size: em(25px);
    }
  }

  &_text {
    margin-top: vh(60px);
    font-size: em(18px);
    line-height: 1.4;
    color: $white;
  }

  &_label {
    position: absolute;
    font-weight: 900;
    line-height: 1;
    transform: translate(5%, 40%);
    text-transform: uppercase;
    font-size: em(155px);
    color: #c92201;
    bottom: 0;
    right: 0;

    @media (max-width: $md) {
      font-size: em(80px);
    }
  }

  &_scroll-bottom {
    position: absolute;
    top: vh(40px);
    right: vw(40px);
    width: 48px;
    height: 48px;

    @media (max-width: $lg) {
      width: 35px;
      height: 35px;
    }

    @media (max-width: $md) {
      top: vh(30px);
    }

    &:hover {
      svg {
        fill: $black;
      }
    }

    svg {
      fill: $white;
    }
  }
}

.s-products {
  position: relative;

  &_container {
    display: flex;
    padding-left: vw(180px);

    @media (max-width: $xxl) {
      padding-left: vw(100px);
    }

    @media (max-width: $sm) {
      padding: 0 vw(90px);
      flex-direction: column-reverse;
    }
  }

  &_preview {
    margin-top: vh(-35px);
    width: 55%;
    height: vh(530px);
    z-index: 1;

    @media (max-width: $sm) {
      margin-top: vh(30px);
      width: 100%;
    }
  }

  &_image {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  &_image-desc {
    display: block;
    margin-top: vh(5px);
    font-size: em(14px);
    text-transform: uppercase;

    @media (max-width: $lg) {
      font-size: em(12px);
    }

    strong {
      color: $red;
    }
  }

  &_sxema {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-100%);
    z-index: 0;
    width: vw(330px);
  }

  &_title {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: vw(100px);
    margin-bottom: vh(-35px);

    @media (max-width: $sm) {
      margin-bottom: 0;
    }

    h2 {
      font-size: em(64px);
      color: $red;
      font-weight: 900;
      line-height: 1;

      @media (max-width: $xl) {
        font-size: em(50px);
      }

      @media (max-width: $lg) {
        font-size: em(45px);
      }

      @media (max-width: $md) {
        font-size: em(30px);
      }

      @media (max-width: $sm) {
        margin-top: 30px;
        text-align: center;
      }
    }

    ul {
      margin: vh(20px) 0 0 vw(20px);
      padding: 0;
      text-indent: 0;
      list-style: none;
      list-style-position: outside;
    }

    li {
      font-size: em(14px);
      color: $black2;

      @media (max-width: $sm) {
        font-size: em(18px);

        &:first-of-type {
          margin-top: 20px;
        }

        &:not(:last-of-type) {
          margin-bottom: 10px;
        }
      }
    }
  }

  &_items-wrapper {
    display: flex;
    justify-content: space-between;
    max-width: 1170px;
    padding: 0 vw(90px);
    margin: vh(170px) auto 0 auto;

    @media (max-width: $lg) {
      margin-top: vh(200px);
    }

    @media (max-width: $sm) {
      margin-top: 70px;
      flex-direction: column;
    }
  }

  &_items-title {
    position: relative;
    display: inline-block;
    width: 100%;

    h3 {
      margin: 0;
      font-size: em(28px);
      font-weight: 400;
      z-index: 1;

      @media (max-width: $sm) {
        display: block;
        text-align: center;
      }
    }

    .flesh {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 18%;
      z-index: 0;
      background-color: rgba($black, 0.19);

      @media (max-width: $sm) {
        display: none;
      }
    }
  }

  &_items {
    ul {
      margin: vh(25) 0 0 vw(20px);
      padding: 0;
      text-indent: 0;
      list-style: none;
      list-style-position: outside;

      @media (max-width: $sm) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 30px;
      }
    }

    li {
      &:not(:last-of-type) {
        margin-bottom: vh(10px);

        @media (max-width: $sm) {
          margin-bottom: 10px;
          padding: 0 10px;
        }
      }
    }

    button {
      border: 0;
      padding: 0;
      background-color: transparent;
      font-size: em(14px);
      color: $black2;
      outline: none !important;
      cursor: pointer;

      @media (max-width: $sm) {
        font-size: 16px;
      }

      &:hover {
        color: $red;
      }
    }
  }
}

.s-whu-us {
  position: relative;
  margin-top: vh(130px);
  padding: 0vh vw(290px) vh(120px) 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: $md) {
    padding-right: vw(90px);
  }

  &_container {
    position: relative;
    max-width: 1290px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  &_content {
    position: relative;
    padding: vh(280px) vw(85px) vh(165px) vw(115px);
    background-color: $white;
    max-width: vw(660px);
    width: 100%;

    @media (max-width: $xxl) {
      padding: vh(250px) vw(50px) vh(100px) vw(50px);
    }

    @media (max-width: $xl) {
      max-width: vw(800px);
    }

    @media (max-width: $md) {
      padding: vh(250px) vw(90px) vh(80px) vw(90px);
      max-width: 55%;
    }

    @media (max-width: $sm) {
      max-width: 70%;
      padding-left: vw(150px);
      padding-right: vw(40px);
    }
  }

  &_breadcrumbs {
    font-size: em(14px);
    text-transform: uppercase;

    @media (max-width: $xl) {
      font-size: em(10px);
    }

    .accent {
      color: $red;
    }
  }

  &_text {
    font-size: em(18px);
    line-height: 1.4;

    @media (max-width: $sm) {
      font-size: em(14px);
    }

    &:first-of-type {
      margin-top: vh(40px);
    }

    &:not(:last-of-type) {
      margin-bottom: vh(25px);
    }
  }

  &_nav {
    position: absolute;
    top: vh(220px);
    left: -210px;
    margin: 0;
    padding: 0;
    text-indent: 0;
    list-style: none;
    list-style-position: outside;

    @media (max-width: $sm) {
      left: -80px;
    }

    li {
      text-align: right;
      &:not(:last-of-type) {
        margin-bottom: 10px;

        @media (max-width: $sm) {
          margin-bottom: 5px;
        }
      }
    }

    button {
      padding: 0;
      padding-bottom: 2px;
      position: relative;
      background-color: transparent;
      border: 0;
      font-size: 14px;
      color: #797676;
      outline: none !important;
      cursor: pointer;

      @media (max-width: $sm) {
        font-size: em(10px);
      }

      &.active {
        color: $black;

        &::before {
          background-color: $black;
        }

        &::after {
          border-color: $black;
        }
      }

      &:hover {
        color: $black;

        &::after {
          border-color: $black;
        }
      }

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        right: -65px;
        position: absolute;
        height: 1px;
        background-color: #797676;
        width: 45px;

        @media (max-width: $sm) {
          display: none;
        }
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-bottom: 1px dashed #797676;
      }
    }
  }

  &_title {
    position: absolute;
    z-index: 1;
    top: vh(90px);
    right: vw(450px);

    @media (max-width: $xl) {
      top: vh(50px);
    }

    @media (max-width: $xl) {
      padding-left: vw(90px);
    }

    @media (max-width: $sm) {
      top: vh(20px);
    }

    h2 {
      font-size: em(64px);
      font-weight: 900;
      color: $red;

      @media (max-width: $xxl) {
        font-size: em(54px);
      }

      @media (max-width: $xl) {
        font-size: em(44px);
      }

      @media (max-width: $lg) {
        font-size: em(34px);
      }

      @media (max-width: $sm) {
        font-size: em(35px);
      }
    }
  }
}

.s-contacts {
  position: relative;
  padding: 0 vw(290px) vh(110px) vw(280px);
  width: 100%;

  @media (max-width: $lg) {
    padding: 0 vw(90px) vh(110px) vw(90px);
  }

  @media (max-width: $md) {
    padding-bottom: vh(90px);
  }

  &_container {
    position: relative;
    z-index: 1;
    background-color: transparent;
  }

  &_banner {
    display: flex;
    justify-content: flex-end;
    background-color: $red;
    padding: vh(60px) vw(150px) vh(60px) vw(90px);

    @media (max-width: $xxl) {
      padding-right: vw(100px);
    }

    @media (max-width: $osx) {
      padding-right: vw(70px);
    }

    @media (max-width: $md) {
      justify-content: flex-start;
      padding: vh(40px) vw(90px) vh(40px) vw(90px);
    }

    > span {
      position: relative;
      padding-left: vw(110px);

      @media (max-width: $osx) {
        padding-left: vw(70px);
      }

      @media (max-width: $xl) {
        padding-left: vw(50px);
      }

      @media (max-width: $lg) {
        padding-left: vw(80px);
      }

      @media (max-width: $md) {
        padding-left: 0;
      }
    }

    svg {
      position: absolute;
      top: 50%;
      left: 0;
      width: 45px;
      height: 45px;
      fill: $white;
      transform: rotate(90deg) translateX(-50%);

      @media (max-width: $osx) {
        width: 35px;
        height: 35px;
      }

      @media (max-width: $xl) {
        width: 25px;
        height: 25px;
      }

      @media (max-width: $md) {
        display: none;
      }
    }
  }

  &_title {
    font-size: em(28px);
    font-weight: 400;
    color: $white;

    @media (max-width: $osx) {
      font-size: em(24px);
    }

    @media (max-width: $xl) {
      font-size: em(20px);
    }

    @media (max-width: $md) {
      font-size: em(24px);
    }
  }

  &_subtitle {
    font-size: em(14px);
    color: $white;

    @media (max-width: $xl) {
      font-size: em(12px);
    }

    @media (max-width: $md) {
      font-size: em(14px);
    }
  }

  &_form {
    max-width: vw(700px);
    width: 100%;
    margin-top: vh(-125px);
    margin-left: vw(-50px);
    z-index: 2;

    @media (max-width: $md) {
      margin-top: 0;
      margin-left: 0;
      max-width: 100%;
    }
  }

  &_image {
    position: absolute;
    top: vh(130px);
    right: 0;
    max-width: vw(1165px);
    width: 100%;
    height: vh(420px);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: 0;

    @media (max-width: $lg) {
      max-width: vw(1500px);
    }

    @media (max-width: $md) {
      display: none;
    }
  }
}

.s-banner {
  padding-top: vh(75px);
  padding-bottom: vh(75px);

  &_container {
    display: flex;
    align-items: flex-end;
    max-width: 1190px;
    width: 100%;
    padding: 0 vw(90px);
    margin: 0 auto;

    @media (max-width: $sm) {
      flex-direction: column;
    }
  }

  &_col {
    flex-basis: 50%;

    @media (max-width: $sm) {
      width: 100%;
    }

    &:last-of-type {
      display: flex;
      justify-content: flex-end;

      @media (max-width: $sm) {
        margin-top: 30px;
        justify-content: flex-start !important;
      }
    }
  }

  &_title {
    font-size: em(28px);
    font-weight: 400;
    margin-bottom: vh(25px);
  }

  &_text {
    font-size: em(14px);
    color: #717171;
    line-height: 1.5;
  }
}
</style>
