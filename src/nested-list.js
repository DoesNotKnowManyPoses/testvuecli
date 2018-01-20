import Vue from 'vue'
import NestedList from './components/NestedList'
var list = {
  number: 362,
  homelink: 'https://www.bilibili.com/v/douga/',
  totalshow: false,
  name: '动画',
  content: ['MAD-AMV', 'MMD·3D', '短片·手书·配音', '综合'],
  link: ['douga/mad/', 'douga/mmd/', 'douga/voice/', 'douga/other/'],
  tclass: [],
  show: []
}

var list3 = {
  number: 30,
  homelink: 'https://bangumi.bilibili.com/22/',
  totalshow: false,
  name: '番剧',
  content: ['连载动画', '完结动画', '资讯', '官方延伸', '新番时间表', '番剧索引'],
  link: ['anime/serial/', 'anime/finish/', 'anime/information/', 'anime/official/', 'anime/timeline', 'anime/index/'],
  tclass: [],
  show: []
}
// <a href="//bangumi.bilibili.com/guochuang/" class="nav-link"><div class="num-wrap"><span class="num">15</span></div><div class="nav-name">国创</div></a>
var list4 = {
  number: 1111,
  homelink: 'https://bangumi.bilibili.com/guochuang/',
  totalshow: false,
  name: '电影',
  content: ['国产动画', '国产原创相关', '布袋戏', '咨询', '新番时间表', '国产动画索引'],
  link: ['guochuang/chinese', 'guochuang/original/', 'guochuang/puppetry/', 'guochuang/information/', 'guochuang/timeline', 'guochuang/index/'],
  tclass: [],
  show: []
}
// <a href="https://www.bilibili.com/v/music/" class="nav-link"><div class="num-wrap"><span class="num">391</span></div><div class="nav-name">音乐</div></a>
var list5 = {
  number: 222,
  homelink: 'https://www.bilibili.com/v/music/',
  totalshow: false,
  name: '音乐',
  content: ['原创音乐', '翻唱', 'VOCALOID·UTAU', '演奏', '三次元音乐', 'OP/ED/OST', '音乐选集'],
  link: ['music/original/', 'music/cover/', 'music/vocaloid/', 'music/perform/', 'music/corrdinate/', 'music/oped/', 'music/collection/'],
  tclass: [],
  show: []
}
// <a href="//www.bilibili.com/v/dance/" class="nav-link"><div class="num-wrap"><span class="num">51</span></div><div class="nav-name">舞蹈</div></a>
var list6 = {
  number: 333,
  homelink: 'https://www.bilibili.com/v/dance/',
  totalshow: false,
  name: '舞蹈',
  content: ['宅舞', '三次元舞蹈', '舞蹈教程'],
  link: ['dance/otaku/', 'dance/three_d/', 'dance/demo/'],
  tclass: [],
  show: []
}
// <a href="//www.bilibili.com/v/game/" class="nav-link"><div class="num-wrap"><span class="num">999+</span></div><div class="nav-name">游戏</div></a>
var list7 = {
  number: 14,
  homelink: 'https://www.bilibili.com/v/game/',
  totalshow: false,
  name: '游戏',
  content: ['单机游戏', '电子竞技', '手机游戏', '网络游戏', '桌游棋牌', 'GMV', '音游', 'Mugen'],
  link: ['game/stand_alone/', 'game/esports/', 'game/mobile/', 'game/online/', 'game/board/', 'game/gmv/', 'game/music/', 'game/mugen/'],
  tclass: [],
  show: []
}
var list2 = {
  number: 713,
  homelink: 'https://www.bilibili.com/v/technology/',
  totalshow: false,
  name: '科技',
  content: ['趣味科普人文', '野生技术协会', '演讲·公开课', '星海', '数码', '机械', '汽车'],
  link: ['technology/fun/', 'technology/wild/', 'technology/speech_course/', 'technology/military/', 'technology/digital/', 'technology/mechanical/', 'technology/automobile'],
  tclass: [],
  show: []
}

var list8 = {
  number: 555555,
  homelink: 'https://www.bilibili.com/v/life/',
  totalshow: false,
  name: '生活',
  content: ['搞笑', '日常', '美食圈', '动物圈', '手工', '绘画', 'ASMR', '运动', '其他'],
  link: ['life/funny/', 'life/daily/', 'life/food/', 'life/animal/', 'life/handmake/', 'life/painting/', 'life/asmr/', 'life/sports/', 'life/other/'],
  tclass: [],
  show: []
}

var list9 = {
  number: 345,
  homelink: 'https://www.bilibili.com/v/kichiku/',
  totalshow: false,
  name: '鬼畜',
  content: ['鬼畜调教', '音MAD', '人力VOCALOID', '教程演示'],
  link: ['kichiku/guide/', 'kichiku/mad/', 'kichiku/manual_vocaloid/', 'kichiku/course/'],
  tclass: [],
  show: []
}
var list10 = {
  number: 99999,
  homelink: 'https://www.bilibili.com/v/fashion/',
  totalshow: false,
  name: '时尚',
  content: ['美妆', '服饰', '健身', '资讯'],
  link: ['fashion/makeup/', 'fashion/clothing/', 'fashion/aerobics/', 'fashion/information/'],
  tclass: [],
  show: []
}
var list11 = {
  number: 12345,
  homelink: 'https://www.bilibili.com/v/ad/ad',
  totalshow: false,
  name: '广告',
  content: [],
  link: [],
  tclass: [],
  show: []
}
var list12 = {
  number: 515,
  homelink: 'https://www.bilibili.com/v/ent/',
  totalshow: false,
  name: '娱乐',
  content: ['综艺', '明星', 'Korea相关'],
  link: ['ent/variety', 'ent/start/', 'ent/korea'],
  tclass: [],
  show: []
}
var list13 = {
  number: 123,
  homelink: 'https://www.bilibili.com/v/cinephile/',
  totalshow: false,
  name: '影视',
  content: ['影视杂谈', '影视剪辑', '短片', '预告·资讯', '特摄'],
  link: ['cinephile/cinecism/', 'cinephile/montage', 'cinephile/shortfilm', 'cinephile/trailer_info', 'cinephile/tokusatsu/'],
  tclass: [],
  show: []
}
var list14 = {
  number: 4,
  homelink: 'https://www.bilibili.com/cinema/',
  totalshow: false,
  name: '放映厅',
  content: ['纪录片', '电影', '电视剧'],
  link: ['documentary/', 'movie/', 'tv/'],
  tclass: [],
  show: []
}

// <a href="//www.bilibili.com/v/douga/mad/" class="sub-nav-link"><span>MAD·AMV<i class="arrow"></i></span></a>
var listContainer = [list, list2, list3, list4, list5, list6, list7, list8, list9, list10, list11, list12, list13, list14]

var data = {
  hehe: listContainer,
  showarray: [],
  showarray2: [],
  giflink: 'https://search.bilibili.com/all?keyword=INFINI-T%20FORCE&from_source=gif_recommend&spm_id_from=333.334.primary_menu.108',
  gifsrc: './static/animation.gif'
}
function createNestedVue () {
  var vue = new Vue({
    el: '#titles',
    data: data,
    components: {NestedList},
    methods: {
      showOptionList: function (index) {
        console.log('received index is ' + index)
        if (this.hehe[index].content.length > 0) {
          this.showarray.splice(index, 1, true)
        }
      },
      hideOptionList: function (index) {
        this.showarray.splice(index, 1, false)
      },
      showOptionList2: function (index) {
        if (this.hehe[index].content.length > 0) {
          this.showarray2.splice(index, 1, true)
        }
      },
      hideOptionList2: function (index) {
        this.showarray2.splice(index, 1, false)
      },
      goMove: function (loc, index) {
        console.log('move received value are' + loc + ' ' + index)
        var target = this.hehe[loc]
        target.tclass.splice(index, 1, 'move-right')
        console.log(target.tclass[index] + 'name')
        target.show.splice(index, 1, true)
        this.hehe.splice(loc, 1, target)// 两个都要用splice啊。。我真是服了。
      },
      goBack: function (loc, index) {
        console.log('back hehe')
        var target = this.hehe[loc]
        target.tclass.splice(index, 1, '')
        target.show.splice(index, 1, false)
        this.hehe.splice(loc, 1, target)
      }
    }
  })
  return vue
}

export default createNestedVue
