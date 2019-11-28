<template>
	<div class="thanksgiving">
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide">
		        	<img class="index-bg" src="http://res1.eqh5.com/Fm1jes_GoqGvzkDdXbNQT1lgW5iu?imageMogr2/auto-orient/thumbnail/425x638%3E/format/webp" alt="">
		        	
		        		<!-- logo -->
		        		<!-- <img class="ani slide-1-logo"
		        		src="http://res1.eqh5.com/FrDzpSW6wIqebz3Pv3Eo0X3Rob2A?imageMogr2/auto-orient/thumbnail/45x25%3E/format/webp" 
						swiper-animate-effect="fadeInDown"  
						swiper-animate-duration=".5s" 
						swiper-animate-delay=".3s"
		        		alt=""> -->

						<!-- 红心 -->
		        		<img class="ani slide-ptn slide-1-heart-l" src="http://res1.eqh5.com/FuEtLacUoMweb8jUZol8nVCIWuoE?imageMogr2/auto-orient/thumbnail/60x53%3E/format/webp"
		        		swiper-animate-effect="rotateInUpLeft"  
						swiper-animate-duration=".5s" 
						swiper-animate-delay=".5s" 
		        		alt="">

		        		<img class="ani slide-ptn slide-1-heart-m" src="http://res1.eqh5.com/Fj7pphrBdTjv8s_54WHT0DsHtvuy?imageMogr2/auto-orient/thumbnail/44x44%3E/format/webp" 
						swiper-animate-effect="rotateInUpLeft"  
						swiper-animate-duration=".5s" 
						swiper-animate-delay=".5s"
		        		alt="">

		        		<img class="ani slide-ptn slide-1-heart-r" src="http://res1.eqh5.com/Fuj2DpVeQyCEXn_M6jF7nIzjvANZ?imageMogr2/auto-orient/thumbnail/60x64%3E/format/webp"
		        		swiper-animate-effect="rotateInUpLeft"  
						swiper-animate-duration=".5s" 
						swiper-animate-delay=".5s"
		        		alt="">

						<!-- people -->
						<img class="ani slide-ptn slide-1-people" src="http://res1.eqh5.com/FhGcwZ8jl4Q7MgfwxTrXB_jSp47q?imageMogr2/auto-orient/thumbnail/51x108%3E/format/webp" 
						swiper-animate-effect="bounceIn"  
						swiper-animate-duration=".5s" 
						swiper-animate-delay=".3s" 
						alt="">

						<!-- line -->
						<img class="ani slide-ptn slide-1-line" src="http://res1.eqh5.com/Fpw7ygtdahdt07EP8QtK_RcOUDly?imageMogr2/auto-orient/thumbnail/28x44%3E/format/webp"
						swiper-animate-effect="rotateInUpLeft"  
						swiper-animate-duration=".5s" 
						swiper-animate-delay=".3s"
						alt="">

						<!-- font -->
						<img class="ani slide-ptn slide-1-font" src="http://res1.eqh5.com/FjfffrxJxrG0wXF1eJhY8IfLEUFN?imageMogr2/auto-orient/thumbnail/61x135%3E/format/webp" 
						swiper-animate-effect="fadeInUpBig"  
						swiper-animate-duration=".5s" 
						swiper-animate-delay=".3s" 
						alt="">

						<img class="ani slide-ptn slide-1-heart-l-f" src="http://res1.eqh5.com/Fi42RPKrKfvW2TiTvY0JiByZ6U81?imageMogr2/auto-orient/thumbnail/19x20%3E/format/webp"
						swiper-animate-effect="rotateInDownRight"  
						swiper-animate-duration=".5s" 
						swiper-animate-delay=".5s" 
						alt="">

						<img class="ani slide-ptn slide-1-heart-m-f" src="http://res1.eqh5.com/Fkhm1Ylj0bDvujc_PCs_GNVRF4iX?imageMogr2/auto-orient/thumbnail/12x12%3E/format/webp"
						swiper-animate-effect="rotateInDownRight"  
						swiper-animate-duration=".5s" 
						swiper-animate-delay=".5s"  
						alt="">

						<img class="ani slide-ptn slide-1-heart-r-f" src="http://res1.eqh5.com/Fn17OifMDGu6-1U2RSkJJgE6DtWk?imageMogr2/auto-orient/thumbnail/19x19%3E/format/webp"
						swiper-animate-effect="rotateInDownRight"  
						swiper-animate-duration=".5s" 
						swiper-animate-delay=".5s" 
						alt="">

						

		        	
		        </div>
		        <div class="swiper-slide">Slide 2</div>
		        <div class="swiper-slide">Slide 3</div>
		    </div>
		</div>
	</div>
</template>

<script>
export default {
	name:"Thanksgiving",
    data () {
        return {

        }
    },
    mounted() {
    	//初始化Swiper
    	this.swiperInit();     
    },
    methods: {
    	swiperInit() {
    		let mySwiper = new Swiper ('.swiper-container', {
		    	direction: 'vertical', 
		    	onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
				    swiperAnimateCache(swiper); //隐藏动画元素 
				    swiperAnimate(swiper); //初始化完成开始动画
				}, 
				onSlideChangeEnd: function(swiper){ 
				    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
				} 
		  	})   
    	}
    }
}
</script>
<style scoped>
	.thanksgiving {
		width: 100%;
		height: 100%;
	}
    .swiper-container {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
       position: relative;
    }

    .index-bg {
    	position: absolute;
    	width: 100%;
    	height: 100%;
    }

    .slide-ptn {
    	position:absolute;
    }

   .slide-1-heart-l {
   		top: 10%;
   		left: 14%;
   }
   .slide-1-heart-m {
   		top: 12%;
   		left: 40%;
   }
   .slide-1-heart-r {
   		top: 14%;
   		right: 26%;
   }
   .slide-1-heart-l-f {
   		top: 13%;
   		left: 20%;
   }
   .slide-1-heart-m-f {
   		top: 15%;
   		left: 44%;
   }
   .slide-1-heart-r-f {
   		top: 18%;
   		right: 32%;
   }
   .slide-1-people {
   		top: 20%;
   		left: 46%;
   }
   .slide-1-font {
   		bottom: 38%;
   		left: 40%;
   }

   .slide-1-line {
   		top: 22%;
   		right: 34%;
   }
</style>