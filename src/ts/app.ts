import Vue from "vue";
import App from "../vue/app.vue";

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#js--app",
    render: h => h(App),
  }).$mount();
});
