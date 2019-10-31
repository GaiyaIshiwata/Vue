<template>
  <div class="wrapper">
    <div class="footer-menu">
      <ul class="menu-list">
        <li class="menu-item">
          <div id="home" class="item" v-on:click="TabChange(1)">
            <font-awesome-icon icon="home" class="item-icon" />
          </div>
        </li>
        <li class="menu-item">
          <div id="fav" class="item" v-on:click="TabChange(2)">
            <font-awesome-icon icon="heart" class="item-icon" />
          </div>
        </li>
        <li class="menu-item">
          <div id="todo" class="item" v-on:click="TabChange(3)">
            <font-awesome-icon icon="clipboard" class="item-icon" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activetab: 1
    };
  },
  methods: {
    TabChange(tab) {
      this.activetab = tab;
      this.$emit("sendActiveTab", this.activetab);
    }
  },
  mounted() {
    this.$emit("sendActiveTab", this.activetab);
  }
};
</script>
