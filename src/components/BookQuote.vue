<template>
<!--  <blockquote class="flex-col">-->
<!--    <p class="mb-1 italic">-->
<!--    </p>-->
<!--    <cite class="font-bold">Warcry Core Book</cite>-->
<!--  </blockquote>-->

  <div class="border-l-4  pl-4 py-2 flex flex-col mb-4 dark:border-gray-800">
    <div class="content"><slot name="default"/></div>
    <div class="self-end cite"><slot name="cite" /></div>
  </div>
</template>

<script>
export default {
  name: "BookQuote"
}
</script>

<style lang="css" scoped>

  div.content p {
    margin-bottom: 0.5rem;
    font-style: italic;
  }
  div.content p:last-child {
    margin-bottom: 0;
  }
  div.cite {
    font-weight: bold;
    margin-top: 0.5rem;
  }
  div.cite::before {
    content: '- ';
  }
</style>
