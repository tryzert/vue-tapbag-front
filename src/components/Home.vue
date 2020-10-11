<template>
  <div class="home">
    <nav
      class="navbar fixed-top navbar-expand-md navbar-light bg-light"
      style="max-height: 56px"
    >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo"
        aria-controls="navbarTogglerDemo"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand text-info" style="margin-right: 30px" href="tapbag"
        ><strong>TapBag</strong> <span class="badge badge-info">V1.0</span></a
      >

      <div class="collapse navbar-collapse" id="navbarTogglerDemo">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li
            class="nav-item active"
            style="margin: auto 0; margin-right: 30px"
          >
            <a class="nav-link font-italic" href="/"
              >去导航页 <span class="sr-only">(current)</span></a
            >
          </li>

          <li class="nav-item d-md-none">
            <a class="nav-link" href="/tapbag">全部文件</a>
          </li>
          <li class="nav-item d-md-none">
            <a class="nav-link" href="">我的分享</a>
          </li>
          <li class="nav-item d-md-none">
            <a class="nav-link" href="">回收站</a>
          </li>
          <li class="nav-item">
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="输入你想要查找的文件"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                搜索
              </button>
            </form>
          </li>
        </ul>
        <div class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Maple Syrup
          </a>
          <div
            class="dropdown-menu dropdown-menu-md-right"
            aria-labelledby="navbarDropdown"
          >
            <a class="dropdown-item" href="">个人中心</a>
            <a class="dropdown-item" href="">设置</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="">退出</a>
          </div>
        </div>
      </div>
    </nav>

    <div id="home-content">
      <div class="container-fluid" style="height: 100%">
        <div class="row" style="height: 100%">
          <div class="col-md-3 d-none d-md-block" id="content-left">
            <ul class="list-group">
              <!-- <li class="list-group-item text-info" @click="getHomeFiles">全部文件</li> -->
              <!-- <li class="list-group-item">我的分享</li>
              <li class="list-group-item">回收站</li> -->
              <li class="list-group-item">
                <button
                  type="button"
                  class="btn btn-link"
                  @click="getHomeFiles"
                >
                  全部文件
                </button>
              </li>
              <li class="list-group-item">
                <button type="button" class="btn btn-link">我的分享</button>
              </li>
              <li class="list-group-item">
                <button type="button" class="btn btn-link">回收站</button>
              </li>
            </ul>
          </div>
          <div class="col-md-9 col-12" id="content-right">
            <div id="operation-btn">
              <label class="text-info" style="margin-left: 10px">
                <input
                  type="checkbox"
                  style="width: 20px; height: 20px; margin-top: "
                />
                全选
              </label>
              <button type="button" class="btn btn-success btn-sm">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-plus"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                  /></svg
                >新建
              </button>
              <button type="button" class="btn btn-info btn-sm">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-upload"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"
                  /></svg
                >上传
              </button>
              <button type="button" class="btn btn-warning btn-sm">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-download"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                  /></svg
                >下载
              </button>
              <button type="button" class="btn btn-primary btn-sm">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-arrow-right"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  /></svg
                >移动
              </button>
              <button type="button" class="btn btn-info btn-sm">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-pencil"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                  /></svg
                >重命名
              </button>
              <button type="button" class="btn btn-danger btn-sm">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-trash"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  /></svg
                >删除
              </button>
            </div>

            <!-- <button type="button" class="btn btn-dark btn-sm">Dark</button> -->

            <!-- <nav aria-label="breadcrumb"> -->
            <ol class="breadcrumb" style="margin: 0; padding: 8px 16px">
              <li class="breadcrumb-item"><a href="/tapbag">Home</a></li>
              <li class="breadcrumb-item"><a href="#">Library</a></li>
              <li class="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
            <div id="file-box">
              <ul class="list-group">
                <FileCard
                  v-for="item in files"
                  :key="item.id"
                  :id="item.id"
                  :filename="item.file_name"
                  :filetype="item.file_type"
                  :fullpath="item.full_path"
                  @emitFileinfo="getFileinfo"
                ></FileCard>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <nav class="navbar fixed-bottom navbar-light bg-light">
      <p
        class="text-center text-info"
        style="width: 100%; margin: 0; padding: 0"
      >
        Copyright©2020 Zh.Tang
      </p>
    </nav>
  </div>
</template>

<script>
import axios from "axios";
import FileCard from "./FileCard";
export default {
  components: {
    FileCard,
  },
  data() {
    return {
      curpath: "/",
      historyPath: ["/"],
      files: [],
    };
  },
  created() {
    this.getHomeFiles();
  },
  methods: {
    getHomeFiles() {
      this.curpath = "/";
      this.getFiles("/");
    },
    getFiles(path) {
      axios
        .post("http://localhost:9010/tapbag/api", {
          code: 100,
          data: path,
        })
        .then((res) => {
          console.log("axios res:", res.data.data)
          if (res.data.data === null) {
            return;
          }
          if (res.data.data.length > 0) {
            this.files = res.data.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getFileinfo(info) {
      console.log("info is :", info);
      this.getFiles(info);
    },
  },
};
</script>

<style scoped>
div {
  /* border: 1px solid red; */
}

#navbarTogglerDemo {
  /* background-color: #f8f9fa; */
  background-color: #fff;
}

.home {
  position: fixed;
  width: 100%;
  height: 100%;
}

#home-content {
  position: fixed;
  width: 100%;
  top: 58px;
  bottom: 42px;
}

#content-left {
  height: 100%;
}

#content-right {
  height: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
}

#file-box {
  flex: 1;
  overflow-y: scroll;
  /* background-color: grey; */
}
</style>