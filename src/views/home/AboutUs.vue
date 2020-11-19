<template>
    <div class="about-us">
        <p class="title-en">ABOUT US</p>
        <h1>-关于我们-</h1>
        <p class="about-txt">深圳量云能源网络科技有限公司（简称：深圳量云）成立于2015年8月，是明阳智能全资子公司和深圳研发中心。立足科技和人员高地，深圳量云以市场需求为导向，技术研究与产业化并举。为提前布局智能能源和能源互联网领域，现已在深圳、中山、北京分别设立研发中心及销售服务体系，致力以数字化、信息化、智能化，不断提升可再生能源全生命周期资产管理以及定制化智慧能源解决方案整体实力，基于企业级私有云平台，以大数据技术为核心，通过软件系统和物联网技术实现横向多源互补，纵向源-网-荷-储一体化，让能源更加清洁、智慧、灵活和高效，用能成本显著降低，最大化地利用区域优势及资源，加快推进业务发展，在满足集团业务发展需要的同时，积极开拓外部市场，赢得市场占有率。<br />为“中国制造2025”助力。最终实现能源普惠，共建美丽中国。
        </p>
        <el-carousel :interval="4000" :autoplay="false" class="img-carousel" type="card" height="390px" indicator-position="none">
            <el-carousel-item v-for="(img, index) in imgs" 
                    :key="index">
                <img :src="img" class="img-class" ref="imgHeight" @load="imgLoad">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
export default {
    name: 'AboutUs',
    data: function(){
        return {
            imgHeight: '',
            solutions:[
                {name:'EPC设计、咨询服务', class: 'design-service',text:'电力行业风力发电乙级资质面向国内外风力发电，储能以及园区变配电等工程，为客户提供优质的全过程设计服务及总包服务。'},
                {name:'新能源场站监控类产品', class: 'involve-net',text:'实现大规模新能源安全高效利用'},
                {name:'大数据应用类产品', class: 'windfarm',text:'运用物联网、大数据、云计算等技术，助力风电场的智慧化'},
                {name:'微电网储能类产品', class: 'micro-energy',text:'让能源更加智慧灵活和高效，降低用电成本'},
                {name:'智慧工厂', class: 'factory',text:'让生产更敏捷、更精益 助力企业实现智能制造转型升级'},
            ],
            currentIndex: 0,
            imgs: [require('@/assets/home/about/about_02-lg.png'),
                    require('@/assets/home/about/about_03-lg.png'),
                    require('@/assets/home/about/about_01-lg.png')]
        }
    },
    methods: {
        imgLoad(){

        }
    }
}
</script>
<style scoped>
.about-us {
    width: 855px;
    margin: 0 auto;
}

.title-en {
    font-size: 22.5px;
    font-weight: 300;
    color: #343434;
    line-height: 35px;
    font-family: Microsoft YaHei;
}

h1 {
    font-size: 37.5px;
    font-weight: 400;
}

h1, .title-en {
    text-align: center;
}

.about-txt {
    width: 100%;
    margin-top: 27.5px;
    color: #707070;
    line-height: 22.5px;
    text-align: center;
    text-indent: 22.5px;
}

.img-class {
    width: 528.75px;
    height: 390px;
}

.img-carousel {
    margin-top: 37.5px;
    margin-bottom: 37.5px;
}
</style>