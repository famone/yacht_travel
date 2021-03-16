<template>
	<div>
		<section id="inner" :style="{'background-image': 'url(' + backgroundImg + ')'}">
			<div class="container">
				<div class="col-lg-12 text-center">
					<button class="goback-btn" @click="$router.go(-1)">НАЗАД</button>
					<h1>ВЫБРАТЬ ЯХТУ</h1>
				</div>
			</div>
		</section>

		<Yachts :title=" 'СУДНА' " />



	</div>
</template>



<script>
import Yachts from '../components/Yachts.vue'

	export default{
		components: {Yachts},
		data(){
			return{
				backgroundImg: require('../assets/img/main.jpg')
			}
		}
	}
</script>