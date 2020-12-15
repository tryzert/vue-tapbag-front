<template>
  <div id="video-mask">
    <div id="video-box">
      <img
        :src="closeButtonIconSrc"
        alt=""
        style="position: absolute; top:15px; right:15px; cursor:pointer;"
        @click="closeSelf"
      />
      <p class="text-center" style="width: 100%">
        <strong class="text-info">正在播放：{{ videoName }}</strong>
      </p>
      <video
        :src="videoSrc"
        controls="true"
        autoplay="autoplay"
        style="max-height: 500px; max-width: 100%"
      ></video>
    </div>
  </div>
</template>


<script>
import $ from "jquery";
export default {
  data() {
    return {
      closeButtonIconSrc: require("../../../../assets/closeButton1.png"),
      videoName: "",
      videoSrc: "",
    };
  },
  methods: {
    closeSelf() {
      this.$destroy();
      // document.body.removeChild(this.$el);
      $("#video-mask").remove();
    },
  },
};
</script>

<style scoped>
#video-mask {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1060;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}

#video-box {
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 700px) {
  #video-box {
    max-width: 95%;
  }
}

@media screen and (min-width: 700px) {
  #video-box {
    max-width: 700px;
  }
}
</style>