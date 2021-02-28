<template>
	<div>
		<Main />
		<Yachts :title=" 'СУДНА' " />
		<About />
		<Tours />
		<Additions />
	</div>
</template>

<script>
import Main from '../components/Main.vue'
import Yachts from '../components/Yachts.vue'
import About from '../components/About.vue'
import Tours from '../components/Tours.vue'
import Additions from '../components/Additions.vue'

export default{
	components: {Main, Yachts, About, Tours, Additions},
}
</script>