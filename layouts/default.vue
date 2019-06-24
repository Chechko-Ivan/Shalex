<template>
  <div>
    <div id="cursor" class="cursor"></div>
    <nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    document.addEventListener('mousemove', e => {
      const width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      // const height =
      //   window.innerHeight ||
      //   document.documentElement.clientHeight ||
      //   document.body.clientHeight
      const cursor = document.getElementById('cursor')
      if (width > 990) {
        cursor.style.display = 'block'
        cursor.style.left = Number(e.pageX - 10) + 'px'
        cursor.style.top = Number(e.pageY - 10) + 'px'
        cursor.style.zIndex = '9999999'
        // if (Number(e.pageX + 24) > width) {
        //   cursor.style.display = 'none'
        // }
        // if (Number(e.pageX) < 10) {
        //   cursor.style.display = 'none'
        // }
        // if (Number(e.pageY + 24) > height) {
        //   cursor.style.display = 'none'
        // }
        // if (Number(e.pageY) < 10) {
        //   cursor.style.display = 'none'
        // }
        document.addEventListener(
          'mouseover',
          e => {
            e.stopPropagation()
            if (e.target.nodeName === 'A' || e.target.nodeName === 'BUTTON') {
              cursor.style.transform = 'scale(2.5)'
              cursor.style.border = 'none'
              cursor.style.background = 'rgba(0,0,0,0.6)'
            } else {
              cursor.style.transform = 'scale(1)'
              cursor.style.border = '3px #000000 solid'
              cursor.style.background = 'none'
            }
          },
          false
        )
      }
    })
  }
}
</script>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

* {
  outline: none !important;
}

a,
button {
  cursor: pointer;
}

.cursor {
  position: absolute;
  width: 24px;
  height: 24px;
  border: 3px solid #000000;
  border-radius: 50%;
  transition: transform 300ms cubic-bezier(0.77, 0, 0.175, 1);
  pointer-events: none;
}
</style>
