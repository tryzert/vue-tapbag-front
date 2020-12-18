<template>
  <div id="filetree-mask">
    <div id="treebox">
      <div id="treebox-head">
        <img
          :src="closeButtonIconSrc"
          alt=""
          style="float: right; cursor: pointer"
          @click="closeSelf"
        />
        <p class="text-center" style="width: 100%; margin: 3px">
          <strong class="text-info">将文件移动到：</strong>
        </p>
        <div class="dropdown-divider"></div>
      </div>
      <div id="treebox-content">
        <FileTreeNode :treeNode="nodes" :activeName="activeName"></FileTreeNode>
      </div>
      <div id="treebox-foot">
        <div class="dropdown-divider"></div>
        <button
          @click="confirm"
          type="button"
          class="btn btn-success btn-sm float-right"
          style="margin-left: 20px"
        >
          确定
        </button>
        <button
          @click="closeSelf"
          type="button"
          class="btn btn-secondary btn-sm float-right"
          style="margin-left: 20px"
        >
          取消
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import FileTreeNode from "./FileTreeNode";
import $ from "jquery";
import bus from "./bus.js";
export default {
  components: {
    FileTreeNode,
  },
  created() {
    this.$axios
      .post("/tapbag/api", {
        code: 2007,
        data: "/",
      })
      .then((res) => {
        if (res.data.code === 2007) {
          this.nodes.children = res.data.data;
          if (this.nodes.children.length > 0) {
            this.nodes.hasChildren = true;
          }
        } else {
          this.$toast({
            type: "error",
            message: res.data.tip,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        this.$toast({
          type: "error",
          message: "网络出错！",
        });
      });
  },
  mounted() {
    bus.$on("postToggle", (msg) => {
      this.activeName = msg;
      this.moveData.to = msg;
    });
  },
  data() {
    return {
      closeButtonIconSrc: require("../../../assets/closeButton1.png"),
      activeName: "",
      moveData: {
        from: "",
        to: "",
        moveList: [],
      },
      nodes: {
        name: "全部文件",
        src: "/",
        hasChildren: false,
        children: [],
      },
    };
  },
  methods: {
    closeSelf() {
      this.$destroy();
      $("#filetree-mask").remove();
    },
    confirm() {
      console.log(this.moveData);
      if (this.moveData.from === "") {
        this.$toast({
          type: "error",
          message: "路径出错！",
        });
      }
      if (this.moveData.to === "") {
        this.$toast({
          type: "error",
          message: "请选择路径！",
        });
      }
      if (this.moveData.from === this.moveData.to) {
        this.$toast({
          type: "error",
          message: "文件已在此路径下！",
        });
      }
    },
  },
};
</script>


<style scoped>
#filetree-mask {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1060;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}

#treebox {
  background-color: white;
  padding: 12px;
  border-radius: 7px;
  height: 70%;
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 700px) {
  #treebox {
    width: 95%;
  }
}

@media screen and (min-width: 700px) {
  #treebox {
    width: 700px;
  }
}

#treebox-content {
  flex: 1;
  overflow: auto;
}
</style>