<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true // 循环轮播
      },
      swiperList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/5c/969bfa7af00a2702.jpg_640x200_e1b76963.jpg'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/45/0ac34e31b4a1fb02.jpg_640x200_7b7e09c7.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  /*轮播标注页码样式穿透*/
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  /*图片宽高自适应防抖动*/
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    /*height: 31.25vm*/
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>
