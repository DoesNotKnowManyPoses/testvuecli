webpackJsonp([1],{NHnr:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("7+uW"),o=(e("mvwl"),e("201h")),n=e.n(o),l={name:"nested-list",props:["list","location","show","show2"],methods:{showList:function(t){console.log("locations is "+t),this.$emit("showlist",t)},hideList:function(t){console.log("locations is "+t),this.$emit("hidelist",t)},showListTwo:function(t){console.log("ul on mouse over"),this.$emit("showlist2",t)},hideListTwo:function(t){console.log("ul on mouse out"),this.$emit("hidelist2",t)},showMove:function(t,i){console.log(" move loc and secloc are"+t+" "+i),this.$emit("move",t,i)},backToInitial:function(t,i){console.log(" back loc and secloc are"+t+" "+i),this.$emit("back",t,i)}}},a={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("li",{staticClass:"horizontal-list"},[e("a",{staticClass:"horizontal-name",attrs:{href:t.list.homelink}},[e("p",{staticClass:"horizontal-number"},[e("span",{staticClass:"num"},[t._v(t._s(t.list.number>999?"999+":t.list.number))])]),t._v(" "),e("p",{staticClass:"name"},[t._v(t._s(t.list.name))])]),t._v(" "),e("ul",{staticClass:"vertical-list-container"},t._l(t.list.content,function(i,s){return e("li",{key:s,staticClass:"vertical-list",on:{mouseover:function(i){t.showMove(t.location,s)},mouseout:function(i){t.backToInitial(t.location,s)}}},[e("a",{staticClass:"link-style",class:t.list.tclass[s],attrs:{href:t.list.link[s]}},[e("div",{staticClass:"iconBefore"}),t._v(" "),e("span",[t._v(t._s(i)+" \n        "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.list.show[s],expression:"list.show[index]"}],staticClass:"iconAfter"})])],1)])])}))])},staticRenderFns:[]},c=e("VU/8")(l,a,!1,null,null,null).exports,r={hehe:[{number:362,homelink:"https://www.bilibili.com/v/douga/",totalshow:!1,name:"动画",content:["MAD-AMV","MMD·3D","短片·手书·配音","综合"],link:["douga/mad/","douga/mmd/","douga/voice/","douga/other/"],tclass:[],show:[]},{number:713,homelink:"https://www.bilibili.com/v/technology/",totalshow:!1,name:"科技",content:["趣味科普人文","野生技术协会","演讲·公开课","星海","数码","机械","汽车"],link:["technology/fun/","technology/wild/","technology/speech_course/","technology/military/","technology/digital/","technology/mechanical/","technology/automobile"],tclass:[],show:[]},{number:30,homelink:"https://bangumi.bilibili.com/22/",totalshow:!1,name:"番剧",content:["连载动画","完结动画","资讯","官方延伸","新番时间表","番剧索引"],link:["anime/serial/","anime/finish/","anime/information/","anime/official/","anime/timeline","anime/index/"],tclass:[],show:[]},{number:1111,homelink:"https://bangumi.bilibili.com/guochuang/",totalshow:!1,name:"电影",content:["国产动画","国产原创相关","布袋戏","咨询","新番时间表","国产动画索引"],link:["guochuang/chinese","guochuang/original/","guochuang/puppetry/","guochuang/information/","guochuang/timeline","guochuang/index/"],tclass:[],show:[]},{number:222,homelink:"https://www.bilibili.com/v/music/",totalshow:!1,name:"音乐",content:["原创音乐","翻唱","VOCALOID·UTAU","演奏","三次元音乐","OP/ED/OST","音乐选集"],link:["music/original/","music/cover/","music/vocaloid/","music/perform/","music/corrdinate/","music/oped/","music/collection/"],tclass:[],show:[]},{number:333,homelink:"https://www.bilibili.com/v/dance/",totalshow:!1,name:"舞蹈",content:["宅舞","三次元舞蹈","舞蹈教程"],link:["dance/otaku/","dance/three_d/","dance/demo/"],tclass:[],show:[]},{number:14,homelink:"https://www.bilibili.com/v/game/",totalshow:!1,name:"游戏",content:["单机游戏","电子竞技","手机游戏","网络游戏","桌游棋牌","GMV","音游","Mugen"],link:["game/stand_alone/","game/esports/","game/mobile/","game/online/","game/board/","game/gmv/","game/music/","game/mugen/"],tclass:[],show:[]},{number:555555,homelink:"https://www.bilibili.com/v/life/",totalshow:!1,name:"生活",content:["搞笑","日常","美食圈","动物圈","手工","绘画","ASMR","运动","其他"],link:["life/funny/","life/daily/","life/food/","life/animal/","life/handmake/","life/painting/","life/asmr/","life/sports/","life/other/"],tclass:[],show:[]},{number:345,homelink:"https://www.bilibili.com/v/kichiku/",totalshow:!1,name:"鬼畜",content:["鬼畜调教","音MAD","人力VOCALOID","教程演示"],link:["kichiku/guide/","kichiku/mad/","kichiku/manual_vocaloid/","kichiku/course/"],tclass:[],show:[]},{number:99999,homelink:"https://www.bilibili.com/v/fashion/",totalshow:!1,name:"时尚",content:["美妆","服饰","健身","资讯"],link:["fashion/makeup/","fashion/clothing/","fashion/aerobics/","fashion/information/"],tclass:[],show:[]},{number:12345,homelink:"https://www.bilibili.com/v/ad/ad",totalshow:!1,name:"广告",content:[],link:[],tclass:[],show:[]},{number:515,homelink:"https://www.bilibili.com/v/ent/",totalshow:!1,name:"娱乐",content:["综艺","明星","Korea相关"],link:["ent/variety","ent/start/","ent/korea"],tclass:[],show:[]},{number:123,homelink:"https://www.bilibili.com/v/cinephile/",totalshow:!1,name:"影视",content:["影视杂谈","影视剪辑","短片","预告·资讯","特摄"],link:["cinephile/cinecism/","cinephile/montage","cinephile/shortfilm","cinephile/trailer_info","cinephile/tokusatsu/"],tclass:[],show:[]},{number:4,homelink:"https://www.bilibili.com/cinema/",totalshow:!1,name:"放映厅",content:["纪录片","电影","电视剧"],link:["documentary/","movie/","tv/"],tclass:[],show:[]}],showarray:[],showarray2:[],giflink:"https://search.bilibili.com/all?keyword=INFINI-T%20FORCE&from_source=gif_recommend&spm_id_from=333.334.primary_menu.108",gifsrc:"./static/animation.gif"};var h=function(){return new s.a({el:"#titles",data:r,components:{NestedList:c},methods:{showOptionList:function(t){console.log("received index is "+t),this.hehe[t].content.length>0&&this.showarray.splice(t,1,!0)},hideOptionList:function(t){this.showarray.splice(t,1,!1)},showOptionList2:function(t){this.hehe[t].content.length>0&&this.showarray2.splice(t,1,!0)},hideOptionList2:function(t){this.showarray2.splice(t,1,!1)},goMove:function(t,i){console.log("move received value are"+t+" "+i);var e=this.hehe[t];e.tclass.splice(i,1,"move-right"),console.log(e.tclass[i]+"name"),e.show.splice(i,1,!0),this.hehe.splice(t,1,e)},goBack:function(t,i){console.log("back hehe");var e=this.hehe[t];e.tclass.splice(i,1,""),e.show.splice(i,1,!1),this.hehe.splice(t,1,e)}}})},m=e("Zrlr"),u=e.n(m),d=e("wxAW"),p=e.n(d),v=function(){function t(i){u()(this,t),this.key=i||"history",this.limit=10,this.jsonData=null,this.cacheTimeDay=7}return p()(t,[{key:"setCookie",value:function(t,i,e){if(null!=t&&null!=i){var s=t+"="+encodeURIComponent(i);isNaN(e)?e=this.cacheTimeDay:(e=parseInt(e),this.cacheTimeDay=e);var o=new Date;o.setTime(o.getTime()+24*e*3600*1e3),s=s+"; expires="+o.toUTCString(),console.log("cookie str "+s),document.cookie=s,console.log(document.cookie)}}},{key:"getCookie",value:function(t){for(var i=document.cookie?document.cookie.split(";"):[],e="",s=[],o=0;o<i.length;o++)if((s=i[o].split("="))[0].trim()===t){e=decodeURIComponent(s[1]);break}return console.log("get cookie "+e.toString()),e.toString()}},{key:"deleteCookie",value:function(t){this.setCookie(t,"",-1)}},{key:"initStr",value:function(t){return'{"title":"'+t+'"}'}},{key:"addCookie",value:function(t){var i=this.getCookie(this.key);if(console.log("keyword is "+t),""!==i){for(var e=JSON.parse(i),s=0;s<e.length;s++)if(t==e[s].title)return!1;i="["+this.initStr(t)+",";var o=e.length>this.limit-1?this.limit-1:e.length;for(s=0;s<o;s++)i+=this.initStr(e[s].title)+",";i=i.substring(0,i.length-1),i+="]"}else i="["+this.initStr(t)+"]";this.jsonData=JSON.parse(i),console.log(i),this.setCookie(this.key,i,this.cacheTimeDay)}},{key:"getHistoryList",value:function(){if(console.log("get history list triggered"),null!==this.jsonData)return this.jsonData;var t=this.getCookie(this.key);return""!=t&&(console.log("json str is "+t),this.jsonData=JSON.parse(t)),this.jsonData}},{key:"clearHistory",value:function(){this.deleteCookie(this.key),this.jsonData=null}}]),t}(),g={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("li",[e("a",{staticClass:"search-link-style",attrs:{href:t.link,target:"_blank"}},[t._v(" "+t._s(t.history.title)+" ")]),t._v(" "),t.cancel?e("div",{staticClass:"cancel",on:{click:function(i){i.stopPropagation(),t.$emit("remove")}}}):t._e()])},staticRenderFns:[]},w=e("VU/8")({name:"history-list",props:["history","link","cancel"]},g,!1,null,null,null).exports,b=new v("history");var f=function(){return new s.a({el:"#header",components:{HistoryList:w},data:{gamepanelshow:!1,livepanelshow:!1,votepanelshow:!1,christmas:"",historyList:[],show:!1,hintShow:!1,showDelete:!0,hideDelete:!1,hintList:[{title:"aa"},{title:"aaa"},{title:"b"},{title:"c"},{title:"d"},{title:"e"}],picshow:!1,srclink:"",largeGame:{hreflink:"http://game.bilibili.com/fgo/fes/",srclink:"./static/fate2.gif"},middleGameList:[{hreflink:"",srclink:"./static/game.gif",desc:"碧蓝航线"},{hreflink:"",srclink:"./static/game.gif",desc:"寂暗星空"},{hreflink:"",srclink:"./static/game.gif",desc:"修真世界"}],smallGameList:[{hreflink:"",desc:"决战，平安京",srclink:"./static/pkanjk.png"},{hreflink:"",desc:"武装色霸气路飞",srclink:"./static/hjkuke.jpg"},{hreflink:"",desc:"九刀流阿修罗",srclink:"./static/capcom.png"},{hreflink:"",desc:"赤魔疯脚",srclink:"./static/pkanjk.png"},{hreflink:"",desc:"王之蔑视",srclink:"./static/hjkuke.jpg"},{hreflink:"",desc:"大玉螺旋丸",srclink:"./static/pkanjk.png"},{hreflink:"",desc:"重建罗生门",srclink:"./static/capcom.png"}],liveList:[{hreflink:"",srclink:"./static/host1.jpg",host:"梦醒三年梦"},{hreflink:"",srclink:"./static/host2.jpg",host:"今昔是何年"},{hreflink:"",srclink:"./static/host3.jpg",host:"乘风归去"},{hreflink:"",srclink:"./static/host4.jpg",host:"琼楼玉宇"},{hreflink:"",srclink:"./static/host5.jpg",host:"高处不胜寒"},{hreflink:"",srclink:"./static/host6.jpg",host:"何似在人间"}]},mounted:function(){document.addEventListener("click",this.hideHistoryandHint)},methods:{showPic:function(t){this.srclink=this.smallGameList[t].srclink,this.picshow=!0},hidePic:function(){this.picshow=!1},showGamePanel:function(){this.gamepanelshow=!0},hideGamePanel:function(){this.gamepanelshow=!1},showLivePanel:function(){this.livepanelshow=!0},hideLivePanel:function(){this.livepanelshow=!1},showuploadpanel:function(){this.votepanelshow=!0},hideuploadpanel:function(){this.votepanelshow=!1},doSearch:function(){this.christmas&&(console.log("search keyword is "+this.christmas),console.log(b),b.addCookie(this.christmas),this.historyList=b.getHistoryList())},showHistory:function(){this.christmas||(this.historyList=b.getHistoryList(),console.log(this.historyList),this.historyList&&this.historyList.length>0&&(this.show=!0))},hideHistoryandHint:function(){this.hideHistory(),this.hideHint()},hideHistory:function(t){t&&console.log(t),this.show=!1},deleteHistory:function(t){this.historyList.splice(t,1),this.historyList.length<1&&(this.show=!1)},buildLink:function(t){return console.log(t),"https://search.bilibili.com/all?keyword="+t},getHint:function(){if(""===this.christmas.trim())return this.hintShow=!1,void(this.historyList&&this.historyList.length>0&&(this.show=!0));console.log("change triggered"),this.show=!1;var t=this.hintFileter(this.hintList,this.christmas).length;console.log(t+" length is "),this.hintShow=t>0},hintFileter:function(t,i){return t.filter(function(t,e,s){return-1!==t.title.indexOf(i)})},hideHint:function(){this.hintShow=!1}}})},k={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("transition",{attrs:{name:t.tname,mode:"out-in"}},[e("a",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"original-location",attrs:{href:t.link}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.hehe,expression:"hehe"}]})])])},staticRenderFns:[]},_=e("VU/8")({name:"big-slide",props:["show","hehe","link","tname"]},k,!1,null,null,null).exports,y={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"recommend-card"},[e("a",{attrs:{href:t.link,title:t.title,target:"_blank"}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgsrc,expression:"imgsrc"}],staticClass:"img-card"}),t._v(" "),e("div",{staticClass:"card-mark"},[e("p",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),e("p",{staticClass:"author"},[t._v(t._s(t.author))]),t._v(" "),e("p",{staticClass:"viewcount"},[t._v(t._s(t.count))])])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"later-watch"},[i("p",{staticClass:"watch-tip"},[this._v("稍后再看\r\n                ")])])}]},j=e("VU/8")({name:"recommend-card",props:["link","title","imgsrc","author","count"]},y,!1,null,null,null).exports;var L=function(){var t=new s.a({el:"#slide",components:{RecommendCard:j,BigSlide:_},data:{showlist:[!0],content:["./static/bilibili_slide4.jpg","./static/bilibili_slide5.jpg","./static/bilibili_slide3.jpg","./static/bilibili_slide1.jpg","./static/bilibili_slide2.jpg"],timer:null,morelink:"https://www.bilibili.com/blackboard/topic_list.html?spm_id_from=333.334.chief_recommend.2",titles:["2017,生活区陪你一起走过","一定还会再见面","全明星阵容","♪(^∇^*)","周末来啦~"],links:["https://www.bilibili.com/read/cv129822/","https://show.bilibili.com/platform/home.html?cityid=310100","https://show.bilibili.com/platform/detail.html?id=11257&from=sj_cpmdy_d","https://www.bilibili.com/blackboard/activity-ryJJHYwGM.html?spm_id_from=333.334.chief_recommend.7","https://www.bilibili.com/blackboard/topic/activity-HJiAYs1Xz.html?spm_id_from=333.334.chief_recommend.9"],title:"2017,生活区陪你一起走过",link:"https://www.bilibili.com/read/cv129822/",start:0,transitionname:"imgslide-fade",switchback:!1,tips:[{tip:"一周",ind:"0"},{tip:"三日",ind:"1"},{tip:"昨日",ind:"2"}],recommendInfo:null,recomendList:[[{link:"https://www.bilibili.com/video/av17650330/",title:"【新番推荐】史上最强 神话降临 1月新番开播前大分析",imgsrc:"./static/bilibili_recommend1.jpg",author:"up主:呵呵杭二",count:"1.7万"},{link:"https://www.bilibili.com/video/av17650330/",title:"【新番推荐】史上最强 神话降临 1月新番开播前大分析",imgsrc:"./static/bilibili_recommend1.jpg",author:"up主:呵呵杭二",count:"1.7万"},{link:"https://www.bilibili.com/video/av17650330/",title:"【新番推荐】史上最强 神话降临 1月新番开播前大分析",imgsrc:"./static/bilibili_recommend1.jpg",author:"up主:呵呵杭二",count:"1.7万"},{link:"https://www.bilibili.com/video/av17650330/",title:"【新番推荐】史上最强 神话降临 1月新番开播前大分析",imgsrc:"./static/bilibili_recommend1.jpg",author:"up主:呵呵杭二",count:"1.7万"},{link:"https://www.bilibili.com/video/av17650330/",title:"【新番推荐】史上最强 神话降临 1月新番开播前大分析",imgsrc:"./static/bilibili_recommend1.jpg",author:"up主:呵呵杭二",count:"1.7万"},{link:"https://www.bilibili.com/video/av17650330/",title:"【新番推荐】史上最强 神话降临 1月新番开播前大分析",imgsrc:"./static/bilibili_recommend1.jpg",author:"up主:呵呵杭二",count:"1.7万"},{link:"https://www.bilibili.com/video/av17650330/",title:"【新番推荐】史上最强 神话降临 1月新番开播前大分析",imgsrc:"./static/bilibili_recommend1.jpg",author:"up主:呵呵杭二",count:"1.7万"},{link:"https://www.bilibili.com/video/av17650330/",title:"【新番推荐】史上最强 神话降临 1月新番开播前大分析",imgsrc:"./static/bilibili_recommend1.jpg",author:"up主:呵呵杭二",count:"1.7万"}],[{link:"https://www.bilibili.com/video/av17650330/",title:"【新番推荐】史上最强 神话降临 1月新番开播前大分析",imgsrc:"./static/bilibili_recommend2.jpg",author:"up主:呵呵杭二",count:"1.7万"},{link:"https://www.bilibili.com/video/av17650330/",title:"【新番推荐】史上最强 神话降临 1月新番开播前大分析",imgsrc:"./static/bilibili_recommend2.jpg",author:"up主:呵呵杭二",count:"1.7万"},{link:"https://www.bilibili.com/video/av17650330/",title:"【新番推荐】史上最强 神话降临 1月新番开播前大分析",imgsrc:"./static/bilibili_recommend2.jpg",author:"up主:呵呵杭二",count:"1.7万"},{link:"https://www.bilibili.com/video/av17650330/",title:"【新番推荐】史上最强 神话降临 1月新番开播前大分析",imgsrc:"./static/bilibili_recommend2.jpg",author:"up主:呵呵杭二",count:"1.7万"},{link:"https://www.bilibili.com/video/av17650330/",title:"【新番推荐】史上最强 神话降临 1月新番开播前大分析",imgsrc:"./static/bilibili_recommend2.jpg",author:"up主:呵呵杭二",count:"1.7万"},{link:"https://www.bilibili.com/video/av17650330/",title:"【新番推荐】史上最强 神话降临 1月新番开播前大分析",imgsrc:"./static/bilibili_recommend2.jpg",author:"up主:呵呵杭二",count:"1.7万"},{link:"https://www.bilibili.com/video/av17650330/",title:"【新番推荐】史上最强 神话降临 1月新番开播前大分析",imgsrc:"./static/bilibili_recommend2.jpg",author:"up主:呵呵杭二",count:"1.7万"},{link:"https://www.bilibili.com/video/av17650330/",title:"【新番推荐】史上最强 神话降临 1月新番开播前大分析",imgsrc:"./static/bilibili_recommend2.jpg",author:"up主:呵呵杭二",count:"1.7万"}],[{link:"https://www.bilibili.com/video/av17650330/",title:"【新番推荐】史上最强 神话降临 1月新番开播前大分析",imgsrc:"./static/bilibili_recommend3.jpg",author:"up主:呵呵杭二",count:"1.7万"},{link:"https://www.bilibili.com/video/av17650330/",title:"【新番推荐】史上最强 神话降临 1月新番开播前大分析",imgsrc:"./static/bilibili_recommend3.jpg",author:"up主:呵呵杭二",count:"1.7万"},{link:"https://www.bilibili.com/video/av17650330/",title:"【新番推荐】史上最强 神话降临 1月新番开播前大分析",imgsrc:"./static/bilibili_recommend3.jpg",author:"up主:呵呵杭二",count:"1.7万"},{link:"https://www.bilibili.com/video/av17650330/",title:"【新番推荐】史上最强 神话降临 1月新番开播前大分析",imgsrc:"./static/bilibili_recommend3.jpg",author:"up主:呵呵杭二",count:"1.7万"},{link:"https://www.bilibili.com/video/av17650330/",title:"【新番推荐】史上最强 神话降临 1月新番开播前大分析",imgsrc:"./static/bilibili_recommend3.jpg",author:"up主:呵呵杭二",count:"1.7万"},{link:"https://www.bilibili.com/video/av17650330/",title:"【新番推荐】史上最强 神话降临 1月新番开播前大分析",imgsrc:"./static/bilibili_recommend3.jpg",author:"up主:呵呵杭二",count:"1.7万"},{link:"https://www.bilibili.com/video/av17650330/",title:"【新番推荐】史上最强 神话降临 1月新番开播前大分析",imgsrc:"./static/bilibili_recommend3.jpg",author:"up主:呵呵杭二",count:"1.7万"},{link:"https://www.bilibili.com/video/av17650330/",title:"【新番推荐】史上最强 神话降临 1月新番开播前大分析",imgsrc:"./static/bilibili_recommend3.jpg",author:"up主:呵呵杭二",count:"1.7万"}]]},created:function(){for(var t=0;t<this.content.length-1;t++)this.showlist.push(!1);this.recommendInfo=this.recomendList[0]},methods:{loop:function(){var t=this.content.length,i=this;t<1||(this.timer=setInterval(function(){i.switchback&&i.switchTransMode(!0),i.start=i.start%t,i.start==t-1?(i.showlist.splice(i.start,1,!1),i.showlist.splice(0,1,!0)):i.showlist.splice(i.start,2,!1,!0),i.start=(i.start+1)%t,i.title=i.titles[i.start],i.link=i.links[i.start]},4e3))},switchPic:function(t){console.log("received index of trigger"+t),clearInterval(this.timer),t<this.start?this.switchTransMode(!1):this.switchTransMode(!0),this.showlist.splice(this.start,1,!1),this.showlist.splice(t,1,!0),this.title=this.titles[t],this.link=this.links[t],this.start=t,console.log("transition name"+this.transitionname),this.loop()},switchTransMode:function(t){t?(this.transitionname="imgslide-fade",this.switchback=!1):(this.switchback=!0,this.transitionname="imgslide-fade-right")},stopLoop:function(){clearInterval(this.timer)},continueLoop:function(){this.loop()},preview:function(){this.tips.push(this.tips.shift());var t=this.tips[0].ind;this.recommendInfo=this.recomendList[t]},nextview:function(){this.tips.unshift(this.tips.pop());var t=this.tips[0].ind;this.recommendInfo=this.recomendList[t]}}});return t.loop(),t},C={name:"my-movable",props:{parameterObject:{type:Object},mycontainer:{type:String}},data:function(){return{left:0,top:10,startLeft:0,startTop:0,width:160,height:90,show:this.parameterObject.show,description:this.parameterObject.desc,duration:this.parameterObject.duration,hreflink:this.parameterObject.hreflink,num:this.parameterObject.num,numPerRow:10,ratio:0,srclink:this.parameterObject.srclink,backgroundImgSrc:this.parameterObject.imgsrc,bgposition:{backgroundPositionX:"0px",backgroundPositionY:"0px"},showMovablePic:!1,timeoutList:[],looptimeout:null,timeInterval:null,bulletStyle:[],bulletURL:this.parameterObject.bulletURL,bullets:["呵呵呵呵","哈哈航昂昂哈","好好学习","秦时明月汉时关","粒粒皆辛苦"]}},methods:{startMovable:function(t){this.setNewPosition(t),this.showBullet()},move:function(t){this.setNewPosition(t)},setNewPosition:function(t){var i=t.offsetX;this.startTop=t.offsetY,this.ratio=100*i/this.width;var e=Math.floor(i*this.num/(this.width+1)),s=Math.floor(e/this.numPerRow),o=e%this.numPerRow;this.left=0-o*this.width,this.top=0-s*this.height,console.log("sequence is "+o+" "+s),this.bgposition.backgroundPositionX=this.left+"px",this.bgposition.backgroundPositionY=this.top+"px"},isSecondRow:function(t){return t%2!=0},reloadBullets:function(){this.timeoutList.forEach(function(t){clearTimeout(t)}),this.timeoutList=[],this.bulletStyle.splice(0,this.bulletStyle.length)},hideMovable:function(){for(var t=this.bulletStyle.length,i=this.timeoutList.length,e=t;e<i;e++)clearTimeout(this.timeoutList[e]);this.timeoutList.splice(t,i-t),clearTimeout(this.looptimeout)},showBullet:function(){var t=this.$refs.p,i=this,e=this.bulletStyle.length;if(e==t.length&&e>0)this.looptimeout=setTimeout(function(){i.reloadBullets(),i.showBullet()},7e3);else for(var s=e;s<t.length;s++)this.timeoutList.push(setTimeout(function(e){return function(){var s=t[e].clientWidth,o={};o.left="-"+s+"px",o.transition="all 5s linear",i.bulletStyle.push(o),console.log("index is "+e),e==t.length-1&&(i.looptimeout=setTimeout(function(){i.reloadBullets(),i.showBullet()},7e3))}}(s),1e3*(s-e)))}},computed:{backgroundImage:function(){return{background:"url('"+this.backgroundImgSrc+"') 0 0 no-repeat"}}}},x={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"video-container",class:t.mycontainer},[e("a",{attrs:{href:t.hreflink,target:"_blank"}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.srclink,expression:"srclink"}]}),t._v(" "),t.show?e("div",{staticClass:"movable-pic-container",on:{mouseover:function(i){t.startMovable(i)},mousemove:function(i){t.move(i)},mouseout:t.hideMovable}},[t._l(t.bullets,function(i,s){return e("p",{ref:"p",refInFor:!0,staticClass:"row-bullet",class:{"second-row":t.isSecondRow(s)},style:t.bulletStyle[s]},[t._v(t._s(t.bullets[s]))])}),t._v(" "),e("div",{staticClass:"percent-bar"},[e("div",{staticClass:"percent",style:{width:t.ratio+"%"}})]),t._v(" "),e("div",{staticClass:"movable-pic",style:[t.bgposition,t.backgroundImage]}),t._v(" "),e("div",{staticClass:"later-watch"}),t._v(" "),e("span",{staticClass:"duration"},[t._v(t._s(t.duration))])],2):t._e(),t._v(" "),e("p",{staticClass:"video-description"},[t._v(t._s(t.description))])])])},staticRenderFns:[]},I=e("VU/8")(C,x,!1,null,null,null).exports;var S=function(){return new s.a({el:"#movable-pic",components:{MyMovable:I},data:{videoList:[{num:100,srclink:"./static/movablevideo.webp",imgsrc:"./static/movablepic3.webp",bulletURL:"",hreflink:"",desc:"美丽的男孩子，请问你有女朋友么",duration:"1:23",show:!0},{num:30,srclink:"./static/movablevideo2.webp",imgsrc:"./static/movablepic4.webp",bulletURL:"",hreflink:"",desc:"我想明天给你买个包。。。子",duration:"5:27",show:!0},{num:48,srclink:"./static/movablevideo3.webp",imgsrc:"./static/movablepic2.webp",bulletURL:"",hreflink:"",desc:"有趣的灵魂万中无一，但是你更漂亮",duration:"11:11",show:!0},{num:40,srclink:"./static/movablevideo4.webp",imgsrc:"./static/movablepic.webp",bulletURL:"",hreflink:"",desc:"吾生也有涯，而知也无涯",duration:"5:20",show:!0},{num:40,srclink:"./static/movablevideo2.webp",imgsrc:"./static/movablepic.webp",bulletURL:"",hreflink:"",desc:"出师未捷身先死，长使英雄泪满襟",duration:"5:20",show:!0}],advocateContainer:"advocate-container"}})},T=e("Eu/k"),A=e.n(T),M=[300,400,500,400,300,500,700,200,400,600,300,500,200,700,400,500,300],H=["module-game","module-national","module-series","module-live","module-dance","module-life","module-fashion","module-demon","module-animation","module-film","module-entertain","module-ft","module-tv","module-doc","module-music","module-science","module-adv"];var N=function(){return new s.a({el:"#movable-nav",data:{height:32,width:40,show:!1,top:0,content:"呵呵",totalHeight:280,zindex:-1,mousedownpoint:0,starttop:0,topNav:241,isSelected:[],aftermousedown:!1,editable:!1,timer:null,bgx:0,startindex:0,targetindex:0,navHeight:730,navIndex:1,heightBeforeNav:710,tipshow:!1,items:["游戏","国创","番剧","直播","舞蹈","生活","时尚","鬼畜","动画","电影","娱乐","影视","TV剧","纪录片","音乐","科技","广告"],highItems:M},created:function(){this.totalHeight=this.height*this.items.length,console.log("total height is "+this.totalHeight);for(var t=0;t<this.items.length;t++)this.isSelected.push(!1)},mounted:function(){window.addEventListener("scroll",this.scrollMove)},methods:{handlemousedown:function(t,i){this.editable&&(this.showhiddenblock(t,i),this.zindex=996,this.content=this.items[i],this.aftermousedown=!0)},handlemouseup:function(t,i){},showhiddenblock:function(t,i){this.top=i*this.height,this.show=!0,this.mousedownpoint=this.top+t.offsetY,this.starttop=this.top,this.startindex=i},handlemaskdown:function(t){},handlemaskmove:function(t){if(this.aftermousedown){var i=t.offsetY;this.top=this.top+(i-this.mousedownpoint),this.mousedownpoint=i;var e=this.top>this.starttop,s=Math.floor(this.top/this.height),o=e?this.top-this.starttop:this.starttop-this.top;if((!e||s!=this.items.lenght-1)&&o>=this.height/2+5)if(e){var n=this.items[s],l=this.items[s+1];this.items.splice(s,1,l),this.items.splice(s+1,1,n),this.starttop=this.starttop+this.height}else n=this.items[s],l=this.items[s+1],this.items.splice(s,1,l),this.items.splice(s+1,1,n),this.starttop=this.starttop-this.height}},handlemaskup:function(t){this.mouseoffmask()},handlemaskout:function(t){this.aftermousedown&&this.mouseoffmask()},mouseoffmask:function(){this.aftermousedown=!1,this.show=!1,this.zindex=-1,this.targetindex=Math.floor(this.starttop/this.height),function(t,i){console.log("received index are "+t+" "+i);var e="#"+H[t],s="#"+H[i];if(t<i)A()(e).insertAfter(s);else{if(!(t>i))return;A()(e).insertBefore(s)}var o=H[t];H.splice(t,1),H.splice(i,0,o);var n=M[t];M.splice(t,1),M.splice(i,0,n)}(this.startindex,this.targetindex)},notselect:function(){return!1},changeSelecte:function(t){if(!this.editable){t=t-this.heightBeforeNav+50;var i=0;this.isSelected=[];for(var e=0;e<this.highItems.length;e++){var s=this.highItems[e];i<=t&&s+i>t?this.isSelected.push(!0):this.isSelected.push(!1),i+=s}console.log(this.isSelected)}},scrollTarget:function(t){if(!this.editable){for(var i=this.heightBeforeNav,e=0;e<t;e++)i+=this.highItems[e];window.scrollTo(0,i)}},setEditable:function(){this.editable=!this.editable;for(var t=0;t<this.isSelected.length;t++)1==this.isSelected[t]&&this.isSelected.splice(t,1,!1)},srollToTop:function(){window.scrollTo(0,0)},standby:function(){clearInterval(this.timer);var t=0,i=this;this.tipshow=!0,this.timer=setInterval(function(){i.bgx=0-80*t,++t>=16&&(t-=6)},90)},backtosleep:function(){clearInterval(this.timer),this.tipshow=!1;var t=this;this.timer=setInterval(function(){t.bgx=t.bgx+80,t.bgx>=0&&(clearInterval(t.timer),t.bgx=0)},90)},adjustTop:function(t,i){console.log("height is "+t),0!=i?i<=170||(t<=this.navHeight?this.topNav=0:this.topNav=Math.floor((t-this.navHeight)/2)):this.topNav="240"},scrollMove:function(){var t=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,i=document.documentElement.clientHeight;this.adjustTop(i,t),this.changeSelecte(t),console.log("scrollTop is "+t)}}})},O={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"module-live-rank"},[e("div",{staticClass:"module-live-ranknumber",class:{"module-live-top":t.num<=3}},[t._v(t._s(t.num))]),t._v(" "),e("a",{attrs:{href:t.livelink}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.photosrc,expression:"photosrc"}],staticClass:"module-live-rankimg"}),t._v(" "),e("div",{staticClass:"module-live-rankdesc"},[e("div",{staticClass:"module-live-rankupdesc"},[e("span",{staticClass:"module-live-viewcount clearfix"},[t._v(t._s(t.viewcount))]),t._v(" "),e("span",{staticClass:"module-live-name clearfix"},[t._v(t._s(t.postname))])]),t._v(" "),e("div",{staticClass:"module-live-ranklowdesc"},[t._v(t._s(t.desc))])])])])},staticRenderFns:[]},D=e("VU/8")({name:"my-live-list",props:["num","livelink","photosrc","viewcount","postname","desc"]},O,!1,null,null,null).exports,R={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"module-live-teant-container"},[e("a",{attrs:{href:t.ahreflink,target:"_blank"}},[e("div",{staticClass:"module-live-teant-content"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.contentsrc,expression:"contentsrc"}]}),t._v(" "),e("div",{staticClass:"module-live-teant-content-info"},[e("span",{staticClass:"module-fl"},[t._v(t._s(t.host))]),e("span",{staticClass:"module-fr"},[t._v(t._s(t.number))])]),t._v(" "),e("div",{staticClass:"module-live-teant-image",style:{backgroundImage:"url("+t.imagesrc+")"}})]),t._v(" "),e("div",{staticClass:"module-live-teant-desc"},[t._v(t._s(t.desc))]),t._v(" "),e("div",{staticClass:"module-live-teant-info"},[t._v(t._s(t.info))])])])},staticRenderFns:[]},U=e("VU/8")({name:"my-live-tenant",props:["imagesrc","contentsrc","host","ahreflink","number","desc","info"]},R,!1,null,null,null).exports;var P=function(){return new s.a({el:"#module-live",components:{MyLiveList:D,MyLiveTenant:U},data:{heheh:"hehehehehehehehe",livenumber:1e4,updatesnum:12345,biglivelists:[{imagesrc:"./static/hahaha.jpg",contentsrc:"./static/bilibili_recommend3.jpg",host:"葡萄美酒夜光杯",ahreflink:"http",number:"3333",desc:"不知明镜里，何处得秋霜。",info:"战争·出战"},{imagesrc:"./static/bilibili_recommend2.jpg",contentsrc:"./static/movablevideo4.webp",host:"葡萄美酒夜光杯",ahreflink:"http",number:"3333",desc:"欲渡黄河冰塞川，将登太行雪满山",info:"战争·出战"},{imagesrc:"./static/bili_live1.jpg",contentsrc:"./static/bilibili_recommend2.jpg",host:"黑云压城城欲摧",ahreflink:"http",number:"3333",desc:"王师北定中原日",info:"战争·出战"},{imagesrc:"./static/bilibili_recommend2.jpg",contentsrc:"./static/bilibili_recommend3.jpg",host:"琵琶一曲断",ahreflink:"http",number:"3333",desc:"闲来垂钓碧溪上，忽复乘舟梦日边",info:"战争·出战"},{imagesrc:"./static/bilibili_recommend3.jpg",contentsrc:"./static/movablevideo3.webp",host:"不眠是征人",ahreflink:"http",number:"3333",desc:"黄沙百战穿金甲，不破楼兰终不还。",info:"战争·出战"},{imagesrc:"./static/bili_live2.jpg",contentsrc:"./static/bili_live3.jpg",host:"天下谁人不识君",ahreflink:"http",number:"3333",desc:"卷我屋上三重茅，茅飞渡江洒江郊，高者挂罥长林梢，下者飘转沉塘坳",info:"战争·出战"},{imagesrc:"./static/bilibili_recommend1.jpg",contentsrc:"./static/movablevideo2.webp",host:"夜光杯独醒",ahreflink:"http",number:"3333",desc:"羌笛何须怨杨柳，春风不度玉门关",info:"战争·出战"},{imagesrc:"./static/bili_live3.jpg",contentsrc:"./static/bili_live6.jpg",host:"鹅鹅鹅",ahreflink:"http",number:"3333",desc:"上下而求索",info:"战争·出战"},{imagesrc:"./static/bili_live4.jpg",contentsrc:"./static/bili_live1.jpg",host:"关关雎鸠",ahreflink:"http",number:"3333",desc:"上穷碧落下黄泉。",info:"战争·出战"},{imagesrc:"./static/bili_live6.jpg",contentsrc:"./static/bili_live4.jpg",host:"君子好逑",ahreflink:"http",number:"3333",desc:"溯洄从之，道阻且长",info:"战争·出战"}],left:0,width:260,isselected:[],carousel:[],cleft:0,carouselInterval:null,leftArray:[0,-260,-520],carouselArray:[{src:"./static/bili_recommendation.webp",link:"http"},{src:"./static/bili_recommendation2.webp",link:"http"},{src:"./static/bili_recommendation3.webp",link:"http"},{src:"./static/bili_recommendation2.webp",link:"http"}],indexArray:[0,1,2],descArray:["今日与君别","雪上空留马行处","Legend never die","今日无人试此刀"],desc:"",margin:"1%",widthArray:["50%","25%","25%"],smalllivelist:[{num:1,livelink:"http",photosrc:"./static/host3.jpg",viewcount:"2223W",postname:"一日不见三秋隔",desc:"三秋不见已忘君"},{num:2,livelink:"http",photosrc:"./static/host2.jpg",viewcount:"6.0W",postname:"君住长江头",desc:"妾在长江尾"},{num:3,livelink:"http",photosrc:"./static/host4.jpg",viewcount:"5.3W",postname:"思君不见君",desc:"你就去死吧"},{num:4,livelink:"http",photosrc:"./static/host5.jpg",viewcount:"4.1W",postname:"接天莲叶无穷碧",desc:"映日荷花别样红"},{num:5,livelink:"http",photosrc:"./static/host1.jpg",viewcount:"2.3W",postname:"天时地利人和",desc:"枝繁叶茂根深"},{num:6,livelink:"http",photosrc:"./static/host6.jpg",viewcount:"1.5W",postname:"那一瞥",desc:"那一剑的温柔"}]},created:function(){this.initializeData(),this.getUpdateLoop()},methods:{initializeData:function(){this.isselected=[!0],this.carousel=[!0],this.indexArray=[0],this.leftArray=[0];var t=this.descArray.length,i=2*t,e=180/(t+1)+"%",s=90/(t+1)+"%";this.margin=10/i+"%",this.widthArray=[e],this.desc=this.descArray[0];for(var o=1;o<t;o++)this.isselected.push(!1),this.carousel.push(!1),this.indexArray.push(o),this.leftArray.push(-1*o*this.width),this.widthArray.push(s)},switchTab:function(t){var i=parseInt(t);this.left=-1*i*this.width,this.isselected=[!1,!1,!1],this.isselected.splice(i,1,!0),console.log(this.isselected),this.carouselInterval&&clearInterval(this.carouselInterval),2==i&&this.setSlideLoop()},handlemouseovercarousel:function(t){clearInterval(this.carouselInterval);var i=parseInt(t);this.initializeData(),this.cleft=this.leftArray[i],this.desc=this.descArray[i];var e=this.widthArray[0];this.widthArray.shift(),this.widthArray.splice(i,0,e);var s=this.carousel.shift();this.carousel.splice(i,0,s);for(var o=0;o<t;o++)this.indexArray.push(this.indexArray.shift())},handlemouseoutcarousel:function(t){this.setSlideLoop()},setSlideLoop:function(){var t=this;this.carouselInterval=setInterval(function(){t.carousel.unshift(t.carousel.pop()),t.widthArray.unshift(t.widthArray.pop()),t.indexArray.push(t.indexArray.shift());var i=t.indexArray[0];t.cleft=t.leftArray[i],t.desc=t.descArray[i]},3e3)},stopSlideLoop:function(){clearInterval(this.carouselInterval)},resetUpdates:function(){this.updatesnum=0,this.biglivelists.unshift(this.biglivelists.pop())},getUpdateLoop:function(){var t=this;setInterval(function(){t.updatesnum=t.updatesnum+Math.ceil(50*Math.random())},7e3)}}})};s.a.config.productionTip=!1,s.a.use(n.a,{error:"./static/error.jpg",loading:"./static/loading.jpg"}),f(),h(),L(),S(),N(),P()},mvwl:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.cb05c8b87307fe751d0c.js.map