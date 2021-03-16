import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import yachts from '../store/yachts'
import serv from '../store/serv'
import tours from '../store/tours'
import team from '../store/team'

export default new Vuex.Store({
	modules: {
		yachts,
		serv,
		tours,
		team
	}
}) 