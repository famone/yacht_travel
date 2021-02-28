<template>
	<div>
		<Inner :yacht="yacht(id)" />


		<section id="aboutYacht">
			<div class="container">
				<div class="col-lg-8">
					<div class="row">
						<div class="col-lg-12 yacht-row">
							<p class="subik">ЦЕНА</p>
							<h4>{{yacht(id).price}} ₽/час</h4>
							<h4>{{yacht(id).dayPrice}} ₽/сутки</h4>
						</div>
						<div class="col-lg-12">
							<p class="subik">ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ</p>
						</div>
						<div class="col-lg-4 yacht-row">
							<h5>РАЗМЕРЫ</h5>
							<p class="small-grey">Длина </p>
							<p class="blue-txt">{{yacht(id).len}}м</p>
							<p class="small-grey">Ширина </p>
							<p class="blue-txt">{{yacht(id).width}}м</p>
							<p class="small-grey">Осадка</p>
							<p class="blue-txt">{{yacht(id).osadka}}м</p>
						</div>
						<div class="col-lg-4 yacht-row">
							<h5>РАЗМЕЩЕНИЕ</h5>
							<p class="small-grey">Количество гостей </p>
							<p class="blue-txt">{{yacht(id).persons}}</p>
							<p class="small-grey">Каюты</p>
							<p class="blue-txt">{{yacht(id).rooms}}</p>
							
						</div>
						<div class="col-lg-4 yacht-row">
							<h5>СКОРОСТЬ</h5>
							<p class="small-grey">Круизная</p>
							<p class="blue-txt">{{yacht(id).speed}} узл.</p>
							<p class="small-grey">Максимальная</p>
							<p class="blue-txt">{{yacht(id).speedMax}} узл.</p>	
						</div>
						<div class="col-lg-12"></div>
						<div class="col-lg-4 yacht-row">
							<h5>ДОП ОПЦИИ</h5>
							<p class="blue-txt" v-for="add in yacht(id).additions">{{add}}</p>
						</div>
						<div class="col-lg-4 yacht-row">
							<h5>РАСПОЛОЖЕНИЕ</h5>
							<p class="blue-txt">{{yacht(id).city}}</p>
						</div>
						<div class="col-lg-12">
							<p class="subik">ОПИСАНИЕ</p>
							<p class="black-txt" v-html="yacht(id).descr" ></p>
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


		<Yachts :title=" 'ПОХОЖИЕ СУДНА' " />
		


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
			...mapGetters({yacht: "yachts/getSingleYacht"})
		},
		data(){
			return{
				liked: false
			}
		}
	}
</script>