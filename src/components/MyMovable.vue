<template>
          <div class="video-container" :class="mycontainer">
        <a :href="hreflink" target="_blank" >
        <img :src="srclink" />
        <div class="movable-pic-container" v-if="show" v-on:mouseover="startMovable($event)" v-on:mousemove="move($event)" v-on:mouseout="hideMovable">
        <p v-for="(item,index) in bullets" class="row-bullet" :class="{'second-row':isSecondRow(index)}" :style="bulletStyle[index]" ref="p">{{bullets[index]}}</p>
        <div class="percent-bar">
        <div class="percent" :style="{width:ratio+'%'}"></div>
        </div>
        <div class="movable-pic" :style="[bgposition,backgroundImage]">
        </div>
        <div class="later-watch">
        </div>
        <span class="duration">{{duration}}</span>
        </div>
        <p class="video-description">{{description}}</p>
        </a>
        </div>
</template>

<script>
export default {
  name:'my-movable',
   props:{
            parameterObject:{
                type:Object
            },
            mycontainer:{
                type:String
            }
        },
        data:function(){
            return {
               left:0,
               top:10,
               startLeft:0,
               startTop:0,
               width:160,
               height:90,
               show:this.parameterObject.show,
               description:this.parameterObject.desc,
               duration:this.parameterObject.duration,
               hreflink:this.parameterObject.hreflink,
               num:this.parameterObject.num,
              // num:48,
               numPerRow:10,
               ratio:0,
               srclink:this.parameterObject.srclink,
               //srclink:"movablevideo.webp",
              // backgroundImgSrc:"movablepic2.webp",
               backgroundImgSrc:this.parameterObject.imgsrc,
               bgposition:{
                backgroundPositionX:"0px",
                backgroundPositionY:"0px"
               },
               showMovablePic:false,
               timeoutList:[],
               looptimeout:null,
               timeInterval:null,
               bulletStyle:[],
               bulletURL:this.parameterObject.bulletURL,
               bullets:['呵呵呵呵','哈哈航昂昂哈','好好学习','秦时明月汉时关','粒粒皆辛苦']
            }
        },
        methods:{
              startMovable:function(event){
                this.setNewPosition(event); //根据鼠标的位置，直接定位到对应的背景图片的位置
                this.showBullet();//弹幕准备发射
              },
              move:function(event){
                this.setNewPosition(event); //这个事件只会触发背景图片位置的切换。
              },
              /*根据鼠标的水平位置，设置背景图片的位置，来模拟预览*/
              setNewPosition:function(event){
                  var offset=event.offsetX;
                  this.startTop=event.offsetY;
                  this.ratio = offset*100.0/this.width;
                  var sequence = Math.floor(offset*this.num/(this.width+1));
                  var sequenceV = Math.floor(sequence/this.numPerRow);
                  var sequenceH = sequence%this.numPerRow;
                  this.left = 0-sequenceH*this.width;
                  this.top = 0- sequenceV*this.height;
                  console.log("sequence is "+sequenceH+" "+sequenceV);
                  this.bgposition.backgroundPositionX=this.left+"px";
                  this.bgposition.backgroundPositionY=this.top+"px";
              },
              /*弹幕第一行还是第二行*/
              isSecondRow:function(index){
                  return index%2!=0;
              },
              /**/
              reloadBullets:function(){
                 this.timeoutList.forEach(function(timeout){//清除没跑完的setTimeout
                     clearTimeout(timeout);
                 });
                 this.timeoutList=[];                  
                 this.bulletStyle.splice(0,this.bulletStyle.length); //清除新设定的目标位置
              },
              /*将已经设置了bulletstyle的timeout保留，还未执行的timeout取消掉*/
              hideMovable:function(){
                  var start = this.bulletStyle.length;   
                  var end = this.timeoutList.length; 
                 for(var i = start;i<end; i ++){
                     clearTimeout(this.timeoutList[i]);
                 }
                 this.timeoutList.splice(start,end-start);
                 clearTimeout(this.looptimeout);
              },
              showBullet:function(){
                var bulletList = this.$refs.p;
                var that = this;
                var start = this.bulletStyle.length;
                if(start==bulletList.length&&start>0){//弹幕已经弹完，需要弄一个循环
                    this.looptimeout = setTimeout( function(){
                              that.reloadBullets();
                              that.showBullet();
                          },7000);
                   return;
                }
                for(var i = start ; i < bulletList.length; i ++){
                  this.timeoutList.push(setTimeout(function(index){
                     return function(){
                     var length = bulletList[index].clientWidth;
                     var style={};
                     style.left="-"+length+"px";
                     style.transition="all 5s linear";
                      that.bulletStyle.push(style);
                      console.log("index is "+index);
                      if(index==bulletList.length-1){
                          that.looptimeout=setTimeout(function(){
                              that.reloadBullets();
                              that.showBullet();
                          },7000);
                      }
                     };
                  }(i),(i-start)*1000));
                }
              }
             },
             computed:{
                backgroundImage:function(){
                    return {
                        background:"url('"+this.backgroundImgSrc+"') 0 0 no-repeat"
                    };
                }
             }
}
</script>
