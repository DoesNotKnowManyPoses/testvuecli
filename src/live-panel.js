import Vue from 'vue'
import MyLiveList from './components/MyLiveList'
import MyLiveTenant from './components/MyLiveTenant'

function createLivePanelVue () {
  var liveVue = new Vue({
    el: '#module-live',
    components: {MyLiveList, MyLiveTenant},
    data: {
      heheh: 'hehehehehehehehe',
      livenumber: 10000,
      updatesnum: 12345,
      biglivelists: [{imagesrc: './static/hahaha.jpg', contentsrc: './static/bilibili_recommend3.jpg', host: '葡萄美酒夜光杯', ahreflink: 'http', number: '3333', desc: '不知明镜里，何处得秋霜。', info: '战争·出战'}, {imagesrc: './static/bilibili_recommend2.jpg', contentsrc: './static/movablevideo4.webp', host: '葡萄美酒夜光杯', ahreflink: 'http', number: '3333', desc: '欲渡黄河冰塞川，将登太行雪满山', info: '战争·出战'},
        {imagesrc: './static/bili_live1.jpg', contentsrc: './static/bilibili_recommend2.jpg', host: '黑云压城城欲摧', ahreflink: 'http', number: '3333', desc: '王师北定中原日', info: '战争·出战'}, {imagesrc: './static/bilibili_recommend2.jpg', contentsrc: './static/bilibili_recommend3.jpg', host: '琵琶一曲断', ahreflink: 'http', number: '3333', desc: '闲来垂钓碧溪上，忽复乘舟梦日边', info: '战争·出战'}, {imagesrc: './static/bilibili_recommend3.jpg', contentsrc: './static/movablevideo3.webp', host: '不眠是征人', ahreflink: 'http', number: '3333', desc: '黄沙百战穿金甲，不破楼兰终不还。', info: '战争·出战'},
        {imagesrc: './static/bili_live2.jpg', contentsrc: './static/bili_live3.jpg', host: '天下谁人不识君', ahreflink: 'http', number: '3333', desc: '卷我屋上三重茅，茅飞渡江洒江郊，高者挂罥长林梢，下者飘转沉塘坳', info: '战争·出战'}, {imagesrc: './static/bilibili_recommend1.jpg', contentsrc: './static/movablevideo2.webp', host: '夜光杯独醒', ahreflink: 'http', number: '3333', desc: '羌笛何须怨杨柳，春风不度玉门关', info: '战争·出战'},
        {imagesrc: './static/bili_live3.jpg', contentsrc: './static/bili_live6.jpg', host: '鹅鹅鹅', ahreflink: 'http', number: '3333', desc: '上下而求索', info: '战争·出战'},
        {imagesrc: './static/bili_live4.jpg', contentsrc: './static/bili_live1.jpg', host: '关关雎鸠', ahreflink: 'http', number: '3333', desc: '上穷碧落下黄泉。', info: '战争·出战'},
        {imagesrc: './static/bili_live6.jpg', contentsrc: './static/bili_live4.jpg', host: '君子好逑', ahreflink: 'http', number: '3333', desc: '溯洄从之，道阻且长', info: '战争·出战'}],
      left: 0,
      width: 260,
      isselected: [],
      carousel: [],
      cleft: 0,
      carouselInterval: null,
      leftArray: [0, -260, -520],
      carouselArray: [{src: './static/bili_recommendation.webp', link: 'http'}, {src: './static/bili_recommendation2.webp', link: 'http'}, {src: './static/bili_recommendation3.webp', link: 'http'}, {src: './static/bili_recommendation2.webp', link: 'http'}],
      // carouselArray:[{src:'bili_recommendation.webp',link:'http'},{src:'bili_recommendation2.webp',link:'http'}],
      indexArray: [0, 1, 2],
      descArray: ['今日与君别', '雪上空留马行处', 'Legend never die', '今日无人试此刀'],
      // descArray:['今日与君别','雪上空留马行处'],
      desc: '',
      margin: '1%',
      widthArray: ['50%', '25%', '25%'],
      smalllivelist: [{num: 1, livelink: 'http', photosrc: './static/host3.jpg', viewcount: '2223W', postname: '一日不见三秋隔', desc: '三秋不见已忘君'},
        {num: 2, livelink: 'http', photosrc: './static/host2.jpg', viewcount: '6.0W', postname: '君住长江头', desc: '妾在长江尾'},
        {num: 3, livelink: 'http', photosrc: './static/host4.jpg', viewcount: '5.3W', postname: '思君不见君', desc: '你就去死吧'},
        {num: 4, livelink: 'http', photosrc: './static/host5.jpg', viewcount: '4.1W', postname: '接天莲叶无穷碧', desc: '映日荷花别样红'},
        {num: 5, livelink: 'http', photosrc: './static/host1.jpg', viewcount: '2.3W', postname: '天时地利人和', desc: '枝繁叶茂根深'},
        {num: 6, livelink: 'http', photosrc: './static/host6.jpg', viewcount: '1.5W', postname: '那一瞥', desc: '那一剑的温柔'}]
    },
    created: function () {
      this.isselected = [true]
      for (var i = 0; i < this.descArray.length; i++) {
        this.isselected.push(false)
      }
      this.initializeData()
      this.getUpdateLoop()
    },
    methods: {
      initializeData: function () {
        this.carousel = [true]
        this.indexArray = [0]
        this.leftArray = [0]
        var part = this.descArray.length
        var marginParts = 2 * part
        var specialPercent = 90 * 2 / (part + 1) + '%'
        var percent = 90 * 1 / (part + 1) + '%'
        this.margin = 10 / marginParts + '%'
        this.widthArray = [specialPercent]
        this.desc = this.descArray[0]
        for (var i = 1; i < part; i++) {
          this.carousel.push(false)
          this.indexArray.push(i)
          this.leftArray.push(-1 * i * this.width)
          this.widthArray.push(percent)
        }
      },
      switchTab: function (index) {
        var target = parseInt(index)
        this.left = (-1) * target * this.width
        this.isselected = [false, false, false]
        this.isselected.splice(target, 1, true)
        console.log(this.isselected)
        if (this.carouselInterval) {
          clearInterval(this.carouselInterval)
        }
        if (target == 2) {
          this.setSlideLoop()
        }
      },

      handlemouseovercarousel: function (index) {
        clearInterval(this.carouselInterval)
        var target = parseInt(index)
        this.initializeData() // default value is index 0 has special value. in this case, need to handle the target correctly as index 0 should be set to normal value.
        this.cleft = this.leftArray[target]
        this.desc = this.descArray[target]
        var specialPercent = this.widthArray[0]
        this.widthArray.shift()
        this.widthArray.splice(target, 0, specialPercent)
        var value = this.carousel.shift()
        this.carousel.splice(target, 0, value) //
        for (var i = 0; i < index; i++) {
          this.indexArray.push(this.indexArray.shift())
        }
      },
      handlemouseoutcarousel: function (index) {
        this.setSlideLoop()
      },
      // think about the mouseon and mouseout, how to set the start page of the interval.
      setSlideLoop: function () {
        var that = this
        this.carouselInterval = setInterval(function () {
          that.carousel.unshift(that.carousel.pop())
          that.widthArray.unshift(that.widthArray.pop())
          that.indexArray.push(that.indexArray.shift())
          var loc = that.indexArray[0]// use the index array to simulate the move of the page, 0 means the current location of the left and desc.
          that.cleft = that.leftArray[loc]
          that.desc = that.descArray[loc]
        }, 3000)
      },
      stopSlideLoop: function () {
        clearInterval(this.carouselInterval)
      },
      resetUpdates: function () {
        this.updatesnum = 0
        this.biglivelists.unshift(this.biglivelists.pop())
      },
      getUpdateLoop: function () {
        var that = this
        setInterval(function () {
          that.updatesnum = that.updatesnum + Math.ceil(Math.random() * 50)
        }, 7000)
      }

    }
  })

  return liveVue
}

export default createLivePanelVue
