<template>
  <div class="hero">
    <div class="bg"
      :style="{'background-image' : 'url(' + imgHero + ')'}"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-1">
          <div class="para">
            <div class="mt-md-1"> <img src="@/assets/img/index_slogan.png"
                alt=""> </div>
            <div class="row mt-3">
              <div class="col content">
                <p>面對新型冠狀病毒疫情，衝擊研討班學習。在僧團的指導下，澈見團隊3天內完成「澈見線上教室系統」並持續優化，提供給廣大的學員，確保學習不中斷。</p>
                <p>系統3/1上線每天有近500個班級、<br>
                超過1萬人一起在線上學習廣論，並陸續增加中。</p>
                <p>因此每個月增加十多萬元的支出，邀請您一同來護持！
                </p>
                <p>(結餘款將全數供養福智佛教基金會。)</p>
              </div>
            </div>
            <button v-scroll-to="'#price-section'"
              class="mt-3 btn btn-primary btn-block"> 立即贊助 研討班線上教室系統 </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    imgHero: function () {
      return require('@/assets/img/index_banner.jpg');
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap";

.hero {
  position: relative;
  height: 800px;
  overflow: hidden;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

  p{
    font-size: 18px;
  }

  .para {
    margin-top: 150px;
  }
  img {
    // max-width: 80%;
    width: 300px;
  }
  .content{
    color: white;
  }
  .btn{
    background: #e89300;
    border-color: #e89300;
  }
  @include media-breakpoint-down(sm) {
    .para {
      margin-top: 200px;
    }
    .bg {
      filter: brightness(0.5);
    }
  }
}
</style>

