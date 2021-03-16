import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import singleYacht from '../pages/singleYacht.vue'
import singleTour from '../pages/singleTour.vue'
import Mazu from '../pages/Mazu.vue'
import Trust from '../pages/Trust.vue'
import Fund from '../pages/Fund.vue'
import Addition from '../pages/Addition.vue'
import Tours from '../pages/Tours.vue'
import Yachts from '../pages/Yachts.vue'
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
			path: '/yachts',
			component: Yachts
		},
		{
			path: '/about',
			component: About
		},
		{
			path: '/tours/:id',
			component: singleTour,
			props: true
		},
		{
			path: '/tours',
			component: Tours
		},
		{
			path: '/dopolnitelno',
			component: Addition
		},
		{
			path: '/dopolnitelno/mazu-school',
			component: Mazu
		},
		{
			path: '/dopolnitelno/doveritelnoe-upravlenie',
			component: Trust
		},
		{
			path: '/dopolnitelno/yacht-and-travel-fund',
			component: Fund
		},
		{
			path: '*',
			component: Notfound
		},
	]

export default routes;