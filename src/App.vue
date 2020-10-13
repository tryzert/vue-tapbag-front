<template>
  <div id="app">
    <div
      class="modal fade"
      id="exampleModal"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <p
              class="modal-title text-center"
              id="exampleModalLabel"
              style="width: 100%"
            >
              {{ this.onlineFile.name }}
            </p>
            <button
              type="button"
              class="close"
              aria-label="Close"
              @click="closeOnlineFile"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <video
              id="onlineVideo"
              v-if="this.onlineFile.type === 'video'"
              controls=""
              autoplay=""
              name="media"
              style="width: 100%"
            >
              <source
                :src="
                  'http://localhost:9010/tapbag/api/online' +
                  this.onlineFile.relpath
                "
                type="video/mp4"
              />
            </video>
            <audio
              id="onlineAudio"
              v-if="this.onlineFile.type === 'audio'"
              style="width: 100%"
              :src="
                'http://localhost:9010/tapbag/api/online' +
                this.onlineFile.relpath
              "
              controls=""
              autoplay=""
            ></audio>
            <img
              v-if="this.onlineFile.type === 'image'"
              style="width: 100%"
              :src="
                'http://localhost:9010/tapbag/api/online' +
                this.onlineFile.relpath
              "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <router-view @emitOpenFileOnline="getOpenFileOnline" />
  </div>
</template>


<script>
import $ from "jquery";
export default {
  name: "App",
  data() {
    return {
      onlineFile: {
        id: -1,
        name: "",
        relpath: "",
        type: "",
      },
    };
  },
  methods: {
    getOpenFileOnline(info) {
      console.log("[App.vue], 在线打开：", info);
      if (
        info.type === "audio" ||
        info.type === "video" ||
        info.type === "image"
      ) {
        this.onlineFile.id = info.id;
        this.onlineFile.name = info.name;
        this.onlineFile.relpath = info.relpath;
        this.onlineFile.type = info.type;
        $("#exampleModal").modal("show");
        // if (this.onlineFile.type === "video") {
        //   document.getElementById("onlineVideo").volume(0.5);
        // } else if (this.onlineFile.type === "audio") {
        //   document.getElementById("onlineAudio").volume(0.5);
        // }
      }
      console.log("[App.vue], this.onlineFilie：", this.onlineFile);
    },
    closeOnlineFile() {
      $("#exampleModal").modal("hide");
      this.onlineFile.type = "";
      if (this.onlineFile.type === "video") {
        let video = document.getElementById("onlineVideo");
        video.pause();
      } else if (this.onlineFile.type === "audio") {
        let audio = document.getElementById("onlineAudio");
        audio.pause();
      }
    },
  },
};
</script>

<style coped>
</style>>
