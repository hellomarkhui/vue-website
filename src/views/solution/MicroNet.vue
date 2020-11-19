<template>
  <div id="app">
    <Banner>
        <img src="../../assets/solution/smartMicroNet/banner-lg.png">
    </Banner>
    <Main :main="main"></Main>
    <PublicBlock title="微网、储能系统解决方案" padding-top="67.5px">
      <MnSolution style="margin-top: 52.5px"></MnSolution>
    </PublicBlock>
    <PublicBlock title="相关产品" padding-top="75px">
      <div class="pro">
        <MnPro v-for="pro in pros" 
          :key="pro.title" 
          :data="pro" 
          :position="pro.position"></MnPro>
      </div>
    </PublicBlock>
  </div>
</template>

<script type="text/javascript">
import Banner from '@/components/Banner.vue'
import PublicBlock from '@/components/PublicBlock.vue'
import Main from '@/components/solution/main.vue'
import MnSolution from './Sdetail/MnSolution.vue'
import MnPro from './Sdetail/MnPro.vue'
export default {
  name: "BigData",
  data() {
    return {
      main: {
              title: '智能微网·储能系统',
              topic: '智能微网·储能系统简介',
              content: '智能微电网系统是将可再生能源发电、储能、智能输配电、负荷、能量管理等结合在一起，可实现多元化能源的优化配置、协同高效供给、智能调度，有效降低客户用能成本，提高终端能源利用率和清洁能源占比。储能系统是智能微网中不可或缺的单元，也是电力生产过程“发-输-配-用-储”环节中一个重要组成部分。储能系统可以实现时间上的能量搬移，促进新能源的应用；可以调峰调频，提高电力系统运行稳定性；可以存储电量，作为备用电源；储能系统对智能微电网、智能电网的建设具有重大的战略意义。',
              bg: require('@/assets/solution/smartMicroNet/main-bg.png'),
              img: require('@/assets/solution/smartMicroNet/main-img.png')
          },
      pros: [
        {
          title: '储能集装箱系统', img: require('@/assets/solution/smartMicroNet/pro-1.png'),position: '',
          texts: ['• 全方位多级保护，安全性高', '• 智能温度调节', '• 高防护', '• PCS可内置/外置', '• 灵活配置储能系统容量和集装箱尺寸，满足客户多样定制', '• 集装箱式安装，建设周期短']
        },
        {
          title: '小型储能系统', img: require('@/assets/solution/smartMicroNet/pro-2.png'),position: 'right',
          texts: ['• 全方位多级保护，安全性高','• 智能温度调节','• 扩展性强','• 防护、防腐等级高，适应沿海环境','• 体积小，安装、运维简单']
        },
        {
          title: 'PCS一体柜', img: require('@/assets/solution/smartMicroNet/pro-3.png'),position: '',
          texts: ['• PCS与电气接入系统集成设计，适用于400V低压侧', '• 具并网、离网功能，支持无缝切换', '• 可兼容多种储能电池，具多种充放电工作模式', '• 体积小，节省占地，便于系统集成', '• 低电压、零电压穿越', '• 专业数据处理软件，全程记录测量数据', '• 实时接受系统调度指令和BMS指令，通讯方式有RS485、CAN、以太网']
        },
        {
          title: '能量管理系统', img: require('@/assets/solution/smartMicroNet/pro-4.png'),position: 'right',
          texts: ['• 对系统能量管理和监控，并完成削峰填谷、调峰调频等系统上层应用功能', '• 灵活的分布式架构，便于进行硬件资源、系统容量以及应用功能的扩展', '• 支持多种通信规约，标准电力调度接口', '• SCADA监控界面具有完善的信息显示', '• 友好的人机交互界面', '• 多样化数据存储方式']
        }
      ]
    }
  },
  components: {
    Banner,
    PublicBlock,
    Main,
    MnSolution,
    PublicBlock,
    MnPro
  }
}
</script>

<style scoped>
.pro {
  margin-top: 47.5px;
  margin-bottom: 62.5px;
}
</style>
