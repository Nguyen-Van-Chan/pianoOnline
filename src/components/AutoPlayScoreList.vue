<style lang="less">
@import url('../assets/style/variable.less');

.score-container.component-auto-list {
  width: 40%;
  min-width: 500px;
  padding-bottom: 50%;
  font-size: 14px;
  overflow: hidden;
  background: rgba(255, 255, 255, .6);
  border-radius: 5px;
  border: solid 1px #ddd;
  position: relative;

  .list-view {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px 15px;
    overflow-y: scroll;
  }

  .component-title {
    margin: 0 0 10px 0;
    font-size: 18px;
    font-weight: bold;
    line-height: 26px;
    position: relative;

    .title-img {
      display: inline-block;
      width: 26px;
      vertical-align: middle;
    }

    .title {
      vertical-align: middle;
      margin-left: 5px;
    }

    .degree {
      width: 150px;
      float: right;
      text-align: left;
    }
  }

  .list {
    width: 100%;
    padding-left: 25px;
    padding-bottom: 10px;
    line-height: 32px;

    .list-item {
      height: 32px;
      line-height: 32px;
      list-style: none;

      a {
        display: inline-block;
        min-width: 120px;
        cursor: pointer;
      }

      .icon-pause {
        display: inline-block;
        transform: scale(0.6);
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }
      }

      a:hover {
        color: @c-blue;
        text-decoration: underline;
      }

      .num {
        float: left;
        width: 35px;
        height: 32px;
        font-size: 16px;
        margin-left: -35px;
        text-align: center;
        color: @c-red;
      }

      .difficulty-degree {
        width: 150px;
        float: right;
        text-align: left;

        .icon-heartbeat {
          display: inline-block;
          transform: scale(.7);
          margin-left: -6px;
        }
      }
    }
  }

  .player-view {
    font-size: 16px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px 15px;
    overflow-y: scroll;

    .top-bar {
      .return-btn {
        cursor: pointer;
        width: 80px;
        height: 32px;
        line-height: 32px;
        font-size: 14px;
        color: @c-blue-d;

        &:hover {
          text-decoration: underline;
          color: @c-blue;
        }
      }

      h2 {
        font-size: 18px;
      }
    }

    .cd-box {
      width: 400px;
      margin: 15% auto 10px;
      padding: 10px;
      border-radius: 15px;
      position: relative;

      .cd-reader-1 {
        width: 100px;
        height: 10px;
        border-radius: 5px;
        background: linear-gradient(to right, #333, #aaa, #333);
        transform-origin: 0 0;
        transform: rotate(60deg);
        position: absolute;
        top: 10px;
        left: 10px;

        &::before {
          content: '';
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #888;
          position: absolute;
          top: -6px;
          left: -6px;
          border: solid 2px #444;
        }
      }

      .cd-reader-2 {
        width: 80px;
        height: 10px;
        border-radius: 5px;
        background: linear-gradient(to right, #333, #666, #888);
        transform: rotate(20deg);
        position: absolute;
        top: 105px;
        left: 50px;
        z-index: 10;
      }

      .cd {
        width: 220px;
        height: 220px;
        margin: 0 auto;
        border-radius: 50%;
        border: solid 5px #ccc;
        background: linear-gradient(to right, #000, #555, #000);
        position: relative;

        // animation: spin 10s linear infinite; z-index: 0;
        .cd-inner {
          width: 70px;
          height: 70px;
          line-height: 65px;
          border-radius: 50%;
          border: solid 3px #aaa;
          background: #CD3F11;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          margin: auto;
          text-align: center;
          color: #fff;
          font-size: 12px;
          // &::after { content: ''; width: 7px; height: 7px; border-radius: 50%; background: #eee; position: absolute; top: -40px; left: 0; bottom: 0; right: 0; margin:auto; }
        }
      }
    }

    .music-name {
      text-align: center;
      padding: 15px 0 5px;
      font-size: 20px;
      font-weight: bold;
    }

    .difficulty-degree {
      text-align: center;

      .icon-heartbeat {
        display: inline-block;
        transform: scale(.7);
        margin-left: -6px;
      }
    }

    .control-bar {
      width: 100%;
      text-align: center;
      padding: 15px 0;

      .stop-btn {
        display: inline-block;
        width: 70px;
        height: 30px;
        line-height: 30px;
        background: @c-red;
        color: #fff;
        cursor: pointer;

        &:hover {
          opacity: .8;
        }
      }
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
}
</style>

<template>
  <div class="auto-play-score-list">
    <h3>Danh sách bài hát tự động</h3>
    <div class="score-list">
      <div v-for="score in scores" :key="score.id" class="score-item" @click="playScore(score)">
        <div class="score-name">{{ score.name }}</div>
        <div class="score-controls">
          <button @click.stop="playScore(score)">Chơi</button>
          <button @click.stop="stopPlaying">Dừng</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AutoPlayScoreList',
  data() {
    return {
      scores: [
        { 
          id: 1, 
          name: 'Happy Birthday', 
          notes: ['C4', 'C4', 'D4', 'C4', 'F4', 'E4', 'C4', 'C4', 'D4', 'C4', 'G4', 'F4'],
          difficulty: 1
        },
        { 
          id: 2, 
          name: 'Twinkle Twinkle', 
          notes: ['C4', 'C4', 'G4', 'G4', 'A4', 'A4', 'G4', 'F4', 'F4', 'E4', 'E4', 'D4', 'D4', 'C4'],
          difficulty: 2
        },
        {
          id: 3,
          name: 'Jingle Bells',
          notes: ['E4', 'E4', 'E4', 'E4', 'E4', 'E4', 'E4', 'G4', 'C4', 'D4', 'E4'],
          difficulty: 3
        },
        {
          id: 4,
          name: 'Mary Had a Little Lamb',
          notes: ['E4', 'D4', 'C4', 'D4', 'E4', 'E4', 'E4', 'D4', 'D4', 'D4', 'E4', 'G4', 'G4'],
          difficulty: 1
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['$isPlaying'])
  },
  methods: {
    ...mapActions(['$startPlaying', '$stopPlaying']),
    playScore(score) {
      this.$startPlaying(score.notes)
    },
    stopPlaying() {
      this.$stopPlaying()
    }
  }
}
</script>
