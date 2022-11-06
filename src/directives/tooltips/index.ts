import type { App } from "vue";

const tooltipDirective = (app: App<Element>) => {
  app.directive("tooltip", {
    mounted(el, binding) {
      init(el, binding);
    },
    updated(el, binding) {
      init(el, binding);
    },
  });
};

function init(el: any, binding: any) {
  const position = binding.arg || "top";
  const tooltipText = binding.value || "Tooltip text";
  el.setAttribute("position", position);
  el.setAttribute("tooltip", tooltipText);
}

export default tooltipDirective;
