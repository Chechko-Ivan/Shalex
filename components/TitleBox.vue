<template>
  <div class="title-box">
    <Title :title="title"></Title>
    <span class="title-box_text">{{ text }}</span>
    <span v-if="isLink" class="title-box_link">More Information</span>
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
    },
    isLink: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss">
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

  @media (max-height: 400px) {
    padding: vw(30px) vw(75px) vw(25px) vw(75px);
  }

  &_text {
    font-size: em(27px);
    color: $white;
    letter-spacing: 0;
    line-height: 1.3;

    @media (max-width: $sm) {
      margin-top: vh(20px);
      font-size: em(20px);
    }

    @media (max-height: 400px) {
      font-size: 16px;
    }
  }

  &_link {
    color: $white;
    font-size: em(14px);
    margin-top: vh(55px);
    text-decoration: underline;
    line-height: 1;
    text-decoration-style: dashed;
    text-transform: uppercase;

    @media (max-width: $sm) {
      margin-top: vh(20px);
    }

    @media (max-height: 400px) {
      margin-top: vh(20px);
      font-size: em(12px);
    }
  }
}
</style>
