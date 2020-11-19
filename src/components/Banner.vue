<template>
  <div id="banner">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "app",
  data() {
    return {
    
    }
  },
}
</script>

<style scoped>
#banner {
  display: flex;
}

#banner > img {
    width: 1200px;
    height: 500px;
}
</style>
