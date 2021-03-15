<template>
	<section id="yachts">
		<div class="container">
			<div class="row">
				<div class="col-lg-2">
					<h2>{{title}}</h2>
					<p class="subik">В АРЕНДУ</p>
			 	</div>
			</div>


			<div class="row scroll-row">
				<yachtItem v-for="yacht in yachts.slice(0, yachtsToShow)" :singleYacht="yacht"  />
			</div>


			<div class="col-lg-12 text-center" v-if="this.$route.path === '/' ">
					<router-link tag="button" to="/yachts" class="simple-btn">ПОСМОТРЕТЬ ВСЕ ЯХТЫ</router-link>
				</div>



		</div>
	</section>
</template>

<script>
import axios from 'axios'
import yachtItem from '../components/ui/yachtItem.vue'
import {mapGetters} from 'vuex'

	export default{
		props: {
			title: {
				type: String,
				required: true
			}
		},
		components: {yachtItem},
		computed: {
			...mapGetters({yachts: "yachts/getYachts"}),
			yachtsToShow(){
			if(this.$route.path === '/' || this.$route.path.includes('/yachts/') || this.$route.path.includes('/tours/') ){
					return 4
				}else{
					return this.yachts.length
				}
			}
		},
	}

</script>