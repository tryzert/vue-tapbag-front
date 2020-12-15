<template>
  <div class="box">
    <li class="list-group-item">
      <input type="checkbox" v-model="checked" @click="checkboxClicked" />
      <div id="fileinfo-box" @click="fileinfoClicked(id)">
        <img style="width: 23px" :src="imgSrc" alt="" />
        <span class="text-info text-break">{{ name }}</span>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  props: ["id", "type", "openable", "name", "relpath", "isChecked"],
  data() {
    return {
      checked: this.isChecked,
    };
  },
  computed: {
    imgSrc() {
      return require("../assets/" + this.type + ".svg")
    },
  },
  watch: {
    isChecked(val) {
      this.checked = val;
    }
  },
  methods: {
    checkboxClicked() {
      this.$emit("emitCheckboxValue", this.id);
    },
    fileinfoClicked(info) {
      if (this.type == "folder") {
        this.$emit("emitFolderInfo", info);
      } else {
        this.$emit("emitFileInfo", info);
      }
    },
  },
};
</script>


<style scoped>
input {
  width: 20px;
  height: 20px;
  /* margin: auto 5px; */
  margin-left: 5px;
  margin-right: 5px;
}

img {
  /* margin: auto 10px; */
  margin-left: 10px;
  margin-right: 10px;
}

.list-group-item {
  padding: 10px 20px;
  display: flex;
  align-items: center;
}

#fileinfo-box {
  flex: 1;
  display: flex;
  cursor: pointer;
}
</style>