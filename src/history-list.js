import Vue from 'vue'
import History from './SearchCookie.js'
import HistoryList from './components/HistoryList'
var history = new History('history')
function createHeaderVue () {
  return new Vue({
    el: '#header',
    components: {HistoryList},
    data: {
      gamepanelshow: false,
      livepanelshow: false,
      votepanelshow: false,
      christmas: '',
      historyList: [],
      show: false,
      hintShow: false,
      showDelete: true,
      hideDelete: false,
      hintList: [{ title: 'aa' }, { title: 'aaa' }, { title: 'b' }, { title: 'c' }, { title: 'd' }, { title: 'e' }],
      picshow: false,
      srclink: '',
      largeGame: { hreflink: 'http://game.bilibili.com/fgo/fes/', srclink: './static/fate2.gif' },
      middleGameList: [{ hreflink: '', srclink: './static/game.gif', desc: '碧蓝航线' }, { hreflink: '', srclink: './static/game.gif', desc: '寂暗星空' }, { hreflink: '', srclink: './static/game.gif', desc: '修真世界' }],
      smallGameList: [{ hreflink: '', desc: '决战，平安京', srclink: './static/pkanjk.png' }, { hreflink: '', desc: '武装色霸气路飞', srclink: './static/hjkuke.jpg' }, { hreflink: '', desc: '九刀流阿修罗', srclink: './static/capcom.png' }, { hreflink: '', desc: '赤魔疯脚', srclink: './static/pkanjk.png' }, { hreflink: '', desc: '王之蔑视', srclink: './static/hjkuke.jpg' }, { hreflink: '', desc: '大玉螺旋丸', srclink: './static/pkanjk.png' }, { hreflink: '', desc: '重建罗生门', srclink: './static/capcom.png' }],
      liveList: [{ hreflink: '', srclink: './static/host1.jpg', host: '梦醒三年梦' }, { hreflink: '', srclink: './static/host2.jpg', host: '今昔是何年' }, { hreflink: '', srclink: './static/host3.jpg', host: '乘风归去' }, { hreflink: '', srclink: './static/host4.jpg', host: '琼楼玉宇' }, { hreflink: '', srclink: './static/host5.jpg', host: '高处不胜寒' }, { hreflink: '', srclink: './static/host6.jpg', host: '何似在人间' }]

    },
    mounted: function () {
      document.addEventListener('click', this.hideHistoryandHint)
    },
    methods: {
      showPic: function (index) {
        this.srclink = this.smallGameList[index].srclink
        this.picshow = true
      },
      hidePic: function () {
        this.picshow = false
      },
      showGamePanel: function () {
        this.gamepanelshow = true
      },
      hideGamePanel: function () {
        this.gamepanelshow = false
      },
      showLivePanel: function () {
        this.livepanelshow = true
      },
      hideLivePanel: function () {
        this.livepanelshow = false
      },
      showuploadpanel: function () {
        this.votepanelshow = true
      },
      hideuploadpanel: function () {
        this.votepanelshow = false
      },
      doSearch: function () {
        if (this.christmas) {
          console.log('search keyword is ' + this.christmas)
          console.log(history)
          history.addCookie(this.christmas)
          this.historyList = history.getHistoryList()
        }
      },
      showHistory: function () {
        if (this.christmas) return
        this.historyList = history.getHistoryList()
        console.log(this.historyList)
        if (this.historyList && this.historyList.length > 0) {
          this.show = true
        }
      },
      hideHistoryandHint: function () {
        this.hideHistory()
        this.hideHint()
      },
      hideHistory: function (event) {
        if (event) {
          console.log(event)
        }
        this.show = false
      },
      deleteHistory: function (index) {
        this.historyList.splice(index, 1)
        if (this.historyList.length < 1) {
          this.show = false
        }
        // 调用history的删除方法，还没实现
      },
      buildLink: function (str) {
        console.log(str)
        return 'https://search.bilibili.com/all?keyword=' + str
      },
      getHint: function () {
        if (this.christmas.trim() === '') {
          this.hintShow = false
          if (this.historyList && this.historyList.length > 0) {
            this.show = true
          }
          return
        };
        console.log('change triggered')
        this.show = false
        var arrLen = this.hintFileter(this.hintList, this.christmas).length
        console.log(arrLen + ' length is ')
        this.hintShow = arrLen > 0
      },
      hintFileter: function (arr, key) {
        return arr.filter(function (curVal, index, arr) {
          return curVal['title'].indexOf(key) !== -1
        })
      },
      hideHint: function () {
        this.hintShow = false
      }
    }
  })
}
export default createHeaderVue
