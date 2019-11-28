<template>
	<div class="home">
        <thanksgiving />
	</div>
</template>

<script>
import Thanksgiving from '../../components/festival/thanksgiving/index.vue'
export default {
	name:"Home",
    data () {
        return {

        }
    },
    components: {
        "thanksgiving": Thanksgiving
    },
    methods: {
    	
    }
}
</script>

<style scoped>
	.home {
        width: 100%;
        height: 100%;
    }
</style>