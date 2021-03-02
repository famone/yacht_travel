<template>
	<div>
		<section id="inner">
			<div class="container text-center">
				<h1>YACHT&TRAVEL FUND</h1>
				<button class="gold-btn">СТАТЬ ИНВЕСТОРОМ</button>
			</div>
		</section>
		<section id="about">
			<div class="container">
					<div class="col-lg-6">
					<span class="big-letter">Y</span>
					<h2>YACHT&TRAVEL FUND</h2>
					<p class="subik">Закрытый паевой инвестиционной фонд</p>
					<p class="black-txt">
					Компания «YACHT&TRAVEL» –  многолетний лидер рынка предоставления услуг в области морских путешествий предлагает уникальную возможность для инвесторов стать совладельцем высокорентабельных активов –  морских и речных судов. 

					</p>
					<p class="subik">Пайщики (инвесторы) «YACHT&TRAVEL FUND» получают:</p>
					<div class="row">
						<div class="col-lg-6">
							<h5>1</h5>
							<p class="black-txt">Полное владение активами (имуществом) фонда</p>
						</div>
						<div class="col-lg-6">
							<h5>2</h5>
							<p class="black-txt">Стабильная дивидендная доходность – 12-16 % в год</p>
						</div>
						<div class="col-lg-6">
							<h5>3</h5>
							<p class="black-txt">Срок вложений – от 2 до 15 лет</p>
						</div>
						<div class="col-lg-6">
							<h5>4</h5>
							<p class="black-txt">Гарантия юридической защиты вложенных средств</p>
						</div>
						<div class="col-lg-6">
							<h5>5</h5>
							<p class="black-txt">Высокая ликвидность активов при низкой амортизации (1-2%)</p>
						</div>
						<div class="col-lg-6">
							<h5>6</h5>
							<p class="black-txt">Операционное управление активами опытной командой (обслуживание, страхование и т.п.)</p>
						</div>
						
					</div>
				</div>
				<div class="col-lg-6">
					<img src="../assets/img/fund2.jpg" class="w-100">
				</div>
			</div>
		</section>


		<section id="program">
			<div class="container">
				<div class="col-lg-12 text-center">
					<h2>ИНВЕСТИЦИОННОЕ ПРЕДЛОЖЕНИЕ</h2>
					<p class="subik">ЗПИФ «YACHT&TRAVEL FUND» </p>
					<p class="white-txt">Закрытый паевой инвестиционной фонд (ЗПИФ) «YACHT&TRAVEL FUND» – обособленный имущественный комплекс, совокупные активы которого принадлежат всем инвесторам.
Команда инвестирует в покупку морских и речных судов с последующим получением рентных платежей, направляемых на выплату дивидендов и (или) их реинвестирование.</p>
				</div>
				
			</div>
		</section>



		

		<section id="price">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<span class="big-letter">К</span>
						<h2>КАК СТАТЬ ИНВЕСТОРОМ</h2>
						<p class="subik">«YACHT&TRAVEL FUND»?</p>
					</div>


				<div class="col-lg-4 uslovia">
					<h5>Личная встреча</h5>
					<p class="black-txt">Обсуждение всех возможных нюансов сотрудничества.</p>
				</div>
				<div class="col-lg-4 uslovia">
					<h5>Условия</h5>
					<p class="black-txt">Обозначение суммы и сроков инвестиций, знакомство с Правилами Фонда и Инвестиционной декларацией.</p>
				</div>
				<div class="col-lg-4 uslovia">
					<h5>Договор</h5>
					<p class="black-txt">Подписание договора доверительного участия в фонде между Инвестором и ЗПИФ «YACHT&TRAVEL FUND».</p>
				</div>
				<div class="col-lg-4 uslovia">
					<h5>Активы</h5>
					<p class="black-txt">Инвестор получает количество паев соразмерно инвестированным средствам в фонде и обладает частью всех активов ЗПИФ «YACHT&TRAVEL FUND»</p>
				</div>
				<div class="col-lg-4 uslovia">
					<h5>Доходность</h5>
					<p class="black-txt">Раз в полгода гарантировано получает от 12 до 16% годовых от ЗПИФ «YACHT&TRAVEL FUND».</p>
				</div>
				<div class="col-lg-4 uslovia">
					<h5>Гарантия</h5>
					<p class="black-txt">Имеет возможность отозвать вложенные средства в любой момент.</p>
				</div> 


				</div>


				

				<div class="row">
					<div class="col-lg-12 text-center">

						<br><br><br>
						<button class="simple-btn">СТАТЬ ИНВЕСТОРОМ</button>
						<button class="simple-btn" style="margin-left: 15px;">СКАЧАТЬ ПРЕЗЕНТАЦИЮ</button>
					</div>
				</div>

			</div>
		</section>
	</div>

</template>

<script>
	export default{
		
		data(){
			return{
				
			}
		}

	}
</script>

<style scoped>
.uslovia{
	margin-bottom: 40px;
}
.gold-btn{
	position: relative;
}
.icon-box{
	margin-bottom: 40px;
	padding: 0 15px;
}
.icon-box img{
	height: 60px;
	margin-bottom: 15px;
}

#price{
	padding:100px 0;
}

#about{
	background-image: none;
}
#inner {
	background-image: url(../assets/img/fund1.jpg);
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