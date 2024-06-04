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
      @click="toggleClass"
    >
      <div
        :class="{
          'sub__toggle-circle': true,
          active: isActive,
          notActive: !isActive,
        }"
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
        <div class="info__text-wrapper">
          <div class="info__card-title">Basic</div>

          <div class="info__card-descr">
            Includes basic usage of our platform. Recommended for new and
            aspiring photographers.
          </div>

          <div class="info__btn-wrapper">
            <button class="info__card-btn info__tablet-btn">pick plan</button>
          </div>
        </div>
        <div class="info__price-wrapper">
          <div class="info__card-price">${{ basicPrice }}</div>

          <div class="info__card-terms">{{ amount }}</div>
        </div>

        <div class="info__btn-wrapper">
          <button class="info__card-btn">pick plan</button>
        </div>
      </div>

      <div class="info__card-dif">
        <div class="info__text-wrapper">
          <div class="info__card-title white__title">Pro</div>

          <div class="info__card-descr gray__descr">
            More advanced features available. Recommended for photography
            veterans and professionals.
          </div>
          <div class="info__btn-wrapper">
            <button class="info__card-btn info__tablet-btn info__tablet-white">
              pick plan
            </button>
          </div>
        </div>

        <div class="infro__price-wrapper">
          <div class="info__card-price white__price">${{ proPrice }}</div>

          <div class="info__card-terms gray__terms">{{ amount }}</div>
        </div>
        <div class="info__btn-wrapper">
          <button class="info__card-btn white__btn">pick plan</button>
        </div>
      </div>

      <div class="info__card">
        <div class="info__text-wrapper">
          <div class="info__card-title">Business</div>

          <div class="info__card-descr">
            Additional features available such as more detailed metrics.
            Recommended for business owners.
          </div>

          <div class="info__btn-wrapper">
            <button class="info__card-btn info__tablet-btn">pick plan</button>
          </div>
        </div>

        <div class="info__price-wrapper">
          <div class="info__card-price">${{ businessPrice }}</div>

          <div class="info__card-terms">{{ amount }}</div>
        </div>

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
      basicPrice: 19.99,
      proPrice: "39.00",
      businessPrice: "99.00",
      terms: true,
      amount: "per mounth",
    };
  },
  methods: {
    toggleClass() {
      this.isActive = !this.isActive;

      if (this.terms) {
        this.basicPrice = "190.00";
        this.proPrice = "390.00";
        this.businessPrice = "990.00";
        this.amount = "per year";
        this.terms = false;
      } else {
        this.basicPrice = 19.99;
        this.proPrice = "39.00";
        this.businessPrice = "99.00";
        this.terms = true;
        this.amount = "per mounth";
      }
    },
    togglePrice() {},
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

  &__tablet {
    &-btn {
      display: none;
    }
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

    &-dif {
      width: 350px;
      height: 470px;
      background: rgb(0, 0, 0);
      margin-top: 52px;
    }

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

.white__title {
  color: white;
  margin-top: 88px;
}
.white__price {
  color: white;
}
.gray__terms {
  color: white;
  opacity: 0.6;
}

.gray__descr {
  color: white;
  opacity: 0.6;
}

.white__btn {
  background-color: white;
  color: black;
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

@media (max-width: 1200px) {
  .info {
    &__card {
      display: flex;
      width: 689px;
      height: 270px;
      justify-content: space-around;
      &-price {
        width: 180px;
      }
      &-title {
        text-align: left;
        margin-top: 40px;
      }

      &-descr {
        text-align: left;
      }

      &-dif {
        display: flex;
        width: 689px;
        height: 270px;
        justify-content: space-evenly;
      }
      &-btn {
        display: none;
      }
    }

    &__tablet {
      &-btn {
        display: block;
      }
      &-white {
        background-color: white;
        color: black;
      }
    }

    &__wrapper {
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
