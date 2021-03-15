<template>
	<div class="pop" @click="closePop($emit)">
		<div class="pop-box text-center" @click.stop>
			<div class="cross" @click="closePop($emit)">✕</div>
			<h2>НАПИШИТЕ НАМ</h2>
			<p class="subik">НАШИ МЕНЕДЖЕРЫ ОТВЕТЯТ В ТЕЧЕНИИ 10 МИНУТ</p>
			<form action="">
				<label for="">Тема:</label>
				<div class="error" v-if="$v.subj.$dirty && !$v.subj.required">Поле обязательно для заполнения</div>
				<input type="text" placeholder="Тема письма"  v-model="subj" :class="{errorInp :$v.subj.$dirty && !$v.subj.required}">
				<label for="">Имя:</label>
				<div class="error" v-if="$v.name.$dirty && !$v.name.required">Поле обязательно для заполнения</div>
				<input type="text" placeholder="Ваше имя" v-model="name" :class="{errorInp : $v.name.$dirty && !$v.name.required}">

				<label for="">Телефон:</label>
				<div class="error" v-if="$v.tel.$dirty && !$v.tel.required">Поле обязательно для заполнения</div>
				<input type="text" placeholder="+7 " v-mask="'+7 (###)-###-##-##'" v-model="tel" 
				:class="{errorInp : $v.tel.$dirty && !$v.tel.required}">
				<button class="submit-btn" @click.prevent="submitForm">
					<span v-if="!load">ОТПРАВИТЬ</span>
					<loading v-else />
				</button>
				<p style="color: green;" v-if="sended"><br>Ваше письмо успешно отправлено</p>
				<p style="color: red;" v-if="notSended"><br>При отправке произошла ошибка</p>
			</form>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import loading from '../ui/loading.vue'
import { required, minLength } from "vuelidate/lib/validators";

	export default{
		components: {loading},
		props:{
			messageSubject: {
				required: true,
				type: String
			}
		},
		methods: {
			closePop(){
				this.$emit('closePop')
			},
			submitForm(){

				if(this.$v.$invalid) {
					this.$v.$touch();
					return;
				}

				this.load = true

				let emailBody = {
				subject: this.subj,
				yourName: this.name,
				yourPhone: this.tel
			}

			var form = new FormData();

			for (var field in emailBody){
				form.append(field, emailBody[field]);
			};

			axios
            	.post('https://yachtsrus.ru/wp-json/contact-form-7/v1/contact-forms/42/feedback', form)
                .then((response) => {
                    console.log(response);
                    this.load = false
                    this.subj = ''
                    this.name = ''
                    this.tel = ''
                    this.sended =  true
                })
                .catch((error) => {
                	this.load = false
                	this.notSended =  true
                    alert('Произошла ошибка!')
                });
			}
		},
		data(){
			return{
				subj: '',
				name: '',
				tel: '',
				load: false,
				sended: false,
				notSended: false
			}
		},
		validations: {
			subj: {
				required
			},
			name: {
				required
			},
			tel: {
				required
			}
		},
		created(){
			this.subj = this.messageSubject
		}
	}
</script>

<style scoped>
.pop{
	position: fixed;
	z-index: 110;
	background-color: rgba(25,37,49, .8);
	display: flex;
	justify-content: center;
	align-items: center;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
}
.cross{
	position: absolute;
	top: 10px;
	right: 20px;
	font-size: 25px;
	color: #192531;
	cursor: pointer;
}
.pop-box{
	max-width: 600px;
	background-color: #fff;
	border-radius: 10px;
	padding: 60px 50px;
	position: relative;
}
input{
	font-size: 16px;
	color: #192531;
	font-weight: 500;
	text-transform: uppercase;
	padding:10px;
	border: none;
	border-radius: 0!important;
	border-bottom: 1px #192531 solid;
	width: 100%;
	margin-bottom: 20px;
}
.submit-btn{
	font-size: 16;
	font-weight: 600;
	letter-spacing: 0.1em;
	color: #fff;
	border: none;
	border-radius: 50px;
	padding:15px 32px;
	background-color: #BE8D55;
	transition: all .3s ease;
	width: 155px;
}
.submit-btn:hover{
	background-color: #192531;
	color: #fff;
}
.errorInp{
	border-bottom: 1px red solid;
}
.error{
	color: red;
	font-size: 12px;
}
@media (max-width: 512px){
	.pop-box{
		width: 90%;
		padding:40px 20px;
	}
}
</style>