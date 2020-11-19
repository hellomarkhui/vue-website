<template>
  <div id="section">
     <Banner>
        <img src="../../assets/about/banner_lg.png" alt="">
     </Banner>
    <PublicBlock title="公司介绍">
      <div class="p-width company-info">
        <p v-for="(text, index) in texts" :key="index">{{text}}</p>
        <div class="position">
          <img class="map" src="../../assets/about/company-map_lg.png">
        </div>
      </div>
    </PublicBlock>
		<PublicBlock title="产品资料下载">
      <ul class="p-width file-list">
        <li class="file-item" v-for="(file, index) in files" :key="index">
					<div class="icon-pdf"></div>
					<a :href="baseHref+file.source+'.pdf'" :download="file.source+'.pdf'">{{file.name}}</a>
				</li>
      </ul>
    </PublicBlock>
    <PublicBlock class="honor" title="资质、知识产权及荣誉" padding-top="37.5px">
      <div class="p-width honor-info">
        <p v-for="(honor, index) in honors" :key="index">{{honor}}</p>
      </div>
    </PublicBlock>
    <el-carousel :autoplay="true" arrow="always" height="235.5px" trigger="click">
        <el-carousel-item v-for="(imgs, index) in imgList" 
                :key="index">
            <div class="img-list">
              <img :src="img" v-for="(img, num) in imgs" :key="num">
            </div>
        </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script type="text/javascript">
import Banner from '@/components/Banner.vue'
import PublicBlock from '@/components/PublicBlock.vue'
export default {
  name: "About",
  data() {
    return {
      texts: ['明阳智慧能源集团股份公司总部位于中国广东中山，现有员工近万人，其中研发技术人员占比 20%。通过战略引领、大风机技术研发、海上工程、资本、商业模式、人才等创新举措，布局中山、北京、上海、深圳、香港、硅谷、汉堡全球七大研发中心及销售、服务体系，明阳智能已发展成为国内领先、全球具有重要影响力的智慧能源企业集团。明阳智能已全面启动千亿产业集群的发展战略，构建“风光储网高端制造”、“发配售一体化、多能互补、互联互通的投资运营”和“金融服务”，致力于成为全球领先的智慧能源整体解决方案提供商，加快生产型制造向服务型制造转型，向“智慧能源、普惠全球”的伟大事业全速迈进。',
              '明阳智慧能源集团于2015年设立深圳研发中心，创立深圳量云能源网络科技有限公司，立足深圳科技产业高地。深圳量云能源网络科技有限公司以市场需求为导向,技术研究与产业化并举，为提前布局能源互联网，现已在深圳、中山、北京分别设立研发中心及销售服务体系，致力以数字化、信息化、智能化，不断提升可再生能源全生命周期资产管理以及定制化智慧能源解决方案整体实力，基于企业级私有云平台，以大数据技术为核心，通过软件系统和物联网技术实现横向多源互补，纵向源-网-荷-储一体化，让能源更加清洁、智慧灵活和高效，用能成本显著降低，最大化地利用区域优势及资源，加快推进业务发展，在满足集团业务发展需要同时，积极开拓外部市场，赢得市场占有率。',
              '在新技术和新商业模式不断涌现的浪潮中，量云将以市场需求为导向，技术研究与产业化并举，为提前布局能源互联网，最大化地利用区域优势及资源，加快推进业务发展，赢得市场占有率。为“中国制造2025”助力。最终实现能源普惠，共建美丽中国。'],
      baseHref: '../../../static/downloadfiles/about/',
      files: [
        {name: 'EPC设计、咨询服务', source: 'EPC设计、咨询服务'},
        {name: '风电场综合监控系统解决方案', source: '深圳量云风电场综合监控系统解决方案'},
        {name: '区域集控系统,集控云平台解决方案', source: '深圳量云区域集控系统，集控云平台解决方案'},
        {name: '能量分配系统解决方案', source: '深圳量云能量分配系统解决方案'},
        {name: '快速频率响应系统解决方案', source: '深圳量云快速频率响应系统解决方案'},
        {name: '智慧风电场运营管理平台产品介绍', source: '深圳量云智慧风电场运营管理平台产品介绍'},
        {name: '状态检修与运维排程系统产品介绍', source: '深圳量云状态检修与运维排程系统产品介绍'},
        {name: '风电VR培训与在线考试系统产品介绍', source: '深圳量云风电VR培训与在线考试系统产品介绍'},
        {name: '风电光伏储能系统产品介绍', source: '深圳量云风电光伏储能系统产品介绍'},
        {name: '储能应急备用电源系统产品介绍', source: '深圳量云储能应急备用电源系统产品介绍'},
        {name: '新能源辅助服务储能系统产品介绍', source: '深圳量云新能源辅助服务储能系统产品介绍'},
        {name: '源网荷智能微电网系统产品介绍', source: '深圳量云源网荷智能微电网系统产品介绍'},
        {name: '运维单兵系统产品介绍', source: '深圳量云运维单兵系统产品介绍'},
        {name: '智慧工厂产品解决方案', source: '深圳量云智慧工厂产品解决方案'}
      ],
      honors: ['深圳量云先后获得高新技术企业证书、软件企业认定证书、EPC咨询资质、工程设计资质证书（电力行业风力发电乙级），量云设计院可以承担电力行业风力发电的中、小型建设项目的工程设计任务，承担工程设计任务的地区不受限制。同时量云获取了质量管理体系认证证书、环境管理体系认证证书、职业健康安全管理体系认证证书资质。',
      '深圳量云致力以数字化、信息化、智能化，不断提升可再生能源全生命周期资产管理以及定制化智慧能源解决方案,帮助新能源发电企业提高运营效率，提升发电收益。同时在新技术和新商业模式不断涌现的浪潮中，量云将不局限于能源行业，希望以能源为切入，将多年的技术沉淀与更广泛的工业领域深度融合。目前，深圳量云已有发明专利及软件著作权共16项，在2019年储能国际峰会暨展览会荣获“2019储能应用创新典范TOP10”大奖，同时在2019年国家电投“绿动未来”大数据及智能应用创新大赛中荣获“智能成果产品类优秀奖”荣誉。	'],
      imgList: [
        [require('@/assets/about/credentials/c_1.png'),
        require('@/assets/about/credentials/c_2.png'),
        require('@/assets/about/credentials/c_3.png'),
        require('@/assets/about/credentials/c_4.png'),
        require('@/assets/about/credentials/c_5.png')],
        [require('@/assets/about/credentials/c_6.png'),
        require('@/assets/about/credentials/c_7.png'),
        require('@/assets/about/credentials/c_8.png'),
        require('@/assets/about/credentials/c_9.png'),
        require('@/assets/about/credentials/c_10.png')],
      ]
    }
  },
  components: {
    Banner,
    PublicBlock
  }
}
</script>
<style scoped>
.company-info > p, .honor-info {
    color: #666666;
    line-height: 22.5px;
    text-indent: 22.5px;
}
.company-info {
  margin-top: 45px;
}
.position {
    position: relative;
    padding: 50px;
    padding-bottom: 0;
}
.map {
    width: 100%;
    height: auto;
}
.file-list {
    display: flex;
    flex-flow: wrap;
    margin-top: 25px;
}
.file-item {
    width: 25%;
    display: flex;
    align-items: center;
    margin-bottom: 17.5px;
}
.icon-pdf {
    width: 12px;
    height: 14px;
    margin-right: 5px;
    background: url(../../assets/about/icon-pdf.png) no-repeat;
    background-size: contain;
}
.honor {
  margin-top: 50px;
  background: url(../../assets/about/honor-bg.png) no-repeat;
  background-size: cover;
}

.honor >>> .block-title {
  color:#FFFFFF;
}

.honor-info {
  margin-top: 37.5px;
  color: #FFFFFF;
  padding-bottom: 55px;
}

.img-list {
    width: auto;
    height: 235px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.img-list img {
  height: 100%;
}

.el-carousel >>> {
  margin: 60px 0 52.5px 0;
}
</style>
