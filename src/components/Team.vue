<template>
	<section id="team">
		<div class="container">
			<div class="col-lg-12">
				<span class="big-letter">Э</span>
				<h2>ЭКИПАЖ</h2>
				<p class="subik">YACHT & TRAVEL</p>
			</div>

			<div class="row scroll-row">
				<div class="col-lg-3" v-for="member in team">
				<div class="yacht-card">
					<div class="yacht-img" :style="{'background-image': 'url(' + member.img + ')'}">
						<h3>{{member.name}}</h3>
					</div>
					<div class="yacht-body">
						<p class="type">{{member.status}}</p>
					</div>
				</div>
			</div>
			</div>
		</div>
	</section>
</template>



<script>
import {mapGetters} from 'vuex'

	export default{
		computed:{
			...mapGetters({
				team: "team/getTeam"
			})
		}
	}
</script>

