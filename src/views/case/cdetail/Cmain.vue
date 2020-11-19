<template>
    <PublicBlock class="c-main" :title="title" :padding-top="paddingTop">
      <div class="p-width content">
           <div>
              <h3>{{content.title}}</h3>
			  <p v-for="(item, index) in content.texts" :key="index">{{item}}</p> 
           </div>
        <img :src="content.img" :alt="content.title">
      </div>
      <slot></slot>
    </PublicBlock>
</template>

<script type="text/javascript">
import PublicBlock from '@/components/PublicBlock.vue'
export default {
  name: "Cmain",
  props: {
    title: {
        type: String,
        default: ''
    },
    paddingTop: {
        type: String,
        default: '50px'
    },
    content: {
        type: Object,
        default: function(){return {}}
    }
  },
  data() {
    return {
        
    }
  },
  components: {
    PublicBlock
  }
}
</script>

<style scoped>
.c-main {  
    background: #F3F3F3;
}

.content {
    display: flex;
    margin-top: 40px;
    justify-content: space-between;
    background-color: #FFFFFF;
}

.content h3 {
    margin-top: 56px;
    margin-bottom: 30px;
    font-size: 15px;
    color: #333333;
    line-height: 15px;
}

.content p {
    width: 382px;
    color: #777373;
    line-height: 17.5px;
}

.content h3, .content p {
    margin-left: 40px;
}

.content img {
    width: 362.5px;
    height: 318.5px;
}
</style>
