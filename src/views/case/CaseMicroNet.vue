<template>
  <div id="cmn">
    <Banner>
        <img src="../../assets/case/caseMicroNet/banner-lg.png">
    </Banner>
    <PublicBlock title="项目案例">
      <div class="main">
        <img v-for="(img, index) in imgs" :key="index" :src="img" alt="">
      </div>
    </PublicBlock>
  </div>
</template>

<script type="text/javascript">
import Banner from '@/components/Banner.vue'
import PublicBlock from '@/components/PublicBlock.vue'
export default {
  name: "CaseMicroNet",
  data() {
    return {
      imgs:[require('@/assets/case/caseMicroNet/pro-1.png'),
            require('@/assets/case/caseMicroNet/pro-2.png'),
            require('@/assets/case/caseMicroNet/pro-3.png'),
            require('@/assets/case/caseMicroNet/pro-4.png'),
            require('@/assets/case/caseMicroNet/pro-5.png')]
    }
  },
  components: {
    Banner,
    PublicBlock
  }
}
</script>

<style scoped>
.main {
  margin-top: 56px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main img {
  width: 852.5px;
  height: 287.5px;
  margin-bottom: 50px;
}
</style>
