import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import singleYacht from '../pages/singleYacht.vue'
import Mazu from '../pages/Mazu.vue'
import Trust from '../pages/Trust.vue'
import Fund from '../pages/Fund.vue'
import Notfound from '../pages/Notfound.vue'


const routes = [
		{
			path: '/',
			component: Home
		},
		{
			path: '/yachts/:id',
			component: singleYacht,
			props: true
		},
		{
			path: '/mazu-school',
			component: Mazu
		},
		{
			path: '/doveritelnoe-upravlenie',
			component: Trust
		},
		{
			path: '/yacht-and-travel-fund',
			component: Fund
		},
		{
			path: '*',
			component: Notfound
		},
	]

export default routes;