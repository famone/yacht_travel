<template>
	<div>
		<section id="inner" :style="{'background-image': 'url(' + backgroundImg + ')'}">
			<div class="container">
				<div class="col-lg-12 text-center">
					<button class="goback-btn" @click="$router.go(-1)">НАЗАД</button>
					<h1>ДОПОЛНИТЕЛЬНО</h1>
				</div>
			</div>
		</section>

		<Additions />



	</div>
</template>



<script>
import Additions from '../components/Additions.vue'

	export default{
		components: {Additions},
		data(){
			return{
				backgroundImg: require('../assets/img/fund2.jpg')
			}
		}
	}
</script>