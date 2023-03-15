import AOS from 'aos';
import "aos/dist/aos.css";
import "aos/dist/aos";
import "aos/dist/aos.cjs";
import "aos/dist/aos.esm";

new Vue({
    created() {
        AOS.init();
    },
  el: '#app',
  router,
  render: h => h(App)
})