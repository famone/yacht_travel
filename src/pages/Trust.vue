<template>
	<div>
		<simpleForm v-if="openPop" @closePop="closePop" :messageSubject=" 'Заявка на проект доверительного управления' " />
		<section id="inner">
			<div class="container text-center">
				<button class="goback-btn" @click="$router.go(-1)">НАЗАД</button>
				<h1>Проект доверительного управления</h1>
				<button class="gold-btn" @click="openPop = !openPop">СОТРУДНИЧАТЬ С НАМИ</button>
			</div>
		</section>
		<section id="about">
			<div class="container">
					<div class="col-lg-6">
					<span class="big-letter">М</span>
					<h2>МЫ ПРЕДЛАГАЕМ</h2>
					<p class="subik">УПРАВЛЕНИЕ И КОММЕРЧЕСКОЕ ИСПОЛЬЗОВАНИЕ ВАШЕЙ ЯХТЫ В РОССИИ</p>
					<p class="black-txt">
					Многие владельцы яхт не могут отдыхать на ней так часто, как им того хотелось бы и порой яхта стоит без дела по несколько недель, а то и месяцев. Чтобы избежать таких простоев, сдайте яхту в чартер — это не только пойдет ей на пользу, но и принесет вам дополнительную прибыль, которая покроет расходы по содержанию лодки.
<br><br>
Опытные яхт-менеджеры позаботятся о контрактах и согласованиях с клиентами, не забывая про Ваш график отдыха — яхта в идеальном состоянии будет доступна в
те даты в которые вам потребуется. Чартер яхты поможет снизить ваши расходы по её эксплуатации — топливо, портовые и другие сборы оплачивает клиент, использующий Вашу яхту для чартера.
<br><br>
					</p>
					<h2>СОБСТВЕННЫЙ</h2>
					<p class="subik">ФЛОТ</p>
					<p class="black-txt">
						Судоходная компания «Yacht & Travel» имеет свой собственный флот из 12 моторных яхт размером от 13 до 27 метров в Санкт-Петербурге, Крыму и чартерные базы в Турции (Фетхие) и в Черногории (Тиват). Наш флот состоит из моторных яхт производителей Sunseeker (Англия), Princess (Англия), Azimut (Италия), Marquis (США), Fairline (Великобритания), а также яхты Российских производителей.
					</p>
				</div>
				<div class="col-lg-6">
					<img src="../assets/img/trust2.jpg" class="w-100">
				</div>
			</div>
		</section>


		<section id="about">
			<div class="container">
				<div class="col-lg-12 text-center">
					<h2>ВЫГОДНО</h2>
					<p class="subik">ДЛЯ ВАС</p>
				</div>
				<div class="col-lg-4 icon-box">
					<img src="../assets/img/ti1.svg" alt="">
					<p class="blue-txt">Яхта больше не требует расходов и приносит доход.</p>
				</div>
				<div class="col-lg-4 icon-box">
					<img src="../assets/img/ti2.svg" alt="">
					<p class="blue-txt">Мы обеспечиваем зимнее хранение, поднятие яхты.</p>
				</div>
				<div class="col-lg-4 icon-box">
					<img src="../assets/img/ti3.svg" alt="">
					<p class="blue-txt">Текущий ремонт, обслуживание происходит за наш счёт.</p>
				</div>
				<div class="col-lg-4 icon-box">
					<img src="../assets/img/ti4.svg" alt="">
					<p class="blue-txt">Квалифицированный экипаж на борту от компании.</p>
				</div>
				<div class="col-lg-4 icon-box">
					<img src="../assets/img/ti5.svg" alt="">
					<p class="blue-txt">Расходы по стоянке в яхт -клубе, швартовки несём мы.</p>
				</div>
				<div class="col-lg-4 icon-box">
					<img src="../assets/img/ti6.svg" alt="">
					<p class="blue-txt">Яхта все время находится в  100% рабочем состоянии.</p>
				</div>
			</div>
		</section>


		<section id="about">
			<div class="container">
					<div class="col-lg-5">
						<img src="../assets/img/crew.jpg" class="w-100">
					</div>
					<div class="col-lg-6 col-lg-offset-1">
					<span class="big-letter">У</span>
					<h2>УПРАВЛЕНИЕ</h2>
					<p class="subik">ЭКИПАЖЕМ</p>
					<p class="black-txt">
						Яхта хороша настолько, насколько хорош её экипаж. Мы берём на себя управление экипажем от обучения до выплаты зарплат, обеспечивая эффективную работу капитанов и членов экипажа в интересах наших судовладельцев.
<br><br>
Ищете на борт новую команду?
Компания «Yacht & Travel» является лидером в области подбора персонала на борт, о чём говорит наша современная школа стюардесс «Mazu Steward School», в которой собраны лучшие преподаватели Санкт-Петербурга и разработана специальная программа обучения для кандидатов. Мы тщательно следим за нашими учениками, прогрессом и самостоятельно взращиваем будущих профессионалов по мировым стандартам!

					</p>
				</div>
			</div>
		</section>
		

		<section id="price">
			<div class="container text-center">
				<div class="row">
					<div class="col-lg-12">
						<h2>ВАРИАНТЫ</h2>
						<p class="subik">СОТРУДНИЧЕСТВА</p>
					</div>


				<div class="col-lg-4 variant">
					<h5>ВАРИАНТ 1</h5>
					<p class="black-txt">Предложение подходит для судовладельцев, которые хотят не тратить деньги, но, при этом, долгосрочно зарабатывать на своей яхте без дальнейшей её продажи. Мы предлагаем круглогодичное обслуживание Вашей яхты, зимнее хранение, стоянки, заправки, команду, техническое обслуживание, ремонт и кастомизацию яхты и прочие бонусы. Договор заключается минимум на 5 лет.</p>
				</div>
				<div class="col-lg-4 variant">
					<h5>ВАРИАНТ 2</h5>
					<p class="black-txt">Предложение подходит для судовладельцев, которые хотят зарабатывать на своей яхте с последующей её продажей. Мы предлагаем гарантированный выкуп Вашей яхты после определённого срока эксплуатации. Сроки договора выкупа определяются после оценки состояния и типа яхты. В данное предложение входит ежегодное обслуживание, команда, стоянки и хранение. </p>
				</div>
				<div class="col-lg-4 variant">
					<h5>ВАРИАНТ 3</h5>
					<p class="black-txt">Предложение подходит для судовладельцев, которые готовы сдавать свою яхту в чартер на сезон через доверительную компанию, и получать фиксированную прибыль на постоянной основе. Стоимость фиксированного дохода обговаривается индивидуально после оценки Вашей яхты. В данное предложение входит полное обслуживание в сезон эксплуатации, в том числе, стоянка в яхт-клубе и профессиональная команда. Договор заключается на сезон.</p>
				</div>
				</div>


				

				<div class="row">
					<div class="col-lg-12 text-center">

						<br><br><br>
						<button class="simple-btn" @click="openPop = !openPop">СОТРУДНИЧАТЬ С НАМИ</button>
					</div>
				</div>

			</div>
		</section>
	</div>

</template>

<script>
import simpleForm from '../components/ui/simpleForm.vue'
	export default{
		components: {simpleForm},
		data(){
			return{
				openPop: false,

			}
		},
		methods:{
			closePop(){
				this.openPop = false
			}
		}

	}
</script>

<style scoped>
#price{
	padding:100px 0;
}

#about{
	background-image: none;
}
#inner {
	background-image: url(../assets/img/trust.jpg);
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