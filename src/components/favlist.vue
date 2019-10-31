<template>
  <div>
    <div class="articles" id="RssFeed">
      <ul class="card-list">
        <li class="card-item" v-for="fav of favlist">
          <article class="card">
            <a v-bind:href="fav.url" target="_blank">
              <div class="card-header">
                <h2 class="card-title">{{ fav.title }}</h2>
              </div>
              <div class="card-body">
                <div class="card-description">ダミー記事詳細</div>
              </div>
            </a>
            <div class="card-footer">
              <p class="card-date">date</p>
              <div class="card-buttons">
                <div class="card-button" v-on:click="copyArticle(fav)">
                  <font-awesome-icon icon="clipboard" class="item-icon" />
                </div>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    favlist: {
      type: Array,
      defaut: []
    }
  },

  components: {},

  data() {
    return {};
  },
  methods: {
    copyOverride(articleData) {
      document.addEventListener(
        "copy",
        e => {
          e.clipboardData.setData("text/plain", articleData);
          e.preventDefault();
        },
        { once: true }
      );
    },
    copyArticle(article) {
      const data = article.title + "  " + article.url;
      this.copyOverride(data);
      document.execCommand("copy");
      alert("コピーしました");
    }
  },
  created: function() {}
};
</script>