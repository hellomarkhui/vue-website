<template>
  <div>
    <Banner>
        <img src="../../assets/solution/smartFactory/banner-lg.png">
    </Banner>
    <Main :main="main"></Main>
    <PublicBlock title="明阳叶片厂案例" padding-top="67.5px">
      <div class="p-width window">
				<img :src="computerImg" alt="">
        <div class="content">
          <h3>明阳叶片厂梁帽智能加热系统</h3>
          <p><span class="text-stress">案例描述：</span>采集叶片生产车间梁帽和腹板模具加热温控系统的数据，实时监测所有设备状态、用电情况等，实现了各地叶片厂生产线的远程集中监控、故障预警、功率预测等功能，达到对叶片厂精益化管理的目标。
          </p>
          <p><span class="text-stress">收益：</span>通过系统建设，系统分析监测数据，实现厂区集中监控、设备预防性维护、自动推送可行的节能方案，削峰填谷，改善企业用电习惯节省用电成本，成功实现数字化精益生产管理，达到降本增效的目标。
          </p>
        </div>
			</div>
    </PublicBlock>
    <PublicBlock title="国内某知名糖厂案例" padding-top="80px">
      <div class="case">
        <div class="case-content">
          <h3>国内某知名糖厂生产车间数字化、智能化升级改造</h3>
          <p><span class="text-stress">案例描述：</span>通过对生产线设备实时数据进行采集、存储、数据分析、数据价值可视化等高级应用，对工厂不同产线的设备进行集中化精益管理，优化人机比，达到降本增效、实现智慧工厂的目标。
          </p>
          <p><span class="text-stress">客户背景：</span>大型食品加工制造企业，拥有多条生产产线。
          </p>
          <p><span class="text-stress">挑战及解决方案：</span>客户生产线为流程产线，工段多、现场离散设备数量多，管理难度高，品质难追溯。生产现场数据主要靠手工统计，无法实时掌握现场动态。产线设备运行时间长，定检定修无法对潜在隐患进行排查，设备故障发生往往造成停工、停产及原料成本浪费等损失。<br />通过生产数据自动采集、实时监测为数据深度价值分析提供数据基础。生产管理系统以及精益生产的管理理念，充分考虑到客户典型应用场景，打通了生产制造全流程管理所需要的各种数据，有效解决了流程离散、3Ｃ产线，生产工艺繁多、设备品类繁多，管理难度大，设备运行状态实时影响产品质量等一系列的问题。
          </p>
          <p><span class="text-stress">收益：</span>工厂车间、生产线数字化升级，从生产、人员管理、仓储、运输等各个环节进行数字化联网改造，精益化管理，项目上线后工厂产值明显提升，利润也明显增加。
          </p>
        </div>
        <img src="../../assets/solution/smartFactory/procedure.png">
			</div>
    </PublicBlock>
  </div>
</template>

<script type="text/javascript">
import Banner from '@/components/Banner.vue'
import PublicBlock from '@/components/PublicBlock.vue'
import Main from '@/components/solution/main.vue'
import SplitCard from './Sdetail/SplitCard.vue'
export default {
  name: "NewEnergy",
  data() {
    return {
      main: {
              title: '智慧工厂',
              topic: this.title+'简介',
              content: '根据生产制造企业实际需求，利用工业大数据技术及AI算法赋能使企业从人员管理、设备管理、工艺管理 生产安排、质量管理、仓储、运输等各个环节提升效率，让生产更敏捷、更精益，助力企业提能、降本、 增效，实现智能制造转型升级。',
              bg: require('@/assets/solution/smartFactory/factory2.png'),
              img: require('@/assets/solution/smartFactory/factory1.png')
          },
        computerImg: require('@/assets/solution/smartFactory/computer.png'),
        synergys: [
          {title: '能量管理', content: '自动接收并执行电力系统调度机构下达的功率变化控制指令，监视机组实时状况和能力值，结合多种成熟的控制策略，智能分配每台机组目标值。定期按照电网最新规范迭代控制策略，提升并网友好性。', img: require('@/assets/solution/relateNet/example4_1.png')},
          {title: '一次调频', content: '根据电网频率变化情况，自动调整全场有功出力。一站式解决方案和产品服务，满足各地电网对于风电场频率控制的要求。', img: require('@/assets/solution/relateNet/example4_2.png')},
          {title: '无功补偿', content: '充分利用风电机组的无功能力，对机组和控制系统进行改造，支持电网无功给定，电压下垂，恒电压闭环控制等控制方式，可充分满足电网对于风电场辅助电压控制的需求，降低对SVG的依赖度和场用电损耗，提升并网友好性。', img: require('@/assets/solution/relateNet/example4_3.png')},
          {title: '雷达测风', content: '精准捕获风力能流，建立风场尾流模型，对突变情况更有“先见之明”，与能量管理结合提升单机和整场机组发电效率，提升并网稳定性和可预见性。', img: require('@/assets/solution/relateNet/example4_4.png')}]
    }
  },
  components: {
    Banner,
    PublicBlock,
    Main,
    SplitCard,
    PublicBlock
  }
}
</script>

<style scoped>
.window {
    display: flex;
    margin-top: 75px;
}

.window > img {
    width: 455px;
    height: 387.5px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 32.5px;
}

.content h3 {
  margin-top: 70px;
  margin-bottom: 40px;
  font-size: 17.5px;
  color: #333333;
}

.content p {
  font-size: 10px;
  line-height: 17.5px;
  margin-bottom: 20px;
}

.text-stress {
  font-weight: bold;
  color: #3D7EC1;
}

.case {
  margin: 68.75px 0;
  display: flex;
  justify-content: space-between;
  background-color: #3D7EC1;
}

.case > img {
  width: 492px;
  height: 402px;
}

.case-content {
  width: 447.5px;
  margin-left: 173px;
  color: #FFFFFF;
}

.case-content h3 {
  margin-top: 45px;
  margin-bottom: 30px;
  font-size: 17.5px;
  color: #FFFFFF;
}

.case-content .text-stress {
  color: #FFFFFF;
}

.case-content p {
  font-size: 10px;
  line-height: 15px;
  margin-bottom: 15px;
}

</style>
