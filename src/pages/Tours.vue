<template>
	<div>
		<section id="inner" :style="{'background-image': 'url(' + backgroundImg + ')'}">
			<div class="container">
				<div class="col-lg-12 text-center">
					<button class="goback-btn" @click="$router.go(-1)">НАЗАД</button>
					<h1>ТУРЫ</h1>
					<button class="gold-btn">ЗАБРОНИРОВАТЬ</button>
				</div>
			</div>
		</section>

		<Tours />



	</div>
</template>



<script>
import Tours from '../components/Tours.vue'

	export default{
		components: {Tours},
		data(){
			return{
				backgroundImg: require('../assets/img/karel.jpg')
			}
		}
	}
</script>