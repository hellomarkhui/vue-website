<template>
  <div id="case-wf">
     <Banner>
        <img src="../../assets/case/caseWindFarm/banner-lg.png">
    </Banner>
    <Cmain title="案例简介" :content="main">
      <div class="p-width main-d">
        <h3>9大核心功能模块，270多个子项模块</h3>
				<img src="../../assets/case/caseWindFarm/brief2.png" alt="国电投内蒙霍林河智慧风场系统平台图片">
			</div>
    </Cmain>
    <PublicBlock title="项目成效" padding-top="40px">
      <div style="margin-top: 52.5px">
        <WfPro :data="datas[0]"></WfPro>
        <WfPro :data="datas[1]" :img-right="true"></WfPro>
        <WfPro :data="datas[2]"></WfPro>
        <WfPro :data="datas[3]" :img-right="true"></WfPro>
        <WfPro :data="datas[4]"></WfPro>
      </div>
    </PublicBlock>
  </div>
</template>

<script type="text/javascript">
import Banner from '@/components/Banner.vue'
import PublicBlock from '@/components/PublicBlock.vue'
import Cmain from './cdetail/Cmain.vue'
import WfPro from './cdetail/WfPro.vue'
export default {
  name: "CaseWindFarm",
  data() {
    return {
      main: {
        title: '国电投内蒙霍林河智慧风场',
        img: require('@/assets/case/caseWindFarm/brief1.png'),
        texts: ['国内首个实现对多元化机型风电场进行管控的智慧运营平台。风场有国内外5个主机厂家的风机，包括了双馈、半直驱、直驱机型，功率从2MW至4MW。平台对设备进行全方位监控管理，运用集中监控、辅助监控、亚健康预警及健康度等技术对设备运行状态进行监控及预警，结合数字化运维及手持移动终端、安全帽等智能工具，实现了风电机组高效协同、有机交互，打造出技术水平及管理均领先的智慧风电场，实现了风电场提质、降本增效、安全的全部目标。']
      },
      datas: [
        {index: '01', title: '运行发电智慧管控', img: require('@/assets/case/caseWindFarm/result1.png'), content: '智慧发电控制平台包含统一监控、辅助监控、智能能量管理、集中风功率预测；实现对5个主机厂家6种机型近200台风机的统一运行管控和智慧发电控制，将本该有的5套监控系统集成为一套，同时定制化开发实证报表，在统一标准下对5家风机运行效能进行评价，为客户领导层决策提供数据支撑。实现以最少人员配置做到风场最全资产监控和最优发电控制。'},
        {index: '02', title: '状态检修', img: require('@/assets/case/caseWindFarm/result2.png'), content: '实现故障预警和机组全生命周期健康度管理在风场的工程应用，做到能够预知设备隐患和预判故障，同时利用大数据技术进行智能运维排程，科学安排运维窗口期，实现基于状态的运维；提高运维效率，降低运维成本。'},
        {index: '03', title: '数字化运维', img: require('@/assets/case/caseWindFarm/result3.png'), content: '实行了数字化运维，通过信息化系统线上下发工单、开票、结票、反馈工作结果，简化工作流程，提高工作效率，统一运维作业标准，提升运维质量和运维管控能力。'},
        {index: '04', title: '定期工作自动化', img: require('@/assets/case/caseWindFarm/result4.png'), content: '应用智能机器人替代人工完成定期的、重复的和部分高安全风险的巡检工作，降低巡检安全风险、提升巡检效率。'},
        {index: '05', title: '智能运维单兵系统', img: require('@/assets/case/caseWindFarm/result5.png'), content: '运用智能安全帽、智能手环和手持移动终端等智能可穿戴设备，通过物联网、人工智能等先进技术实现提升运维人员的单兵作战能力和人员安全，提升运维作业效率。'}
      ]
    }
  },
  components: {
    Banner,
    PublicBlock,
    Cmain,
    WfPro
  }
}
</script>

<style scoped>
.main-d {
  display: flex;
  flex-direction: column;
}
.main-d h3 {
  margin-top: 47.5px;
  font-size: 15px;
  font-weight: bold;
  color: #3D7EC1;
  line-height: 15px;
}

.main-d img {
  width: 100%;
  margin-top: 20px;
  margin-bottom: 50px;
}
</style>
