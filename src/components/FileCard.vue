<template>
  <div class="box">
    <li class="list-group-item">
      <input @click="checkboxClicked" type="checkbox" v-model="checked" />
      <div id="fileinfo-box" @click="fileinfoClicked(fullpath)">
        <img style="width: 23px" :src="imgSrc" alt="" />
        <span class="text-info text-break">{{ filename }}</span>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  props: ["id", "filetype", "filename", "fullpath"],
  data() {
    return {
      checked: false,
    };
  },
  computed: {
    imgSrc() {
      return (
        "http://localhost:9010/tapbag/static/img/" + this.filetype + ".svg"
      );
    },
  },
  methods: {
    checkboxClicked() {
      this.checked = this.checked ? false : true;
    },
    fileinfoClicked(info) {
      if (this.filetype == "folder") {
          this.$emit("emitFileinfo", info);
      }
    },
  },
};
</script>


<style scoped>
input {
  width: 20px;
  height: 20px;
}

img {
  margin: auto 12px;
}

.list-group-item {
  padding: 10px 20px;
  display: flex;
  align-items: center;
}

#fileinfo-box {
  flex: 1;
  display: flex;
}
</style>