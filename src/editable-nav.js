import Vue from 'vue'
import $ from 'jquery'
var sizelist = [300, 400, 500, 400, 300, 500, 700, 200, 400, 600, 300, 500, 200, 700, 400, 500, 300]
var idlist = ['module-game', 'module-national', 'module-series', 'module-live', 'module-dance', 'module-life', 'module-fashion', 'module-demon', 'module-animation', 'module-film', 'module-entertain', 'module-ft', 'module-tv', 'module-doc', 'module-music', 'module-science', 'module-adv']
function createSideNavVue () {
  /* script for side nav bar */
  function switchElement (source, target) {
    console.log('received index are ' + source + ' ' + target)
    var sourceid = '#' + idlist[source]
    var targetid = '#' + idlist[target]
    if (source < target) {
      $(sourceid).insertAfter(targetid)
    } else if (source > target) {
      $(sourceid).insertBefore(targetid)
    } else {
      return
    }

    var idtmp = idlist[source]
    idlist.splice(source, 1)
    idlist.splice(target, 0, idtmp)

    var sizetmp = sizelist[source]
    sizelist.splice(source, 1)
    sizelist.splice(target, 0, sizetmp)
  }
  var sideNavVue = new Vue({
    el: '#movable-nav',
    data: {
      height: 32,
      width: 40,
      show: false,
      top: 0,
      content: '呵呵',
      totalHeight: 280,
      zindex: -1,
      mousedownpoint: 0,
      starttop: 0,
      topNav: 241,
      isSelected: [],
      aftermousedown: false,
      editable: false,
      timer: null,
      bgx: 0,
      startindex: 0,
      targetindex: 0,
      navHeight: 730,
      navIndex: 1,
      heightBeforeNav: 710,
      tipshow: false,
      items: ['游戏', '国创', '番剧', '直播', '舞蹈', '生活', '时尚', '鬼畜', '动画', '电影', '娱乐', '影视', 'TV剧', '纪录片', '音乐', '科技', '广告'],
      highItems: sizelist
    },
    created: function () {
      this.totalHeight = this.height * this.items.length
      console.log('total height is ' + this.totalHeight)
      for (var i = 0; i < this.items.length; i++) {
        this.isSelected.push(false)
      }
    },
    mounted: function () {
      window.addEventListener('scroll', this.scrollMove)
    },
    methods: {
      handlemousedown: function (event, index) {
        if (this.editable) { // hehe只有可编辑状态下才需要后续的记录
          this.showhiddenblock(event, index)
          this.zindex = 996
          this.content = this.items[index]
          this.aftermousedown = true
        }
      },
      handlemouseup: function (event, index) {
      },
      showhiddenblock: function (event, index) {
        this.top = index * this.height
        this.show = true
        this.mousedownpoint = this.top + event.offsetY
        this.starttop = this.top
        this.startindex = index
      },
      handlemaskdown: function (event) {

      },
      handlemaskmove: function (event) {
        if (!this.aftermousedown) return
        var offy = event.offsetY
        this.top = this.top + (offy - this.mousedownpoint)
        this.mousedownpoint = offy
        var direction = this.top > this.starttop// hehe应该用最终结果的偏移来决定方向，而不是用两次move的偏移来决定方向，因为我先下10 再上5 大体还是往下，但是只看这两次的话，方向是向上的。
        var index = Math.floor(this.top / this.height)
        // console.log(direction);
        var move = direction ? this.top - this.starttop : this.starttop - this.top// hehe如果是往上移动，那么偏移应该是指相比于上一个格子的底部，而不是顶部
        if ((direction && index == this.items.lenght - 1)) { return }
        if (move >= (this.height / 2 + 5)) {
          if (direction) {
            var current = this.items[index]
            var next = this.items[index + 1]
            // this.items.splice(index,2,next,current);
            this.items.splice(index, 1, next)
            this.items.splice(index + 1, 1, current)
            this.starttop = this.starttop + this.height// hehe换了位置以后要更新新的起点位置.
            // console.log("change from "+(index+1)+" to "+index);
          } else {
            var current = this.items[index] // hehe这里求得的index应该是上一个的index，因为top移动到了目标头上
            var next = this.items[index + 1]
            //  this.items.splice(index,2,next,current);
            this.items.splice(index, 1, next)
            this.items.splice(index + 1, 1, current)
            this.starttop = this.starttop - this.height
            // console.log("change from "+(index)+" to "+(index+1));
          }
          // console.log("index "+index+" direction "+direction+" move "+move+" top "+this.top);
        }
      },
      handlemaskup: function (event) {
        this.mouseoffmask()
      },
      handlemaskout: function (event) {
        if (this.aftermousedown) { // 如果不是按住了鼠标，则不考虑移出的问题。
          this.mouseoffmask()
        }
      },
      mouseoffmask: function () {
        this.aftermousedown = false
        this.show = false
        this.zindex = -1
        this.targetindex = Math.floor(this.starttop / this.height)
        switchElement(this.startindex, this.targetindex)
      },
      notselect: function () {
        return false
      },
      changeSelecte: function (position) {
        // console.log("received top is "+position);
        if (this.editable) return//
        position = position - this.heightBeforeNav + 50// 50 valve value
        var total = 0
        this.isSelected = []
        for (var i = 0; i < this.highItems.length; i++) {
          var current = this.highItems[i]
          if (total <= position && current + total > position) {
            this.isSelected.push(true)
          } else {
            this.isSelected.push(false)
          }
          // console.log("total is "+total);
          // console.log("current is "+current);
          total = total + current
        }
        console.log(this.isSelected)
      },
      scrollTarget: function (index) {
        if (this.editable) return
        var target = this.heightBeforeNav
        for (var i = 0; i < index; i++) {
          target += this.highItems[i]
        }
        window.scrollTo(0, target)
      },
      setEditable: function () {
        this.editable = !this.editable
        for (var i = 0; i < this.isSelected.length; i++) {
          if (this.isSelected[i] == true) {
            this.isSelected.splice(i, 1, false)
          }
        }
      },
      srollToTop: function () {
        window.scrollTo(0, 0)
      },
      standby: function () {
        clearInterval(this.timer)
        var count = 0
        var that = this
        this.tipshow = true
        this.timer = setInterval(function () {
          that.bgx = 0 - count * 80
          count++
          if (count >= 16) {
            count = count - 6
          }
        }, 90)
      },
      backtosleep: function () {
        clearInterval(this.timer)
        this.tipshow = false
        var that = this
        this.timer = setInterval(function () {
          that.bgx = that.bgx + 80
          if (that.bgx >= 0) {
            clearInterval(that.timer)
            that.bgx = 0
          }
        }, 90)
      },
      adjustTop: function (height, scrollTop) {
        console.log('height is ' + height)
        if (scrollTop == 0) {
          this.topNav = '240'
          return
        } else if (scrollTop <= 170) {
          return
        }
        if (height <= this.navHeight) {
          this.topNav = 0
        } else {
          this.topNav = Math.floor((height - this.navHeight) / 2)
        }
      },
      scrollMove: function () {
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
        var availableHeight = document.documentElement.clientHeight
        this.adjustTop(availableHeight, scrollTop)
        this.changeSelecte(scrollTop)
        console.log('scrollTop is ' + scrollTop)
      }

    }
  })
  return sideNavVue
}

export default createSideNavVue
