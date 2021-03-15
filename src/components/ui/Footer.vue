<template>
	<div>
		<footer>
			<div class="container">
				<div class="col-lg-12 text-center">
					<img src="../../assets/img/footerlogo.svg" class="foooter-logo" >
				</div>
				<div class="col-lg-12">
						<ul>
							<router-link tag="li" to="/" v-for="nav in navs">{{nav.txt}}</router-link>
						</ul>
				</div>
				<div class="col-lg-12 text-center">
					<button class="simple-btn">СВЯЗАТЬСЯ С НАМИ</button>
				</div>
			</div>
		</footer>
		<div class="copyright">
			<div class="container">
				<div class="copyright-box">
					<p class="white-txt">ИНН: 1234567891011</p>
					<p class="white-txt">ОГРН: 1234567891011</p>
					<img src="../../assets/img/yakor.svg" alt="">
					<p class="white-txt">YACHTS.RUS - 2021</p>
					<p class="white-txt webink">
						<a href="">👨‍💻 MADE IN WEBINK</a>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>



<script>
	export default{
		data(){
			return{
				navs: [
					{
						link: '/services',
						txt: 'О КОМПАНИИ'
					},
					{
						link: '/projects',
						txt: 'ВЫБРАТЬ ЯХТУ'
					},
					{
						link: '/gallery',
						txt: 'ТУРЫ И НАПРАВЛЕНИЯ'
					},
					{
						link: '/prices',
						txt: 'ДОПОЛНИТЕЛЬНО'
					},
					{
						link: '/vacansies',
						txt: 'КОНТАКТЫ'
					}
				]
			}
		}
	}
</script>