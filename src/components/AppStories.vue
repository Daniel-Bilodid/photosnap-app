<template>
  <div class="stories">
    <div class="stories__hero">
      <img
        class="stories__hero-img"
        src="../assets/img/stories/desktop/moon-of-appalacia.jpg"
        alt="moon of appalacia"
      />
      <div class="stories__hero-wrapper">
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
</template>

<script>
export default {
  name: "AppStories",
};
</script>

<style scoped lang="scss">
@import "../_variables.scss";

.stories {
  width: 100%;
  position: relative;
  z-index: -1;
  margin-top: -71px;

  &__hero {
    &-img {
      width: 100%;
      height: 800px;
    }
    &-wrapper {
      position: absolute;
      top: 20%;
      left: 33.5%;
      transform: translate(-50%, -50%);
      margin-left: 112px;
      margin-top: 200px;
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
    }
  }
}
</style>
