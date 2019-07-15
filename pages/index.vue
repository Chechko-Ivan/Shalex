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
        ></TitleBox>
      </nuxt-link>

      <nuxt-link class="hero_link" to="/logistics">
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
        text: 'Global. Flexible. Reliable.'
      },
      logistics: {
        title: 'Logistics',
        text: 'Multimodal. Customized solutions. Always on time.'
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
