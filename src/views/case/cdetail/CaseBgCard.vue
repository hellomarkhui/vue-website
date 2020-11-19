<template>
  <div class="case-bg">
        <CardItem v-for="data in datas" 
            :key="data.index" 
            :data="data"
            :style="{width:itemWidth}"></CardItem>
    </div>
</template>

<script type="text/javascript">
import CardItem from './CardItem.vue'
export default {
  name: "CaseBgCard",
  props: {
      datas: {
          type: Array,
          default: function(){return [];}
      }
  },
  data() {
    return {
    }
  },
  components: {
      CardItem
  },
  computed: {
    itemWidth() {
        let datas = this.datas;
        if(this.datas.length){
            return (100/this.datas.length - 1)+"%";
        }else
            return "100%";
    }
  }
}
</script>

<style scoped>
.case-bg {
    display: flex;
    justify-content: space-between;
}
</style>
