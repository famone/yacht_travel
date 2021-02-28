<template>
	<section id="yachts">
		<div class="container">
			<div class="row">
				<div class="col-lg-2">
					<h2>{{title}}</h2>
					<p class="subik">В АРЕНДУ</p>
			 	</div>
			</div>


			<div class="row">
				<yachtItem v-for="yacht in yachts" :singleYacht="yacht"  />
				<div class="col-lg-12 text-center">
					<button class="simple-btn">ПОСМОТРЕТЬ ВСЕ ЯХТЫ</button>
				</div>
			</div>



		</div>
	</section>
</template>

<script>
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
			...mapGetters({yachts: "yachts/getYachts"})
		}
	}

</script>