<template>
  <div id="aboutus">
    <ul>
        <li>關於我們1</li>
        <li>關於我們2</li>
        <li>關於我們3</li>
        <li>關於我們4</li>
        <li>關於我們5</li>
        <li>關於我們6</li>
        <li>關於我們7</li>
        <li>關於我們8</li>
        {{msg}}
    </ul>
  </div>
</template>

<script>
export default {
  name: 'aboutus',
  data () {
    return {
      msg: 'aboutu what'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
