import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import proj from '../store/proj'
import serv from '../store/serv'

export default new Vuex.Store({
	modules: {
		proj,
		serv
	}
}) 