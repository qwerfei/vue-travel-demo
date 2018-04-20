<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
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
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 3000,
        loop: true // 循环轮播
      }
    }
  },
  computed: {
    // 轮播显示初始图
    showSwiper () {
      return this.swiperList.length
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
