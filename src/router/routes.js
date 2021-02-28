import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import singleYacht from '../pages/singleYacht.vue'

const routes = [
		{
			path: '/',
			component: Home
		},
		{
			path: '/:id',
			component: singleYacht,
			props: true
		},
	]

export default routes;