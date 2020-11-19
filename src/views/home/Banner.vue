<template>
    <div class="banner">
        <el-carousel ref="banner" :autoplay="false" arrow="always" height="573px" trigger="click" 
                    :initial-index="index">
            <el-carousel-item v-for="(img, index) in imgs" 
                    :key="index">
                <img :src="img" alt="">
            </el-carousel-item>
        </el-carousel>
        <div class="banner-txt">
            <p>量云能源网络科技有限公司致力于为客户打造定制智慧化能源<br>云解决方案与工业领域深度融合，为“中国制造2025”助力。</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Banner',
    props: {
        index: {
            type: Number,
            default: 0
        }
    },
    data: function(){
        return {
            imgs: [require('@/assets/home/banner/banner_01_lg.png'),
                    require('@/assets/home/banner/banner_02_lg.png'),
                    require('../../assets/home/banner/banner_03_lg.png'),
                    require('../../assets/home/banner/banner_04_lg.png')],
        }
    },
    computed: {
        
    },
    methods: {
    },
    watch: {
        index(newV, oldV){
            this.$refs.banner.setActiveItem(newV);
        }
    }
}
</script>
<style scoped>
.el-carousel__item img{
    width: 100%;
}

.banner >>> .el-carousel__arrow {
    height: 105px;
    width: 55px;
    border-radius: 6.25px;
    font-size: 60px;
}

.banner >>> .el-carousel__indicators {
    z-index: 3;
}

.banner >>> .el-carousel__button {
    width: 21.25px;
    height: 5px;
    border-radius: 2.5px;
}

.banner >>> .el-carousel__indicator.is-active button {
    opacity: 1;
    width: 35px;
}

.banner {
    position: relative;
}

.banner-txt {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    z-index: 2;
}

.banner-txt p {
    font-size: 12.5px;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 22.5px;
    text-shadow: 0px 2px 0px rgba(24, 24, 24, 0.26);
}
</style>