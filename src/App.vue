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
	*{
		margin: 0;
		padding: 0;
	}
	html, body {
    	position: relative;
    	height: 100%;
	}
    body {
        margin: 0;
        padding: 0;
    }
	  #app {
	  	width: 100%;
	  	height: 100%;
	  }
	  img {
	  	display: block;
	  }
</style>