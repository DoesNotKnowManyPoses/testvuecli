<template>
    <transition v-bind:name='tname' mode='out-in'>
        <a :href='link' v-show='show' class='original-location'> 
           <img :src='hehe' />
        </a>   
    </transition>  
</template>
<script>
export default {
  name: "big-slide",
  props: ["show", "hehe", "link", "tname"]
};
</script>
/* hehe name in the export and name of the vue file has some restrictions?*/
