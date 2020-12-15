<template>
  <div id="image-mask">
    <img
      id="close-icon"
      @click="closeSelf"
      :src="closeButtonIconSrc"
      alt=""
      style="position: fixed; cursor: pointer; top: 0; right: 0"
    />
    <img
      id="main-image"
      :src="imageSrc"
      alt=""
      style="max-width: 100%; max-height: 100%"
    />
  </div>
</template>


<script>
import $ from 'jquery'
export default {
  data() {
    return {
      closeButtonIconSrc: require("../../../../assets/closeButton.png"),
      imageSrc: "",
    };
  },
  methods: {
    closeSelf() {
      this.$destroy();
      // document.body.removeChild(this.$el);
      $('#image-mask').remove();
    },
  },
};
</script>

<style scoped>
#image-mask {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1060;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>