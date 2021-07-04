<template>
  <div v-if="sources.length > 0">
    <h3 class="pt-0 mt-0 text-sm tracking-wide uppercase border-none">Sources</h3>
    <div>
      <ul>
        <li v-for="(source, index) in sources" :key="index" class="flex space-x-3">
          <span >{{source.book}}</span>
          <span>P{{source.page}}</span>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Sources',
  props: {
    sources: { type: Array, required: false, default: ()=>[]}
  }
}
</script>

<style scoped>

</style>
