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
        <div class="accordion" id="accordionExample">
          <li class="list-group-item">
            <div class="card">
              <button
                class="btn btn-link btn-block text-center text-info"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong class="text-info">重命名</strong>
              </button>

              <div
                id="collapseOne"
                class="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div class="card-body">
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
                      data-toggle="collapse"
                      href="#collapseOne"
                      role="button"
                      aria-expanded="false"
                    >
                      取消
                    </button>
                    <button
                      type="button"
                      class="btn btn-success btn-sm"
                      style="margin-left: 5px"
                      @click="renameConfirmButtonClicked"
                    >
                      确定
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="card">
              <button
                class="btn btn-link btn-block text-center collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong class="text-info">分享</strong>
              </button>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="inputGroupSelect01"
                        >状态</label
                      >
                    </div>
                    <select class="custom-select" id="inputGroupSelect01">
                      <option value="0">分享码</option>
                      <option selected value="1">公开</option>
                    </select>
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="inputGroupSelect01"
                        >期限</label
                      >
                    </div>
                    <select class="custom-select" id="inputGroupSelect01">
                      <option value="0">1小时</option>
                      <option value="1">1天</option>
                      <option selected value="2">7天</option>
                      <option value="3">1个月</option>
                      <option value="4">3个月</option>
                      <option value="5">6个月</option>
                      <option value="6">1年</option>
                      <option value="7">永久</option>
                    </select>
                  </div>
                    <!-- <p>链接🔗</p> -->
                  <div id="expand-down-button">
                    <button
                      type="button"
                      class="btn btn-secondary btn-sm"
                      data-toggle="collapse"
                      href="#collapseTwo"
                      role="button"
                      aria-expanded="false"
                    >
                      取消
                    </button>
                    <button
                      type="button"
                      class="btn btn-success btn-sm"
                      style="margin-left: 5px"
                      @click="shareConfirmButtonClicked"
                    >
                      确定
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </div>
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
      //   showExpandDown: false,
    };
  },

  methods: {
    closeSelf() {
      this.$destroy();
      // document.body.removeChild(this.$el);
      $("#mask-box").remove();
    },
    renameConfirmButtonClicked() {
      console.log(" confirm Button Clicked");
    },
    shareConfirmButtonClicked() {
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
</style>