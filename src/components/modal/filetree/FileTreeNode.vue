<template>
  <div class="node-box">
    <div
      class="tree-node"
      @click="toggle"
      :class="[{ active: activeName === treeNode.src }]"
    >
      <div class="icon-box d-inline-block" style="width: 20px; height: 20px">
        <span v-if="treeNode.hasChildren">
          <img :src="expandIconSrc" alt="" v-if="showChildren" />
          <img :src="collapseIconSrc" alt="" v-else />
        </span>
      </div>
      <span><img :src="folderIconSrc" alt="" style="width: 20px" /></span>
      {{ treeNode.name }}
    </div>
    <div v-show="showChildren">
      <FileTreeNode
        v-for="node in treeNode.children"
        :key="node.name"
        :treeNode="node"
        :activeName="activeName"
      ></FileTreeNode>
    </div>
  </div>
</template>

<script>
import bus from "./bus.js";
import FileTreeVue from "./FileTree.vue";
export default {
  name: "FileTreeNode",
  props: {
    treeNode: Object,
    activeName: String,
  },
  data() {
    return {
      expandIconSrc: require("../../../assets/expand.png"),
      collapseIconSrc: require("../../../assets/collapse.png"),
      folderIconSrc: require("../../../assets/folder.svg"),
      showChildren: false,
    };
  },
  methods: {
    toggle() {
      this.showChildren = !this.showChildren;
      this.$axios
        .post("/tapbag/api", {
          code: 2007,
          data: this.treeNode.src,
        })
        .then((res) => {
          if (res.data.code === 2007) {
              this.treeNode.children = res.data.data;
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
      bus.$emit("postToggle", this.treeNode.src);
    },
  },
};
</script>


<style scoped>
.node-box {
  padding-left: 20px;
}

.tree-node {
  border-radius: 3px;
  padding: 5px;
  cursor: pointer;
}

.tree-node:hover {
  background: #e5f0fb;
  border-color: #bbd4ef #fff;
}

.active {
  background: #97dce0;
}

.active:hover {
  background: #97dce0;
}
</style>