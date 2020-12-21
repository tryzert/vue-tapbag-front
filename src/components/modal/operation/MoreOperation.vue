<template>
  <div id="mask-box">
    <div id="content-box">
      <div id="content-head">
        <button type="button" class="close float-right" @click="closeSelf">
          <span aria-hidden="true">&times;</span>
        </button>
        <p class="text-center" style="width: 100%">
          <strong class="text-success">{{ filename }}</strong>
        </p>
      </div>
      <div id="content-body">
        <li style="cursor: pointer" class="list-group-item">
          <div class="text-center" @click="toggleExpandDown">
            <strong class="text-info">重命名</strong>
          </div>

          <transition-group name="test">
            <div
              id="expand-down"
              class="show-content"
              v-if="showExpandDown"
              :key="1"
            >
              <input
                type="text"
                name="filename"
                style="width: 100%; margin-bottom: 7px"
                v-model="inputFilename"
              />
              <div id="expand-down-button">
                <button
                  type="button"
                  class="btn btn-secondary btn-sm"
                  @click="toggleExpandDown"
                >
                  取消
                </button>
                <button
                  type="button"
                  class="btn btn-success btn-sm"
                  style="margin-left: 5px"
                  @click="confirmButtonClicked"
                >
                  确定
                </button>
              </div>
            </div>
          </transition-group>
        </li>
        <li
          style="cursor: pointer"
          class="list-group-item text-center"
          @click="shareItemClicked"
        >
          <strong class="text-info">分享</strong>
        </li>
      </div>
      <div id="content-foot"></div>
    </div>
  </div>
</template>


<script>
import $ from "jquery";
export default {
  data() {
    return {
      filename: "",
      inputFilename: "",
      showExpandDown: false,
    };
  },

  methods: {
    closeSelf() {
      this.$destroy();
      // document.body.removeChild(this.$el);
      $("#mask-box").remove();
    },
    toggleExpandDown() {
      this.showExpandDown = !this.showExpandDown;
      //   this.inputFilename = this.filename;
    },
    confirmButtonClicked() {
      console.log(" confirm Button Clicked");
    },
    shareItemClicked() {
      this.$toast({
        type: "success",
        message: "分享成功！",
      });
    },
  },
};
</script>


<style scoped>
#mask-box {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1060;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

#content-box {
  background-color: white;
  padding: 15px;
  border-radius: 5px;
}

@media screen and (max-width: 700px) {
  #content-box {
    width: 95%;
  }
}

@media screen and (min-width: 700px) {
  #content-box {
    width: 680px;
  }
}

#expand-down-button {
  display: flex;
  justify-content: flex-end;
}

.test-enter,
.test-leave-to {
  opacity: 0;
}
.test-enter-to,
.test-leave {
  opacity: 1;
}
.test-enter-active,
.test-leave-active {
  transition: all 1s;
}
</style>