<template>
    <div class="classic-case">
        <p class="title-en">CLASSIC CASES</p>
        <h1>-产品案例-</h1>
        <div class="img-wrap">
            <a class="img-left-wrap" href="#" @click="linkTo()">
                <img class="img-left" src="../../assets/home/case/case-left-lg.png" alt="产品案例-霍林河智慧风场系统">
                <div class="img-text">
                    <h3>霍林河智慧风场系统</h3>
                    <p>智慧风场是一个综合软硬件的复杂系统工程...</p>
                </div>
            </a>
            <div class="img-right">
                <div class="img-item">
                    <img src="../../assets/home/case/case_01-lg.png" alt="产品案例-">
                </div>
                <a class="img-item" href="#/CaseFactory">
                    <img src="../../assets/home/case/case_02-lg.png" alt="产品案例-智慧工厂">
                    <div class="img-text">
                        <h3>智慧工厂</h3>
                        <p>让生产更敏捷、更精益，助力企业提能...</p>
                    </div>
                </a>
                <a class="img-item" href="#/CaseMicroNet">
                    <img src="../../assets/home/case/case_03-lg.png" alt="产品案例-微网储能类产品">
                    <div class="img-text">
                        <h3>微网储能类产品</h3>
                        <p>让能源更加智慧灵活和高效，降低用电成本...</p>
                    </div>
                </a>
                <div class="img-item">
                    <img src="../../assets/home/case/case_04-lg.png" alt="产品案例-">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ClassicCase',
    data: function(){
        return {
            
        }
    },
    methods: {
        linkTo(){
            this.$router.push('/CaseWindFarm');
            console.log(this.$route.path)
        }
    }
}
</script>
<style scoped>
.classic-case {
    width: 855px;
    margin: 0 auto;
    margin-bottom: 112.5px;
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

.img-wrap {
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
}

.img-left-wrap{
    width: 306.25px;
    height: 473.75px;
    position: relative;
}

.img-left {
    width: 100%;
    height: 100%;
}

.img-text {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    color: #FFFFFF;
    opacity: 0;
    text-align: left;
    padding: 0 15px;
}

.img-text:hover {
    background: rgba(0,0,0,0.6);
    opacity: 1;
    transition: all .3s;
}

.img-text h3 {
    margin-top: 360px;
    font-size: 25px;
    font-weight: 400;
}

.img-text p {
    margin-top: 20px;
}

.img-right{
    width: 540px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
}

.img-right .img-item{
    position: relative;
    width: 265px;
    height: 232px;
}

.img-item img{
    width: 100%;
    height: 100%;
}

.img-right .img-text h3 {
    margin-top: 160px;
    font-size: 18.75px;
    font-weight: 400;
}

.img-right .img-text p {
    margin-top: 12.5px;
}
</style>