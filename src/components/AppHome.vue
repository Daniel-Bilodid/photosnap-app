<template>
  <div class="home">
    <div class="home__photo">
      <div class="home__photo-text">
        <div class="home__photo-align"></div>
        <div class="home__photo-title">
          create and share your photo stories.
        </div>
        <div class="home__photo-descr">
          Photosnap is a platform for photographers and visual storytellers. We
          make it easy to share photos, tell stories and connect with others.
        </div>
        <button class="home__photo-btn">Get an invite</button>
        <img src="../assets/img/shared/desktop/arrow.svg" alt="arrow" />
      </div>
      <div class="home__photo-img">
        <img
          src="../assets/img/home/desktop/create-and-share.jpg"
          alt="create and share photo"
        />
      </div>
    </div>

    <div class="home__photo">
      <div class="home__photo-img">
        <img
          src="../assets/img/home/desktop/beautiful-stories.jpg"
          alt="create and share photo"
        />
      </div>
      <div class="home__photo-text text-white">
        <div class="home__photo-title text-black">
          BEAUTIFUL STORIES EVERY TIME
        </div>
        <div class="home__photo-descr text-black">
          We provide design templates to ensure your stories look terrific.
          Easily add photos, text, embed maps and media from other networks.
          Then share your story with everyone.
        </div>
        <button class="home__photo-btn text-black">Get an invite</button>
      </div>
    </div>

    <div class="home__photo">
      <div class="home__photo-text text-white">
        <div class="home__photo-align"></div>
        <div class="home__photo-title text-black">DESIGNED FOR EVERYONE</div>
        <div class="home__photo-descr text-black">
          Photosnap can help you create stories that resonate with your
          audience. Our tool is designed for photographers of all levels,
          brands, businesses you name it.
        </div>
        <button class="home__photo-btn text-black">Get an invite</button>
      </div>
      <div class="home__photo-img">
        <img
          src="../assets/img/home/desktop/designed-for-everyone.jpg"
          alt="create and share photo"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHome",
};
</script>

<style scoped lang="scss">
@import "../variables";

.home {
  margin-top: 16px;
  .text-white {
    background-color: white;
  }

  .text-black {
    color: black;
  }
  &__photo {
    display: flex;
    width: 100%;
    height: 850px;

    &-text {
      background: rgb(0, 0, 0);
      color: white;
      width: 810px;
      height: 850px;

      box-sizing: border-box;
    }
    &-align {
      width: 6px;
      height: 304px;
      background: linear-gradient(
        26.57deg,
        rgb(255, 197, 147) -24.992%,
        rgb(188, 113, 152) 26.948%,
        rgb(90, 119, 255) 74.998%
      );
      position: absolute;
      top: 37%;
    }

    &-title {
      width: 387px;
      height: 144px;
      color: rgb(255, 255, 255);
      font-family: $dmsans;
      font-size: 40px;
      font-weight: 700;
      line-height: 48px;
      letter-spacing: 4.17px;
      text-align: left;
      text-transform: uppercase;

      margin: 0 auto;
      margin-top: 273px;
    }

    &-btn {
      border: none;
      background: none;
      color: white;
      margin-left: 205px;
      margin-top: 48px;
      text-transform: uppercase;

      font-family: $dmsans;
      font-size: 12px;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: 2px;
      text-align: left;
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
      margin: 0 auto;
      margin-top: 21px;
    }

    &-img {
      flex-grow: 1;
      overflow: hidden;
      height: 850px;
      img {
        width: 100%;
        height: 850px;
        object-fit: cover;
      }
    }
  }
}
</style>
