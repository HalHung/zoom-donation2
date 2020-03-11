<template>
  <div class="section  pt-5 pb-4">
    <div class="container clearfix">
      <div class="row">
        <div class="col-6 col-md-3"
          v-for="(item,k) in list"
          :key="k">
          <div class="item mb-5">
            <youtube :video-id="item.id"
              :player-width="'100%'"
              :player-height="'auto'"
              @ready="ready"
              @playing="playing"
              :player-vars="{ showinfo:0 ,modestbranding:0,autohide:0,rel:0}"></youtube>
            <!-- <a href="#"
              @click.prevent="open(item.url)"> <img :src="item.tmb"
                alt=""
                class="img-fluid">
              <span class="ctrl">
                <i class="fa fa-play-circle"></i>
              </span>
            </a> -->
            <h4 class="title mt-3">{{item.title}}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  name: 'music',

  data () {
    return {

      videoId: '',
      player: null,
      list: [
        {
          tmb: 'https://dummyimage.com/640x4:3',
          title: '覓幽蘭 阿卡貝拉版',
          id: 'eG0GGTtoP48'
        },
        {
          tmb: 'https://dummyimage.com/640x4:3',
          title: '醒覺 薩克斯風版',
          id: 'W0ECF5syMTc'
        },
        {
          tmb: 'https://dummyimage.com/640x4:3',
          title: '紫羅蘭 吉他版',
          id: 'CB7uuWiPYdk'
        },
        {
          tmb: 'https://dummyimage.com/640x4:3',
          title: '勇悍行 壯闊堅毅版',
          id: 'FQZ5BN_CQFQ'
        },
      ]
    }
  },
  methods: {
    ready (player) {
      console.log('ready');
    },
    playing (player) {
      let playerId = player.getVideoData().video_id
      if (this.player && playerId !== this.videoId) {
        this.player.pauseVideo()
      }
      this.player = player
      this.videoId = playerId
    },
    change () {
      // when you change the value, the player will also change.
      // If you would like to change `playerVars`, please change it before you change `videoId`.
      // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
      // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
      // this.videoId = 'another video id'
    },
    stop () {
      // this.player.stopVideo()
    },
    pause () {
      //  this.player.pauseVideo()
    }
  }

};
</script>
<style lang="scss" scoped>
.item {
  .title {
    font-size: 1.1rem;
  }
  a {
    height: 100%;
    width: 100%;
    display: block;
    position: relative;

    .ctrl {
      transition: opacity 1s;
      background: #333;
      opacity: 0.5;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 100%;
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      .fa {
        transition: font-size 1s;
        font-size: 3rem;
        color: #fff;
      }
    }
    &:hover {
      .ctrl {
        opacity: 0.1;

        .fa {
          font-size: 4rem;
        }
      }
    }
  }
}
</style>

