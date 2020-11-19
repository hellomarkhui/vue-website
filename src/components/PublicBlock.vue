<template>
  <div id="pbulic-block">
      <h2 class="block-title" :style="{paddingTop:paddingTop}" v-if="title.length">{{title}}</h2>
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "PublicBlock",
  props: {
      title: {
          type: String,
          default: ''
      },
      paddingTop: {
          type: String,
          default: '50px'
      }
  },
  data() {
    return {

    }
  },

}
</script>

<style scoped>
.pbulic-block {
    width: 100%; 
}
.block-title {
    position: relative;
    padding-top: 50px;
    padding-bottom: 20px;
    text-align: center;
    font-size: 21.25px;
    color: #333333;
}
.block-title::after {
    content: "";
    position: absolute;
    width: 56px;
    height: 2.5px;
    left: 50%;
    bottom: 0;
    margin-left: -28px;
    background: #3D7EC1;
}
</style>
