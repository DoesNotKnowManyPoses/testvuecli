<template>
  <div class="module-live-rank">
  <div class="module-live-ranknumber" :class="{'module-live-top':num<=3}" >{{num}}</div>
  <a :href="livelink"> 
  <img v-lazy="photosrc" class="module-live-rankimg" />
  <div class="module-live-rankdesc">
  <div class="module-live-rankupdesc">
  <span class="module-live-viewcount clearfix">{{viewcount}}</span>
  <span class="module-live-name clearfix">{{postname}}</span>
  </div>
  <div class="module-live-ranklowdesc">{{desc}}</div>
  </div>
  </a>
  </div>
</template>
<script>
export default {
   name:'my-live-list',
   props:['num','livelink','photosrc','viewcount','postname','desc', ]
}
</script>


