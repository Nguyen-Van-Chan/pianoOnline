import Vue from 'vue';
import Vuex from 'vuex';
import autoplay from './modules/autoplay';

// store module
import AutoPianoModule from '@/store/modules/autopiano';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		AutoPianoModule,
		autoplay
	}
});