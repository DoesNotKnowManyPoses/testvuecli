<template>
   <div class="module-live-teant-container">
            <a :href="ahreflink" target="_blank">
            <div class="module-live-teant-content">
            <img :src="contentsrc" />
            <div class="module-live-teant-content-info">
            <span class="module-fl">{{host}}</span><span class="module-fr">{{number}}</span>
            </div>
            <div class="module-live-teant-image" :style="{backgroundImage:'url('+imagesrc+')'}">
            </div>
            </div>
            <div class="module-live-teant-desc">{{desc}}</div>
            <div class="module-live-teant-info">{{info}}</div>
            </a>
            </div>
</template>
<script>
export default {
   name:'my-live-tenant',
   props:['imagesrc','contentsrc','host','ahreflink','number','desc','info']
}
</script>