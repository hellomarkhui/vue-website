<template>
    <div class="container">
        <div class="header">
            <div class="logo"></div>
            <ul class="navs">
                <li v-for="(nav, index) in navOptions" 
                    :key="nav.name" 
                    :class="['nav-item',index === currentNav?'active':'']"
                    @click="navClick(index, nav)">
                {{nav.name}}
                <template v-if="nav.children.length > 1">
                    <ul class="nav-second">
                        <li v-for="child in nav.children"
                        :key="child.name"
                        :class="[$route.path == child.path?'active':'']"
                        @click.stop="$router.push(child.path);">{{child.name}}</li>
                    </ul>
                </template>
                </li>
            </ul>
        </div>
        <router-view class="section"></router-view>
        <div class="footer">
            <div class="f-top">
                <div class="f-main">
                    <div class="main-l">
                        <div class="f-logo"></div>
                    </div>
                    <ul class="main-c">
                        <li class="c-item"
                            v-for="(item, index) in footerNavs"
                            :key="item.name"
                            @click="navClick(index+1, item)">
                            <div class="c-title">{{item.name}}</div>
                            <template v-if="item.children.length > 1">
                                <div v-for="(child) in item.children"
                                :key="child.name"
                                class="c-child"
                                @click.stop="$router.push(child.path);">{{child.name}}</div>
                            </template>
                        </li>
                    </ul>
                    <div class="main-r">
                        <p>关注我们：</p>
                        <div class="barcode-2d"></div>
                    </div>
                </div>
                <p class="f-middle">
                    <span>友情链接：  
                        <a href="http://www.myse.com.cn">明阳智能</a>
                    </span>
                    <span>官网：
                        <a href="http://www.myse.com.cn">http://www.myse.com.cn</a>
                    </span>
                    <span>地址：深圳市南山区科技园华润置地大厦E座29A</span>
                </p>
            </div>
            <p class="f-bottom">版权所有© www.xxxxxxx.com 粤ICP备12345678号-1 ICP 经营许可证编号：粤B2-12345678</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Home',
    data: function(){
        return {
            navsIndex: 0,
        }
    },
    computed: {
        footerNavs(){
            var routes = this.$router.options.routes.filter(item => {
                return item.path === '/'||item.path === '/Home';
            })
            routes.shift(1);
            return routes;
        },
        navOptions(){ //根据路由设置主菜单
            return this.$router.options.routes.filter(item => {
                return item.path === '/'||item.path === '/Home';
            })
        },
        currentNav(){
            var navIndex = 0; 
            var currentPath = this.$route.path;
            this.navOptions.forEach((item, index) => {
                item.children.forEach((child) => {
                    if(child.path === currentPath){
                        navIndex = index;
                    }
                })
            });
            return navIndex;
        }
    },
    methods: {
       navClick(index,nav){
            this.navsIndex = index; 
            this.$router.push(nav.children[0].path);
       },
    },
    mounted: function(){
        console.log(this.footerNavs);
    }
}
</script>
<style scoped>
.section {
    width: 1200px;
    margin: 0 auto;
}

ul, li {
    list-style: none;
    text-decoration: none;
}
.container, main {
    width: 1200px;
    margin: 0 auto;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    width: 122.5px;
    height: 35.5px;
    margin-left: 102px;
    background: url(../assets/logo-header.png) no-repeat;
    background-size: contain;
}

.navs {
    margin-right: 160px;
    display: flex;
}

.nav-item {
    position: relative;
    height: 57.5px;
    margin-left: 62.5px;
    display: flex;
    align-items: center; 
    font-size: 12.5px;
    font-weight: bold;
    color: #333333;
    cursor: pointer;
}

.nav-item.active, .nav-item:hover {   
    color: #3D7EC1;
}

.nav-item.active::before, .nav-item:hover::before {
    content: '';
    position: absolute;
    width: 62.5px;
    height: 2.5px;
    top: 0;
    left: 50%;
    margin-left: -31.25px;
    background-color: #3D7EC1;
}

.nav-second {
    display: none;
    position: absolute;
    width: 162.5px;
    left: 50%;
    top: 100%;
    margin-left: -81.25px;
    z-index: 999;
}

.nav-second > li {
    background: #FFFFFF;
    height: 37.5px;
    line-height: 37.5px;
    font-weight: 400;
    text-align: center;
    color: #000000;
}

.nav-second .active, .nav-second > li:hover {
    background: #EEEEEE;
}

.nav-item:hover .nav-second {   
    display: block;
}


.f-top {  
    background: #3E3E3E;
}

.f-main {
    width: 853.75px;
    margin: 0 auto;
    padding: 30px 0;
    border-bottom: 1px solid rgba(255,255,255,.2);
    display: flex;
}

.main-l {
    width: 200px;
}

.f-logo {
    width: 136.25px;
    height: 40px;
    margin: 0 auto;
    background: url(../assets/logo-footer.png) no-repeat;
    background-size: cover;
}

.main-c {
    position: relative;
    width: 650px;
    padding-left: 43px;
    display: flex;
}

.main-c::before, .main-c::after {
    content: "";
    position: absolute;
    top: 0;
    width: 1px;
    height: 100%;
    background: linear-gradient(0deg,#3E3E3E 0%,rgba(255,255,252,1) 50%,#3E3E3E 100%);
}

.main-c::before {
    left: 0;
}

.main-c::after {
    right: 0;
}

.main-c .c-item {
    flex: 1; 
}

.c-item .c-title {
    margin-bottom: 10px;
    color: #FFFFFF;
    font-size: 11.25px;
    text-align: left;
    cursor: pointer;
}

.c-item .c-child {
    font-size: 8.75px;
    color: #CCCCCC;
    line-height: 20px;
    text-align: left;
    cursor: pointer;
}

.c-item .c-title:hover, .c-item .c-child:hover {
    color: #3D7EC1;
}

.main-r {
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.main-r p {
    font-size: 11.25px;
    line-height: 17.5px;
    color: #FFFFFF;
}

.main-r .barcode-2d {
    width: 65px;
    height: 65px;
    background: url(../assets/barcode-2d.png) no-repeat;
    background-size: cover;
}

.f-middle {
    font-size: 8.75px;
    color: #CCCCCC;
    line-height: 31.25px;
    text-align: center;
    display: flex;
    justify-content: center;
}

.f-middle span {
    margin: 0 40px;
}

.f-middle a {
    display: inline-block;
    color: #CCCCCC;
}

.f-middle a:hover {
    color: #3D7EC1;
}

.f-bottom { 
    background: #2F2F2F;  
    font-size: 8.75px;
    color: #AAAAAA;
    line-height: 25px;
    text-align: center;
}

</style>