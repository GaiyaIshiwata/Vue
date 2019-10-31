<template>
  <div class="articles" id="RssFeed">
    <ul class="card-list">
      <li class="card-item" v-for="article of articles">
        <article class="card">
          <a v-bind:href="article.url" target="_blank">
            <div class="card-header">
              <h2 class="card-title">{{ article.title }}</h2>
            </div>
            <div class="card-body">
              <div class="card-description">ダミー記事詳細</div>
            </div>
          </a>
          <div class="card-footer">
            <p class="card-date">date</p>
            <div class="card-buttons">
              <div class="card-button" v-on:click="addFavList(article)">
                <font-awesome-icon icon="heart" class="item-icon" />
              </div>
              <div class="card-button" v-on:click="copyArticle(article)">
                <font-awesome-icon icon="clipboard" class="item-icon" />
              </div>
            </div>
          </div>
        </article>
      </li>
    </ul>
  </div>
</template>

<script>
import RSSParser from "../../node_modules/rss-parser/dist/rss-parser.min.js";

const feedURL = "https://b.hatena.ne.jp/hotentry/it.rss";
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
let parser = new RSSParser();

export default {
  data() {
    return {
      feedUrl:
        "https://cors-anywhere.herokuapp.com/https://b.hatena.ne.jp/hotentry/it.rss",
      articles: []
    };
  },
  methods: {
    getFeed() {
      const that = this;
      const testURL = CORS_PROXY + feedURL;
      parser.parseURL(testURL, function(err, feed) {
        const feedArray = feed.items;

        feedArray.forEach(feed => {
          const article = {
            title: feed.title,
            url: feed.link
          };
          that.articles.push(article);
        });
      });
    },
    addFavList(target) {
      this.$emit("addFav", target);
    },
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
  created: function() {
    this.getFeed();
  }
};
</script>
