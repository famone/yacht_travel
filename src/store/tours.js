
import axios from 'axios'

const tours = {
	namespaced: true,
	state: {
		tours: [
			{
				slug: 'karelia',
				name: 'КАРЕЛИЯ',		
				images: [ require('../assets/img/karel.jpg'), require('../assets/img/karel.jpg'), require('../assets/img/karel.jpg'), require('../assets/img/karel.jpg') ],
				descr: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, omnis. Facere earum, assumenda officiis nulla in ex deleniti possimus tenetur voluptates odio architecto quod deserunt magni quos, qui quisquam ea fugit quis, tempore enim blanditiis quibusdam. Aperiam tempore, sequi iste nulla officiis velit, placeat provident tenetur exercitationem odit voluptatem natus.',
				price: 2800,
				persons: '4-10',
				additions: ['Бар', 'Экскурсовод', 'Караоке', 'Завтраки'],
				stops: ['Санкт-Петербург', 'Кронштадт', 'Крепость Орешек', 'Корелия', 'Филипины']
			},
			{	
				slug: 'ispania',
				name: 'ИСПАНИЯ',		
				images: [ require('../assets/img/karel.jpg'), require('../assets/img/karel.jpg'), require('../assets/img/karel.jpg'), require('../assets/img/karel.jpg') ],
				descr: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, omnis. Facere earum, assumenda officiis nulla in ex deleniti possimus tenetur voluptates odio architecto quod deserunt magni quos, qui quisquam ea fugit quis, tempore enim blanditiis quibusdam. Aperiam tempore, sequi iste nulla officiis velit, placeat provident tenetur exercitationem odit voluptatem natus.',
				price: 2800,
				persons: '4-10',
				additions: ['Бар', 'Экскурсовод', 'Караоке', 'Завтраки'],
				stops: ['Санкт-Петербург', 'Кронштадт', 'Крепость Орешек', 'Корелия', 'Филипины']
			},
			{
				slug: 'kronshtadt',
				name: 'кронштадт',		
				images: [ require('../assets/img/karel.jpg'), require('../assets/img/karel.jpg'), require('../assets/img/karel.jpg'), require('../assets/img/karel.jpg') ],
				descr: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, omnis. Facere earum, assumenda officiis nulla in ex deleniti possimus tenetur voluptates odio architecto quod deserunt magni quos, qui quisquam ea fugit quis, tempore enim blanditiis quibusdam. Aperiam tempore, sequi iste nulla officiis velit, placeat provident tenetur exercitationem odit voluptatem natus.',
				price: 2800,
				persons: '4-10',
				additions: ['Бар', 'Экскурсовод', 'Караоке', 'Завтраки'],
				stops: ['Санкт-Петербург', 'Кронштадт', 'Крепость Орешек', 'Корелия', 'Филипины']
			},
		],
  	},
	mutations: {
		
	},
	actions: {
        
	},
	getters: {
		getTours(state){
			return state.tours
		},
		getSingleTour: (state) => (id) =>{
			return state.tours.find(item => item.slug == id)
		}
	}
}

export default tours


