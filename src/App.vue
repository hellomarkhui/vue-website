<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body, div, dl, dt, dd, ul, li, h1, h2, h3, h4, h5, h6, input, form, a, p, textarea {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Microsoft YaHei;
}

body {
	/*background: url(assets/bg1.jpg) center !important;
		background-size: cover;*/
	font-family: Microsoft YaHei, Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, SimSun, sans-serif;
	font-size: 10px;
	-webkit-font-smoothing: antialiased;
}

ol, ul, li {
    list-style: none;
}

p {
  font-size: 11.25px;
  margin: 0;
  padding: 0;
}

a {
    text-decoration: none;
    display: block;
    color: #000000;
}

h1, h2 {
  font-weight: 400;
  color: #333333;
}

h1 {
  font-size: 25px;
}

h2{
  font-size: 21.25px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
}

.p-width {
    width: 854px;
    margin: 0 auto;
}

</style>
