<template>
	<header :class="{darkHeader : this.$route.matched[0].path === '*' }">
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
					<a href="https://www.instagram.com/yachtrus/"><img src="../../assets/img/insta.svg" alt=""></a>
				</div>

				<a href="tel:+79990211002" class="call-me">
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
						link: '/yachts',
						txt: 'ВЫБРАТЬ ЯХТУ'
					},
					{
						link: '/tours',
						txt: 'ТУРЫ И НАПРАВЛЕНИЯ'
					},
					{
						link: '/dopolnitelno',
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