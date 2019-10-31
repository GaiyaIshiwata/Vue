<template>
  <div>
    <header class="header">
      <myheader></myheader>
    </header>

    <main>
      <maincontents :isActive="activetab"></maincontents>
    </main>

    <footer class="footer">
      <myfooter @sendActiveTab="setActiveTab"></myfooter>
    </footer>
  </div>
</template>

<script>
import myheader from "./components/myheader";
import myfooter from "./components/myfooter";
import maincontents from "./components/maincontents";

export default {
  components: {
    myheader,
    myfooter,
    maincontents
  },
  data() {
    return {
      activetab: 1
    };
  },
  methods: {
    setActiveTab(tab) {
      this.activetab = tab;
    }
  }
};
</script>

<style lang="scss">
@import "./css/ress.css";
@import "./css/style.scss";
</style>