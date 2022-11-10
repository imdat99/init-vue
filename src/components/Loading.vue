<template>
  <Transition name="loading-screen">
    <div v-if="visible" class="loader"></div>
  </Transition>
</template>
<script setup lang="ts">
import type { PropType } from "vue";

defineProps({
  visible: { type: Boolean as PropType<boolean>, required: true },
});
</script>
<style lang="scss" scoped>
@use "../assets/var" as *;
@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");
.loading-screen-leave-active {
  transition: all 0.5s ease;
}
.loading-screen-leave-to {
  filter: blur(10px);
  opacity: 0;
}
.loader {
  background: var(--background-color);
  position: fixed;
  top: 0;
  z-index: 100;
  /* Loader must to be modal/fullpage */
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  /* Overall size of all boxes */
  --f-w: 5vmin;
  --f-g: 0.5vmin;
  /* Columns offsets: --x-$col */
  --x-1: calc(-2.5 * (var(--f-w) + var(--f-g)));
  --x-2: calc(-1.5 * (var(--f-w) + var(--f-g)));
  --x-3: calc(-0.5 * (var(--f-w) + var(--f-g)));
  --x-4: calc(0.5 * (var(--f-w) + var(--f-g)));
  --x-5: calc(1.5 * (var(--f-w) + var(--f-g)));
  --x-6: calc(2.5 * (var(--f-w) + var(--f-g)));
  /* Rows offsets: --y-$row */
  --y-1: calc(1 * (var(--f-w) + var(--f-g)));
  --y-2: calc(2 * (var(--f-w) + var(--f-g)));
  --y-3: calc(3 * (var(--f-w) + var(--f-g)));
  /* Colors: --c-$col-$row */
  /* Colors were taken from Material Colors (c) */
  --c-1-1: #{$red_0};
  --c-1-2: #{$red_1};
  --c-1-3: #{$red_3};
  --c-2-1: #{$violet_3};
  --c-2-2: #{$violet_6};
  --c-2-3: #{$violet_8};
  --c-3-1: #{$blue_3};
  --c-3-2: #{$blue_5};
  --c-3-3: #{$blue_7};
  --c-4-1: #{$green_4};
  --c-4-2: #{$green_6};
  --c-4-3: #{$green_8};
  --c-5-1: #{$yellow_2};
  --c-5-2: #{$yellow_4};
  --c-5-3: #{$yellow_6};
  --c-6-1: #{$orange_4};
  --c-6-2: #{$orange_6};
  --c-6-3: #{$orange_9};
  box-sizing: border-box;
  /* Box size */
  font-size: 10vmin;
}
.loader:before {
  /* Label properties */
  content: "loading";
  color: #fafad2;
  text-shadow: 0.5vmin 0.6vmin 1rem #000;
  font-family: "Fredoka One", cursive;
  display: block;
  width: 40vmin;
  height: 20vmin;
  position: absolute;
  text-align: center;
}
.loader:after {
  display: block;
  content: " ";
  background: #f000;
  /* Overall sizes */
  width: var(--f-w);
  height: var(--f-w);
  /* Initial position of the blocks */
  box-shadow: var(--x-1) var(--y-3) var(--c-1-3),
    var(--x-1) var(--y-2) var(--c-1-2), var(--x-2) var(--y-2) var(--c-2-2),
    var(--x-3) var(--y-2) var(--c-3-2), var(--x-4) var(--y-2) var(--c-4-2),
    var(--x-5) var(--y-2) var(--c-5-2), var(--x-6) var(--y-2) var(--c-6-2),
    var(--x-6) var(--y-1) var(--c-6-1);
  animation: 6s infinite loader;
  position: absolute;
}

@keyframes loader {
  0% {
    box-shadow: var(--x-1) var(--y-3) var(--c-1-3),
      var(--x-1) var(--y-2) var(--c-1-2), var(--x-2) var(--y-2) var(--c-2-2),
      var(--x-3) var(--y-2) var(--c-3-2), var(--x-4) var(--y-2) var(--c-4-2),
      var(--x-5) var(--y-2) var(--c-5-2), var(--x-6) var(--y-2) var(--c-6-2),
      var(--x-6) var(--y-1) var(--c-6-1);
  }
  5% {
    box-shadow: var(--x-2) var(--y-3) var(--c-2-3),
      var(--x-1) var(--y-2) var(--c-1-2), var(--x-2) var(--y-2) var(--c-2-2),
      var(--x-3) var(--y-2) var(--c-3-2), var(--x-4) var(--y-2) var(--c-4-2),
      var(--x-5) var(--y-2) var(--c-5-2), var(--x-6) var(--y-2) var(--c-6-2),
      var(--x-5) var(--y-1) var(--c-5-1);
  }
  10% {
    box-shadow: var(--x-2) var(--y-2) var(--c-2-2),
      var(--x-1) var(--y-2) var(--c-1-2), var(--x-2) var(--y-1) var(--c-2-1),
      var(--x-3) var(--y-2) var(--c-3-2), var(--x-4) var(--y-2) var(--c-4-2),
      var(--x-5) var(--y-3) var(--c-5-3), var(--x-6) var(--y-2) var(--c-6-2),
      var(--x-5) var(--y-2) var(--c-5-2);
  }
  15% {
    box-shadow: var(--x-2) var(--y-2) var(--c-2-2),
      var(--x-1) var(--y-2) var(--c-1-2), var(--x-3) var(--y-1) var(--c-3-1),
      var(--x-3) var(--y-2) var(--c-3-2), var(--x-4) var(--y-2) var(--c-4-2),
      var(--x-4) var(--y-3) var(--c-4-3), var(--x-6) var(--y-2) var(--c-6-2),
      var(--x-5) var(--y-2) var(--c-5-2);
  }
  20% {
    box-shadow: var(--x-2) var(--y-2) var(--c-2-2),
      var(--x-1) var(--y-2) var(--c-1-2), var(--x-3) var(--y-2) var(--c-3-2),
      var(--x-3) var(--y-3) var(--c-3-3), var(--x-4) var(--y-1) var(--c-4-1),
      var(--x-4) var(--y-2) var(--c-4-2), var(--x-6) var(--y-2) var(--c-6-2),
      var(--x-5) var(--y-2) var(--c-5-2);
  }
  25% {
    box-shadow: var(--x-2) var(--y-2) var(--c-2-2),
      var(--x-1) var(--y-2) var(--c-1-2), var(--x-3) var(--y-2) var(--c-3-2),
      var(--x-4) var(--y-3) var(--c-4-3), var(--x-3) var(--y-1) var(--c-3-1),
      var(--x-4) var(--y-2) var(--c-4-2), var(--x-6) var(--y-2) var(--c-6-2),
      var(--x-5) var(--y-2) var(--c-5-2);
  }
  30% {
    box-shadow: var(--x-2) var(--y-2) var(--c-2-2),
      var(--x-1) var(--y-2) var(--c-1-2), var(--x-3) var(--y-3) var(--c-3-3),
      var(--x-4) var(--y-2) var(--c-4-2), var(--x-3) var(--y-2) var(--c-3-2),
      var(--x-4) var(--y-1) var(--c-4-1), var(--x-6) var(--y-2) var(--c-6-2),
      var(--x-5) var(--y-2) var(--c-5-2);
  }
  35% {
    box-shadow: var(--x-2) var(--y-2) var(--c-2-2),
      var(--x-1) var(--y-2) var(--c-1-2), var(--x-2) var(--y-3) var(--c-2-3),
      var(--x-4) var(--y-2) var(--c-4-2), var(--x-3) var(--y-2) var(--c-3-2),
      var(--x-5) var(--y-1) var(--c-5-1), var(--x-6) var(--y-2) var(--c-6-2),
      var(--x-5) var(--y-2) var(--c-5-2);
  }
  40% {
    box-shadow: var(--x-2) var(--y-1) var(--c-2-1),
      var(--x-1) var(--y-2) var(--c-1-2), var(--x-2) var(--y-2) var(--c-2-2),
      var(--x-4) var(--y-2) var(--c-4-2), var(--x-3) var(--y-2) var(--c-3-2),
      var(--x-5) var(--y-2) var(--c-5-2), var(--x-6) var(--y-2) var(--c-6-2),
      var(--x-5) var(--y-3) var(--c-5-3);
  }
  45% {
    box-shadow: var(--x-1) var(--y-1) var(--c-1-1),
      var(--x-1) var(--y-2) var(--c-1-2), var(--x-2) var(--y-2) var(--c-2-2),
      var(--x-4) var(--y-2) var(--c-4-2), var(--x-3) var(--y-2) var(--c-3-2),
      var(--x-5) var(--y-2) var(--c-5-2), var(--x-6) var(--y-2) var(--c-6-2),
      var(--x-6) var(--y-3) var(--c-6-3);
  }
  50% {
    box-shadow: var(--x-1) var(--y-2) var(--c-1-2),
      var(--x-1) var(--y-3) var(--c-1-3), var(--x-2) var(--y-2) var(--c-2-2),
      var(--x-4) var(--y-2) var(--c-4-2), var(--x-3) var(--y-2) var(--c-3-2),
      var(--x-5) var(--y-2) var(--c-5-2), var(--x-6) var(--y-1) var(--c-6-1),
      var(--x-6) var(--y-2) var(--c-6-2);
  }
  55% {
    box-shadow: var(--x-1) var(--y-2) var(--c-1-2),
      var(--x-2) var(--y-3) var(--c-2-3), var(--x-2) var(--y-2) var(--c-2-2),
      var(--x-4) var(--y-2) var(--c-4-2), var(--x-3) var(--y-2) var(--c-3-2),
      var(--x-5) var(--y-2) var(--c-5-2), var(--x-5) var(--y-1) var(--c-5-1),
      var(--x-6) var(--y-2) var(--c-6-2);
  }
  60% {
    box-shadow: var(--x-1) var(--y-2) var(--c-1-2),
      var(--x-2) var(--y-2) var(--c-2-2), var(--x-2) var(--y-1) var(--c-2-1),
      var(--x-4) var(--y-2) var(--c-4-2), var(--x-3) var(--y-2) var(--c-3-2),
      var(--x-5) var(--y-3) var(--c-5-3), var(--x-5) var(--y-2) var(--c-5-2),
      var(--x-6) var(--y-2) var(--c-6-2);
  }
  65% {
    box-shadow: var(--x-1) var(--y-2) var(--c-1-2),
      var(--x-2) var(--y-2) var(--c-2-2), var(--x-3) var(--y-1) var(--c-3-1),
      var(--x-4) var(--y-2) var(--c-4-2), var(--x-3) var(--y-2) var(--c-3-2),
      var(--x-4) var(--y-3) var(--c-4-3), var(--x-5) var(--y-2) var(--c-5-2),
      var(--x-6) var(--y-2) var(--c-6-2);
  }
  70% {
    box-shadow: var(--x-1) var(--y-2) var(--c-1-2),
      var(--x-2) var(--y-2) var(--c-2-2), var(--x-3) var(--y-2) var(--c-3-2),
      var(--x-4) var(--y-1) var(--c-4-1), var(--x-3) var(--y-3) var(--c-3-3),
      var(--x-4) var(--y-2) var(--c-4-2), var(--x-5) var(--y-2) var(--c-5-2),
      var(--x-6) var(--y-2) var(--c-6-2);
  }
  75% {
    box-shadow: var(--x-1) var(--y-2) var(--c-1-2),
      var(--x-2) var(--y-2) var(--c-2-2), var(--x-3) var(--y-2) var(--c-3-2),
      var(--x-3) var(--y-1) var(--c-3-1), var(--x-4) var(--y-3) var(--c-4-3),
      var(--x-4) var(--y-2) var(--c-4-2), var(--x-5) var(--y-2) var(--c-5-2),
      var(--x-6) var(--y-2) var(--c-6-2);
  }
  80% {
    box-shadow: var(--x-1) var(--y-2) var(--c-1-2),
      var(--x-2) var(--y-2) var(--c-2-2), var(--x-3) var(--y-3) var(--c-3-3),
      var(--x-3) var(--y-2) var(--c-3-2), var(--x-4) var(--y-2) var(--c-4-2),
      var(--x-4) var(--y-1) var(--c-4-1), var(--x-5) var(--y-2) var(--c-5-2),
      var(--x-6) var(--y-2) var(--c-6-2);
  }
  85% {
    box-shadow: var(--x-1) var(--y-2) var(--c-1-2),
      var(--x-2) var(--y-2) var(--c-2-2), var(--x-2) var(--y-3) var(--c-2-3),
      var(--x-3) var(--y-2) var(--c-3-2), var(--x-4) var(--y-2) var(--c-4-2),
      var(--x-5) var(--y-1) var(--c-5-1), var(--x-5) var(--y-2) var(--c-5-2),
      var(--x-6) var(--y-2) var(--c-6-2);
  }
  90% {
    box-shadow: var(--x-1) var(--y-2) var(--c-1-2),
      var(--x-2) var(--y-1) var(--c-2-1), var(--x-2) var(--y-2) var(--c-2-2),
      var(--x-3) var(--y-2) var(--c-3-2), var(--x-4) var(--y-2) var(--c-4-2),
      var(--x-5) var(--y-2) var(--c-5-2), var(--x-5) var(--y-3) var(--c-5-3),
      var(--x-6) var(--y-2) var(--c-6-2);
  }
  95% {
    box-shadow: var(--x-1) var(--y-2) var(--c-1-2),
      var(--x-1) var(--y-1) var(--c-1-1), var(--x-2) var(--y-2) var(--c-2-2),
      var(--x-3) var(--y-2) var(--c-3-2), var(--x-4) var(--y-2) var(--c-4-2),
      var(--x-5) var(--y-2) var(--c-5-2), var(--x-6) var(--y-3) var(--c-6-3),
      var(--x-6) var(--y-2) var(--c-6-2);
  }
}
</style>
