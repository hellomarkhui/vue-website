<template>
  <div id="app">
    <Banner>
        <img src="../../assets/solution/smartWindFarm/banner-lg.png">
    </Banner>
    <Main :main="main"></Main>
    <PublicBlock title="智慧风场表现形式" padding-top="67.5px">
      <SplitCard :datas="datas"></SplitCard>
    </PublicBlock>
    <PublicBlock padding-top="68.75px">
      <img class="function" src="../../assets/solution/smartWindFarm/function.png" alt="智慧风场系统功能图片">
    </PublicBlock>
    <PublicBlock title="智慧风场系统价值" padding-top="75px">
      <div class="worth">
          <img class="worth-bg" src="../../assets/solution/smartWindFarm/worth.png" alt="智慧风场系统价值图片">
          <div class="worth-txt">
              <h2>价值</h2>
              <p>通过智慧风电场系统的建设，公司所属风电厂的整体自动化水平得以明显提升，在多个方面能带来明显的效益。该平台将直接或者间接的给风电厂带来经济效益和环保效益。</p>
          </div>
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
  name: "BigData",
  data() {
    return {
      main: {
              title: '智慧风场系统',
              topic: '智慧风场概述',
              content: '随着能源行业智能化的长足发展和深度融合的推进，智慧能源系统日益成为发展的共识。风电由于单机系统相对简单，自动化、信息化程度高，场群分散、智能远控需求强等特点，决定其必然是智慧能源的先行者。智慧不是智能的简单升级，而是要充分融合互联网技术创新，运用物联网、大数据、云计算等新一代信息技术，最终通过技术来助力风电场的智慧化。',
              bg: require('@/assets/solution/smartWindFarm/main-bg.png'),
              img: require('@/assets/solution/smartWindFarm/main-img.png')
          },
      datas: [
            {title: '智慧风场',content: '变革风电场传统的运维模式，打通风场运行、后台监控、运营维护等单元节点，充分应用大数据、物联网、5G、人工智能技术替代人工生产，最大限度减少人工投入实现风场智慧生产，提高生产效率，为能源互联网打下基础。',
             icon: require('@/assets/solution/smartWindFarm/turbine.png'),
             iconActive: require('@/assets/solution/smartWindFarm/turbine-active.png')},
            {title: '区域运检中心',content: '实现对区域内风场资源的集约化、共享化虚拟化的管控。将区域内的多个风电场虚拟为1个风电场来进行管理。区域集中运维、集中管控。智慧运维实现其它风电场无人值班，少人值守。',
             icon: require('@/assets/solution/smartWindFarm/runcheck.png'),
             iconActive: require('@/assets/solution/smartWindFarm/runcheck-active.png')},
            {title: '集控2.0',
             content: '集控2.0实现故障预警、全生命周期健康度管理、移动运维、远程专家诊断中心、运维人员、车辆、备件的统一调配等。',
             icon: require('@/assets/solution/smartWindFarm/control.png'),
             iconActive: require('@/assets/solution/smartWindFarm/control-active.png')}
        ],
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

@import '../../css/solution/BigData.css';

</style>
