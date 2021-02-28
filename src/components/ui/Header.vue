<template>
	<header>
		<div class="container">
			<div class="shapka">
				<router-link tag="div" to="/" class="logo">
					<img src="../../assets/img/logo.svg" alt="">
				</router-link>
				<ul class="hidden-xs hidden-sm">
					<router-link tag="li" :to="nav.link" v-for="nav in navs">
						{{nav.txt}}
					</router-link>
				</ul>
				<div class="socials hidden-xs hidden-sm">
					<a href=""><img src="../../assets/img/telega.svg" alt=""></a>
					<a href=""><img src="../../assets/img/insta.svg" alt=""></a>
				</div>

				<a href="" class="call-me">
					<img src="../../assets/img/tel.svg" alt="">
				</a>
			</div>
		</div>
	</header>
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