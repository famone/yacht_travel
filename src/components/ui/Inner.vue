<template>
	<section id="inner" :style="{'background-image': 'url(' + yacht.images[0] + ')'}">
		<div class="container">
			<div class="col-lg-12 text-center">
				<button class="goback-btn" @click="$router.go(-1)">НАЗАД</button>
				<h1>{{yacht.name}}</h1>
				<button class="gold-btn">ЗАБРОНИРОВАТЬ</button>
			</div>
		</div>
	</section>
</template>



<script>
	export default{
		props: {
			yacht: {
				required:true,
				type: Object
			}
		}
	}
</script>