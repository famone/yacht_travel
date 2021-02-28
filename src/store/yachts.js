
import axios from 'axios'

const yachts = {
	namespaced: true,
	state: {
		yachts: [
			{
				name: 'AZIMUT 42',
				type: 'ЯХТА',
				city: 'Москва',
				persons: '4-8',
				speed: '50',
				price: 20000,
				dayPrice: 50000,
				images: [require('../assets/img/yacht1.jpg'), require('../assets/img/yacht1.jpg')],
				slug: 'azimut-42',
				len: '35,0',
				width: '7,5',
				osadka: '1,9',
				rooms: 3,
				speed: 21,
				speedMax: 26,
				additions: ['Джакузи', 'Танцпол', 'Кондиционер', 'Караоке'],
				descr: 'HEED is a 35.00m / 115ft Motor Superyacht built in 2019 by Azimut with interior design by Salvagni Architetti. Sleeping 10 guests in 5 cabins and with a crew of 6. Cruising at 21.00 kn/ph with a top speed of 26.00 kn/ph.'

			},
			{
				name: 'AZIMUT 42',
				type: 'ЯХТА',
				city: 'Москва',
				persons: '4-8',
				speed: '50',
				price: 20000,
				dayPrice: 50000,
				images: [require('../assets/img/yacht1.jpg'), require('../assets/img/yacht1.jpg')],
				slug: 'azimut-43',
				len: '35,0',
				width: '7,5',
				osadka: '1,9',
				rooms: 3,
				speed: 21,
				speedMax: 26,
				additions: ['Джакузи', 'Танцпол', 'Кондиционер', 'Караоке'],
				descr: 'HEED is a 35.00m / 115ft Motor Superyacht built in 2019 by Azimut with interior design by Salvagni Architetti. Sleeping 10 guests in 5 cabins and with a crew of 6. Cruising at 21.00 kn/ph with a top speed of 26.00 kn/ph.'

			},
			{
				name: 'AZIMUT 42',
				type: 'ЯХТА',
				city: 'Москва',
				persons: '4-8',
				speed: '50',
				price: 20000,
				dayPrice: 50000,
				images: [require('../assets/img/yacht1.jpg'), require('../assets/img/yacht1.jpg')],
				slug: 'azimut-44',
				len: '35,0',
				width: '7,5',
				osadka: '1,9',
				rooms: 3,
				speed: 21,
				speedMax: 26,
				additions: ['Джакузи', 'Танцпол', 'Кондиционер', 'Караоке'],
				descr: 'HEED is a 35.00m / 115ft Motor Superyacht built in 2019 by Azimut with interior design by Salvagni Architetti. Sleeping 10 guests in 5 cabins and with a crew of 6. Cruising at 21.00 kn/ph with a top speed of 26.00 kn/ph.'

			},
			{
				name: 'AZIMUT 42',
				type: 'ЯХТА',
				city: 'Москва',
				persons: '4-8',
				speed: '50',
				price: 20000,
				dayPrice: 50000,
				images: [require('../assets/img/yacht1.jpg'), require('../assets/img/yacht1.jpg')],
				slug: 'azimut-45',
				len: '35,0',
				width: '7,5',
				osadka: '1,9',
				rooms: 3,
				speed: 21,
				speedMax: 26,
				additions: ['Джакузи', 'Танцпол', 'Кондиционер', 'Караоке'],
				descr: 'HEED is a 35.00m / 115ft Motor Superyacht built in 2019 by Azimut with interior design by Salvagni Architetti. Sleeping 10 guests in 5 cabins and with a crew of 6. Cruising at 21.00 kn/ph with a top speed of 26.00 kn/ph.'

			},
		]
  	},
	mutations: {
		
	},
	actions: {
         
	},
	getters: {
		getYachts(state){
			return state.yachts
		},
		getSingleYacht: (state) => (id) =>{
			return state.yachts.find(item => item.slug == id)
		}
	}
}

export default yachts


