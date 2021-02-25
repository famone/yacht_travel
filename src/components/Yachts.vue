<template>
	<section id="yachts">
		<div class="container">
			<div class="row">
				<div class="col-lg-2">
					<h2>СУДНА</h2>
					<p class="subik">В АРЕНДУ</p>
			 	</div>
			</div>


			<div class="row">
				<yachtItem v-for="yacht in 4" />
				<div class="col-lg-12 text-center">
					<button class="simple-btn">ПОСМОТРЕТЬ ВСЕ ЯХТЫ</button>
				</div>
			</div>



		</div>
	</section>
</template>

<script>
import yachtItem from '../components/ui/yachtItem.vue'

	export default{
		components: {yachtItem}
	}

</script>