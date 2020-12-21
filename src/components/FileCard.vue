<template>
  <div class="box">
    <li class="list-group-item">
      <input type="checkbox" v-model="checked" @click="checkboxClicked" />
      <div id="fileinfo-box" @click="fileinfoClicked(id)">
        <img style="width: 23px" :src="imgSrc" alt="" />
        <span class="text-info text-break">{{ name }}</span>
      </div>
      <div id="more-opreation" @click="moreOperationClicked(id)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-three-dots"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
          />
        </svg>
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
      return require("../assets/" + this.type + ".svg");
    },
  },
  watch: {
    isChecked(val) {
      this.checked = val;
    },
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
    moreOperationClicked(info) {
      this.$emit("emitMoreOperationInfo", info);
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

#more-opreation {
  cursor: pointer;
  height: 100%;
  padding-left: 30px;
  padding-right: 10px;
}
</style>