<template>
	<section id="tours">
		<div class="container">
			<div class="row">
				<div class="col-lg-8">
					<h2>ТУРЫ</h2>
					<p class="subik">КОТОРЫЕ МЫ ОРГАНИЗУЕМ</p>
				</div>
				<div class="col-lg-4">
					<div class="sliderArrows">
						<div class="prevBtn"></div>
						<div class="nextBtn"></div>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
				<swiper ref="mySwiper" :options="swiperOptions">
					<swiper-slide v-for="item in tours">
		    			<div class="tour-slide" :style="{'background-image': 'url(' + item.img + ')'}">
		    				<h3>{{item.name}}</h3>
		    			</div>
		    		</swiper-slide>
		    	</swiper>
			</div>
		<div class="row">
			<div class="col-lg-12 text-center">
				<button class="simple-btn">ОРГАНИЗОВАТЬ ПЕРСОНАЛЬНЫЙ ТУР</button>
			</div>
		</div>


	</section>
</template>


<script>

	export default{
		comuted: {
			swiper(){
	       		return this.$refs.mySwiper.$swiper
	    	}
		},
		data(){
			return{
				tours: [
					{
						name: 'КАРЕЛИЯ',
						img: require('../assets/img/karel.jpg')
					},
					{
						name: 'КАРЕЛИЯ',
						img: require('../assets/img/karel.jpg')
					},
					{
						name: 'КАРЕЛИЯ',
						img: require('../assets/img/karel.jpg')
					},
				],
				swiperOptions: {
                  slidesPerView: 2.8,
                  spaceBetween: 30,
                  draggable: true,
                  touchRatio: 1,
                  loop: true,    
                  infinite: true,
                  speed: 1000,
                  centeredSlides: true,
                  navigation: {
		            nextEl: '.nextBtn',
		            prevEl: '.prevBtn',
		          },
		           breakpoints: {
			            320: {
			              slidesPerView: 1,
			              spaceBetween: 15,
			              touchRatio: 1
			            },
			            768: {
				          slidesPerView: 2,
				           touchRatio: 1
				        },
				        1150: {
				          slidesPerView: 2.8,
				          spaceBetween: 50,
				           touchRatio: 1
				        }
			          }
            	}
			}
		}
	}
</script>