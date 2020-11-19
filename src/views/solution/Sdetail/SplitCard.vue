<template>
  <div class="p-width relate">
        <div :class="['item',curIndex === index?'active':'']"
            :style="{'width':itemWidth}"
            v-for="(item, index) in datas"
            :key="item.title"
            @mouseenter="curIndex = index"
            @mouseleave="curIndex = -1">
            <div class="item-icon" :style="styleBg(index, item)"></div>
            <h3 class="item-title">{{item.title}}</h3>
            <p>{{item.content}}</p>
        </div>
        <!-- <div class="item active">
            <div class="item-icon icon2"></div>
            <h3 class="item-title">风电场/光伏电站一次调频改造</h3>
            <p>通过网调对新能源场站一次调频的验收，确保新能源场、站的正常发电。</p>
        </div> -->
    </div>
</template>

<script type="text/javascript">
export default {
  name: "SplitCard",
  props: {
      datas: {
          type: Array,
          default: function(){return [];}
      }
  },
  data() {
    return {
        curIndex: -1
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
.relate {
    margin-top: 72.5px;
    display: flex;
    justify-content: space-between;
}

.relate .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 19%;
    padding-bottom: 35px;
    box-shadow: 0px 1.25px 6.25px 0px rgba(24, 24, 24, 0.16);
}

.relate .item-icon {
    width: 75px;
    height: 80px;
    margin-top: 45px;
    background-size: contain;
}

.relate .item-title {
    width: 100%;
    height: 30px;
    margin: 15px 0;
    padding: 0 5px;
    font-size: 12.5px;
    font-weight: bold;
    line-height: 15px;
    text-align: center;
    color: #333333;
}

.relate .item > p {
    width: 100%;
    padding: 0 10px;
    font-family: Adobe Heiti Std;
    font-size: 11.25px;
    line-height: 17.5px;
    color: #656565;
}

.relate .item.active > p, .relate .active .item-title {
    color: #FFFFFF;
}

.relate .item.active {
    background-color: #3D7EC1;
}
</style>
