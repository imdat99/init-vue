import type { App } from "vue";
import tooltipDirective from "./tooltips";
// register all directives
const directives = (app: App<Element>) => {
  tooltipDirective(app);
};

export default directives;
