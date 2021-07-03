<template>
<span class="bg-gray-200 font-bold p-runemark ">
  <span class="runemark">{{runemark}}</span>&nbsp;<span class="mark">{{icon}}</span>
</span>
</template>

<script>
export default {
  name: "Runemark",
  props: {
    mark: {type: String, required: true}
  },
  computed: {
    runemark() {
      return this.mark.toUpperCase()
    },
    icon() {
      return this.iconMap[this.runemark]
    }
  },
  data () {
    return {
      iconMap: {
        'LEADER' : 'x',
        'FLY' : '\'',
        'GARGANTUAN': '',
        'MOUNT': '.',
        'BEAST': 's',
        'CHAOTIC BEAST': 'j',
        'THRALL': '/',
      }
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: Runemark;
  src: url('../assets/runemarks.ttf');
  font-weight: normal;
}

span.mark {
  font-family: Runemark, monospace;

}

span.runemark {
  text-transform: uppercase;

}

.p-runemark {
  padding: 1px 5px;
}
</style>
