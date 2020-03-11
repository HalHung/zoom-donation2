<template>
  <div class="inner">
    <div class="container">
      <div class="row ">
        <div class="col-sm-4">
          <div class="item">
            <i class="fa fa-phone"></i>
            <p>02-7751-5331 ext.204</p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="item">
            <i class="fa fa-building"></i>
            <p>台北市松山區南京東路四段163號5樓</p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="item">
            <i class="fa fa-envelope"></i>
            <p>support@luciditv.com</p>
          </div>
        </div>
      </div>
    </div>
    <div class="append">
      <div class="container">© 2019, Lucidity Media Co., Ltd. All Rights Reserved</div>
    </div>
  </div>
</template>
<script>
export default {

};
</script>
<style lang="stylus" scoped>
.inner {
  overflow: hidden;
  position: relative;
  display: block;
  width: 100%;
  background: #333;

  .item {
    text-align: center;
    color: #6d6d6d;
    padding: 3rem;

    p {
      font-size: 0.9rem;
    }

    i.fa {
      margin-bottom: 1rem;
      font-size: 2rem;
    }
  }
}

.row {
  color: #fff;
}

.append {
  padding: 1rem;
  background: #000;
  color: #fff;
  text-align: center;
  color: #6d6d6d;
}

.introduction {
  color: #ffffff;
}
</style>
