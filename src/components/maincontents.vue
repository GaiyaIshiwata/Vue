<template>
  <div class="wrapper">
    <div class="main-contents">
      <card v-if="isActive === 1" @addFav="addFav"></card>
      <favlist v-else-if="isActive === 2" :favlist="favorite"></favlist>
    </div>
  </div>
</template>

<script>
import card from "./card";
import favlist from "./favlist";

export default {
  props: {
    isActive: {
      type: Number,
      default: 1
    }
  },

  components: {
    card,
    favlist
  },

  data() {
    return {
      favorite: []
    };
  },
  methods: {
    tabChange(num) {
      this.isActive = num;
    },
    addFav(fav) {
      this.favorite.push(fav);
      // console.log(this.favorite);
    }
  },
  created: function() {}
};
</script>