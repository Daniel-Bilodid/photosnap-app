<template>
  <div class="stories">
    <div class="stories__hero">
      <div class="stories__hero-img">
        <div class="stories__hero-wrapper desktop__adaptation">
          <div class="stories__hero-quote">LAST MONTH’S FEATURED STORY</div>

          <h1 class="stories__hero-title">HAZY FULL MOON OF APPALACHIA</h1>

          <div class="stories__hero-date">
            <span>March 2nd 2020</span>
            by John Appleseed
          </div>

          <div class="stories__hero-descr">
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called "mountains," especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </div>

          <div class="stories__hero-btn">
            <button>Read the story</button>
            <svg
              width="42.135254"
              height="12.707092"
              viewBox="0 0 42.1353 12.7071"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                id="Path 3"
                d=""
                fill="#D8D8D8"
                fill-opacity="0"
                fill-rule="nonzero"
              />
              <path
                id="Path 3"
                d="M0 6.35L41.86 6.35"
                stroke="#FFFFFF"
                stroke-opacity="1.000000"
                stroke-width="1.000000"
              />
              <path
                id="Path 4"
                d=""
                fill="#D8D8D8"
                fill-opacity="0"
                fill-rule="nonzero"
              />
              <path
                id="Path 4"
                d="M35.42 0.35L41.42 6.35L35.42 12.35"
                stroke="#FFFFFF"
                stroke-opacity="1.000000"
                stroke-width="1.000000"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="stories__hero-wrapper mobile__adaptation">
    <div class="stories__hero-quote">LAST MONTH’S FEATURED STORY</div>

    <h1 class="stories__hero-title">HAZY FULL MOON OF APPALACHIA</h1>

    <div class="stories__hero-date">
      <span>March 2nd 2020</span>
      by John Appleseed
    </div>

    <div class="stories__hero-descr">
      The dissected plateau area, while not actually made up of geological
      mountains, is popularly called "mountains," especially in eastern Kentucky
      and West Virginia, and while the ridges are not high, the terrain is
      extremely rugged.
    </div>

    <div class="stories__hero-btn">
      <button>Read the story</button>
      <svg
        width="42.135254"
        height="12.707092"
        viewBox="0 0 42.1353 12.7071"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <desc>Created with Pixso.</desc>
        <defs />
        <path
          id="Path 3"
          d=""
          fill="#D8D8D8"
          fill-opacity="0"
          fill-rule="nonzero"
        />
        <path
          id="Path 3"
          d="M0 6.35L41.86 6.35"
          stroke="#FFFFFF"
          stroke-opacity="1.000000"
          stroke-width="1.000000"
        />
        <path
          id="Path 4"
          d=""
          fill="#D8D8D8"
          fill-opacity="0"
          fill-rule="nonzero"
        />
        <path
          id="Path 4"
          d="M35.42 0.35L41.42 6.35L35.42 12.35"
          stroke="#FFFFFF"
          stroke-opacity="1.000000"
          stroke-width="1.000000"
        />
      </svg>
    </div>
  </div>
  <div class="stories__cards">
    <div class="stories__cards-item" v-for="item in items" :key="item.id">
      <div class="stories__cards-container">
        <img :src="item.img" :alt="item.name" />
      </div>
      <div class="stories__cards-text">
        <div class="stories__cards-date">{{ item.date }}</div>
        <div class="stories__cards-title">
          {{ item.name }}
        </div>
        <div class="stories__cards-author">{{ item.author }}</div>
        <div class="stories__cards-hr"></div>
        <div class="stories__cards-links">
          <div class="stories__cards-story">read story</div>
          <div class="stories__cards-arrow">
            <svg
              width="42.135315"
              height="12.707031"
              viewBox="0 0 42.1353 12.707"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                id="Path 3"
                d=""
                fill="#D8D8D8"
                fill-opacity="0"
                fill-rule="nonzero"
              />
              <path
                id="Path 3"
                d="M0 6.35L41.86 6.35"
                stroke="#FFFFFF"
                stroke-opacity="1.000000"
                stroke-width="1.000000"
              />
              <path
                id="Path 4"
                d=""
                fill="#D8D8D8"
                fill-opacity="0"
                fill-rule="nonzero"
              />
              <path
                id="Path 4"
                d="M35.42 0.35L41.42 6.35L35.42 12.35"
                stroke="#FFFFFF"
                stroke-opacity="1.000000"
                stroke-width="1.000000"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppStories",
  data() {
    return {
      items: [],
    };
  },
  created() {
    fetch("/database.json")
      .then((response) => response.json())
      .then((data) => {
        this.items = data;
      });
  },
};
</script>

<style scoped lang="scss">
@import "../_variables.scss";

.stories {
  width: 100%;
  position: relative;
  height: 100%;
  z-index: -1;
  margin-top: -71px;
  &__cards-container::after {
  }
  &__cards {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    margin-top: -4px;
    &-hr {
      width: 88% !important;
    }
    &-wrapper {
      width: 100%;
      display: flex;
      /* flex-wrap: wrap; */
    }

    &-item {
      width: 25%;

      img {
        width: 100%;
        height: auto;
      }
    }

    img {
      position: relative;
      width: 100%;
      height: auto;
      z-index: -1;
      filter: brightness(75%);
    }
    &-text {
      position: relative;
      color: white;
      margin-top: -146px;
      margin-left: 40px;
      z-index: 10;
    }
    &-hr {
      background: rgb(255, 255, 255);
      opacity: 0.25;
      width: 395px;
      height: 1px;
      margin-top: 16px;
      margin-bottom: 20px;
    }
    &-title {
      color: rgb(255, 255, 255);
      font-family: $dmsans;
      font-size: 18px;
      font-weight: 700;
      line-height: 25px;
      letter-spacing: 0px;
      text-align: left;
      margin-bottom: 4px;
    }

    &-date {
      color: rgb(255, 255, 255);
      font-family: $dmsans;
      font-size: 13px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0px;
      text-align: left;
    }

    &-author {
      color: rgb(255, 255, 255);
      font-family: $dmsans;
      font-size: 13px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0px;
      text-align: left;
      opacity: 0.9;
    }

    &-links {
      display: flex;
      justify-content: space-between;
    }
    &-story {
      color: rgb(255, 255, 255);
      font-family: $dmsans;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: 2px;
      text-align: left;
      cursor: pointer;
      margin-bottom: 24px;
    }
    &-arrow {
      margin-right: 40px;
      cursor: pointer;
    }
  }

  &__hero {
    &-img {
      width: 100%;
      height: 800px;
      background: url("../assets/img/stories/desktop/moon-of-appalacia.jpg");
      background-repeat: no-repeat;
      background-size: cover;
    }
    &-wrapper {
      padding-top: 152px;
      padding-left: 112px;
    }

    &-quote {
      color: rgb(255, 255, 255);
      font-family: $dmsans;
      font-size: 12px;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: 2px;
      text-align: left;
    }

    &-title {
      width: 377px;
      height: 144px;
      color: rgb(255, 255, 255);
      font-family: $dmsans;
      font-size: 40px;
      font-weight: 700;
      line-height: 48px;
      letter-spacing: 4.17px;
      text-align: left;
      text-transform: uppercase;
    }

    &-date span {
      color: rgb(255, 255, 255);
      font-family: $dmsans;
      font-size: 13px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0px;
      text-align: left;
      opacity: 0.75;
      margin-right: 9px;
    }

    &-date {
      color: rgb(255, 255, 255);
      font-family: $dmsans;
      font-size: 13px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0px;
      text-align: left;
    }

    &-descr {
      color: rgb(255, 255, 255);
      font-family: $dmsans;
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0px;
      text-align: left;
      opacity: 0.6;
      width: 387px;
      height: 125px;
      margin-top: 24px;
      margin-bottom: 24px;
    }

    &-btn {
      height: 16px;
      display: flex;
    }

    &-btn button {
      border: 0;
      background: none;

      color: rgb(255, 255, 255);
      font-family: $dmsans;
      font-size: 12px;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: 2px;
      text-align: right;
      text-transform: uppercase;
      margin-right: 16px;
    }
  }
}
.mobile__adaptation {
  display: none;
}

@media (max-width: 1070px) {
  .stories {
    &__cards {
      &-item {
        width: 50%;
      }
    }
  }
}

@media (max-width: 500px) {
  .stories {
    &__hero {
      &-img {
        height: 317px;
      }

      &-quote {
        width: 252px;
        height: 16px;
        padding-top: 48px;
        margin-left: 29px;
      }

      &-title {
        width: 250px;
        height: 120px;
        font-size: 32px;
        font-weight: 700;
        line-height: 40px;
        letter-spacing: 3.33px;
        margin-left: 29px;
        padding-top: 16px;
      }

      &-date {
        width: 236px;
        height: 17px;
        margin-left: 29px;
      }
      &-descr {
        width: 250px;
        height: 150px;
        margin-left: 29px;
        font-size: 15px;
      }
      &-btn {
        width: 210px;
        height: 16px;
        margin-left: 25px;
        padding-top: 15px;
      }
    }

    &__cards {
      flex-direction: column;
      &-item {
        width: 100%;
      }
    }
  }

  .desktop__adaptation {
    display: none;
  }
  .mobile__adaptation {
    background-color: black;
    width: 100%;
    height: 550px;
    padding: 0;
    display: block;
  }
}
</style>
