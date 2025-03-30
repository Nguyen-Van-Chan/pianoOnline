<style lang="less">
@import url('../assets/style/variable.less');

.page-links {
  width: 100%;
  min-width: 1280px;
  height: 100%;
  padding: 1px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: absolute;
  top: 0;
  left: 0;
  overflow-x: scroll;

  .app-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -100;
    opacity: 0.5;
    background-size: cover;
    background-repeat: no-repeat;
    transition: all .5s linear;
  }

  .app-content {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    position: relative;

    .links-wrap {
      width: 1100px;
      margin: 50px auto;
      border-radius: 5px;
      overflow: hidden;

      .left-section {
        width: 70%;
        min-height: 450px;
        padding: 14px 0 0 16px;
        float: left;
        background: rgba(255, 255, 255, .5);

        h2 {
          color: @c-blue;
          font-weight: 400;
          font-size: 22px;
        }

        dl.links-list {
          padding: 20px 0;

          .link-item {
            width: 230px;
            float: left;
            padding: 3px 10px;
            margin: 0 5px 15px 0;

            dt {
              font-weight: 400;
              font-size: 16px;

              a {
                display: inline-block;
                border-bottom: solid 1px @c-red;
              }

              a:hover {
                color: @c-red;
              }
            }

            dd {
              margin-top: 7px;
              color: #555;
              font-size: 13px;
            }
          }

          .textclip {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }

      .right-section {
        width: 30%;
        min-height: 450px;
        padding: 13px 0 0 15px;
        float: left;
        background: rgba(255, 255, 255, .8);

        .info {
          margin: 0 10px 20px 0;

          h2 {
            margin: 5px 0 10px;
            border-left: 3px solid @c-blue;
            text-indent: 10px;
            font-size: 16px;
          }

          li {
            list-style: circle inside;
            font-size: 14px;
            line-height: 23px;
            color: #000;
            user-select: text;
          }

          span {
            font-size: 13px;
            color: #555;
            user-select: text;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="page-links">
    <div
      class="app-bg"
      :style="appBgStyle"
    ></div>
    <div class="app-content clearfix">
      <PageHeader></PageHeader>
      <div class="links-wrap responsive-section-a clearfix">
        <section class="left-section">
          <h2 class="links-title">Giới thiệu về tôi</h2>
          <dl class="links-list clearfix">
            <div class="link-item">
              <dt class="textclip"><a
                  href="https://github.com/Nguyen-Van-Chan"
                  target="_blank"
                >GitHub của tôi</a></dt>
              <dd class="textclip">Tôi là một nông dân đam mê công nghệ thông tin. Dù công việc chính là nông nghiệp,
                nhưng tôi luôn yêu thích học hỏi và sáng tạo trong lĩnh vực IT. Trên GitHub, tôi chia sẻ các dự án phần
                mềm, các công cụ và mã nguồn mở mà tôi phát triển. Hãy ghé thăm để xem các dự án của tôi!</dd>
            </div>
            <div class="link-item">
              <dt class="textclip"><a
                  href="https://github.com/Nguyen-Van-Chan"
                  target="_blank"
                >Dự án của tôi</a></dt>
              <dd class="textclip">Tôi hiện đang làm việc với một số dự án phần mềm phục vụ cho nông nghiệp và quản lý
                sản xuất. Mục tiêu của tôi là phát triển các giải pháp phần mềm giúp nâng cao hiệu quả công việc trong
                ngành nông nghiệp.</dd>
            </div>
          </dl>
        </section>

        <section class="right-section">
          <div class="info site-info">
            <h2>Thông tin cá nhân</h2>
            <ul>
              <li>Tên: <span>Nguyễn Văn Chán</span></li>
              <li>GitHub: <span><a
                    href="https://github.com/Nguyen-Van-Chan"
                    target="_blank"
                  >https://github.com/Nguyen-Van-Chan</a></span></li>
              <li>Giới thiệu: <span>Tôi là một nông dân mê IT. Tôi yêu thích khám phá công nghệ và chia sẻ những dự án
                  của mình với cộng đồng. Tôi cũng đang làm việc trong các lĩnh vực như phần mềm quản lý, ứng dụng AI
                  trong nông nghiệp và phát triển phần mềm mã nguồn mở.</span></li>
            </ul>
          </div>
          <div class="info exchange-info">
            <h2>Chia sẻ dự án và học hỏi</h2>
            <ul>
              <li>Tôi luôn sẵn sàng chia sẻ kiến thức và học hỏi từ cộng đồng IT. Hãy theo dõi các dự án của tôi trên
                GitHub!</li>
              <li>Hãy liên hệ với tôi nếu bạn có dự án nào liên quan đến nông nghiệp hoặc công nghệ thông tin mà bạn
                muốn hợp tác.</li>
            </ul>
          </div>
        </section>
      </div>
      <div
        class="blank-page-links"
        style="height: 80px;"
      ></div>
      <PageFooter></PageFooter>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import PageFooter from '@/components/Footer'

import { mapActions, mapGetters } from 'vuex'
import { Links, Wallpaper } from '@/config'

export default {
  name: '',
  components: {
    PageHeader,
    PageFooter
  },
  mixins: [],
  props: [],
  data() {
    return {
      Links
    }
  },
  computed: {
    ...mapGetters([
      '$currentWallpaper'
    ]),
    appBgStyle() {
      return `background-image: url(${this.$currentWallpaper});`
    }
  },
  mounted() {
  },
  watch: {},
  methods: {}
}
</script>
