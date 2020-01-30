<template>
  <div id="app">
    <component :is="layout">
      <transition
        name="fade"
        mode="out-in"
        @beforeLeave="beforeLeave"
        @enter="enter"
        @afterEnter="afterEnter"
      >
      <router-view/>
      </transition>
    </component>
  </div>
</template>

<script>
const default_layout = "LayoutDefault";
export default {
  computed: {
    layout() {
      return this.$route.meta.layout || default_layout;
    }
  },
  data(){
    return {
      prevHeight: 0
    }
  },
  methods:{
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
  }
};
</script>

<style>
* {
  margin: 0;
}
html,
body {
  height: 100%;
}
#app {
  min-height: 100%;
  /* equal to footer height */
  margin-bottom: -100px;
}
#app:after {
  content: "";
  display: block;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
 /* transition-property: opacity; */
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>
