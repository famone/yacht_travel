<template>
	<div class="col-lg-3">
		<div class="yacht-card">
			<div class="yacht-img" :style="{'background-image': 'url(' + singleYacht.images[0] + ')'}">
				<button class="book">+ БРОНЬ</button>
				<h3>{{singleYacht.name}}</h3>
			</div>
			<div class="yacht-body">
				<p class="type">{{singleYacht.type}}</p>
				<hr>
				<div class="technicals">
					<p ><img src="../../assets/img/location.svg" alt="">{{singleYacht.city}}</p>
					<p ><img src="../../assets/img/pers.svg" alt="">{{singleYacht.persons}} чел.</p>
					<p ><img src="../../assets/img/speed.svg" alt="">{{singleYacht.speed}} км/час</p>
				</div>
				<p class="price">от {{singleYacht.price.toLocaleString()}} ₽/час</p>
				<router-link tag="button" :to=" '/yachts/' + singleYacht.slug " class="gold-btn">ПОДРОБНЕЕ</router-link>
			</div>
		</div>
	</div>
</template>



<script>
	export default{
		props: {
			singleYacht: {
				required:  true,
				trpe: Object
			}
		}
	}
</script>

