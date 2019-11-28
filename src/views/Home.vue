<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- <div class="ani ani-1" swiper-animate-effect="flipInY" swiper-animate-duration="1.5s" swiper-animate-delay="0.5s">
      </div>-->
      <swiper-slide class="slide-1">
        <div class="language">
          <el-dropdown @command="handleCommand" trigger="click">
            <span class="el-dropdown-link">
              <img v-if="lang == 'en'" src="../assets/home/en.png" alt="" />
              <img v-else src="../assets/home/zh.png" alt="" />
              {{ lang == "zh" ? "简体中文" : "English"
              }}<i class="el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="en">
                <img src="../assets/home/en.png" alt="" />
                English
              </el-dropdown-item>
              <el-dropdown-item command="zh">
                <img src="../assets/home/zh.png" alt="" />
                简体中文
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div
          class="circle-top ani ani-1"
          swiper-animate-effect="fadeInRight"
          swiper-animate-duration="1s"
          swiper-animate-delay="0.3s"
        ></div>
        <div
          class="circle-bottom ani ani-1"
          swiper-animate-effect="fadeInLeft"
          swiper-animate-duration="1s"
          swiper-animate-delay="0.6s"
        ></div>
        <div
          class="girl ani ani-1"
          swiper-animate-effect="fadeInRight"
          swiper-animate-duration="1s"
          swiper-animate-delay="0s"
        ></div>
        <div class="yt">
          <img src="../assets/home/logo.png" alt />
        </div>
        <div
          class="register title ani ani-1"
          swiper-animate-effect="fadeInUp"
          swiper-animate-duration="1s"
          swiper-animate-delay="0.9s"
        >
          {{ $t("download.register") }}
        </div>
        <div
          class="register-desc desc ani ani-1"
          :class="{ 'register-desc-en': lang == 'en' }"
          swiper-animate-effect="fadeInUp"
          swiper-animate-duration="1s"
          swiper-animate-delay="0.9s"
        >
          {{ $t("download.registerDesc") }}
        </div>
        <div
          class="download ani ani-1"
          swiper-animate-effect="fadeInUp"
          swiper-animate-duration="1s"
          swiper-animate-delay="0.9s"
          @click="isShowDownloadQR = true"
        >
          {{ $t("download.downloadAndExperience") }}
        </div>
      </swiper-slide>
      <swiper-slide class="slide-2">
        <div
          class="circle ani ani-2"
          swiper-animate-effect="fadeInDown"
          swiper-animate-duration="1s"
          swiper-animate-delay="0.5s"
        ></div>
        <div class="left">
          <div
            class="placard ani ani-2"
            swiper-animate-effect="fadeInLeft"
            swiper-animate-duration="1s"
            swiper-animate-delay="0s"
          ></div>
        </div>
        <div class="right">
          <div
            class="online-interactive title ani ani-2"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration="1s"
            swiper-animate-delay="1s"
          >
            {{ $t("download.onlineInteractive") }}
          </div>
          <div
            class="online-interactive-desc desc ani ani-2"
            :class="{ 'online-interactive-desc-en': lang == 'en' }"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration="1s"
            swiper-animate-delay="1s"
          >
            {{ $t("download.onlineInteractiveDesc") }}
          </div>
          <div
            class="download ani ani-2"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration="1s"
            swiper-animate-delay="1s"
            @click="isShowDownloadQR = true"
          >
            {{ $t("download.downloadAndExperience") }}
          </div>
          <div
            class="gift ani ani-2"
            swiper-animate-effect="fadeInLeft"
            swiper-animate-duration="1s"
            swiper-animate-delay="1s"
          ></div>
          <div
            class="hongbao ani ani-2"
            swiper-animate-effect="fadeInRight"
            swiper-animate-duration="1s"
            swiper-animate-delay="1s"
          ></div>
          <div
            class="piaodai ani ani-2"
            swiper-animate-effect="fadeInLeft"
            swiper-animate-duration="1s"
            swiper-animate-delay="1s"
          ></div>
        </div>
      </swiper-slide>
      <swiper-slide class="slide-3">
        <div class="left">
          <div
            class="sanjiao1 ani ani-3"
            swiper-animate-effect="fadeInLeft"
            swiper-animate-duration="1s"
            swiper-animate-delay="1s"
          ></div>
          <div
            class="sanjiao2 ani ani-3"
            swiper-animate-effect="fadeInLeft"
            swiper-animate-duration="1s"
            swiper-animate-delay="1s"
          ></div>
          <div
            class="sanjiao3 ani ani-3"
            swiper-animate-effect="fadeInRight"
            swiper-animate-duration="1s"
            swiper-animate-delay="1s"
          ></div>
          <div
            class="party title ani ani-3"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration="1s"
            swiper-animate-delay="1.3s"
          >
            {{ $t("download.party") }}
          </div>
          <div
            class="party-desc desc ani ani-3"
            :class="{ 'party-desc-en': lang == 'en' }"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration="1s"
            swiper-animate-delay="1.3s"
          >
            {{ $t("download.partyDesc") }}
          </div>
          <div
            class="download ani ani-3"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration="1s"
            swiper-animate-delay="1.3s"
            @click="isShowDownloadQR = true"
          >
            {{ $t("download.downloadAndExperience") }}
          </div>
        </div>
        <div class="right">
          <div
            class="screen ani ani-3"
            swiper-animate-effect="fadeInRight"
            swiper-animate-duration="1s"
            swiper-animate-delay="0s"
          ></div>
        </div>
      </swiper-slide>
      <swiper-slide class="slide-4">
        <div class="car"></div>
        <div
          class="svip title ani ani-4"
          swiper-animate-effect="fadeInUp"
          swiper-animate-duration="1s"
          swiper-animate-delay="0.3s"
        >
          {{ $t("download.SVIP") }}
        </div>
        <div
          class="svip-desc desc ani ani-4"
          :class="{ 'svip-desc-en': lang == 'en' }"
          swiper-animate-effect="fadeInUp"
          swiper-animate-duration="1s"
          swiper-animate-delay="0.3s"
        >
          {{ $t("download.SVIPDesc") }}
        </div>
        <div
          class="download ani ani-4"
          swiper-animate-effect="fadeInUp"
          swiper-animate-duration="1s"
          swiper-animate-delay="0.3s"
          @click="isShowDownloadQR = true"
        >
          {{ $t("download.downloadAndExperience") }}
        </div>
      </swiper-slide>
      <swiper-slide class="slide-5">
        <div class="map-bg">
          <img src="../assets/home/map-bg.png" />
        </div>
        <div
          class="about-yt title ani ani-5"
          swiper-animate-effect="fadeInUp"
          swiper-animate-duration="1s"
          swiper-animate-delay="0.3s"
        >
          {{ $t("download.aboutYT") }}
        </div>
        <div
          class="about-yt-desc desc ani ani-5"
          :class="{ 'about-yt-desc-en': lang == 'en' }"
          swiper-animate-effect="fadeInUp"
          swiper-animate-duration="1s"
          swiper-animate-delay="0.3s"
        >
          {{ $t("download.aboutYTDesc") }}
        </div>
        <div
          class="download ani ani-5"
          swiper-animate-effect="fadeInUp"
          swiper-animate-duration="1s"
          swiper-animate-delay="0.3s"
          @click="isShowDownloadQR = true"
        >
          {{ $t("download.downloadAndExperience") }}
        </div>
        <div
          class="contact-us title ani ani-5"
          swiper-animate-effect="fadeInUp"
          swiper-animate-duration="1s"
          swiper-animate-delay="0.6s"
        >
          {{ $t("download.contactUS") }}
        </div>
        <div
          class="contact-us-desc desc ani ani-5"
          swiper-animate-effect="fadeInUp"
          swiper-animate-duration="1s"
          swiper-animate-delay="0.6s"
        >
          {{ $t("download.contactByEmail") }}
        </div>
        <div
          class="contact-us-email desc ani ani-5"
          swiper-animate-effect="fadeInUp"
          swiper-animate-duration="1s"
          swiper-animate-delay="0.6s"
        >
          {{ $t("download.contactEmail") }}
        </div>
        <div
          class="network-record ani ani-5"
          swiper-animate-effect="fadeInUp"
          swiper-animate-duration="1s"
          swiper-animate-delay="0.6s"
        >
          {{ $t("download.networkForRecord1") }}
          <!-- {{ $t("download.networkForRecord2") }}
          &#x3000;&#x3000;&#x3000;用户隐私协议&#x3000;&#x3000;&#x3000;{{
            $t("download.networkForRecord3")
          }} -->
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <el-dialog
      :modal="false"
      title="下载体验"
      :visible.sync="isShowDownloadQR"
      width="500px"
      center
    >
      <div class="qr-list">
        <div
          class="qr-item"
          v-for="(item, index) in downloadDataUrl"
          :key="index"
        >
          <div class="qr-title">{{ item.platform }}下载</div>
          <img :src="item.url" alt />
          <div class="qr-version">版本：{{ item.version }}</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
var QRCode = require("qrcode");
export default {
  name: "home",
  data() {
    let _this = this;
    return {
      lang: "zh",
      downloadDataUrl: [],
      isShowDownloadQR: false,
      swiperOption: {
        direction: "vertical", // 垂直切换选项
        noSwiping: true,
        height: window.innerHeight,
        autoHeight: true,
        noSwipingSelector: "input",
        mousewheel: true,
        preventClicks: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        on: {
          init() {
            _this.$swiperAnimateCache(this);
            _this.$swiperAnimate(this);
            _this.removeClass(0);
          },
          // slideChangeTransitionStart() {
          //   _this.handleTransitionStart(
          //     _this.$refs.mySwiper.swiper.activeIndex
          //   );
          // },
          slideChangeTransitionEnd() {
            _this.removeClass(_this.$refs.mySwiper.swiper.activeIndex);
          },
          slideChange() {
            _this.$swiperAnimate(this);
          }
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    removeClass(index) {
      let domArr = document.getElementsByClassName(`ani-${index + 1}`);
      if (domArr && domArr.length) {
        for (let i = 0; i < domArr.length; i++) {
          domArr[i].classList.remove("ani");
        }
      }
    },
    handleTransitionStart(index) {
      console.log(index);
    },
    handleCommand(command) {
      localStorage.setItem("lang", command);
      location.reload();
    }
  },
  created() {
    if (localStorage.getItem("lang")) {
      this.lang = localStorage.getItem("lang");
      this.$i18n.locale = this.lang;
    } else {
      this.lang =
        (navigator.browserLanguage || navigator.language).toLowerCase() ==
        "zh-cn"
          ? "zh"
          : "en";
      this.$i18n.locale = this.lang;
      localStorage.setItem("lang", this.lang);
    }

    this.$axios({
      url: "https://api.yuya.chat/versions/latest",
      method: "get"
    }).then(res => {
      if (res.data.data) {
        let data = res.data.data;
        let _this = this;
        for (let key in data) {
          QRCode.toDataURL(data[key].url, function(err, url) {
            _this.downloadDataUrl.push({
              url: url,
              version: data[key].version_name,
              platform: key
            });
          });
        }
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.el-dropdown-menu--medium .el-dropdown-menu__item {
  padding: 5px 40px;
  img {
    width: 18px;
    vertical-align: middle;
    margin-right: 3px;
    margin-top: -4px;
  }
}

.el-dropdown-link {
  &:hover {
    cursor: pointer;
  }
  img {
    width: 18px;
    vertical-align: middle;
    margin-right: 3px;
    margin-top: -4px;
  }
}

.qr-list {
  width: 100%;
  display: flex;
  .qr-item {
    flex: 1;
    text-align: center;
  }
}
.swiper-slide {
  transform: perspective(1000);
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  box-sizing: border-box;
  .title {
    height: 65px;
    font-size: 46px;
    font-family: PingFang-SC-Heavy, PingFang-SC;
    font-weight: 800;
    color: rgba(0, 0, 0, 1);
    line-height: 65px;
    letter-spacing: 1px;
    position: relative;
  }
  .desc {
    position: relative;
    font-size: 29px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: rgba(0, 0, 0, 1);
    line-height: 49px;
  }
  .download {
    position: relative;
    height: 62px;
    line-height: 62px;
    background: #dfc4a1;
    border-radius: 3px;
    text-align: center;
    font-size: 18px;
    font-family: PingFang-SC-Bold, PingFang-SC;
    font-weight: bold;
    color: rgba(70, 54, 34, 1);
    letter-spacing: 2px;
    &:hover {
      cursor: pointer;
    }
  }
}
.slide-1 {
  padding: 40px 50px 0 80px;
  background: #fff;
  .language {
    position: relative;
    float: right;
    z-index: 1000;
  }
  .yt {
    margin-bottom: 180px;
    img {
      width: 165px;
      // height: 65px;
    }
  }
  .register {
    // width: 403px;
    height: 64px;
    margin-left: 168px;
    margin-bottom: 7px;
    z-index: 10;
  }
  .register-desc {
    width: 462px;
    height: 98px;
    margin-left: 168px;
    margin-bottom: 26px;
  }
  .register-desc-en {
    width: 762px;
  }
  .download {
    width: 154px;
    margin-left: 168px;
    position: relative;
    z-index: 100;
  }
  .circle-top {
    width: 693px;
    height: 693px;
    background-image: url(../assets/home/circle-yellow.png);
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: -261px;
    right: -229px;
  }
  .circle-bottom {
    width: 693px;
    height: 693px;
    background-image: url(../assets/home/circle-green.png);
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    bottom: -387px;
    left: 90px;
    z-index: 10;
  }
  .girl {
    width: 466px;
    height: 772px;
    background-image: url(../assets/home/girl.png);
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    bottom: 0px;
    right: 186px;
  }
}
.slide-2 {
  display: flex;
  .circle {
    width: 693px;
    height: 693px;
    background-image: url(../assets/home/circle-green.png);
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: -306px;
    left: 90px;
    z-index: 2;
  }
  .left {
    background-color: #ffffff;
    width: 438px;
    position: relative;
    .placard {
      position: absolute;
      width: 340px;
      height: 678px;
      background-image: url(../assets/home/girl2.png);
      background-size: cover;
      top: 50%;
      right: -170px;
      margin-top: -339px;
      z-index: 100;
    }
  }
  .right {
    flex: 1;
    background-color: #f1e5d6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 3;
    .online-interactive {
      // width: 430px;
      margin: 0 0 10px 379px;
      position: relative;
    }
    .online-interactive-desc {
      width: 462px;
      margin: 0 0 27px 379px;
      position: relative;
      z-index: 100;
    }
    .online-interactive-desc-en {
      width: 762px;
    }
    .download {
      width: 154px;
      margin: 0 0 27px 379px;
      position: relative;
      z-index: 100;
    }
    .gift {
      width: 128px;
      height: 147px;
      position: absolute;
      top: 560px;
      left: 573px;
      background-image: url(../assets/home/gift.png);
      background-size: cover;
    }
    .hongbao {
      width: 120px;
      height: 120px;
      position: absolute;
      top: 435px;
      left: 718px;
      background-image: url(../assets/home/hongbao.png);
      background-size: cover;
    }
    .piaodai {
      width: 262px;
      height: 296px;
      position: absolute;
      top: 500px;
      left: 168px;
      background-image: url(../assets/home/piaodai.png);
      background-size: cover;
    }
  }
}
.slide-3 {
  display: flex;
  .right {
    background-color: #ffffff;
    width: 438px;
    position: relative;
    .screen {
      position: absolute;
      width: 340px;
      height: 678px;
      background-image: url(../assets/home/screen.png);
      background-size: cover;
      top: 50%;
      left: -170px;
      margin-top: -339px;
      z-index: 100;
    }
  }
  .left {
    flex: 1;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    .party {
      // width: 430px;
      margin: 0 0 10px 169px;
      color: #ffffff;
    }
    .party-desc {
      width: 462px;
      margin: 0 0 27px 169px;
      color: #ffffff;
    }
    .party-desc-en {
      width: 762px;
      position: relative;
      z-index: 100;
    }
    .download {
      width: 154px;
      margin: 0 0 27px 169px;
      position: relative;
      z-index: 100;
    }
    .sanjiao1 {
      width: 214px;
      height: 221px;
      position: absolute;
      top: 101px;
      left: 498px;
      background-image: url(../assets/home/sanjiao1.png);
      background-size: cover;
    }
    .sanjiao2 {
      width: 178px;
      height: 368px;
      position: absolute;
      top: 342px;
      left: 126px;
      background-image: url(../assets/home/sanjiao2.png);
      background-size: cover;
    }
    .sanjiao3 {
      width: 295px;
      height: 265px;
      position: absolute;
      top: 322px;
      left: 694px;
      background-image: url(../assets/home/sanjiao3.png);
      background-size: cover;
    }
  }
}
.slide-4 {
  background-color: #000002;
  .car {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    background-image: url(../assets/home/car.png);
    background-size: cover;
    background-position-y: bottom;
  }
  .svip {
    color: #ffffff;
    // width: 524px;
    margin: 119px 0 10px 169px;
  }
  .svip-desc {
    position: relative;
    color: #ffffff;
    width: 546px;
    margin: 0 0 27px 169px;
  }
  .svip-desc-en {
    width: 716px;
    position: relative;
    z-index: 100;
  }
  .download {
    position: relative;
    width: 154px;
    margin: 0 0 27px 169px;
    z-index: 100;
  }
}
.slide-5 {
  background-color: #ffffff;
  .map-bg {
    position: absolute;
    top: 120px;
    left: 192px;
    right: 192px;
    img {
      width: 100%;
    }
  }
  .about-yt {
    margin: 119px 0 10px 169px;
  }
  .about-yt-desc {
    position: relative;
    width: 693px;
    margin: 0 0 27px 169px;
  }
  .about-yt-desc-en {
    width: 893px;
    position: relative;
    z-index: 100;
  }
  .download {
    position: relative;
    width: 154px;
    margin: 0 0 27px 169px;
    z-index: 100;
  }
  .contact-us {
    position: relative;
    margin: 119px 0 10px 169px;
  }
  .contact-us-desc {
    position: relative;
    margin: 0 0 10px 169px;
  }
  .contact-us-email {
    margin: 0 0 10px 169px;
    font-weight: bold;
  }
  .network-record {
    position: absolute;
    bottom: 18px;
    left: 169px;
    right: 0;
    font-size: 12px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: rgba(0, 0, 0, 1);
  }
}
</style>
