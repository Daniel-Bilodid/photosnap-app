<template>
  <div class="sub">
    <div
      :class="{
        sub__monthly: true,
        sub__active: !isActive,
      }"
    >
      Monthly
    </div>
    <div
      :class="{
        sub__toggle: true,
        activeToggle: isActive,
        notActiveToggle: !isActive,
      }"
    >
      <div
        :class="{
          'sub__toggle-circle': true,
          active: isActive,
          notActive: !isActive,
        }"
        @click="toggleClass"
      ></div>
    </div>
    <div
      :class="{
        sub__yearly: true,
        sub__active: isActive,
      }"
    >
      Yearly
    </div>
  </div>
  <div class="info">
    <div class="info__wrapper">
      <div class="info__card">
        <div class="info__card-title">Basic</div>

        <div class="info__card-descr">
          Includes basic usage of our platform. Recommended for new and aspiring
          photographers.
        </div>

        <div class="info__card-price">$19.00</div>

        <div class="info__card-terms">per month</div>

        <div class="info__btn-wrapper">
          <button class="info__card-btn">pick plan</button>
        </div>
      </div>

      <div class="info__card">
        <div class="info__card-title">Basic</div>

        <div class="info__card-descr">
          Includes basic usage of our platform. Recommended for new and aspiring
          photographers.
        </div>

        <div class="info__card-price">$19.00</div>

        <div class="info__card-terms">per month</div>

        <div class="info__btn-wrapper">
          <button class="info__card-btn">pick plan</button>
        </div>
      </div>

      <div class="info__card">
        <div class="info__card-title">Basic</div>

        <div class="info__card-descr">
          Includes basic usage of our platform. Recommended for new and aspiring
          photographers.
        </div>

        <div class="info__card-price">$19.00</div>

        <div class="info__card-terms">per month</div>

        <div class="info__btn-wrapper">
          <button class="info__card-btn">pick plan</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppSub",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleClass() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../variables";

.sub {
  display: flex;
  justify-content: center;
  margin-top: 120px;
  height: 100%;

  &__monthly {
    color: rgb(0, 0, 0);
    font-family: $dmsans;
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0px;
    text-align: right;
    opacity: 0.6;
    margin-right: 32px;
  }

  &__yearly {
    color: rgb(0, 0, 0);
    font-family: $dmsans;
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0px;
    text-align: center;
    opacity: 0.6;
    margin-left: 32px;
  }
  &__toggle {
    width: 64px;
    height: 32px;
    border-radius: 16px;

    background: rgb(223, 223, 223);
    cursor: pointer;
    &-circle {
      width: 24px;
      height: 24px;
      background: rgb(0, 0, 0);
      border-radius: 100%;
      position: absolute;
      margin-top: 4px;
      margin-left: 4px;
    }
  }
}

.info {
  &__wrapper {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
  &__btn-wrapper {
    display: flex;
    justify-content: center;
  }
  &__card {
    width: 350px;
    height: 407px;
    background: rgb(245, 245, 245);
    margin-top: 80px;

    &-title {
      color: rgb(0, 0, 0);
      font-family: $dmsans;
      font-size: 24px;
      font-weight: 700;
      line-height: 25px;
      letter-spacing: 0px;
      text-align: center;
      margin-top: 56px;
    }

    &-descr {
      width: 270px;
      height: 75px;
      color: rgb(0, 0, 0);
      font-family: $dmsans;
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0px;
      text-align: center;
      opacity: 0.6;
      margin: 0 auto;
      margin-top: 18px;
    }

    &-price {
      color: rgb(0, 0, 0);
      font-family: $dmsans;
      font-size: 40px;
      font-weight: 700;
      line-height: 48px;
      letter-spacing: 4.17px;
      text-align: center;
      text-transform: uppercase;
      margin-top: 40px;
    }

    &-terms {
      color: rgb(0, 0, 0);
      font-family: $dmsans;
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0px;
      text-align: center;
      opacity: 0.6;
    }

    &-btn {
      width: 270px;
      height: 40px;
      background: rgb(0, 0, 0);
      border: none;

      color: rgb(255, 255, 255);
      font-family: $dmsans;
      font-size: 12px;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: 2px;
      text-align: center;
      text-transform: uppercase;
      margin-top: 32px;
    }
  }
}

.active {
  animation: moveRight 1s ease;
  animation-fill-mode: forwards;
  background-color: white;
}

.notActive {
  animation: moveLeft 1s ease;
  animation-fill-mode: forwards;
  background-color: black;
}

.activeToggle {
  animation: changeActiveColor 1s ease;
  animation-fill-mode: forwards;
}
.notActiveToggle {
  animation: changeNonActiveColor 1s ease;
  animation-fill-mode: forwards;
}
.sub__active {
  opacity: 1;
}
@keyframes moveRight {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(30px);
  }
}

@keyframes moveLeft {
  from {
    transform: translateX(30px);
  }
  to {
    transform: translateX(0px);
  }
}

@keyframes changeActiveColor {
  from {
    background: rgb(223, 223, 223);
  }
  to {
    background: black;
  }
}
@keyframes changeNonActiveColor {
  from {
    background: black;
  }
  to {
    background: rgb(223, 223, 223);
  }
}
</style>
