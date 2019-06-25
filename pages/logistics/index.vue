<template>
  <div class="app-wrapper app-wrapper--logistics">
    <div class="app-header_fixed-nav">
      <Burger @open-menu="toggleMenu"></Burger>
      <!-- <div
        class="app-header_logo"
        data-aos="fade"
        data-aos-duration="800"
        data-aos-delay="800"
      >
        <Logo></Logo>
      </div>-->
    </div>
    <Nav
      v-if="menuOpen"
      data-aos="zoom-out-right"
      data-aos-delay="50"
      data-aos-duration="500"
      :external-link-title="externalLinkTitle"
      :external-link-url="externalLinkUrl"
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
      data-aos-offset="-1080"
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
      <span class="aubout-us_label">Logistics</span>
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
            Care of your
            <br />cargo
          </h2>
          <!-- <ul data-aos="fade" data-aos-delay="100" data-aos-duration="1000">
            <li>- Metals and scrap</li>
            <li>- Ferroalloys</li>
            <li>- Oxides</li>
          </ul>-->
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
      <img class="s-whu-us_decor" :src="ProductSxema2" alt="sxema" />
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
          id="s-form"
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

    <Footer
      :title="footerData.title"
      :form-trade="footerData.formTrade"
      :ex-title="footerData.exTitle"
      :ex-link="footerData.exLink"
      :ex-sub-title="footerData.exSubTitle"
      :ex-sub-title-bold="footerData.exSubTitleBold"
    ></Footer>

    <ProductPopup
      v-if="popupOpen"
      :data="productPopupData"
      @close-popup="togglePopup"
    ></ProductPopup>
  </div>
</template>

<script>
import Headerbackground from '@/static/hero-logistics.jpg'
import ProductImage from '@/static/logistics-product-img.jpg'
import ProductSxema from '@/static/logistics-sxema-1.png'
import ProductSxema2 from '@/static/logistics-sxema-2.png'
import ContactDecor from '@/static/logistics-contacts-image.jpg'

import Burger from '@/components/Burger.vue'
// import Logo from '@/components/Logo.vue'
import TitleBox from '@/components/TitleBox.vue'
import Nav from '@/components/Nav.vue'
import ProductPopup from '@/components/ProductPopup.vue'
import Form from '@/components/Form.vue'
import Button from '@/components/Button.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Logistics',

  components: {
    Burger,
    // Logo,
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
      externalLinkTitle: 'Trade',
      externalLinkUrl: '/trade',
      HeaderTitle: 'Logistics',
      HeaderText:
        'Meeting the highest quality demands is our commitment to quality',
      productData: [
        {
          id: 1,
          title: '1. We ship',
          items: [
            {
              id: 1,
              title: 'FTL/LTL Shipment',
              text:
                'A chemical element with the symbol Ta and atomic number 73. Previously known as tantalium, its name comes from Tantalus, a villain from Greek mythology. Tantalum is a rare, hard, blue-gray, lustrous transition metal that is highly corrosion-resistant.'
            },
            {
              id: 2,
              title: 'High value cargo',
              text:
                'A chemical element with the symbol Ta and atomic number 73. Previously known as tantalium, its name comes from Tantalus, a villain from Greek mythology. Tantalum is a rare, hard, blue-gray, lustrous transition metal that is highly corrosion-resistant.'
            }
          ]
        },
        {
          id: 2,
          title: '2. We store',
          items: [
            {
              id: 1,
              title: 'Project cargo',
              text:
                'A chemical element with the symbol Ta and atomic number 73. Previously known as tantalium, its name comes from Tantalus, a villain from Greek mythology. Tantalum is a rare, hard, blue-gray, lustrous transition metal that is highly corrosion-resistant.'
            },
            {
              id: 2,
              title: 'Customs clearance',
              text:
                'A chemical element with the symbol Ta and atomic number 73. Previously known as tantalium, its name comes from Tantalus, a villain from Greek mythology. Tantalum is a rare, hard, blue-gray, lustrous transition metal that is highly corrosion-resistant.'
            }
          ]
        },
        {
          id: 3,
          title: '3. We deliver',
          items: [
            {
              id: 1,
              title: 'Store, pick, pack & ship',
              text:
                'A chemical element with the symbol Ta and atomic number 73. Previously known as tantalium, its name comes from Tantalus, a villain from Greek mythology. Tantalum is a rare, hard, blue-gray, lustrous transition metal that is highly corrosion-resistant.'
            },
            {
              id: 2,
              title: 'Import/Export',
              text:
                'A chemical element with the symbol Ta and atomic number 73. Previously known as tantalium, its name comes from Tantalus, a villain from Greek mythology. Tantalum is a rare, hard, blue-gray, lustrous transition metal that is highly corrosion-resistant.'
            },
            {
              id: 3,
              title: '24/7 online tracking',
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
      ],

      footerData: {
        title: 'Using mature market instruments',
        formTrade: false,
        exTitle: 'Trade',
        exLink: '/trade',
        exSubTitle: 'PRESS HERE TO EXPLORE',
        exSubTitleBold: 'TRADE SECTION'
      }
    }
  },

  computed: {
    Headerbackground: () => Headerbackground,
    ProductImage: () => ProductImage,
    ProductSxema: () => ProductSxema,
    ProductSxema2: () => ProductSxema2,
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
