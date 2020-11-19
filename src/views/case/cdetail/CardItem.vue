<template>
    <div class="case-item"> 
        <div class="bg-img"><img :src="data.img" :alt="data.title"></div>
        <p class="index">{{data.index}}</p>
        <i class="line"></i>
        <h4 class="topic">{{data.title}}</h4>
        <div class="detail">
            <p class="index">{{data.index}}</p>
            <i class="line"></i>
            <h4 class="topic">{{data.title}}</h4>
            <p class="content">
                <span>{{data.content}}</span>
            </p>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
  name: "CaseBgCard",
  props: {
      data: {
          type: Object,
          default: {}
      }
  },
  data() {
    return {
        
    }
  },
  components: {

  },
  computed: {
    itemWidth() {
        let datas = this.datas;
        if(this.datas.length){
            return (100/this.datas.length - 1)+"%";
        }else
        return "100%";
    },
    styleBg() {
        let that = this;
        return function(index, item){
            return {'background-image': 'url('+(that.curIndex === index?item.iconActive:item.icon)+')',      'background-repeat': 'no-repeat', 
            'background-size': 'contain'}
        }
    }
  }
}
</script>

<style scoped>
.case-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
}

.bg-img {
    width: 100%;
    overflow: hidden;
}

.bg-img img {
    width: 100%;
    transition: all .5s;
}

.index {
    margin-top: 18.75px;
    font-size: 30px;
    font-weight: bold;
    color: #333333;
    line-height: 30px;
}

.line { 
    width: 30px;
    height: 2px;
    margin: 12.5px 0;
    background-color: #AFADAE;
}

.topic {
    margin-bottom: 20px;
    font-size: 13.75px;
    font-weight: bold;
    color: #404040;
    line-height: 13.75px;
}

.detail {
    position: absolute;
    height: 0;
    left: 0;
    bottom: 0;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #3D7EC1;
    overflow: hidden;
    transition: all .2s;
}

.content {
    line-height: 17.5px;
}

.detail > * {
    color: #FFFFFF;
}

.detail .line {
    background-color: #FFFFFF;
}

.case-item:hover .detail {
    height: 70%;
    padding-top: 10px;
}

.case-item:hover img {
    filter: blur(5px);
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -ms-filter: blur(5px);
    -o-filter: blur(5px);
}
</style>
