<template>
    <div :class="['wf-pro',imgRight?'img-right':'img-left']">
        <img :src="data.img" alt="" v-on:click="imgClick">
        <div class="content">
            <h3>{{data.index}}</h3>
            <h4>{{data.title}}</h4>
            <p>{{data.content}}</p>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
  name: "WfPro",
  props: {
    data: {
        type: Object,
        default: function(){return {}}
    },
    imgRight: {
        type: Boolean,
        default: false
    }
  },
  data() {
    return {
        
    }
  },
  components: {
    
  },
  methods: {
      imgClick: function(){
          this.$emit('click-img')
      }
  }
}
</script>

<style scoped>
.wf-pro {
    display: flex;
    justify-content: center;
    margin-bottom: 55px;
}

.img-right {
    flex-direction: row-reverse;
}

.wf-pro img {
    width: 506.25px;
    height: 292.5px;
    margin-left: -50px;
}

.wf-pro.img-right img {
    margin-left: 0;
    margin-right: -50px;
}

.wf-pro .content {
    width: 328px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.content h3 {  
    margin-top: -10px;
    font-size: 30px;
    font-weight: bold;
    color: #333333;
}

.content h4 { 
    margin: 10px 0;
    font-size: 17.5px;
    font-weight: bold;
    color: #404040;
}

.content p {
    width: 327.5px;
    color: #333333;
    line-height: 22.5px;
    text-align: center;
}

</style>
