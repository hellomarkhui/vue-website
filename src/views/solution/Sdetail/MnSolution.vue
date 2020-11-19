<template>
    <div>
        <ul class="solution-nav">
            <li :class="['nav-item', curIndex === index?'active':'']" 
                v-for="(item,index) in datas" 
                :key="index"
                @click="curIndex = index">
                <div class="nav-icon" :style="styleBg(index,item)"></div>
                <p class="nav-name">{{item.name}}</p>
            </li>
            <!-- <li class="nav-item">
                <div class="nav-icon micro-net"></div>
                <p class="nav-name">智能微电网</p>
            </li> -->
        </ul>
        <MnsContent :data="datas[curIndex].content"></MnsContent>
    </div>
</template>

<script type="text/javascript">
import MnsContent from './MnsContent';
export default {
  name: "MnSolution",
  props:{
      navs: {
          type: Array,
          default: function(){return [];}
      },
      index: {
          type: Number,
          default: 0
      }
  },
  data() {
    return {
        datas: [
            {
                name: '智能微电网', icon: require('@/assets/solution/smartMicroNet/micro-net.png'),    iconActive: require('@/assets/solution/smartMicroNet/micro-net-active.png'),
                content:  {
                    title: '智慧微网和分布式微网解决方案',
                    content: '智能微电网系统由分布式电源、储能装置、能量转换装置、相关负荷和监控、保护装置汇集而成的小型智能的发配电系统，是一个能够实现自我控制、保护和管理的自治系统，既可以与外部电网并行运行，也可以独立运行。智能微网部件可以解决分布式能源发电系统大规模接入问题，还为用户带来了其他方面的效益，成为大电网的有益的补充。',
                    stress: '实现客户安全、经济和可靠用能，降低综合用电成本。',
                    img: require('@/assets/solution/smartMicroNet/micro-net-img.png')
                }   
            },
            {
                name: '新能源配储能', icon: require('@/assets/solution/smartMicroNet/new-energy.png'), iconActive: require('@/assets/solution/smartMicroNet/new-energy-active.png'),
                content:  {
                    title: '新能源配套储能系统解决方案',
                    content: '由于新能源发电具有间歇性、波动性和难预测性等特点，大规模的接入势必增加电网调节困难，并可能造成大量弃光和弃风问题。在新能源发电侧增加储能系统则能很好地解决这些问题，把消耗不掉的电量储能起来，在发电不足或用电高峰时放出，以平滑发用电为目的，弥补新能源发电不稳定的缺陷，避免浪费。',
                    stress: '减少弃风弃光增加收益，降低考核费用，获得辅助服务补偿，提升并网友好性',
                    img: require('@/assets/solution/smartMicroNet/new-energy-img.png')
                } 
            },
            {
                name: '工商业储能', icon: require('@/assets/solution/smartMicroNet/industry-energy.png'), iconActive: require('@/assets/solution/smartMicroNet/industry-energy-active.png'),
                content:  {
                    title: '工商业储能系统解决方案',
                    content: '大工业供电的制造型企业、工业园区或交通部门都是高集中的用电大户，为其配置储能系统后，移峰填谷，节能改造，需求侧响应，有效降低用电成本。另外储能系统可作为应急备用电源，保证供电可靠性。',
                    stress: '峰谷差价套利，降低用户用电成本，提高供电可靠性，降低用户增容费用。',
                    img: require('@/assets/solution/smartMicroNet/industry-energy-img.png')
                } 
            },
            {
                name: '辅助服务', icon: require('@/assets/solution/smartMicroNet/service.png'), iconActive: require('@/assets/solution/smartMicroNet/service-active.png'),
                content:  {
                    title: '辅助服务储能系统解决方案',
                    content: '我国电力资源和区域经济分布不均衡，电网负荷波动大，调峰调频资源稀缺。随着火电机组大面积供热改造，供热机组比重加大，火电机组难以同时兼顾保供电与深度调峰。并且随着可再生能源大规模并网，对电网运行调度的影响将日益明显。配置一定规模的先进储能系统，利用储能系统快速充放电的特征，可参与调峰调频，解决功率/能量缺口。',
                    stress: '缓解峰谷供电压力，延缓电网建设投资，提供快速功率支撑，提供无功功率支撑。',
                    img: require('@/assets/solution/smartMicroNet/service-img.png')
                } 
            },
            {name: '备用电源', icon: require('@/assets/solution/smartMicroNet/power.png'), iconActive: require('@/assets/solution/smartMicroNet/power-active.png'),
                content:  {
                    title: '风电备用电源系统解决方案',
                    content: '明阳量云在国内率先提出将先进储能系统用于台风区风电机组机失电安全保障的解决方案，在风电场受台风影响电网失电时，风电备用电源系统给偏航系统供电，保障风电机组正常偏航，以防止因风机断电无法主动偏航而导致载荷过大，对风机运行安全造成一定隐患。',
                    stress: '提高机组安全性能、提升发电量，减少二阶涡激振动对风电机危害。',
                    img: require('@/assets/solution/smartMicroNet/power-img.png')
                } 
            }],
        curIndex: this.index
    }
  },
  components: {
    MnsContent
  },
  computed: {
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
.solution-nav {
    display: flex;
    justify-content: center;
}

.solution-nav .nav-item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    padding-bottom: 25px;
    cursor: pointer;
}

.solution-nav .nav-item.active::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: -10px;
    left: 50%;
    margin-left: -10px;
    background: #F3F3F3;
    transform:rotate(45deg);
    -ms-transform:rotate(45deg); 	/* IE 9 */
    -moz-transform:rotate(45deg); 	/* Firefox */
    -webkit-transform:rotate(45deg); /* Safari 和 Chrome */
    -o-transform:rotate(45deg); 	/* Opera */
}

.solution-nav .nav-icon {
    width: 37.5px;
    height: 37.5px;
    margin-bottom: 5px;
}

.solution-nav .nav-name {
    font-size: 11.25px;
    color: #999999;
}

.active .nav-name {
    color: #3E7EC2;
}
</style>
