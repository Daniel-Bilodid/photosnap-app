<template>
  <div class="features">
    <div class="features__wrapper">
      <div class="features__align"></div>
      <div class="features__text">
        <div class="features__text-title">features</div>

        <div class="features__text-descr">
          We make sure all of our features are designed to be loved by every
          aspiring and even professional photograpers who wanted to share their
          stories.
        </div>
      </div>

      <div class="features__hero">
        <img src="../assets/img/features/desktop/hero.jpg" alt="hero" />
      </div>
    </div>

    <div class="features__cards">
      <div class="features__card">
        <div class="features__card-img">
          <img
            src="../assets/img/features/desktop/responsive.svg"
            alt="responsive"
          />
        </div>
        <div class="features__card-title">100% Responsive</div>
        <div class="features__card-descr">
          No matter which the device you’re on, our site is fully responsive and
          stories look beautiful on any screen.
        </div>
      </div>

      <div class="features__card features__card-dif">
        <div class="features__card-img">
          <img
            src="../assets/img/features/desktop/no-limit.svg"
            alt="no-limit"
          />
        </div>
        <div class="features__card-title">No Photo Upload Limit</div>
        <div class="features__card-descr">
          Our tool has no limits on uploads or bandwidth. Freely upload in bulk
          and share all of your stories in one go.
        </div>
      </div>

      <div class="features__card">
        <div class="features__card-img">
          <img src="../assets/img/features/desktop/embed.svg" alt="embed" />
        </div>
        <div class="features__card-title">Available to Embed</div>
        <div class="features__card-descr">
          Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
          videos, Google Maps, and more.
        </div>
      </div>

      <div class="features__card">
        <div class="features__card-img">
          <img
            src="../assets/img/features/desktop/custom-domain.svg"
            alt="custom-domain"
          />
        </div>
        <div class="features__card-title">Custom Domain</div>
        <div class="features__card-descr">
          With Photosnap subscriptions you can host your stories on your own
          domain. You can also remove our branding!
        </div>
      </div>

      <div class="features__card">
        <div class="features__card-img">
          <img
            src="../assets/img/features/desktop/boost-exposure.svg"
            alt="boost-exposure"
          />
        </div>
        <div class="features__card-title">Boost Your Exposure</div>
        <div class="features__card-descr">
          Users that viewed your story or gallery can easily get notifed of new
          and featured stories with our built in mailing list.
        </div>
      </div>

      <div class="features__card">
        <div class="features__card-img">
          <img
            src="../assets/img/features/desktop/drag-drop.svg"
            alt="drag-drop"
          />
        </div>
        <div class="features__card-title">Drag & Drop Image</div>
        <div class="features__card-descr">
          Easily drag and drop your image and get beautiful shots everytime. No
          over the top tooling to add friction to creating stories.
        </div>
      </div>
    </div>
    <app-beta />
  </div>
</template>

<script>
import AppBeta from "./AppBeta.vue";
export default {
  name: "AppFeatures",
  components: {
    AppBeta,
  },
};
</script>

<style scoped lang="scss">
@import "../variables";

.features {
  width: 100%;
  &__wrapper {
    width: 100%;
    display: flex;
  }

  &__beta {
    width: 100%;
    height: 280px;
    background-image: url("../assets/img/shared/desktop/bg-beta.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  &__beta {
    &-text {
      display: flex;
      justify-content: space-between;
    }

    &-title {
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

    &-link {
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
  &__cards {
    width: 1100px;
    height: 100%;

    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-top: 160px;
  }

  &__card {
    margin-bottom: 104px;
    margin-right: 15px;
    &-img {
      display: flex;
      justify-content: center;
      margin-bottom: 48px;
    }
    &-title {
      display: flex;
      justify-content: center;
      margin-bottom: 16px;
      color: rgb(0, 0, 0);
      font-family: $dmsans;
      font-size: 18px;
      font-weight: 700;
      line-height: 25px;
      letter-spacing: 0px;
      text-align: center;
    }

    &-dif {
      margin-top: 38px;
    }

    &-descr {
      width: 350px;
      height: 75px;
      color: rgb(0, 0, 0);
      font-family: $dmsans;
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0px;
      text-align: center;
      opacity: 0.6;
    }
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
    width: 100%;
    height: 100%;
  }

  &__text {
    width: 74%;
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

@media (max-width: 1100px) {
  .features {
    &__text {
      height: 317px;
    }
    &__hero {
      width: 273px;
      height: 490px;
      img {
        width: 273px;
        height: 490px;
        object-fit: cover;
      }
    }

    &__cards {
      width: 736px;
    }

    &__text {
      width: 100%;
    }
  }
}

@media (max-width: 750px) {
  .features {
    &__wrapper {
      flex-direction: column-reverse;
    }
    &__text {
      &-descr {
        width: 318px;
        height: 100px;
      }
    }
    &__card {
      &-title {
        width: 310px;
        height: 25px;
        font-size: 18px;
        margin: 0 auto;
      }
      &-descr {
        width: 310px;
        height: 75px;
        margin: 0 auto;
        margin-top: 16px;
      }
    }
    &__cards {
      width: 100%;
      flex-direction: column;
    }
    &__text {
      margin-top: -5px;
      align-items: start;
      padding: 0;
      &-title {
        margin-left: 29px;
        margin-top: 72px;
      }
      &-descr {
        margin-left: 29px;
        margin-top: 16px;
      }
    }
    &__align {
      width: 128px;
      height: 6px;
      top: 286px;
      margin-left: 33px;
    }
    &__hero {
      width: 100%;
      height: auto;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>
