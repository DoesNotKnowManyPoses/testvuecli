import Vue from 'vue'
import MyMovable from './components/MyMovable'

function createPreviewAdvocateVue () {
  var previewVue = new Vue({
    el: '#movable-pic',
    components: {MyMovable},
    data: {
      videoList: [{num: 100, srclink: './static/movablevideo.webp', imgsrc: './static/movablepic3.webp', bulletURL: '', hreflink: '', desc: '美丽的男孩子，请问你有女朋友么', duration: '1:23', show: true},
        {num: 30, srclink: './static/movablevideo2.webp', imgsrc: './static/movablepic4.webp', bulletURL: '', hreflink: '', desc: '我想明天给你买个包。。。子', duration: '5:27', show: true},
        {num: 48, srclink: './static/movablevideo3.webp', imgsrc: './static/movablepic2.webp', bulletURL: '', hreflink: '', desc: '有趣的灵魂万中无一，但是你更漂亮', duration: '11:11', show: true},
        {num: 40, srclink: './static/movablevideo4.webp', imgsrc: './static/movablepic.webp', bulletURL: '', hreflink: '', desc: '吾生也有涯，而知也无涯', duration: '5:20', show: true},
        {num: 40, srclink: './static/movablevideo2.webp', imgsrc: './static/movablepic.webp', bulletURL: '', hreflink: '', desc: '出师未捷身先死，长使英雄泪满襟', duration: '5:20', show: true}],
      advocateContainer: 'advocate-container'
    },
    created: function () {
      var browser = window.navigator.userAgent.toLowerCase()
      var isSafari = browser.indexOf('chrome') < 0 && browser.indexOf('safari') >= 0
      var isEdge = browser.indexOf('edge') >= 0
      var isFireFox = browser.indexOf('firefox')>=0
      var isIE = browser.indexOf('chrome') < 0 && browser.indexOf('safari') < 0 && browser.indexOf('firefox') < 0 || browser.indexOf('msie') >= 0
      if (isSafari || isEdge || isFireFox || isIE) {
        console.log('webp not supported')
        this.changePicType()
      }
    },
    methods: {
      changePicType: function () {
        for (let video of this.videoList) {
          video.srclink = this.changeToJPG(video.srclink)
          video.imgsrc = this.changeToJPG(video.imgsrc)
        }
      },
      changeToJPG: function (str) {
        var arr = str.split('.')
        arr[arr.length - 1] = 'jpg'
        return arr.join('.')
      }
    }
  })
  return previewVue
}
export default createPreviewAdvocateVue
