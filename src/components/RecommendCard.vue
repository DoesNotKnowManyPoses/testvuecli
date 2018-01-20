<template>
<div class="recommend-card">
            <a :href="link" :title="title" target="_blank" >
              <img :src="imgsrc" class="img-card" />
              <div class="card-mark">
                <p class="title">{{title}}</p>
                <p class="author">{{author}}</p>
                <p class="viewcount">{{count}}</p>
             </div>  
            </a> 
            <div class="later-watch" >
                <p class="watch-tip">稍后再看
                </p>
            </div>
        </div>
</template>
<script>
export default{
    name:'recommend-card',
    props:['link','title','imgsrc','author','count']
}
</script>