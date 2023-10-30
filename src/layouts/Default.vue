<template>
    <div style="position: fixed; width: 100vw; height: 100vh; background-color: #222222" ></div>
  <div style="position: fixed; width: 100vw; height: 100vh" class="hero"></div>
  <v-app>
    <v-layout style="height: 100vh;">
    <default-bar />
    <default-view />
    <div v-if="isActive" ref="myElement">
      <loading-page></loading-page>
    </div>

    </v-layout>
  </v-app>

</template>

<script>
import DefaultBar from "../components/AppBar.vue";
import DefaultView from "./default/View.vue";
import LoadingPage from "../components/loading/loadingPage.vue"
import { ref } from 'vue'
export default {
  components: { DefaultBar, DefaultView, LoadingPage},
  mounted() {
    setTimeout(()=>{
      this.myElement.classList.add("fade-out")

    },4000)
    setTimeout(()=>{
      this.isActive = false
    },4300)
    console.log(this.myElement.classList)

    console.log(`the component is now mounted.`)
  },
  setup() {
    const myElement = ref(null);
    const isActive = ref(true)

    return {
      isActive,
      myElement,
    };
  },
}
</script>
<style>
.hero {
  background: url("../assets/image.jpg") repeat;
  opacity: 0.05;
  height: 100vh;
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.fade-out {
  animation: fadeOut 300ms linear;
}
</style>
