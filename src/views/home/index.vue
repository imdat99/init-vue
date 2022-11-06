<script setup lang="ts">
import Loading from "@/components/Loading.vue";
import Modal from "@/components/Modal.vue";
import { getData } from "@/utils/axios.config";
import { ref } from "vue";
import { useQuery } from "vue-query";
const showModal = ref(false);
const showAbout = ref(false);
const active = ref(false);

const query = useQuery(["todos"], getData, {
  refetchOnWindowFocus: false,
});
</script>

<template>
  <Loading :visible="query.isLoading.value"></Loading>
  <div
    class="row home-container"
    :class="{ active }"
    v-if="!query.isLoading.value"
  >
    <div
      class="col c-12"
      :class="{ 'c-0': showAbout, 'l-6': showAbout, 'l-12': !showAbout }"
    >
      <div class="info-container">
        <div class="card fade-in" :class="{ active }">
          <div class="img-box" @click="active = !active">
            <img
              src="https://images.pexels.com/photos/13408561/pexels-photo-13408561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar"
            />
          </div>
          <div class="content">
            <div class="details">
              <h2>Lê Thành Đạt<br /><span>web developer</span></h2>
              <div class="data">
                <a href="/">
                  <h3><i class="fa-brands fa-facebook"></i></h3>
                </a>
                <h3><i class="fa-brands fa-whatsapp"></i></h3>
                <h3><i class="fa-brands fa-instagram"></i></h3>
                <h3><i class="fa-brands fa-github"></i></h3>
              </div>
              <div class="action">
                <button @click="showModal = true">Ask me</button>
                <button @click="showAbout = !showAbout">About</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Transition name="content-tab">
      <div class="col c-12" v-if="showAbout" :class="{ 'l-6': showAbout }">
        <div class="about-container fade-in">
          <div class="about-content">
            <div class="content-container">
              <ul>
                <li v-for="data in query.data.value" :key="data.id">
                  {{ data.title }}
                </li>
              </ul>
            </div>
            <button
              v-tooltip:left="'Close'"
              type="button"
              class="close-btn"
              data-modal-toggle="popup-modal"
              @click="showAbout = false"
            >
              <svg
                aria-hidden="true"
                class="svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
  <Modal :show="showModal" :width="100" @close="showModal = false">
    <template #body>
      <h3>custom header</h3>
    </template>
  </Modal>
</template>
<style scoped lang="scss">
.home-container {
  // width: 100vw;
  // background-color: transparent;
  // transition: background-color 1s;
  &.active {
    background-color: linear-gradient(45deg, #fbda61, #ff5acd);
  }
  // background: linear-gradient(45deg, #2c3e50, #000000);
}
.about-container,
.info-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.about-content {
  position: relative;
  width: 95%;
  height: calc(100vh - 100px);
  border-radius: 20px;
  box-shadow: 1rem 35px 80px var(--main-shadow-color);
  background: var(--second-background-color);
  padding: 10px;
}
.card {
  position: relative;
  width: 200px;
  height: 200px;
  max-width: calc(100vw - 10px);
  background: var(--second-background-color);
  border-radius: 20px;
  box-shadow: unset;
  transition: height 0.5s, width 0.5s, box-shadow 1s;
  // scale: 1.5;
  &.active {
    height: 450px;
    width: 400px;
    .img-box {
      top: -100px;
      width: 250px;
      height: 250px;
    }
    box-shadow: 1rem 35px 80px var(--main-shadow-color),
      -1rem 35px 80px var(--main-shadow-color);
    .content .details {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  .img-box {
    cursor: pointer;
    position: absolute;
    left: 50%;
    right: 50%;
    top: 0;
    transform: translateX(-50%);
    z-index: 2;
    width: 200px;
    height: 200px;
    background: var(--background-color);
    border-radius: 20px;
    box-shadow: 0 35px 80px var(--second-shadow-color);
    transition: 0.3s;
    transition: width 0.8s, height 0.8s, top 0.5s;
    overflow: hidden;
    img {
      padding: 5px;
      border-radius: 20px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    .details {
      padding: 40px;
      text-align: center;
      width: 100%;
      opacity: 0;
      transform: translateY(-145px);
      transition: transform 0.5s, opacity 0.25s;
      h2 {
        font-size: 1.25em;
        font-weight: 600;
        color: var(--main-text-color);
        span {
          font-size: 0.75em;
          font-weight: 500;
          opacity: 0.5;
        }
      }
      .data {
        display: flex;
        justify-content: space-between;
        margin: 20px 10px;
        padding: 0 20px;
        h3 {
          font-size: 1rem;
          color: var(--main-text-color);
          line-height: 1.2em;
          font-weight: 600;
          span {
            font-size: 0.85rem;
            font-weight: 400;
            opacity: 0.5;
          }
          i {
            font-size: 2rem;
            cursor: pointer;
            &:hover {
              transform: scale(1.1);
            }
          }
        }
      }
      .action {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        button {
          padding: 10px 30px;
          width: 100%;
          border-radius: 5px;
          border: none;
          outline: none;
          font-size: 1.1em;
          font-weight: 500;
          background: var(--primary-color);
          color: var(--white-text-color);
          cursor: pointer;
          &:hover {
            background: var(--secondary-color);
          }
          &:nth-child(2) {
            background: transparent;
            width: 30%;
            padding: 10px 20px;
            color: var(--main-text-color);
            border: 1px solid var(--main-text-color);
          }
        }
      }
    }
  }
}
</style>
