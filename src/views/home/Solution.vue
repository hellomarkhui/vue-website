<template>
    <div class="solution">
        <ul class="solution-nav">
            <!-- <li class="nav-item split-line active">
                <i class="nav-icon design-service"></i>
                <p class="nav-name">EPC设计、咨询服务</p>
                <div class="nav-detail">
                    <i class="nav-icon design-service"></i>
                    <p class="nav-name">EPC设计、咨询服务</p>
                    <p class="nav-text">电力行业风力发电乙级资质面向国内外风力发电，储能以及园区变配电等工程，为客户提供优质的全过程设计服务及总包服务。</p>
                </div>
            </li> -->
            <li v-for="(solution, index) in solutions"
                :key="index"
                :class="['nav-item', index!==solutions.length-1?'split-line':'',index === currentIndex?'active':'']"
                @mouseenter="mouseEnter(index)">
                <i :class="['nav-icon', solution.class]"></i>
                <p class="nav-name">EPC设计、咨询服务</p>
                <div class="nav-detail">
                    <i :class="['nav-icon', solution.class]"></i>
                    <p class="nav-name">{{solution.name}}</p>
                    <p class="nav-text">{{solution.text}}</p>
                </div>    
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Solution',
    data: function(){
        return {
            solutions:[
                {name:'EPC设计、咨询服务', class: 'design-service',text:'电力行业风力发电乙级资质面向国内外风力发电，储能以及园区变配电等工程，为客户提供优质的全过程设计服务及总包服务。'},
                {name:'新能源场站监控类产品', class: 'involve-net',text:'实现大规模新能源安全高效利用'},
                {name:'大数据应用类产品', class: 'windfarm',text:'运用物联网、大数据、云计算等技术，助力风电场的智慧化'},
                {name:'微电网储能类产品', class: 'micro-energy',text:'让能源更加智慧灵活和高效，降低用电成本'},
                {name:'智慧工厂', class: 'factory',text:'让生产更敏捷、更精益 助力企业实现智能制造转型升级'},
            ],
            currentIndex: 0,
        }
    },
    methods: {
        mouseEnter(index){
            this.currentIndex = index;
            console.log(index);
            this.$emit('move', index);
        }
    }
}
</script>
<style scoped>
.solution {
    width: 855px;
    margin: 0 auto;
}

.solution-nav {
    height: 196.25px;
    margin: 96.25px 0;
    padding: 0 37.5px;
    background: #FFFFFF;
    box-shadow: 1px 1.25px 6.25px 0px rgba(24, 24, 24, 0.16);
    display: flex;
    justify-content: center;
    align-items: center;
}

.solution-nav .nav-item {
    width: 20%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 25px;
    cursor: pointer;
}

.split-line::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    width: 2.5px;
    height: 85px;
    margin-top: -42.5px;
    background: #F0F0F0;
}
 
.solution-nav .nav-icon {
    display: inline-block;
    width: 57.5px;
    height: 57.5px;
    margin-bottom: 35px;
    background-size: contain;
}

.active .nav-icon {
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
}

.solution-nav .nav-name {
    font-size: 13.75px;
    color: #343434;
}

.solution-nav .nav-text {
    padding: 0 7.5px;
}

.active .nav-name{
    margin-bottom: 20px;
    color: #FFFFFF;
}

.active p {
    font-size: 11.25px;
    color: #FFFFFF;
    text-align: center;
    line-height: 15px;
}

.nav-detail {
    position: absolute;
    width: 100%;
    height: 280px;
    top: 50%;
    left: 0;
    margin-top: -140px;
    background: #3E7EC2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
}

.active .nav-detail {
    opacity: 1;
}

.design-service {
    background: url("../../assets/home/design-service.png") no-repeat;
}

.active .design-service {
    background: url("../../assets/home/design-service-active.png") no-repeat;
    background-size: contain;
}

.windfarm {
    background: url("../../assets/home/windfarm.png") no-repeat;
}

.active .windfarm {
    background: url("../../assets/home/windfarm-active.png") no-repeat;
    background-size: contain;
}

.involve-net {
    background: url("../../assets/home/involve.png") no-repeat;
}

.active .involve-net {
    background: url("../../assets/home/involve-active.png") no-repeat;
    background-size: contain;
}

.micro-energy {
    background: url("../../assets/home/micro-energy.png") no-repeat;
}

.active .micro-energy {
    background: url("../../assets/home/micro-energy-active.png") no-repeat;
    background-size: contain;
}

.factory {
    background: url("../../assets/home/factory.png") no-repeat;
}

.active .factory {
    background: url("../../assets/home/factory-active.png") no-repeat;
    background-size: contain;
}
</style>