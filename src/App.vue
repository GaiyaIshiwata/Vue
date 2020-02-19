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

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyB5ciFM-qi9rVm38pCsowdfNEyKQpuAJSw",
//     authDomain: "vuenewsmaker.firebaseapp.com",
//     databaseURL: "https://vuenewsmaker.firebaseio.com",
//     projectId: "vuenewsmaker",
//     storageBucket: "vuenewsmaker.appspot.com",
//     messagingSenderId: "705300320996",
//     appId: "1:705300320996:web:8cf980d1787f749be052f1",
//     measurementId: "G-07RJQHBBJ2"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>

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