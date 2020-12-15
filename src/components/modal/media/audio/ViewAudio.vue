<template>
  <div id="audio-mask">
    <div id="audio-box">
      <img
        :src="closeButtonIconSrc"
        alt=""
        style="float: right; cursor: pointer"
        @click="closeSelf"
      />
      <p class="text-center" style="width: 100%"><strong class="text-info">正在播放：{{audioName}}</strong></p>
      <audio :src="audioSrc" style="width: 100%" controls=true autoplay="autoplay"></audio>
    </div>
  </div>
</template>


<script>
import $ from "jquery";
export default {
  data() {
    return {
      closeButtonIconSrc: require("../../../../assets/closeButton1.png"),
      audioName: "",
      audioSrc: "",
    };
  },
  methods: {
    closeSelf() {
      this.$destroy();
      // document.body.removeChild(this.$el);
      $("#audio-mask").remove();
    },
  },
};
</script>

<style scoped>
#audio-mask {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1060;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}

#audio-box {
  background-color: white;
  padding: 15px;
  border-radius: 5px;
}

@media screen and (max-width: 700px) {
  #audio-box {
    width: 95%;
  }
}

@media screen and (min-width: 700px) {
  #audio-box {
    width: 700px;
  }
}
</style>