<template>
  <div id="app">
    <Banner>
        <img src="../../assets/case/caseFactory/banner-lg.png">
    </Banner>
    <Cmain title="案例简介" style="padding-bottom: 37.5px" :content="main"></Cmain>
    <PublicBlock title="案例背景" padding-top="40px">
      <div class="p-width bg">
        <p class="case-bg-t">本案例中国内某知名糖厂生产线为流程产线，整个产线从上至下分为4层楼，工段多达10多个。工厂在生产中存在的痛点主要为：</p>
        <CaseBgCard :datas="datas"></CaseBgCard>
      </div>
    </PublicBlock>
    <div class="solution">
      <img src="../../assets/case/caseFactory/solution.png" alt="智慧工厂">
    </div>
    <PublicBlock title="核心价值" padding-top="67.5px">
      <div class="p-width">
        <ul class="w-list-n">
          <li class="w-item-n" 
            v-for="(item, index) in worths" 
            :key="index">
            <div class="w-item-c" ><p class="w-content">{{item}}</p></div>
          </li>
        </ul>
      </div>
    </PublicBlock>
  </div>
</template>

<script type="text/javascript">
import Banner from '@/components/Banner.vue'
import PublicBlock from '@/components/PublicBlock.vue'
import Cmain from './cdetail/Cmain.vue'
import CaseBgCard from './cdetail/CaseBgCard.vue'
export default {
  name: "CaseFactory",
  data() {
    return {
      main: {
        title: '国内某知名糖厂生产车间数字化、智能化升级改造',
        img: require('@/assets/case/caseFactory/brief1.png'),
        texts: ['在当前智能制造的热潮之下，越来越多制造企业开始推进数字化转型，改造原有的生产制造方式，着力建设智能工厂，以提高生产效率，提升产品质量，增加企业竞争优势，实现可持续发展。通过对生产线设备实时数据进行采集、存储、数据分析、数据价值可视化等高级应用，对工厂不同产线的设备进行集中化精益管理，实现生产过程中设备状态实时监控，人机高效协作，设备预测性维护，减少非计划停机，达到降本增效、实现智慧工厂的目标。',
        '本案例根据生产制造企业实际需求，利用工业大数据技术及AI算法赋能使企业从人员管理、设备管理、工艺管理、生产安排、质量管理、仓储、运输等各个环节提升效率，让生产更敏捷、更精益，助力企业提能、降本、增效，实现智能制造转型升级。']
      },
      datas: [
        {index: '01', title: '数据错误', img: require('@/assets/case/caseFactory/bg-1.png'), content: '每个工段需分配8-20人操作设备，查看运行状态，生产数据为人工填报，因人为失误导致填报错误时有发生。'},
        {index: '02', title: '成本损失', img: require('@/assets/case/caseFactory/bg-2.png'), content: '产线设备每天运行长达22小时，定检定修无法对潜在隐患进行排查，设备故障发生往往造成停工、停产及原料成本浪费等损失。'},
        {index: '03', title: '次品率高', img: require('@/assets/case/caseFactory/bg-3.png'), content: '设备运行状态无法实时掌控，生产工艺参数无法有效利用，次品率高。'},
        {index: '04', title: '数据利用率低', img: require('@/assets/case/caseFactory/bg-4.png'), content: '生产数据利用率低，无法对生产效率、良品率优化提供可靠的数据支撑。'}
      ],
      worths: ['通过采集设备实时数据，对生产设备运行状态实时监测，生产进度、异常等，实现数据可追溯，对设备周期档案形成数据化管理，提高运维精准性，降低运维成本。',
              '合理安排产线上人员数量，降低人员成本的同时提高人员安全。',
              '算法模型对设备可能发生的故障进行提前预警，避免因故障造成的设备停机或损坏，提高设备可利用率。',
              '从工艺管理上对产品工艺数据进行了集中管理，提高生产效率。',
              '从生产安排上实时了解生产进度，评估产品周期，快速响应计划变更，灵活调度。',
              '从统计报表与生产看板上实时采集数据并自动生成报表，为生产管理提供参考依据。']
    }
  },
  components: {
    Banner,
    PublicBlock,
    Cmain,
    CaseBgCard
  }
}
</script>

<style scoped>
.case-bg-t {
  margin-top: 47.5px;
  margin-bottom: 25px;
  line-height: 11.25px;
}

.bg {
  margin-bottom: 75px;
}

.solution {
  display: flex;
}

.solution > img{
  width: 100%;
}

.w-list {
  margin-top: 50px;
  margin-bottom: 38.75px;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;

}

.w-item {
  width: 31%;
  height: 125px;
  margin-bottom: 30px;
  box-shadow: 0px 2px 6.25px 0px rgba(24, 24, 24, 0.16);
  padding: 0 20px;
  color: #CCCCCC;
  line-height: 17.5px;
  display: flex;
  align-items: center;
}

.w-item:hover {
  font-weight: bold;
  color: #3D7EC1;
}

.w-list-n {
  margin-top: 35px;
  margin-bottom: 53.75px;
  margin-left: -15px;
  margin-right: -15px;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;

}

.w-item-n {
  width: 33.33333%;
  padding: 15px;
}

.w-item-c {
  width: 100%;
  height: 125px;
  box-shadow: 0px 2px 6.25px 0px rgba(24, 24, 24, 0.16);
  padding: 0 20px;
  color: #CCCCCC;
  line-height: 17.5px;
  display: flex;
  align-items: center;
}

.w-item-c:hover {
  font-weight: bold;
  color: #3D7EC1;
}
</style>
