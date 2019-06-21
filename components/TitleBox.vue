<template>
  <div class="title-box">
    <Title :title="title"></Title>
    <span class="title-box_text">{{ text }}</span>
  </div>
</template>

<script>
import Title from '@/components/Title'

export default {
  name: 'TitleBox',

  components: { Title },

  props: {
    title: {
      type: String,
      default: 'Title',
      required: true
    },
    text: {
      type: String,
      default: 'Text',
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/function.scss';
@import '@/assets/scss/breakpoints.scss';

.title-box {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  padding: vw(40px) vw(65px) vw(35px) vw(65px);
  height: max-content;
  margin: 0 80px;
  background-color: rgba($gray2, 0.5);

  @media (max-width: $lg) {
    padding: vw(50px) vw(75px) vw(45px) vw(75px);
  }

  @media (max-width: $sm) {
    margin: 0 15px;
  }

  &_text {
    font-size: em(27px);
    color: $white;
    letter-spacing: 0;
    line-height: 1.3;
  }
}
</style>
