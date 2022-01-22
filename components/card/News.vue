<template>
  <div class="news-card">
    <a  v-if="type == 'card1'" class="card1">
      <div class="news-card-image image">
        <img :src="image" alt="Not Found" />
      </div>
      <div class="news-card-nav">
        <p>
          <span> <i class="icon-calendar"></i>{{ date }}, </span>
          <span> <i class="icon-time"></i>{{ time }}, </span>
          <span> <i class="icon-view"></i>{{ view }}, </span>
        </p>
      </div>
      <h3 class="title">{{ title }}</h3>
      <div class="content">
        <p>{{ text }}</p>
      </div>
    </a>
    <div href="#!" class="card2" v-if="type == 'card2'">
      <a class="card2-title" href="#!">
        {{ card2_title }}
      </a>
      <div class="cards-bottom_nav">
        <span class="date"> {{ card2_date }} </span>
        <span class="tag"> #{{ card2_nav }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number || String,
      default() {
        return null;
      },
    },
    type: {
      type: String,
      default() {
        return "";
      },
    },
    image: {
      type: String,
      default() {
        return "";
      },
    },
    date: {
      type: String,
      default() {
        return "";
      },
    },
    time: {
      type: String,
      default() {
        return "";
      },
    },
    view: {
      type: String,
      default() {
        return null;
      },
    },
    title: {
      type: String,
      default() {
        return "";
      },
    },
    text: {
      type: String,
      default() {
        return "";
      },
    },
    card2_title: {
      type: String,
      default() {
        return "";
      },
    },
    card2_date: {
      type: String,
      default() {
        return "";
      },
    },
    card2_nav: {
      type: String,
      default() {
        return "";
      },
    },
  },
};
</script>

<style >
.news-card h3 {
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #001d42;
  margin-bottom: 8px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* card1 */

.news-card .card1 .news-card-image {
  margin-bottom: 16px;
  height: 232px;
}
.news-card .card1 .news-card-image img {
  border-radius: 4px;
  width: 100% !important;
  height: 100% !important;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
}
.news-card .card1 .news-card-nav p {
  font-size: 14px;
  line-height: 16px;
  color: #bdbdbd;
  display: flex;
  align-items: center;
}
.news-card .card1 .news-card-nav {
  margin-bottom: 8px;
}
.news-card .card1 .news-card-nav span {
  display: flex;
  align-items: center;
  margin-right: 8px;
}
.news-card .card1 .news-card-nav span:last-child {
  margin-left: 7px;
}
.news-card .card1 .news-card-nav span i {
  font-size: 15px;
  margin-right: 5px;
  text-transform: lowercase;
  display: flex;
}
.news-card .card1 .news-card-nav span:last-child i {
  font-size: 17px;
}

.news-card .card1 .content p {
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;
  margin-bottom: 8px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.news-card .card1 .content p:not(:first-child) {
  display: none;
}
.news-card .card1 a.tag {
  font-size: 14px;
  line-height: 16px;
  color: #bdbdbd;
  display: block;
  text-transform: lowercase;
}

/* card1 */

/* card2 */

.card2 .cards-bottom_nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card2 .cards-bottom_nav .date {
  font-size: 14px;
  line-height: 16px;
  color: #bdbdbd;
  text-transform: lowercase;
}
.card2 .cards-bottom_nav .tag {
  font-size: 14px;
  line-height: 16px;
  color: #bdbdbd;
  text-transform: lowercase;
}

.card2 .card2-title {
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #001d42;
  margin-bottom: 8px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* card2 */
</style>