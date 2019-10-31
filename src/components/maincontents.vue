<template>
  <div class="wrapper">
    <div class="main-contents">
      <!-- <VueRssParser :feedUrl="feedUrl" :name="name" :limit="limit" /> -->
      <div class="articles" id="RssFeed">
        <ul class="card-list">
          <li class="card-item" v-for="article of articles">
            <article class="card">
              <a v-bind:href="article.url" target="_blank">
                <!-- <figure class="card-image">
                <img src="../assets/think_face.png" alt="articleImage" />
                </figure>-->
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
                  <div class="card-button">
                    <font-awesome-icon icon="heart" class="item-icon" />
                  </div>
                  <div class="card-button">
                    <font-awesome-icon icon="clipboard" class="item-icon" />
                  </div>
                </div>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import card from "./card";
import RSSParser from "../../node_modules/rss-parser/dist/rss-parser.min.js";
// import VueRssParser from "vue-rss-parser";

const feedURL = "https://b.hatena.ne.jp/hotentry/it.rss";
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
let parser = new RSSParser();

// function formatDate(isoDate) {
//   const date = isoDate.replace(/-/g, ".").replace(/T.*$/, "");
//   return date;
// }

export default {
  components: {
    // VueRssParser
  },

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
    }
  },
  created: function() {
    this.getFeed();
  }
};
</script>