<template>
  <div class="mn-pro" :style="style" >
    <h2>{{data.title}}</h2>
    <p v-for="item in data.texts" :key="item.title">{{item}}</p>
  </div>
</template>

<script type="text/javascript">

export default {
  name: "MnPro",
  props: {
      data: {
          type: Object,
      },
      position: {
          type: String,
      }
  },
  data() {
    return {

    }
  },
  components: {
    
  },
  computed: {
      style() {
          return {'background-image': 'url('+this.data.img+')', 'background-repeat':'no-repeat', 'background-size':'cover','padding-left':this.position === 'right'?'442.5px':''}
      }
  }
}
</script>

<style scoped>
.mn-pro {
    width: 857.5px;
    height: 241.25px;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.mn-pro > p {
    line-height: 21.25px;
    color: #666666;
}

.mn-pro > h2 {
    margin-bottom: 16.25px;
}

.mn-pro > * {
    padding-left: 98.75px;
}

</style>
