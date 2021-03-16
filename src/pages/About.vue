<template>
	<div>
		<section id="inner" :style="{'background-image': 'url(' + backgroundImg + ')'}">
			<div class="container">
				<div class="col-lg-12 text-center">
					<button class="goback-btn" @click="$router.go(-1)">НАЗАД</button>
					<h1>О КОМПАНИИ YACHT & TRAVEL</h1>
				</div>
			</div>
		</section>

		<About />

		<Team />


		<section id="about2">
			<div class="container">
				<div class="col-lg-6 col-lg-offset-6">
				<div class="main-letter">
					<span class="big-letter">З</span>
					<h2>ЗНАЕМ СВОЕ ДЕЛО</h2>
					<p class="subik">ЛУЧШЕ ДРУГИХ</p>
					<p class="black-txt">
						Компания «YACHT & TRAVEL» обладает коллекцией шикарных яхт в Санкт-Петербурге и славится своим качественным сервисом среди тысячи довольных клиентов.
<br><br>
Широкий ассортимент позволяет подобрать судно под любое мероприятие, а опытная команда заботиться о комфортном и безопасном отдыхе наших гостей.
<br><br>
Индивидуальный подход к каждому рейсу – это основа деятельности нашей компании. Мы не просто даём в аренду самые красивые яхты Северной столицы, мы организовываем туры без лишних хлопот, эмоциональных затрат и с учётом каждого пожелания клиента!
					</p>
					<router-link tag="button" to="/about" class="simple-btn"
					v-if="this.$route.path === '/' ">ПОДРОБНЕЕ</router-link>
				</div>
			</div>
			</div>
		</section>



		<section id="why">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<span class="big-letter">П</span>
						<h2>ПОЧЕМУ</h2>
						<p class="subik">«YACHT&TRAVEL»</p>
					</div>


				<div class="col-lg-3 icon-box">
					<img src="../assets/img/ti1.svg" alt="">
					<h5 >Лучший сервис</h5>
					<p class="black-txt">Лучший сервис можно построить только на доверии и полной информированности партнеров. Здесь Вы получаете полную информацию по яхтам и выбираете те, которые Вас устраивают.</p>
				</div>
				<div class="col-lg-3 icon-box">
					<img src="../assets/img/ti1.svg" alt="">
					<h5 >Лучший сервис</h5>
					<p class="black-txt">Лучший сервис можно построить только на доверии и полной информированности партнеров. Здесь Вы получаете полную информацию по яхтам и выбираете те, которые Вас устраивают.</p>
				</div>
				<div class="col-lg-3 icon-box">
					<img src="../assets/img/ti1.svg" alt="">
					<h5 >Лучший сервис</h5>
					<p class="black-txt">Лучший сервис можно построить только на доверии и полной информированности партнеров. Здесь Вы получаете полную информацию по яхтам и выбираете те, которые Вас устраивают.</p>
				</div>
				<div class="col-lg-3 icon-box">
					<img src="../assets/img/ti1.svg" alt="">
					<h5 >Лучший сервис</h5>
					<p class="black-txt">Лучший сервис можно построить только на доверии и полной информированности партнеров. Здесь Вы получаете полную информацию по яхтам и выбираете те, которые Вас устраивают.</p>
				</div>


				</div>
			</div>
		</section>


		<section id="insta">
			<div class="container">
				<div class="col-lg-4 col-xs-4 col-sm-4">
					<img src="https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/132005600_391844941918720_4103544418249709606_n.jpg?tp=1&_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=OSEHQNOg61kAX9bXz3f&oh=9e3929ee228f30243ab9bae45129693d&oe=6078FE56" class="w-100">
				</div>
				<div class="col-lg-4 col-xs-4 col-sm-4">
					<img src="https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/131989202_257180735749310_2255062825747198394_n.jpg?tp=1&_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=NM-W3k32uksAX__JgCV&oh=d5ba00d0c42cb83119fd904b7b4250a4&oe=607901C2" class="w-100">
				</div>
				<div class="col-lg-4 col-xs-4 col-sm-4">
					<img src="https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/132201147_794000877815718_8291417940402143986_n.jpg?tp=1&_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=EcW7K-EOytoAX9Yn0D1&oh=980b49865f2b2558c4bc634e1c4d227c&oe=607A2960" class="w-100">
				</div>
				<div class="col-lg-4 col-xs-4 col-sm-4">
					<img src="https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/132111928_883214512489107_7387749821529115045_n.jpg?tp=1&_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=hAhR6Htiff0AX8xjFbd&oh=8af989a580c2f151937f0a953f75f0b0&oe=607BD58D" class="w-100">
				</div>
				<div class="col-lg-4 col-xs-4 col-sm-4">
					<img src="https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/132000121_116496600298605_8790112340536225881_n.jpg?tp=1&_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=lNvKCppJUGYAX9BEkUC&oh=d7ec7105b65d747df5f33338defcd865&oe=607821D4" class="w-100">
				</div>
				<div class="col-lg-4 col-xs-4 col-sm-4">
					<img src="https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/131951840_381611002932865_7039757512406353072_n.jpg?tp=1&_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=-JSDPX5ZRBIAX89x_Tr&oh=1335128d41bce67911d152eca8ce5a70&oe=607BD1BC" class="w-100">
				</div>
				<div class="col-lg-12 text-center">
					<br><br>
					<a href="https://www.instagram.com/yachtrus" class="simple-btn">БОЛЬШЕ ФОТО В НАШЕМ INSTAGRAM</a>
				</div>
			</div>
		</section>


	</div>
</template>



<script>
import axios from 'axios'
import About from '../components/About.vue'
import Team from '../components/Team.vue'

	export default{
		components: {About, Team},
		data(){
			return{
				backgroundImg: require('../assets/img/about.jpg'),
				access_token: '6626870867.cbba754.83fa37c865314df8be5c52347e3e4987'
			}
		},
		created(){
			axios
			.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + this.access_token)
			.then(res =>{
				console.log(res)
			})
		}
	}
</script>