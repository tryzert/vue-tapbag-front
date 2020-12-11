<template>
  <div class="home">
    <div id="modal-backdrop-box" style="display: none">
      <div></div>
    </div>
    <nav class="navbar fixed-top navbar-expand-md navbar-light bg-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand text-info" style="margin-right: 30px" href="tapbag"
        ><strong>TapBag</strong> <span class="badge badge-info">V1.0</span></a
      >
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <a class="navbar-nav nav-link font-italic" href="/"
          ><span>
            <svg
              width="1.5em"
              height="1.5em"
              viewBox="0 0 16 16"
              class="bi bi-cursor"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z"
              />
            </svg>
            去导航页
          </span></a
        >
        <a class="navbar-nav nav-link d-md-none" href="/"
          ><span
            ><svg
              width="1.5em"
              height="1.5em"
              viewBox="0 0 16 16"
              class="bi bi-house"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
              />
              <path
                fill-rule="evenodd"
                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
              />
            </svg>
            全部文件</span
          ></a
        >
        <a class="navbar-nav nav-link d-md-none" href="/"
          ><span
            ><svg
              width="1.5em"
              height="1.5em"
              viewBox="0 0 16 16"
              class="bi bi-share"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
              />
            </svg>
            我的分享</span
          ></a
        >
        <a class="navbar-nav nav-link d-md-none" href="/"
          ><span
            ><svg
              width="1.5em"
              height="1.5em"
              viewBox="0 0 16 16"
              class="bi bi-trash"
              fill="currentColor"
            >
              <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
              />
              <path
                fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
            回收站</span
          ></a
        >
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="输入你想要查找的文件"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            搜索
          </button>
        </form>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-info"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Maple Syrup
            </a>
            <div
              class="dropdown-menu dropdown-menu-md-right"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a class="dropdown-item" href="#"
                ><svg
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  class="bi bi-person"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                  />
                </svg>
                个人中心</a
              >
              <a class="dropdown-item" href="#"
                ><svg
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  class="bi bi-gear"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"
                  />
                </svg>
                设置</a
              >
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#"
                ><svg
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  class="bi bi-box-arrow-right"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                  />
                </svg>
                退出</a
              >
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <div id="home-content">
      <div class="container-fluid" style="height: 100%">
        <div class="row" style="height: 100%">
          <div class="col-md-3 d-none d-md-block" id="content-left">
            <ul class="list-group">
              <li class="list-group-item text-info" @click="getFiles('/')">
                <svg
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  class="bi bi-house"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                  />
                </svg>
                全部文件
              </li>
              <li class="list-group-item text-info">
                <svg
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  class="bi bi-share"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
                  />
                </svg>
                我的分享
              </li>
              <li class="list-group-item text-info">
                <svg
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  class="bi bi-trash"
                  fill="currentColor"
                >
                  <path
                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
                回收站
              </li>
            </ul>
          </div>
          <div class="col-md-9 col-12" id="content-right">
            <div id="operation-btn">
              <div class="form-group form-check d-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="checkbox-all"
                  style="height: 20px; width: 20px"
                  v-model="selectAllCheckboxValue"
                  @click="selectAllCheckboxClicked"
                />
                <label class="form-check-label" for="checkbox-all"
                  >&nbsp;全选</label
                >
              </div>
              <button
                type="button"
                class="btn btn-success btn-sm"
                @click="createButtonClicked"
                v-show="checkedFileIdList.length === 0"
              >
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
              <button
                type="button"
                class="btn btn-info btn-sm"
                @click="uploadButtonClicked"
                v-show="checkedFileIdList.length === 0"
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-upload"
                  fill="currentColor"
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
              <button
                type="button"
                class="btn btn-warning btn-sm"
                @click="downloadButtonClicked"
                v-show="checkedFileIdList.length > 0"
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-download"
                  fill="currentColor"
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
              <button
                type="button"
                class="btn btn-primary btn-sm"
                @click="moveButtonClicked"
                v-show="checkedFileIdList.length > 0"
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-arrow-right"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  /></svg
                >移动
              </button>
              <button
                type="button"
                class="btn btn-info btn-sm"
                @click="renameButtonClicked"
                v-show="checkedFileIdList.length === 1"
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-pencil"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                  /></svg
                >重命名
              </button>
              <button
                type="button"
                class="btn btn-danger btn-sm"
                @click="deleteButtonClicked"
                v-show="checkedFileIdList.length > 0"
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-trash"
                  fill="currentColor"
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
            <div class="breadcrumb-box">
              <ol class="breadcrumb" style="margin: 0; padding: 8px 16px">
                <li class="breadcrumb-item text-info" @click="getFiles('/')">
                  全部文件
                </li>
                <li
                  v-if="this.historyPaths.length === 0"
                  style="color: #6c757d"
                >
                  &nbsp;/
                </li>
                <li
                  id="breadcrumb-path"
                  v-for="it in this.historyPaths"
                  :key="it.id"
                  @click="getFiles(it.path)"
                >
                  <span style="color: #6c757d">&nbsp;/&nbsp;</span>{{ it.name }}
                </li>
              </ol>
            </div>
            <div id="file-box">
              <p
                class="text-center font-weight-bold font-italic text-info"
                style="margin: 30px 0"
                v-if="this.files.length === 0"
              >
                这里空无一物。
              </p>
              <ul class="list-group">
                <FileCard
                  v-for="file in files"
                  :key="file.relpath"
                  :id="file.id"
                  :name="file.name"
                  :type="file.type"
                  :relpath="file.relpath"
                  :isChecked="file.isChecked"
                  @emitFileInfo="getFileInfo"
                  @emitFolderInfo="getFolderInfo"
                  @emitCheckboxValue="getCheckboxValue"
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
import $ from "jquery";
import FileCard from "./FileCard";
export default {
  components: {
    FileCard,
  },
  data() {
    return {
      curpath: "/",
      files: [],
      selectAllCheckboxValue: false,
      onlineFile: {
        id: -1,
        type: "",
        openable: false,
        name: "",
        relpath: "",
      },
    };
  },
  computed: {
    onlineFileSrc() {
      if (this.onlineFile.relpath === "") {
        return "";
      }
      return (
        "http://localhost:9010/tapbag/api/online" + this.onlineFile.relpath
        // "/tapbag/api/online" + this.onlineFile.relpath
      );
    },
    historyPaths() {
      if (
        this.curpath === "/" ||
        this.curpath === "." ||
        this.curpath === "./" ||
        this.curpath == null
      ) {
        this.curpath = "/";
        return [];
      }
      let splitPaths = this.curpath.split("/").slice(1);
      let plus = "";
      let res = [];
      let index = 0;
      splitPaths.forEach((e) => {
        plus = plus + "/" + e;
        res.push({
          id: index,
          path: plus,
          name: e,
        });
        index++;
      });
      return res;
    },
    checkedFileIdList() {
      var _list = [];
      this.files.forEach((e) => {
        if (e["isChecked"]) {
          _list.push(e["id"]);
        }
      });
      return _list;
    },
  },
  created() {
    this.$toast({
      type: "success",
      message: "数据更新成功！",
    });
    this.getFiles("/");
  },
  methods: {
    showImage() {
      var closeButton = $(
        `<img src="` + require("../assets/closeButton.png") + `" alt="">`
      )
        .css("top", "0")
        .css("right", "0")
        .css("position", "fixed")
        .css("cursor", "pointer");
      var image = $(
        `<img src="` +
          this.onlineFileSrc +
          `" style="max-width: 100%; max-height: 100%" alt="">`
      );
      $("#modal-backdrop-box div")
        .attr("id", "modal-image-box")
        .append(closeButton)
        .append(image);
      $("#modal-backdrop-box").show();
      closeButton.click(function () {
        $("#modal-image-box").empty().removeAttr("id");
        $("#modal-backdrop-box").hide();
      });
    },

    playAudio() {
      var closeButton = $(
        `<img src="` + require("../assets/closeButton1.png") + `" alt="">`
      ).css({ float: "right", cursor: "pointer" });
      $("#modal-backdrop-box div")
        .attr("id", "modal-audio-box")
        .append(closeButton)
        .append(
          `<p class="text-center" style="width: 100%"><strong class="text-info">正在播放：` +
            this.onlineFile.name +
            `</strong></p>`
        )
        .append(
          `<audio src="` +
            this.onlineFileSrc +
            `" style="width: 100%" controls=true autoplay="autoplay"></audio>`
        );
      $("#modal-backdrop-box").show();
      $("audio")[0].volume = 0.35;
      closeButton.click(function () {
        $("#modal-audio-box").empty().removeAttr("id");
        $("#modal-backdrop-box").hide();
      });
    },

    playVideo() {
      var closeButton = $(
        `<img src="` + require("../assets/closeButton1.png") + `" alt="">`
      ).css({
        position: "absolute",
        top: "15px",
        right: "15px",
        cursor: "pointer",
      });
      $("#modal-backdrop-box div")
        .attr("id", "modal-video-box")
        .append(closeButton)
        .append(
          `<p class="text-center" style="width: 100%"><strong class="text-info">正在播放：` +
            this.onlineFile.name +
            `</strong></p>`
        )
        .append(
          `<video src="` +
            this.onlineFileSrc +
            `" style="max-height:500px; max-width:100%;" controls=true autoplay="autoplay"></video>`
        )
        .show();
      $("#modal-backdrop-box").show();
      $("video")[0].volume = 0.35;
      closeButton.click(function () {
        $("#modal-video-box").empty().removeAttr("id");
        $("#modal-backdrop-box").hide();
      });
    },

    getFiles(path) {
      this.$axios
        .post("/tapbag/api", {
          code: 2000,
          data: path,
        })
        .then((res) => {
          if (res.data.data === null || res.data.data.length === 0) {
            this.files = [];
          } else if (res.data.code === 2000) {
            this.files = res.data.data;
            this.files.forEach((e) => {
              // e["isChecked"] = false;
              /////  !!!!!!!!!!!!!!!!!!!!!!!!!!
              ////    var obj = {"id": 1, "name": "jack"};
              ////    给一个对象添加新属性时，如给 obj添加一个age属性，必须通过下面的方法，否则后续vue监听不到 "age” 属性的变化,
              ////    当后续 computed等方法 依赖 "age" 属性时，就会发生计算错误！！！！！
              /////  !!!!!!!!!!!!!!!!!!!!!!!!!!
              this.$set(e, "isChecked", false);
            });
          }
          this.curpath = path;
          this.selectAllCheckboxValue = false;
        })
        .catch((error) => {
          console.log(error);
          this.$toast({
            type: "error",
            message: "网络出错！",
          });
        });
    },

    getFileInfo(info) {
      if (this.files[info].openable) {
        this.onlineFile.id = this.files[info].id;
        this.onlineFile.type = this.files[info].type;
        this.onlineFile.openable = this.files[info].openable;
        this.onlineFile.name = this.files[info].name;
        this.onlineFile.relpath = this.files[info].relpath;
        if (this.files[info].type === "image") {
          this.showImage();
        } else if (this.files[info].type === "audio") {
          this.playAudio();
        } else if (this.files[info].type === "video") {
          this.playVideo();
        }
      } else {
        this.$toast({
          type: "",
          message: "暂无法预览此类型文件",
        });
      }
    },

    getFolderInfo(info) {
      this.getFiles(this.files[info].relpath);
    },

    getCheckboxValue(id) {
      this.files[id].isChecked = !this.files[id].isChecked;
      if (this.checkedFileIdList.length === this.files.length) {
        this.selectAllCheckboxValue = true;
      } else {
        this.selectAllCheckboxValue = false;
      }
    },

    selectAllCheckboxClicked() {
      this.files.forEach((e) => {
        e["isChecked"] = !this.selectAllCheckboxValue;
      });
    },

    createButtonClicked() {
      var _this = this;
      var inputText = $(
        `<input type="text" name="filename" style="width: 100%">`
      );
      var confirmButton = $(
        `<button type="button" class="btn btn-success btn-sm float-right" style="margin-left:5px;">确定</button>`
      );
      var cancelButton = $(
        `<button type="button" class="btn btn-secondary btn-sm float-right">取消</button>`
      );
      $("#modal-backdrop-box div")
        .attr("id", "modal-dialog-box")
        .append(
          `<p class="text-center" style="width: 100%"><strong class="text-info">新建文件夹</strong></p>
        <div class="dropdown-divider"></div>`
        )
        .append(inputText)
        .append(`<div class="dropdown-divider"></div>`)
        .append(confirmButton)
        .append(cancelButton);
      $("#modal-backdrop-box").show();
      cancelButton.click(function () {
        $("#modal-dialog-box").empty().removeAttr("id");
        $("#modal-backdrop-box").hide();
      });
      confirmButton.click(function () {
        if (inputText.val() == "") {
          return;
        }
        for (let e of _this.files) {
          if (e.name === inputText.val()) {
            _this.$toast({
              type: "error",
              message: "文件夹已存在！",
            });
            return;
          }
        }
        _this.$axios
          .post("/tapbag/api", {
            code: 2001,
            data: _this.curpath + "/" + inputText.val(),
          })
          .then((res) => {
            if (res.data.code === 2001) {
              _this.getFiles(_this.curpath);
              _this.$toast({
                type: "success",
                message: res.data.tip,
              });
              $("#modal-dialog-box").empty().removeAttr("id");
              $("#modal-backdrop-box").hide();
            } else {
              _this.$toast({
                type: "error",
                message: res.data.tip,
              });
            }
          })
          .catch((error) => {
            console.log(error);
            _this.$toast({
              type: "error",
              message: "网络出错！",
            });
          });
      });
    },

    uploadButtonClicked() {
      var _this = this;
      var inputFiles = $(
        `<input type="file" id="file-upload" name="file" multiple="multiple"/>`
      );
      var confirmButton = $(
        `<button type="button" class="btn btn-success btn-sm float-right" style="margin-left:5px;">确定</button>`
      );
      var cancelButton = $(
        `<button type="button" class="btn btn-secondary btn-sm float-right">取消</button>`
      );
      $("#modal-backdrop-box div")
        .attr("id", "modal-dialog-box")
        .append(
          `<p class="text-center" style="width: 100%"><strong class="text-info">上传文件</strong></p>
        <div class="dropdown-divider"></div>`
        )
        .append(inputFiles)
        .append(`<div class="dropdown-divider"></div>`)
        .append(confirmButton)
        .append(cancelButton);
      $("#modal-backdrop-box").show();
      cancelButton.click(function () {
        $("#modal-dialog-box").empty().removeAttr("id");
        $("#modal-backdrop-box").hide();
      });
      confirmButton.click(function () {
        if (inputFiles.get(0).files.length === 0) {
          return;
        }
        var formData = new FormData();
        // formData.append("upload", 1);
        formData.append("path", _this.curpath);
        for (let e of inputFiles.get(0).files) {
          formData.append("files", e);
        }
        _this.$axios
          .post("/tapbag/api/upload", formData)
          .then((res) => {
            _this.getFiles(_this.curpath);
            if (res.data.code === 2002) {
              _this.$toast({
                type: "success",
                message: res.data.tip,
              });
            } else {
              _this.$toast({
                type: "error",
                message: res.data.tip,
              });
            }
            $("#modal-dialog-box").empty().removeAttr("id");
            $("#modal-backdrop-box").hide();
          })
          .catch((error) => {
            console.log(error);
            _this.$toast({
              type: "error",
              message: "发生网络错误！",
            });
          });
      });
    },

    downloadButtonClicked() {
      var _this = this;
      var confirmButton = $(
        `<button type="button" class="btn btn-success btn-sm float-right" style="margin-left:5px;">确定</button>`
      );
      var cancelButton = $(
        `<button type="button" class="btn btn-secondary btn-sm float-right">取消</button>`
      );
      $("#modal-backdrop-box div")
        .attr("id", "modal-dialog-box")
        .append(
          `<p class="text-center" style="width: 100%"><strong class="text-info">下载文件</strong></p>
        <div class="dropdown-divider"></div>`
        )
        .append(`下载所有选中的文件吗？`)
        .append(`<div class="dropdown-divider"></div>`)
        .append(confirmButton)
        .append(cancelButton);
      $("#modal-backdrop-box").show();
      cancelButton.click(function () {
        $("#modal-dialog-box").empty().removeAttr("id");
        $("#modal-backdrop-box").hide();
      });
      confirmButton.click(function() {
        var downloadList = [];
        for (let e of _this.files) {
          downloadList.push(e.relpath);
        }
        _this.$axios.post("/tapbag/api", {
          code: 2003,
          data: downloadList,
        }).then((res) => {
          console.log(res.data)
        }).catch((error) => {
          console.log(error);
        });
      });
    },

    moveButtonClicked() {},

    renameButtonClicked() {
      var _this = this;
      if (this.checkedFileIdList.length != 1) {
        return;
      }

      var inputText = $(
        `<input type="text" name="filename" style="width: 100%">`
      );
      var filename = this.files[this.checkedFileIdList[0]].name;
      inputText.val(filename);
      var confirmButton = $(
        `<button type="button" class="btn btn-success btn-sm float-right" style="margin-left:5px;">确定</button>`
      );
      var cancelButton = $(
        `<button type="button" class="btn btn-secondary btn-sm float-right">取消</button>`
      );
      $("#modal-backdrop-box div")
        .attr("id", "modal-dialog-box")
        .append(
          `<p class="text-center" style="width: 100%"><strong class="text-info">重命名</strong></p>
        <div class="dropdown-divider"></div>`
        )
        .append(inputText)
        .append(`<div class="dropdown-divider"></div>`)
        .append(confirmButton)
        .append(cancelButton);
      $("#modal-backdrop-box").show();
      cancelButton.click(function () {
        $("#modal-dialog-box").empty().removeAttr("id");
        $("#modal-backdrop-box").hide();
      });
      confirmButton.click(function () {
        for (let e of _this.files) {
          if (e.name === inputText.val()) {
            _this.$toast({
              type: "error",
              message: "文件名重复了！",
            });
            return;
          }
        }
        _this.$axios
          .post("/tapbag/api", {
            code: 2005,
            data: {
              oldpath: _this.curpath + "/" + filename,
              newpath: _this.curpath + "/" + inputText.val(),
            },
          })
          .then((res) => {
            if (res.data.code === 2005) {
              _this.getFiles(_this.curpath);
              _this.$toast({
                type: "success",
                message: res.data.tip,
              });
              $("#modal-dialog-box").empty().removeAttr("id");
              $("#modal-backdrop-box").hide();
            }
          })
          .catch((error) => {
            console.log(error);
            _this.$toast({
              type: "error",
              message: "网络出错！",
            });
          });
      });
    },

    deleteButtonClicked() {
      var _this = this;
      var confirmButton = $(
        `<button type="button" class="btn btn-success btn-sm float-right" style="margin-left:5px;">确定</button>`
      );
      var cancelButton = $(
        `<button type="button" class="btn btn-secondary btn-sm float-right">取消</button>`
      );
      $("#modal-backdrop-box div")
        .attr("id", "modal-dialog-box")
        .append(
          `<p class="text-center" style="width: 100%"><strong class="text-info">删除文件</strong></p>
        <div class="dropdown-divider"></div>`
        )
        .append(`确定要永久删除选中的这些文件吗？`)
        .append(`<div class="dropdown-divider"></div>`)
        .append(confirmButton)
        .append(cancelButton);
      $("#modal-backdrop-box").show();
      cancelButton.click(function () {
        $("#modal-dialog-box").empty().removeAttr("id");
        $("#modal-backdrop-box").hide();
      });
      confirmButton.click(function () {
        var deleteFileList = [];
        for (let e of _this.checkedFileIdList) {
          deleteFileList.push(_this.files[e].relpath);
        }
        if (deleteFileList.length === 0) {
          return;
        }
        _this.$axios
          .post("/tapbag/api", {
            code: 2006,
            data: deleteFileList,
          })
          .then((res) => {
            if (res.data.code === 2006) {
              _this.$toast({
                type: "success",
                message: "文件删除成功！",
              });
            } else {
              _this.$toast({
                type: "error",
                message: res.data.tip,
              });
            }
            _this.getFiles(_this.curpath);
          })
          .catch((error) => {
            console.log(error);
            _this.$toast({
              type: "error",
              message: "网络出错！",
            });
          });
        $("#modal-dialog-box").empty().removeAttr("id");
        $("#modal-backdrop-box").hide();
      });
    },
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  position: fixed;
}

#modal-backdrop-box {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1050;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

#modal-image-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#modal-audio-box,
#modal-video-box,
#modal-dialog-box {
  padding: 15px;
  border-radius: 5px;
  background: #fff;
}

#modal-video-box {
  position: relative;
  max-width: 95%;
  max-height: 95%;
  display: flex;
  flex-direction: column;
}

#modal-video-box video {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
}

@media screen and (max-width: 700px) {
  #modal-audio-box {
    width: 95%;
  }
  #modal-dialog-box {
    width: 95%;
  }
  #modal-video-box {
    max-width: 95%;
  }
}

@media screen and (min-width: 700px) {
  #modal-audio-box {
    width: 700px;
  }
  #modal-dialog-box {
    width: 700px;
  }
  #modal-video-box {
    max-width: 700px;
  }
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

#content-left ul li {
  cursor: pointer;
}

#content-right {
  height: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  border-left: 1px solid rgba(0, 0, 0, 0.125);
}

#operation-btn {
  margin: 0;
  padding: 5px 20px;
}

.breadcrumb-box .breadcrumb li {
  cursor: pointer;
}

#breadcrumb-path:last-child {
  font-weight: bold;
}

#breadcrumb-path:not(:last-child) {
  color: #17a2b8;
}

#file-box {
  flex: 1;
  overflow-y: scroll;
}
</style>