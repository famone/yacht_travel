<template>
	<div>
		<section id="inner">
			<div class="container text-center">
				<img src="../assets/img/mazu.png" alt="">
				<h1>Школа стюардесс MAZU</h1>
				<button class="gold-btn">ЗАПИСАТЬСЯ НА ОБУЧЕНИЕ</button>
			</div>
		</section>
		<section id="about">
			<div class="container">
				<div class="col-lg-6">
					<span class="big-letter">О</span>
					<h2>О ШКОЛЕ СТЮАРДЕСС</h2>
					<p class="subik">MAZU</p>
					<p class="black-txt">
						Много лет мы являемся надежным и стабильным участником яхтенного бизнеса.
Благодаря нашему уникальному подходу к сервису, мы зарекомендовали себя как одни из самых перспективных компаний на рынке.
<br><br>
За время нашей успешной работы, мы накопили огромное количество знаний и хотим поделиться им с вами.
<br><br>
Многолетний опыт работы влечёт за собой расширение штата и регулярный подбор персонала. На своём пути мы столкнулись с большим количеством неквалифицированных сотрудников и острым дефицитом специалистов в сфере сервисного обслуживания на яхтах премиум-класса.
<br><br>
Подготовив и обучив собственный экипаж, мы аккумулировали проблемы школ и решили открыть новую, а главное - современную школу по обучению персонала для работы на престижных суднах — «MAZU School».


					</p>
				</div>
				<div class="col-lg-6">
					<img src="../assets/img/mazu2.jpg" class="w-100">
				</div>
			</div>
		</section>

		<section id="program">
			<div class="container">
				<div class="col-lg-12 text-center">
					<h2>ПРОГРАММА</h2>
					<p class="subik">ОБУЧЕНИЯ</p>
				</div>
				<div class="col-lg-6 col-lg-offset-3">
					<div class="accordeon" v-for="(item, index) in program" :key="index" 
					:class="{activeAc : item.active}">
						<div class="accordeon-head" @click="openAc(index)">

							<h3>{{item.title}}</h3>
							<div class="acc-btn"><span>✕</span></div>
						</div>
						<div class="accordeon-body">
							<ul>
								<li v-for="point in item.points"><p class="white-txt">{{point}}</p></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="price">
			<div class="container">
				<div class="row">
					<div class="col-lg-3">
					<span class="big-letter">С</span>
					<h2>СТОИМОСТЬ</h2>
					<p class="subik">ОБУЧЕНИЯ</p>
				</div>
				<div class="col-lg-3">
					<h5>ДЛИТЕЛЬНОСТЬ КУРСА</h5>
					<p class="blue-txt">1 месяц</p>
				</div>
				<div class="col-lg-3">
					<h5>ИНТЕНСИВНОСТЬ</h5>
					<p class="blue-txt">3 дня в неделю</p>
				</div>
				<div class="col-lg-3">
					<h5>СТОИМОСТЬ</h5>
					<p class="blue-txt">50 000 ₽</p>
				</div>
				</div>


				<div class="row" style="margin: 40px 0;">
					<div class="col-lg-4">
						<img src="../assets/img/w1.jpg" class="w-100">
					</div>
					<div class="col-lg-4">
						<img src="../assets/img/w2.jpg" class="w-100">
					</div>
					<div class="col-lg-4">
						<img src="../assets/img/w3.jpg" class="w-100">
					</div>
				</div>

				<div class="row">
					<div class="col-lg-12 text-center">
						<button class="simple-btn">ЗАПИСАТЬСЯ НА ОБУЧЕНИЕ</button>
					</div>
				</div>

			</div>
		</section>
	</div>

</template>

<script>
	export default{
		methods: {
			openAc(index){
				 this.program[index].active = !this.program[index].active
			}
		},
		data(){
			return{
				program: [
					{
						active: true,
						title: 'Коммуникации между клиентами и персоналом. Коллективная этика.',
						points: [
							'Обучение этики взаимодействия с гостями на борту',
							'Психология введение диалога и создания благоприятной атмосферы на борту',
							'Разрешение конфликтных ситуаций в форс мажорных ситуациях',
							'Нормы и границы делового общения между участниками коллектива',
							'Методы разрешения конфликтных ситуаций',
							'Должностная иерархия внутри компании',
							'Корпоративная культура внутри коллектива (традиции, общий досуг, дни рождения)',
							'Определение общей миссии организации'
						]
					},
					{
						active: false,
						title: 'Обучение этике подачи и сервировки блюд',
						points: [
							'Обучение этики взаимодействия с гостями на борту',
							'Психология введение диалога и создания благоприятной атмосферы на борту',
							'Разрешение конфликтных ситуаций в форс мажорных ситуациях',
							'Нормы и границы делового общения между участниками коллектива',
							'Методы разрешения конфликтных ситуаций',
							'Должностная иерархия внутри компании',
							'Корпоративная культура внутри коллектива (традиции, общий досуг, дни рождения)',
							'Определение общей миссии организации'
						]
					},
					{
						active: false,
						title: 'Тонкости работы cомелье',
						points: [
							'Обучение этики взаимодействия с гостями на борту',
							'Психология введение диалога и создания благоприятной атмосферы на борту',
							'Разрешение конфликтных ситуаций в форс мажорных ситуациях',
							'Нормы и границы делового общения между участниками коллектива',
							'Методы разрешения конфликтных ситуаций',
							'Должностная иерархия внутри компании',
							'Корпоративная культура внутри коллектива (традиции, общий досуг, дни рождения)',
							'Определение общей миссии организации'
						]
					},
					{
						active: false,
						title: 'Стандарты ухода за интерьером и чистоты на борту',
						points: [
							'Обучение этики взаимодействия с гостями на борту',
							'Психология введение диалога и создания благоприятной атмосферы на борту',
							'Разрешение конфликтных ситуаций в форс мажорных ситуациях',
							'Нормы и границы делового общения между участниками коллектива',
							'Методы разрешения конфликтных ситуаций',
							'Должностная иерархия внутри компании',
							'Корпоративная культура внутри коллектива (традиции, общий досуг, дни рождения)',
							'Определение общей миссии организации'
						]
					},
					{
						active: false,
						title: 'Безопасность на борту и оказание первой помощи',
						points: [
							'Обучение этики взаимодействия с гостями на борту',
							'Психология введение диалога и создания благоприятной атмосферы на борту',
							'Разрешение конфликтных ситуаций в форс мажорных ситуациях',
							'Нормы и границы делового общения между участниками коллектива',
							'Методы разрешения конфликтных ситуаций',
							'Должностная иерархия внутри компании',
							'Корпоративная культура внутри коллектива (традиции, общий досуг, дни рождения)',
							'Определение общей миссии организации'
						]
					},
				]
			}
		}

	}
</script>

<style scoped>
.gold-btn{
	position: relative;
}
#price{
	padding:100px 0;
}
.accordeon{
	border-bottom: 1px #fff solid;
}
.accordeon-head{
	padding:20px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
}
.accordeon-head h3{
	width: 80%;
}
.acc-btn{
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 25px;
	color: #fff;
	height: 35px;
	width: 35px;
	border-radius: 50px;
	background-color: #BE8D55;
	transition: all .3s ease;
	transform: rotate(45deg);
	cursor: pointer;
}
.accordeon-body{
	overflow:hidden;
	max-height: 0;
	transition: all .6s ease;
}
.activeAc .accordeon-body{
	max-height: 2000px;
}
.activeAc .acc-btn{
	transform: rotate(0deg);
}
#about{
	background-image: none;
}
#inner {
	background-image: url(../assets/img/mazubg.png);
}
#inner h1{
	position: relative;
}
#inner img{
	height: 120px;
	margin-bottom: 0;
	position: relative;
}
#program{
	padding: 100px 0; 
	background-color: #192531;
}
#program h2{
	color: #fff;
}
#program ul{
	margin: 0;
	padding:0;
	padding: 20px 30px;
	color: #fff;
}
#program ul li{
	margin-bottom: 10px;
}
</style>