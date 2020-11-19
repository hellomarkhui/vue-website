<template>
  <div>
    <Banner>
        <img src="../../assets/solution/relateNet/banner-lg.png">
    </Banner>
    <Main :main="main"></Main>
    <PublicBlock title="涉网改造类业务" padding-top="67.5px">
      <SplitCard :datas="datas"></SplitCard>
    </PublicBlock>
    <PublicBlock title="电站监控系统去Windows化改造" padding-top="68.75px">
      <div class="p-width window">
				<img :src="computerImg" alt="电站监控系统去Windows化改造图片">
				<p>风电场综合监控系统是对风机、箱变等设备进行实时数据采集、控制、参数调节等，是电厂现代化运营管理的重要工具。还可以集成能量管理、在线震动监测、安防等其他系统，方便业主对多个系统统一管理。
				</p>
			</div>
    </PublicBlock>
    <PublicBlock title="改善并友好性" padding-top="33.75px">
      <div class="improve">
        <div class="p-width">
          <h2>符合电网规范的并网友好系统</h2>
          <p>风电虽然具有波动性、随机性和反调峰特性，量云能源符合电网规范的并网友好系统已经实现较高精度预测，实时状态可测监控；自动接收并执行电力系统调度机构控制指令，有功无功具备良好的可控特性；不断提高电能质量及适应性，提升暂态支撑能力，并且能支撑系统恢复。</p>
        </div>
			</div>
    </PublicBlock>
    <PublicBlock title="智能协同" padding-top="62.5px">
      <p class="synergy-text">基于大数据分析、深度学习，对机组机群状态进行建模评价。可结合预测感知、健康度管理、储能应用进行深度协同控制，进一步提高并网友好性和技术指标。</p>
      <ul class="synergys">
				<li class="item" v-for="(item, index) in synergys" :key="index">
					<img :src="item.img" alt="item.title">
					<div class="item-text">
						<h3>{{item.title}}</h3>
						<p>{{item.content}}</p>
					</div>
				</li>
      </ul>
    </PublicBlock>
    <PublicBlock class="p-width" title="SCADA技改&老旧风场通讯环网改造" padding-top="68.75px">
      <img class="rebuild-img" src="../../assets/solution/relateNet/example5.png" alt="SCADA技改&老旧风场通讯环网改造图片">
			<p class="rebuild-text">通信环网是分布在风电场不同位置的风机与升压站监控系统之间进行通信的光纤链路。光缆的损伤变形、光纤尾纤的信号衰减、交换机维护不到位等问题都会造成风机通信质量的下降和运行数据缺失。通信环网改造包括光纤环网连接结构的优化，交换程序升级，交换机硬件设备更换，光纤更换等，通过改造提升风机监控通信质量，为风电大数据奠定数据基础。</p>
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
              title: '新能源场站监控类产品',
              topic: '新能源场站监控类产品概述',
              content: '随着新能源装机容量不断增长，新能源已从补充能源走向替代能源，为实现大规模新能源安全高效利用，满足电网新出台政策要求，量云系能源场站监控类产品应运而生，包括：新能源场站综合监控系统（SCADA）、能量管理系统（EMS）、能量分配系统、快速频率响应系统（一次调频）、区域集控系统/集控云平台。',
              bg: require('@/assets/solution/relateNet/main-bg.png'),
              img: require('@/assets/solution/relateNet/main-img.png')
          },
      datas: [
            {title: '电站监控系统去Windows化改造',
             content: '凭借十多年的新能源场站监控系统开发、实施和运维的经验和专业团队帮助客户以最经济的成本完成风电场风机监控系统去windows的改造。',
             icon: require('@/assets/solution/relateNet/icon1.png'),
             iconActive: require('@/assets/solution/relateNet/icon1-active.png')},
            {title: '风电场/光伏电站一次调频改造',
             content: '通过网调对新能源场站一次调频的验收，确保新能源场、站的正常发电。',
             icon: require('@/assets/solution/relateNet/icon2.png'),
             iconActive: require('@/assets/solution/relateNet/icon2-active.png')},
            {title: '能量分配系统',
             content: '改变传统能量分配的模式，通过最优出力追踪算法，提高场内裕度的利用率，实现风电场最优发电。',
             icon: require('@/assets/solution/relateNet/icon3.png'),
             iconActive: require('@/assets/solution/relateNet/icon3-active.png')},
            {title: '非明阳机组的SCADA技改&老旧风场通讯环网改造',
             content: '风场监控系统问题分析报告和解决方案帮助客户实现监控系统无缝切换，还原所有历史数据，以最短的调度数据封存时间完成电站监控系统替换。<br />提供整场风机通信线路性能检测分析数据，通信质量评估报告，以最少的设备更换率完成风机通信环网改造，搭建高质量风机通讯环网。',
             icon: require('@/assets/solution/relateNet/icon4.png'),
             iconActive: require('@/assets/solution/relateNet/icon4-active.png')},
            {title: '集控系统',
             content: '新能源场站的监控和调度指挥中心，可全天候、全方位地监视场站设备运行情况，实现场站运作信息化、智能化。',
             icon: require('@/assets/solution/relateNet/icon5.png'),
             iconActive: require('@/assets/solution/relateNet/icon5-active.png')}
        ],
        computerImg: require('@/assets/solution/relateNet/computer.png'),
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
@import '../../css/solution/NewEnergy.css';

</style>
