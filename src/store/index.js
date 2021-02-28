import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import yachts from '../store/yachts'
import serv from '../store/serv'

export default new Vuex.Store({
	modules: {
		yachts,
		serv
	}
}) 