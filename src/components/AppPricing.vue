<template>
  <div class="pricing">
    <div class="pricing__wrapper">
      <div class="pricing__align"></div>
      <div class="pricing__text">
        <div class="pricing__text-title">pricing</div>

        <div class="pricing__text-descr">
          Create a your stories, Photosnap is a platform for photographers and
          visual storytellers. It’s the simple way to create and share your
          photos.
        </div>
      </div>

      <div class="pricing__hero">
        <img src="../assets/img/pricing/desktop/hero.jpg" alt="hero" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppPricing",
};
</script>

<style scoped lang="scss">
@import "../variables";

.pricing {
  &__wrapper {
    display: flex;
  }
  &__align {
    position: absolute;
    margin-top: 173px;
    width: 6px;
    height: 144px;
    background: linear-gradient(
      26.57deg,
      rgb(255, 197, 147) -24.937%,
      rgb(188, 113, 152) 26.986%,
      rgb(90, 119, 255) 75.02%
    );
  }

  &__hero img {
    height: 100%;
  }

  &__text {
    width: 42%;
    height: 477px;
    background: rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 173px;
    &-title {
      width: 387px;
      height: 48px;
      color: rgb(255, 255, 255);
      font-family: $dmsans;
      font-size: 40px;
      font-weight: 700;
      line-height: 48px;
      letter-spacing: 4.17px;
      text-align: left;
      text-transform: uppercase;
      margin-bottom: 21px;
    }

    &-descr {
      width: 387px;
      height: 75px;
      color: rgb(255, 255, 255);
      font-family: $dmsans;
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0px;
      text-align: left;
      opacity: 0.6;
    }
  }
}
</style>
