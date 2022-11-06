<script setup lang="ts">
import { onBeforeMount, ref, watch } from "vue";
import { RouterLink, RouterView } from "vue-router";
const dark = ref(false);
onBeforeMount(() => {
  dark.value = localStorage.getItem("dark") === "true";
});
watch(dark, () => {
  localStorage.setItem("dark", String(dark.value));
  if (dark.value) {
    document.documentElement.classList.add("theme-dark");
  } else {
    document.documentElement.classList.remove("theme-dark");
  }
});
</script>

<template>
  <header>
    <div class="menu-btn">
      <i class="fa-solid fa-bars"></i>
    </div>
    <ul class="dropdown_menu">
      <li class="dropdown_item-1">
        <RouterLink to="/" active-class="active">
          <span> Home </span>
        </RouterLink>
      </li>
      <li class="dropdown_item-2">
        <RouterLink to="/about" active-class="active">
          <span> About </span>
        </RouterLink>
      </li>
      <li class="dropdown_item-3">
        <RouterLink to="/blog" active-class="active">
          <span> Blog </span>
        </RouterLink>
      </li>
      <li class="dropdown_item-4">
        <div class="theme-toggle">
          <input
            type="checkbox"
            v-model="dark"
            class="checkbox"
            id="checkbox"
          />
          <label for="checkbox" class="label">
            <div class="ball">
              <span class="icon moon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  class="vt-switch"
                >
                  <path
                    d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"
                  ></path>
                </svg>
              </span>
              <span class="icon sun">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  class="vt-switch"
                >
                  <path
                    d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"
                  ></path>
                  <path
                    d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"
                  ></path>
                  <path
                    d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"
                  ></path>
                  <path
                    d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"
                  ></path>
                  <path
                    d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"
                  ></path>
                  <path
                    d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"
                  ></path>
                  <path
                    d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  ></path>
                  <path
                    d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"
                  ></path>
                  <path
                    d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"
                  ></path>
                </svg>
              </span>
            </div>
          </label>
        </div>
      </li>
    </ul>

    <nav class="nav-bar"></nav>
  </header>
  <RouterView />
</template>
<style scoped lang="scss">
header {
  .dropdown_menu {
    position: absolute;
    display: none;
    top: 20px;
    right: 40px;
    z-index: 100;
    width: 300px;
    padding: 10px;
    background: var(--second-background-color);
    box-shadow: 1rem 20px 40px var(--main-shadow-color),
      -1rem 20px 40px var(--main-shadow-color);
    border-radius: 10px;
    overflow: hidden;
    // display: none;
    @for $i from 1 through 5 {
      .dropdown_item-#{$i} {
        transform-origin: top center;
        animation: translateX 300ms ($i * 60ms) ease-in-out forwards;
        opacity: 0;
        border-radius: 10px;
        background: var(--close-color);
        margin: 5px 0;
        padding: 10px;
        a {
          padding-right: 100%;
          font-size: 500;
        }
      }
    }
    li:hover {
      background: var(--3rd-color);
      color: var(--white-text-color);
    }
  }
  .menu-btn {
    position: absolute;
    top: 0.625rem;
    right: 1rem;
    z-index: 1;
    i {
      font-size: 1.5rem;
      font-weight: 600;
      padding: 5px;
      border-radius: 5px;
      background: var(--close-color);
    }
  }
  &:hover .dropdown_menu {
    display: unset;
  }
  @keyframes translateX {
    0% {
      opacity: 0;
      transform: translateX(60px);
    }

    80% {
      transform: translateX(-15px);
    }

    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
}
.theme-toggle {
  & > * {
    cursor: pointer;
  }
  &:hover {
    opacity: 1;
  }
  .checkbox {
    opacity: 0;
    position: absolute;
  }

  .label {
    width: 24px;
    height: 14px;
    background-color: var(--main-text-color);
    display: flex;
    border-radius: 26px;
    align-items: center;
    justify-content: space-between;
    padding: 2px;
    position: relative;
    transform: scale(1.5);
  }

  .ball {
    width: 10px;
    height: 10px;
    background-color: var(--background-color);
    position: absolute;
    top: 2px;
    left: 2px;
    border-radius: 50%;
    transition: transform 0.2s linear;
    .icon {
      position: absolute;
      top: -7px;
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      & .vt-switch {
        fill: var(--main-text-color);
      }
      &.moon {
        display: none;
      }
    }
  }

  /*  target the elemenent after the label*/
  .checkbox:checked + .label .ball {
    transform: translateX(10px);
    .icon.moon {
      display: block;
    }
    .icon.sun {
      display: none;
    }
  }
}
</style>
