<template>
  <div>
    <h1 class="p-width main-title">{{main.title}}</h1>
    <div class="main-content" :style="{background: 'url('+main.bg+') no-repeat'}">
        <!-- <img class="content-bg" src="../../images/solution/relateNet/main-bg.png" alt="新能源场站监控类产品背景图"></img> -->
        <div class="p-width content-wrap">
            <h2 class="content-title">{{main.topic}}</h2>
            <p class="content-text">{{main.content}}</p>
            <img class="content-img" :src="main.img" v-if="main.img">
        </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "Main",
  props: {
      main: {
          style: Object,
          default: {
              title: '',
              topic: '',
              content: '',
              bg: '',
              img: ''
          }
      },
  },
  data() {
    return {

    }
  },
  components: {
  }
}
</script>

<style scoped>
.main-title {
    margin-top: 83.75px;
    margin-bottom: 53.75px;
    font-weight: bold;
}

.main-content {
    position: relative;
    height: 312.5px;
    width: 100%;
}

.content-title {
    position: relative;
    padding-top: 70px;
    font-size: 21.25px;
    font-weight: 400;
}

.content-title::after {
    content: "";
    position: absolute;
    width: 37.5px;
    height: 2.5px;
    left: 0;
    bottom: -20px;
    background: #3D7EC1;
}

.content-text {
    width: 471px;
    margin-top: 40px;
    font-family: Adobe Heiti Std;
    font-weight: normal;
    color: #666666;
}

.content-img {
    position: absolute;
    width: 295px;
    height: 372.5px;
    bottom: 55px;
    right: 175px;
}
</style>
