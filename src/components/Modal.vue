<script lang="ts" setup>
import { watch, type PropType } from "vue";

const props = defineProps({
  show: Boolean,
  width: {
    type: [String, Number] as PropType<string | number>,
    required: true,
  },
});
defineEmits(["close"]);
watch(
  () => props.show,
  () => {
    if (props.show) {
      document.body.className += " modal--open";
    } else {
      document.body.classList.remove("modal--open");
    }
  }
);
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="show" class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header"></slot>
            </div>
            <div class="modal-body">
              <slot name="body"></slot>
            </div>
            <div class="modal-footer">
              <slot name="footer"></slot>
            </div>
            <button
              type="button"
              class="close-btn"
              data-modal-toggle="popup-modal"
              @click="$emit('close')"
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
  </Teleport>
</template>

<style scoped lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--overlay-color);
  display: table;
  transition: opacity 0.3s ease;
  .modal-wrapper {
    // display: table-cell;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 50px;
    vertical-align: middle;
    z-index: 1;
    .modal-container {
      position: relative;
      min-width: 300px;
      width: fit-content;
      margin: 0px auto;
      padding: 20px 30px;
      background-color: var(--second-background-color);
      border-radius: 10px;
      box-shadow: 0 50px 100px rgba(0, 0, 0, 0.33);
      transition: all 0.3s ease;
      .modal-header {
        h3 {
          margin-top: 0;
          color: #42b983;
        }
      }
      .modal-body {
        margin: 20px 0;
      }

      .modal-default-button {
        float: right;
      }
    }
  }
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
