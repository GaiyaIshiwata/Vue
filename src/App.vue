<template>
  <div>
    <header class="header">
      <myheader></myheader>
    </header>

    <main>
      <maincontents></maincontents>
    </main>

    <footer class="footer">
      <myfooter></myfooter>
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
      msg: "Hello World!"
    };
  },
  methods: {
    clear() {
      this.msg = "";
    }
  }
};
</script>

<style lang="scss">
@import "./css/ress.css";
@import "./css/style.scss";
</style>