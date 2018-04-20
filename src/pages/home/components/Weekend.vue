<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src='item.imgUrl'>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/a2/78e4dbcfd45a6d.jpg_r_640x214_7a62b06a.jpg',
        title: '成都欢乐谷',
        desc: '成都欢乐谷成都欢乐谷成都欢乐谷成都欢乐谷成都欢乐谷成都欢乐谷'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/63/0ffcb5c329a19c.jpg_r_640x214_93fd1e5a.jpg',
        title: '成都欢乐谷',
        desc: '成都欢乐谷成都欢乐谷成都欢乐谷成都欢乐谷成都欢乐谷成都欢乐谷'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/e2/2a63e38b84bc8e.jpg_r_640x214_679f0d37.jpg',
        title: '成都欢乐谷',
        desc: '成都欢乐谷成都欢乐谷成都欢乐谷成都欢乐谷成都欢乐谷成都欢乐谷'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.stylus'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()

</style>
