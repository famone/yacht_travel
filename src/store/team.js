
import axios from 'axios'

const team = {
	namespaced: true,
	state: {
		team: [
			{
				name: 'Рада Рада',
				img: require('../assets/img/rada.jpg'),
				status: 'Директор'
			},
			{
				name: 'Джек Воробей',
				img: 'https://radiokp.ru/sites/default/files/styles/max_width_1200px/public/2020-03/1_3.jpeg?itok=_RGF8-G_' ,
				status: 'Капитан'
			},
			{
				name: 'Эдвард Титч',
				img: 'http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk72CazcsBfFbKSKBrBOmy0qaKTM5SRkZCeTgDn6uOyic' ,
				status: 'Пират'
			},
			{
				name: 'Томас Тью',
				img: 'https://www.eg.ru/wp-content/uploads/2017/06/66878113720084051.jpg' ,
				status: 'Пират'
			},
			{
				name: 'Сэр Генри Морган',
				img: 'http://warnet.ws/uploads/media/topic/2020/10/10/22/0a64c4f4adec05795a32.jpg' ,
				status: 'Пират'
			},
			{
				name: 'Джек Рэкхем',
				img: 'https://mfst.igromania.ru/wp-content/uploads/2020/06/rackham02.jpg' ,
				status: 'Пират'
			},
			{
				name: 'Генри Эвери',
				img: 'https://stoneforest.ru/wp-content/uploads/2019/07/cropped-Henry-Avery-1-265x198.jpg' ,
				status: 'Пират'
			},
			{
				name: 'Арудж Барбаросса',
				img: 'https://static1-repo.aif.ru/1/2d/1553290/fbb7152f17ca6fe3d106a98f8f645c3a.jpg' ,
				status: 'Пират'
			}
		],
  	},
	mutations: {
		
	},
	actions: {
        
	},
	getters: {
		getTeam(state){
			return state.team
		}
	}
}

export default team


