<template>
  <div v-if="isBurger" class="overlay" @click="closeBurger"></div>
  <nav class="nav">
    <div class="container">
      <div class="nav__wrapper">
        <router-link class="nav__logo" to="/">
          <img src="../assets/img/shared/desktop/logo.svg" alt="logo" />
        </router-link>

        <ul class="nav__list">
          <li>
            <router-link to="/stories" class="nav__list-item"
              >Stories</router-link
            >
          </li>
          <li>
            <router-link to="/features" class="nav__list-item"
              >Features</router-link
            >
          </li>
          <li>
            <router-link to="/pricing" class="nav__list-item"
              >Pricing</router-link
            >
          </li>
        </ul>

        <button class="nav__button">Get an invite</button>

        <div
          :class="['nav__burger', { active: isBurger }]"
          @click="toggleBurger"
        >
          <span></span>
        </div>
      </div>
    </div>
    <div :class="['nav__menu', { active: isBurger }]">
      <ul class="nav__menu-list">
        <router-link to="/stories" class="nav__menu-item">Stories</router-link>
        <router-link to="/features" class="nav__menu-item"
          >Features</router-link
        >
        <router-link to="/pricing" class="nav__menu-item">Pricing</router-link>
      </ul>
      <div class="nav__menu-hr"></div>

      <button class="nav__menu-btn">Get an invite</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNav",

  data() {
    return {
      isBurger: false,
    };
  },
  methods: {
    toggleBurger() {
      this.isBurger = !this.isBurger;
      if (this.isBurger) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../variables";
.container {
  width: 1100px;
  margin: 0 auto;
}
.nav {
  width: 100%;
  height: 72px;
  background-color: white;
  position: relative;
  z-index: 20;
  &__burger {
    display: none;
  }

  &__menu {
    opacity: 0;
  }
  &__wrapper {
    display: flex;
    justify-content: space-between;
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
    &-item {
      text-decoration: none;
      color: rgb(0, 0, 0);
    }
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

@media (max-width: 1200px) {
  .container {
    width: unset;
  }

  .nav {
    &__wrapper {
      justify-content: space-around;
    }
  }
}
@keyframes burgerMenu {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes burgerMenuNot {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@media (max-width: 680px) {
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }
  .nav {
    position: relative;

    &__list {
      display: none;
    }

    &__menu {
      animation-name: burgerMenuNot;
      animation-duration: 1s;
      animation-fill-mode: forwards;

      position: absolute;
      width: 100%;
      height: 283px;
      background: rgb(255, 255, 255);
      z-index: 10;
      &-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 60px;
        padding: 0px;
      }

      &-hr {
        width: 80%;
        height: 1px;
        background: rgb(0, 0, 0);
        opacity: 0.25;
        margin: 0 auto;
        margin-top: 20px;
      }
      &-btn {
        display: block;
        width: 310px;
        height: 48px;
        background: rgb(0, 0, 0);
        color: rgb(255, 255, 255);
        font-family: $dmsans;
        font-size: 15px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 2.5px;
        text-align: center;
        margin: 0 auto;
        margin-top: 20px;
        text-transform: uppercase;
      }

      &-item {
        color: rgb(0, 0, 0);
        font-family: $dmsans;
        font-size: 15px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 2.5px;
        text-align: center;
        text-transform: uppercase;
        text-decoration: none;
      }
    }
    &__logo {
      margin-left: 24px;
    }
    &__wrapper {
      justify-content: space-between;
    }
    &__button {
      display: none;
    }

    &__burger {
      display: block;
      margin-right: 24px;
      margin-top: 40px;
      width: 32px;
      height: 24px;
      cursor: pointer;
      right: 2rem;
      top: 2rem;
      z-index: 20;

      span {
        width: 100%;
        background: rgb(0, 0, 0);
        display: block;
        transition: all 0.5s ease-in-out;
        border-radius: 12px;
        height: 1px;
        margin-top: -5px;
      }

      span::after {
        content: "";
        width: 100%;
        background: rgb(0, 0, 0);
        display: block;
        transition: all 0.5s ease-in-out;
        border-radius: 12px;
        height: 1px;
        margin-top: -5px;
      }

      span::before {
        transform: translateY(-10px);
      }

      span::after {
        transform: translateY(10px);
        margin-top: -4px;
      }
    }
  }
  .nav__menu.active {
    animation-name: burgerMenu;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  .nav__burger.active span {
    transform: rotateZ(45deg) translateY(0);
  }

  .nav__burger.active span::after {
    transform: rotateZ(-90deg) translateY(0);
  }
}
</style>
