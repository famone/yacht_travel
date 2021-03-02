<template>
	<section id="addititons">
		<div class="container">
			<div class="col-lg-12 text-center">
				<h2>ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ</h2>
				<p class="subik">КОТОРЫЕ МЫ ПРЕДОСТОВЛЯЕМ</p>
			</div>

			<div class="col-lg-4">
				<div class="addititon">
					<div>
						<img src="../assets/img/mazu.png" alt="">
						<h3>ШКОЛА СТЮАРДЕСС</h3>
						<p class="subik">ПОДГОТОВКА И ПОДБОР КАНДИТОВ НА ЧАСТНЫЕ ЯХТЫ</p>
					</div>
					<div class="hover-layer">
						<router-link class="white-btn" tag="button" to="/mazu-school">ПОДРОБНЕЕ</router-link>
					</div>
				</div>

			</div>
			<div class="col-lg-4">
				<div class="addititon" :style="{'background-image': 'url(' + trust + ')'}">
					<div>
						<h3>ПРОЕКТ ДОВЕРИТЕЛЬНОГО УПРАВЛЕНИЯ </h3>
						<p class="subik">ВАША ЯХТА В НАШИХ РУКАХ</p>
					</div>
					<div class="hover-layer">
						<router-link class="white-btn" tag="button" to="/doveritelnoe-upravlenie">ПОДРОБНЕЕ</router-link>
					</div>
				</div>
				
			</div>
			<div class="col-lg-4">
				<div class="addititon">
					<div>
						<h3>YACHT&TRAVEL FUND</h3>
						<p class="subik">ЗАКРЫТЫЙ ПАЕВОЙ ИНВЕСТИЦИОННЫЙ ФОНД</p>
					</div>
					<div class="hover-layer">
						<router-link class="white-btn" tag="button" to="/yacht-and-travel-fund">ПОДРОБНЕЕ</router-link>
					</div>
				</div>
				
			</div>
		</div>
	</section>
</template>


<script>
	export default{
		data(){
			return{
				trust: require('../assets/img/trustbg1.jpg')
			}
		}
	}
</script>