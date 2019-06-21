<template>
  <div class="title">
    <h1>{{ title }}</h1>
    <span class="red-flesh"></span>
  </div>
</template>

<script>
export default {
  name: 'Title',

  props: {
    title: {
      type: String,
      default: 'Title',
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/function.scss';

.title {
  position: relative;
  width: max-content;
  padding: 0 10px;
  margin-bottom: vh(40px);
}

h1 {
  margin-top: 0;
  margin: 0;
  position: relative;
  font-size: em(64px);
  color: $white;
  font-weight: 900;
  z-index: 1;
}

.red-flesh {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 42%;
  z-index: 0;
  background-color: $red;
}
</style>
