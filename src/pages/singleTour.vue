<template>
	<div>
		<Inner :yacht="tour(id)" />



		<section id="yachtImgSlider">
			<div class="container">
				<div class="row">
					<div class="prevBtn"></div>
						<div class="nextBtn"></div>
					<swiper ref="mySwiper" :options="swiperOptions">
						<swiper-slide v-for="(img, index) in tour(id).images">
		   					<div class="yacht-slider-img" :style="{'background-image': 'url(' + img + ')'}">	
		   						<div class="more-look" @click="openImg(index)" ></div>
		    				</div>
		    			</swiper-slide>
		    		</swiper>
				</div>
			</div>
		</section>


		<div class="image-pop" v-if="imageInPop !== '' " @click="closeImg()">
			<img :src="imageInPop" @click.stop>
		</div>




		<section id="aboutYacht">
			<div class="container">
				<div class="col-lg-8">
					<div class="row">
						<div class="col-lg-12 yacht-row">
							<p class="subik">ЦЕНА</p>
							<h4>от {{tour(id).price}} ₽/чел</h4>
						</div>
						<div class="col-lg-12">
							<p class="subik">ХАРАКТЕРИСТИКИ</p>
						</div>
						<div class="col-lg-12 yacht-row">
							<h5>Остановки</h5>

							<div class="stops">
								<div class="stop" v-for="stop in tour(id).stops">
									<div class="dot"></div>
									<p class="small-blue">{{stop}}</p>
								</div>
							</div>

							<div class="your-choise">
								<img src="../assets/img/yakorw.svg" alt="">
								<p class="white-txt">Внимание! Ваш маршрут может быть скорректирован с учетом ваших пожеланий.</p>
							</div>

						</div>
						<div class="col-lg-4 yacht-row">
							<h5>РАЗМЕЩЕНИЕ</h5>
							<p class="small-grey">Количество гостей </p>
							<p class="blue-txt">{{tour(id).persons}}</p>
						</div>
						<div class="col-lg-4 yacht-row">
							<h5>ДОП ОПЦИИ</h5>
							<p class="blue-txt" v-for="add in tour(id).additions">{{add}}</p>
						</div>
						<div class="col-lg-12">
							<p class="subik">ОПИСАНИЕ</p>
							<p class="black-txt" v-html="tour(id).descr" ></p>
						</div>
					</div>
				</div>






				<div class="col-lg-4 sticky-food">
					<div class=" text-right">
						<button class="share-btn" :class="{liked : liked}" @click="liked = !liked">
							<img src="../assets/img/like.svg" v-if="!liked" >
							<img src="../assets/img/liked.svg" v-else>

							<span v-if="!liked"> ДОБАВИТЬ В ИЗБРАННОЕ</span>
							
							<span v-else> В ИЗБРАННОМ</span>
						</button>
					</div>
					<div class="food-menu">
						<div>
							<h3>ХОТИТЕ НАКРЫТЬ СТОЛ НА ЯХТЕ?</h3>
							<p class="white-txt">Компания Yacht & Travel сотрудничает с рестораном GINZA.
								<br>Вы сможете заказать на яхту достойный банкет.
							</p>
							<br>
							<button class="gold-btn">ПОСМОТРЕТЬ МЕНЮ</button>
						</div>
					</div>
				</div>
			</div>
		</section>


		<Yachts :title=" 'СУДНА В ЭТОМ НАПРАВЛЕНИИ' " />
		


	</div>
</template>

<script>
import Inner from '../components/ui/Inner.vue'
import Yachts from '../components/Yachts.vue'
import {mapGetters} from 'vuex'

	export default{
		props: ["id"],
		components: {Inner, Yachts},
		computed: {
			...mapGetters({tour: "tours/getSingleTour"}),
			swiper(){
	       		return this.$refs.mySwiper.$swiper
	    	}
		},
		methods: {
			openImg(index){
				this.imageInPop = this.tour(this.id).images[index]
			},
			closeImg(){
				this.imageInPop = ''
			}
		},
		data(){
			return{
				liked: false,
				imageInPop: '',
				swiperOptions: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                  draggable: true,
                  touchRatio: 1,
                  loop: false,    
                  infinite: true,
                  speed: 500,
                  centeredSlides: false,
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
				          slidesPerView: 4,
				          spaceBetween: 15,
				           touchRatio: 1
				        }
			          }
            	}
			}
		}
	}
</script>
