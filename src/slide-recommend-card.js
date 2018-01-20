import Vue from 'vue'
import BigSlide from './components/BigSlide.vue'
import RecommendCard from './components/RecommendCard'

function createSlideAndRecommendVue () {
  var slideVue = new Vue({
    el: '#slide',
    components: {RecommendCard, BigSlide},
    data: {
      showlist: [true],
      content: ['./static/bilibili_slide4.jpg', './static/bilibili_slide5.jpg', './static/bilibili_slide3.jpg', './static/bilibili_slide1.jpg', './static/bilibili_slide2.jpg'],
      timer: null,
      morelink: 'https://www.bilibili.com/blackboard/topic_list.html?spm_id_from=333.334.chief_recommend.2',
      titles: ['2017,生活区陪你一起走过', '一定还会再见面', '全明星阵容', '♪(^∇^*)', '周末来啦~'],
      links: ['https://www.bilibili.com/read/cv129822/', 'https://show.bilibili.com/platform/home.html?cityid=310100', 'https://show.bilibili.com/platform/detail.html?id=11257&from=sj_cpmdy_d', 'https://www.bilibili.com/blackboard/activity-ryJJHYwGM.html?spm_id_from=333.334.chief_recommend.7', 'https://www.bilibili.com/blackboard/topic/activity-HJiAYs1Xz.html?spm_id_from=333.334.chief_recommend.9'],
      title: '2017,生活区陪你一起走过',
      link: 'https://www.bilibili.com/read/cv129822/',
      start: 0,
      transitionname: 'imgslide-fade',
      switchback: false,
      tips: [{tip: '一周', ind: '0'}, {tip: '三日', ind: '1'}, {tip: '昨日', ind: '2'}],
      recommendInfo: null,
      recomendList: [[{link: 'https://www.bilibili.com/video/av17650330/', title: '【新番推荐】史上最强 神话降临 1月新番开播前大分析', imgsrc: './static/bilibili_recommend1.jpg', author: 'up主:呵呵杭二', count: '1.7万'},
        {link: 'https://www.bilibili.com/video/av17650330/', title: '【新番推荐】史上最强 神话降临 1月新番开播前大分析', imgsrc: './static/bilibili_recommend1.jpg', author: 'up主:呵呵杭二', count: '1.7万'},
        {link: 'https://www.bilibili.com/video/av17650330/', title: '【新番推荐】史上最强 神话降临 1月新番开播前大分析', imgsrc: './static/bilibili_recommend1.jpg', author: 'up主:呵呵杭二', count: '1.7万'},
        {link: 'https://www.bilibili.com/video/av17650330/', title: '【新番推荐】史上最强 神话降临 1月新番开播前大分析', imgsrc: './static/bilibili_recommend1.jpg', author: 'up主:呵呵杭二', count: '1.7万'},
        {link: 'https://www.bilibili.com/video/av17650330/', title: '【新番推荐】史上最强 神话降临 1月新番开播前大分析', imgsrc: './static/bilibili_recommend1.jpg', author: 'up主:呵呵杭二', count: '1.7万'},
        {link: 'https://www.bilibili.com/video/av17650330/', title: '【新番推荐】史上最强 神话降临 1月新番开播前大分析', imgsrc: './static/bilibili_recommend1.jpg', author: 'up主:呵呵杭二', count: '1.7万'},
        {link: 'https://www.bilibili.com/video/av17650330/', title: '【新番推荐】史上最强 神话降临 1月新番开播前大分析', imgsrc: './static/bilibili_recommend1.jpg', author: 'up主:呵呵杭二', count: '1.7万'},
        {link: 'https://www.bilibili.com/video/av17650330/', title: '【新番推荐】史上最强 神话降临 1月新番开播前大分析', imgsrc: './static/bilibili_recommend1.jpg', author: 'up主:呵呵杭二', count: '1.7万'}], [{link: 'https://www.bilibili.com/video/av17650330/', title: '【新番推荐】史上最强 神话降临 1月新番开播前大分析', imgsrc: './static/bilibili_recommend2.jpg', author: 'up主:呵呵杭二', count: '1.7万'},
        {link: 'https://www.bilibili.com/video/av17650330/', title: '【新番推荐】史上最强 神话降临 1月新番开播前大分析', imgsrc: './static/bilibili_recommend2.jpg', author: 'up主:呵呵杭二', count: '1.7万'},
        {link: 'https://www.bilibili.com/video/av17650330/', title: '【新番推荐】史上最强 神话降临 1月新番开播前大分析', imgsrc: './static/bilibili_recommend2.jpg', author: 'up主:呵呵杭二', count: '1.7万'},
        {link: 'https://www.bilibili.com/video/av17650330/', title: '【新番推荐】史上最强 神话降临 1月新番开播前大分析', imgsrc: './static/bilibili_recommend2.jpg', author: 'up主:呵呵杭二', count: '1.7万'},
        {link: 'https://www.bilibili.com/video/av17650330/', title: '【新番推荐】史上最强 神话降临 1月新番开播前大分析', imgsrc: './static/bilibili_recommend2.jpg', author: 'up主:呵呵杭二', count: '1.7万'},
        {link: 'https://www.bilibili.com/video/av17650330/', title: '【新番推荐】史上最强 神话降临 1月新番开播前大分析', imgsrc: './static/bilibili_recommend2.jpg', author: 'up主:呵呵杭二', count: '1.7万'},
        {link: 'https://www.bilibili.com/video/av17650330/', title: '【新番推荐】史上最强 神话降临 1月新番开播前大分析', imgsrc: './static/bilibili_recommend2.jpg', author: 'up主:呵呵杭二', count: '1.7万'},
        {link: 'https://www.bilibili.com/video/av17650330/', title: '【新番推荐】史上最强 神话降临 1月新番开播前大分析', imgsrc: './static/bilibili_recommend2.jpg', author: 'up主:呵呵杭二', count: '1.7万'}], [{link: 'https://www.bilibili.com/video/av17650330/', title: '【新番推荐】史上最强 神话降临 1月新番开播前大分析', imgsrc: './static/bilibili_recommend3.jpg', author: 'up主:呵呵杭二', count: '1.7万'},
        {link: 'https://www.bilibili.com/video/av17650330/', title: '【新番推荐】史上最强 神话降临 1月新番开播前大分析', imgsrc: './static/bilibili_recommend3.jpg', author: 'up主:呵呵杭二', count: '1.7万'},
        {link: 'https://www.bilibili.com/video/av17650330/', title: '【新番推荐】史上最强 神话降临 1月新番开播前大分析', imgsrc: './static/bilibili_recommend3.jpg', author: 'up主:呵呵杭二', count: '1.7万'},
        {link: 'https://www.bilibili.com/video/av17650330/', title: '【新番推荐】史上最强 神话降临 1月新番开播前大分析', imgsrc: './static/bilibili_recommend3.jpg', author: 'up主:呵呵杭二', count: '1.7万'},
        {link: 'https://www.bilibili.com/video/av17650330/', title: '【新番推荐】史上最强 神话降临 1月新番开播前大分析', imgsrc: './static/bilibili_recommend3.jpg', author: 'up主:呵呵杭二', count: '1.7万'},
        {link: 'https://www.bilibili.com/video/av17650330/', title: '【新番推荐】史上最强 神话降临 1月新番开播前大分析', imgsrc: './static/bilibili_recommend3.jpg', author: 'up主:呵呵杭二', count: '1.7万'},
        {link: 'https://www.bilibili.com/video/av17650330/', title: '【新番推荐】史上最强 神话降临 1月新番开播前大分析', imgsrc: './static/bilibili_recommend3.jpg', author: 'up主:呵呵杭二', count: '1.7万'},
        {link: 'https://www.bilibili.com/video/av17650330/', title: '【新番推荐】史上最强 神话降临 1月新番开播前大分析', imgsrc: './static/bilibili_recommend3.jpg', author: 'up主:呵呵杭二', count: '1.7万'}]]
    },
    created: function () { // 如果不做初始化的话，直接点击后面的按钮会出现问题。
      for (var i = 0; i < this.content.length - 1; i++) {
        this.showlist.push(false)
      }
      this.recommendInfo = this.recomendList[0]
    },
    methods: {
      loop: function () {
        var length = this.content.length
        var that = this
        if (length < 1) return
        this.timer = setInterval(function () {
          if (that.switchback) {
            that.switchTransMode(true)
          }
          that.start = that.start % length
          if (that.start == length - 1) {
            that.showlist.splice(that.start, 1, false)
            that.showlist.splice(0, 1, true)
          } else {
            that.showlist.splice(that.start, 2, false, true)
          }
          that.start = (that.start + 1) % length
          that.title = that.titles[that.start]
          that.link = that.links[that.start]
        }, 4000)
      },
      switchPic: function (index) {
        console.log('received index of trigger' + index)
        clearInterval(this.timer)
        if (index < this.start) {
          this.switchTransMode(false)
        } else {
          this.switchTransMode(true)
        }
        this.showlist.splice(this.start, 1, false)
        this.showlist.splice(index, 1, true)
        this.title = this.titles[index]
        this.link = this.links[index]
        this.start = index
        console.log('transition name' + this.transitionname)
        this.loop()
      },
      switchTransMode: function (left) {
        if (left) {
          this.transitionname = 'imgslide-fade'
          this.switchback = false
        } else {
          this.switchback = true
          this.transitionname = 'imgslide-fade-right'
        }
      },
      stopLoop: function () {
        clearInterval(this.timer)
      },
      continueLoop: function () {
        this.loop()
      },
      preview: function () {
        this.tips.push(this.tips.shift())
        var index = this.tips[0].ind
        this.recommendInfo = this.recomendList[index]
      },
      nextview: function () {
        this.tips.unshift(this.tips.pop())
        var index = this.tips[0].ind
        this.recommendInfo = this.recomendList[index]
      }
    }
  })
  slideVue.loop()
  return slideVue
}

export default createSlideAndRecommendVue
