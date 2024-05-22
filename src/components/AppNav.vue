<template>
  <div class="nav">
    <div class="nav__wrapper">
      <div class="nav__logo">
        <img src="../assets/img/shared/desktop/logo.svg" alt="logo" />
      </div>

      <ul class="nav__list">
        <li class="nav__list-item">Stories</li>
        <li class="nav__list-item">Features</li>
        <li class="nav__list-item">Pricing</li>
      </ul>

      <button class="nav__button">Get an invite</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppNav",
};
</script>

<style scoped lang="scss">
@import "../variables";

.nav {
  width: 100%;

  &__wrapper {
    display: flex;
    justify-content: space-around;
  }

  &__logo {
    margin-top: 28px;
    cursor: pointer;
  }

  &__list {
    margin-top: 28px;

    display: flex;
    list-style-type: none;
    gap: 37px;

    color: rgb(0, 0, 0);
    font-family: $dmsans;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 2px;
    text-align: left;
  }

  &__button {
    border: none;
    cursor: pointer;
    margin-top: 16px;
    width: 158px;
    height: 40px;
    background: rgb(0, 0, 0);
    color: white;
    text-transform: uppercase;
    font-family: $dmsans;

    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 2px;
  }
}
</style>
