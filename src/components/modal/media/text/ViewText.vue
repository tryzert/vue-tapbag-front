<template>
  <div id="text-mask">
    <div id="text-box">
      <div id="text-head">
        <img
          :src="closeButtonIconSrc"
          alt=""
          style="float: right; cursor: pointer"
          @click="closeSelf"
        />
        <p class="text-center" style="width: 100%; margin: 3px">
          <strong class="text-info">{{ textName }}</strong>
        </p>
        <hr style="margin: 6px 0" />
        <div id="text-toolbar" style="margin-bottom: 5px">
          <span class="cursor-style" @click="fontSizeSmaller"
            ><kbd>-</kbd></span
          >
          <span class="text-success">{{ preFontSize }}%</span>
          <span class="cursor-style" @click="fontSizeLarger"><kbd>+</kbd></span>
          <!-- <span class="cursor-style"><kbd>换肤</kbd></span> -->
          <!-- <span class="cursor-style"><kbd>编辑</kbd></span> -->
        </div>
      </div>
      <div id="text-body">
        <!-- <textarea v-model="textContent" style="height:700px; width:100%"></textarea> -->
        <pre :class="preFontSizeClass">{{ textContent }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  computed: {
    preFontSizeClass() {
      return "fontsize" + this.preFontSize.toString();
    },
  },
  data() {
    return {
      closeButtonIconSrc: require("../../../../assets/closeButton1.png"),
      preFontSize: 80,
      textName: "",
      textContent: "",
    };
  },
  methods: {
    closeSelf() {
      this.$destroy();
      $("#text-mask").remove();
    },
    fontSizeLarger() {
      if (this.preFontSize < 200 && this.preFontSize >= 100) {
        this.preFontSize += 20;
      } else if (this.preFontSize < 100) {
        this.preFontSize += 10;
      }
      //   console.log(this.preFontSize);
    },
    fontSizeSmaller() {
      if (this.preFontSize <= 200 && this.preFontSize > 100) {
        this.preFontSize -= 20;
      } else if (this.preFontSize <= 100 && this.preFontSize > 20) {
        this.preFontSize -= 10;
      }
      //   console.log(this.preFontSize);
    },
  },
};
</script>

<style scoped>
#text-mask {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1060;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}

#text-box {
  background: gainsboro;
  padding: 10px;
  border-radius: 5px;
  /* width: 90%; */
  /* max-height: 90%; */
  height: 85%;
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 1000px) {
  #text-box {
      width: 95%;
  }
}

@media screen and (min-width: 1000px) {
  #text-box {
      width: 980px;
  }
}

#text-body {
  flex: 1;
  height: 90%;
  bottom: 0;
  /* overflow-y: scroll; */
  overflow: auto;
  border: 1px solid green;
  border-radius: 5px;
}

.cursor-style {
  cursor: pointer;
}

pre {
  -moz-tab-size: 4; /* Firefox 4+ */
  -o-tab-size: 4; /* Opera 11.5 & 12.1 only */
  tab-size: 4; /* Chrome 21+, Safari 6.1+, Opera 15+ */
  margin: 0;
  height: 100%;
}

.fontsize20 {
  font-size: 0.2em;
}

.fontsize30 {
  font-size: 0.3em;
}

.fontsize40 {
  font-size: 0.4em;
}

.fontsize50 {
  font-size: 0.5em;
}

.fontsize60 {
  font-size: 0.6em;
}

.fontsize70 {
  font-size: 0.7em;
}

.fontsize80 {
  font-size: 0.8em;
}

.fontsize90 {
  font-size: 0.9em;
}

.fontsize100 {
  font-size: 1em;
}

.fontsize120 {
  font-size: 1.2em;
}

.fontsize140 {
  font-size: 1.4em;
}

.fontsize160 {
  font-size: 1.6em;
}

.fontsize180 {
  font-size: 1.8em;
}

.fontsize200 {
  font-size: 2em;
}
</style>