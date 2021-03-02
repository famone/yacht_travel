<template>
	<section id="p404">
		<div class="container text-center">

			<h2>404</h2>
			<p class="subik">СТРАНИЦА НАХОДИТСЯ В РАЗРАБОТКЕ</p>
			<img src="https://pngimg.com/uploads/ship/ship_PNG5394.png" class="lodka">
		</div>
	</section>
</template>


<script>
	export default{
		created(){
			console.log(this.$route.matched[0].path)
		}
	}
</script>


<style>
.lodka{
	width: 80%;
}
#p404{
	padding: 250px 0;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: calc(100vh - 100px);
}
</style>