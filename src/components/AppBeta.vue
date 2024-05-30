<template>
  <div class="beta">
    <div class="beta__text">
      <div class="beta__title">We’re in beta. Get your invite today!</div>

      <div class="beta__link">
        <button>Get an invite</button>

        <svg
          width="42.135254"
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
</template>

<script>
export default {
  name: "AppBeta",
};
</script>

<style scoped lang="scss">
@import "../variables";

.beta {
  width: 100%;
  height: 280px;
  background-image: url("../assets/img/shared/desktop/bg-beta.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  &__text {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    color: rgb(255, 255, 255);
    width: 400px;
    height: 144px;
    font-family: $dmsans;
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 4.17px;
    text-align: left;
    text-transform: uppercase;
    margin-top: 68px;
    margin-left: 165px;
  }

  &__link {
    button {
      background: none;
      border: none;
      color: rgb(255, 255, 255);
      font-family: $dmsans;
      font-size: 12px;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: 2px;
      text-align: right;
      text-transform: uppercase;
      margin-top: 132px;
      cursor: pointer;
    }

    svg {
      margin-right: 165px;
      margin-left: 16px;
    }
  }
}
</style>
