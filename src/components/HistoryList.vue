<template>
    <li>
     <a class="search-link-style" v-bind:href="link" target="_blank"> {{ history.title }} </a>
      <div v-if="cancel" class="cancel" v-on:click.stop="$emit('remove')"></div>
    </li>
</template>
<script>
export default {
  name: 'history-list',
  props: ['history', 'link', 'cancel']
}
</script>
