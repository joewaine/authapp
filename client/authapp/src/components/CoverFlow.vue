<template>
<div>



<div>
<h4>plan ahead - family meal calendar</h4>
<p id="description">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id venenatis a condimentum vitae sapien pellentesque
</p>

	</div>

<!-- {{products.items}} -->



<!-- <button id="prevFlow">prev</button> -->
  <!-- <button id="goto6">Go to #6</button> -->
  <div id="title" data-current=""></div>
<!-- <div id="current-index"></div> -->
  <!-- <button id="nextFlow">next</button> -->



<div class="coverflow">



<div v-for="(prod, index) in products.items" :key="index" class="cover" :data="prod.name">

<!-- {{prod.name}} -->
<img :src="prod.image" />
</div> 

  <!-- <div class="cover">A</div>
  <div class="cover">B</div>
  <div class="cover">C</div>
  <div class="cover">D</div>
  <div class="cover">E</div>
  <div class="cover">F</div>
  <div class="cover">G</div>
  <div class="cover">H</div>
  <div class="cover">I</div>
  <div class="cover">J</div>
  <div class="cover">K</div>
  <div class="cover">L</div> -->


</div>


<!-- <div id="preview" class="coverflow">
	<div id="preview-coverflow">
<div v-for="(prod, index) in products.items" :key="index" class="cover">
    <div class="header">
{{prod.name}}
<img :src="prod.image" />
{{prod.price}}
	</div>
</div>
</div>
</div> -->

<!-- <div v-for="prod in products.items" :key="index">

{{prod.name}}
<img :src="prod.image" />
{{prod.title}}

</div> -->

		<!-- <div id="preview" class="coverflow">
			<div id="preview-coverflow"> -->


<!-- {{products.items}} -->





					<!-- <Coverslide :image="prod.image" v-for="(prod,index) in products.items" :key="index" /> -->




			<!-- </div>
		</div> -->
  </div>
</template>


<script>


import Coverslide from "@/components/Coverslide.vue";



export default{
		name: 'coverflow',
	data () {
		return {
			slidesLength: 20,
	
		}
	},
	components: {
		Coverslide
	},
	props: ['products'],
    methods: {
showMessage(){
	this.$store.commit('showMessage')
}
	}

}
</script>
<style lang="scss">
// 				#preview {
// 					padding-bottom: 100px;
// 					margin: 30px auto 50px;
// 				}

// 				#preview-coverflow .cover {
// 					cursor:		pointer;
// 					width:		320px;
// 					height:		240px;
// 					// box-shadow:	0 0 4em 1em white;




// 				}


// #preview-coverflow .cover.current{
// 	display: block;
//     position: absolute;
//     left: 410px;
//     z-index: 7;
//     transform: scale(1, 1) perspective(555px) rotateY(0deg) !important;
//     filter: none;
// }


// @media only screen and (max-width: 768px) {
// #preview-coverflow .cover.current{
// 	display: block;
//     position: absolute;
//     left: 410px;
//     z-index: 7;
//     transform: scale(1, 1) perspective(555px) rotateY(0deg) !important;
//     filter: none;
// }
// }

				// #preview-coverflow .cover {
				// 	cursor:		pointer;
				// 	width:		320px;
				// 	height:		240px;
				// 	box-shadow:	0 0 4em 1em white;
				// }
		

#title{
	color: white;
font-weight: bold;
text-align: center;
width: 100%;
margin-bottom: 30px;
}

 </style>
