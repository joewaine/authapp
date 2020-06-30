<template>
    <main>
      <section class="coverflowsection">


   <!-- {{$store.state.inventory.offerings[0].items}} -->

        <CoverFlow :products="products" />
     <!-- <br>
       <button id="first">first</button>
  <button id="goto6">Go to #6</button>
  <button id="last">last</button> -->
        <div class="bottom-button"><a href="https://www.exploretock.com/mamnoonrestaurant/" target="_blank">
        <div class="outer">
          <OrderStar />
          
          </div></a></div>
      </section>
<br>
<br>
<br>



  <section :id="offering.category" v-for="(offering,index) in inventory.offerings" v-bind:key="offering.title" class="section hero is-primary is-fullheight" v-bind:class="{familymeal : index === 0}">

        <div v-if="offering.visible" v-bind:class="{ carousel: !offering.reservationBlock, shortcarousel: offering.reservationBlock }">
        <h4 v-if="!offering.insideHeader">{{offering.title}}   <span v-if="offering.tock">{{currentDay}}</span></h4>

<p class="description-para">
{{offering.description}}
</p>

      <carousel v-if="!offering.reservationBlock" :items="offering.slideNo ? offering.slideNo : 3" :loop="false" :dots="false" :nav="false">


<!-- <template v-if="index === 0" slot="prev"><span class="prev"><Prev /></span></template> -->
<!-- <template v-else class="subprev" slot="prev"><span class="prev"><Prev /></span></template> -->



<template class="subprev" slot="prev"><span class="prev"><Prev /></span></template>

 

<div v-for="item in offering.items" v-bind:key="item.name" style="text-align:center;margin-top: 15px;">

<h4 v-if="offering.insideHeader" class="insideHeader">{{offering.title}}  /  {{item.month}} / <span v-if="offering.tock">{{currentDay}}</span></h4>
              
<!-- <img v-if="offering.tock" v-bind:src="'https://affectionate-gates-5cf4d4.netlify.app/img/ala/' + currentDay + '.jpg'" /> -->

<img v-if="offering.tock" v-bind:src="'./assets/ala/' + currentDay + '.jpg'" />



<img v-else v-bind:src="item.image" />    
            {{item.description}}
               <template v-if="item.caviarLink">
              <div class="order-bottom">
                {{item.name}}
                       <div class="order-panel">
              <a :href="item.caviarLink" target="_blank"><Order /></a>
                            </div>
                            </div>
            </template>
            <template v-if="item.statistics">
              <div class="order-bottom">
                {{item.name}}
                       <div class="order-panel">
                              <button class="snipcart-add-item"
                            v-bind:data-item-id="item.name"
                            v-bind:data-item-price="item.price"
                            v-bind:data-item-image="item.image"
                            v-bind:data-item-name="item.name">
                            <Order />
                            </button>
                            </div>
                            </div>
            </template>












<div v-if="item.quote">

<div v-if="item.quote.length > 40">
<span class="sm">{{item.quote}}<br>{{item.author}}</span>
</div>
<div v-else-if="item.quote.length > 20">
<span class="md">{{item.quote}}<br>{{item.author}}</span>
</div>
<div v-else>
<span class="lg">{{item.quote}}<br>{{item.author}}</span>
</div>
</div>
<div v-if="offering.tockButton" class="order-bottom order-top">
  
  <span class="month">
  {{item.month}}
  </span>
<div class="days">
<span v-for="(day,index) in item.days" v-bind:key="day">
  <span @click="dayChange(index)">
    {{index + 1}}
  </span>
</span>
</div>
</div>
          </div>






<template v-if="index === 0" slot="next"></template>
<template v-else class="subnext" slot="next"><span class="next"><Next /> </span></template>


        </carousel>  



<div v-if="offering.tockButton" class="order-bottom">
              <div id="mama-dummy-button" class="TockButton-buttonContainer" style="cursor: pointer;">
                <div data-tock-reserve="true" class="TockButton-link">
                  <div class="TockButton TockButton-blue">
                    <span class="TockWidget-B2" @click="loggit()"><OrderStar /></span>
                  </div>
                </div>
              </div>
</div>
     <div class="width-container" v-if="offering.reservationBlock">
      <Mbar /> <Mamnoon />
      </div>
</div>

 
      
      </section>



<Newsletter />
  </main>





</template>

<script>

import carousel from 'vue-owl-carousel'


import Order from "@/components/svgIcons/Order";
import OrderStar from "@/components/svgIcons/OrderStar";


import Next from "@/components/svgIcons/Next";
import Prev from "@/components/svgIcons/Prev";

import Mamnoon from "@/components/svgIcons/Mamnoon";
import Mbar from "@/components/svgIcons/Mbar";

import Newsletter from "@/components/Newsletter";
import CoverFlow from "@/components/CoverFlow";


export default {
  components: { carousel, Order, OrderStar, Next, Prev, Newsletter, CoverFlow, Mbar, Mamnoon },
  computed: {
    count () {
      return this.$store.state.count
    },
    names () {
      return this.$store.state.names
    },
    cart () {
      return this.$store.state.cart
    }
  },
  data () {
    return this.$store.state.inventory
  },
    data() {
    return {
      inventory: this.$store.state.inventory,
      products: this.$store.state.inventory.offerings[0].items
    };
  },
  methods: {
    dayChange(e) {
// console.log(123)




this.currentDay = e + 1

    },
    loggit () {
      console.log(134)
    },
    toggle: function (event) {
      if (event.target.classList.contains('is-open')) {
        this.$store.commit('decrement')
        event.target.classList.remove('is-open')
      } else {
        event.target.classList.add('is-open')
        this.$store.commit('increment')
      }
    },
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    },
    increment2 (name) {
      this.$store.commit('increment2', { name })
    },
    removeFromCart (price) {
      this.$store.commit('removeFromCart', { price })
    },
    confirmOrder (timeslot) {
      if (event.target.classList.contains('reserved')) {
        this.$store.commit('unreserveFamilyMeal', { timeslot })
      } else {
        this.$store.commit('reserveFamilyMeal', { timeslot })
      }
    },
    changedAlert(){
      console.log('changed')
    },
        async showProducts() {
          // let response = await this.$http.get('/product/snipcartproducts') 
let response = this.$store.state.inventory.offerings[0]

          this.products = response
    }  
  },
  created(){
    var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
this.currentDay = dd  
  
    this.showProducts()
  }
}
</script>


<style lang="scss">
.reserved{
  background: red;
}

.not-available{
  background: #666666;
  color: #ffffff;
  pointer-events: none;
}


.order-button{
  width: 33.33%;
  padding: 20px 0;
}


h4{
  text-align: center;
}

.is-fullheight,
.familymeal,
.narrow{
  background-color: #F05D5B;


  h4{
        color: #FFF367;
  }
}




.section.hero.familymeal{
      width: 88%;
      margin: 0 auto;
}

// [id^=carousel_prev_]{
//   position: absolute;
//   top: 0;
//   left: 33%;
// }

// [id^=carousel_next_]{
//   position: absolute;
//   top: 0;
//   right: 33%;
// }





.is-fullheight [id^=carousel_prev_]{
  position: absolute;
  top:0px;
  left: 33%;
  // display: none;
}

.is-fullheight [id^=carousel_next_]{
  position: absolute;
  top: 0px;
  right: 33%;
  // display: none;
}



// .is-fullheight.familymeal [id^=carousel_prev_]{

//     position: absolute;
//     bottom: 120px;
//     top: initial;
//     left: 3%;
//     z-index: 20;
// }

// .is-fullheight.familymeal [id^=carousel_next_]{





//     position: absolute;
//     bottom: 120px;
//     top: initial;
//     right: 3%;
//     z-index: 20;

// }




  .is-fullheight{
  padding: 20px 0 0 0;
  }

// .is-fullheight,
.familymeal{
  padding: 0 0 0 0;
  }


.order-bottom{
  background: #FFF367;
  padding: 10px 0;
  color: black;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  font-size: 18px;
    font-weight: 500;
    line-height: 1.2;

}
  
.order-bottom.order-top{
background: #F1765B;
min-height: 90px;
text-align: center;
}

.order-panel{
    padding: 10px 0;
}



#mama-dummy-button{
  width: 70px;
  margin: 0 auto;
}




.carousel{
  margin-bottom: 100px;
}



@media only screen and (max-width: 1080px) {

.carousel{
  margin-bottom: 40px;
}


}




#testimonials .owl-item{
  color: #ffffff;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: 500;
  height: 100%;
  margin-top: 16px;

    &:nth-child(odd){
background: #F1765B;
    }


    &:nth-child(even){
      background: #F58E58;
    }


}


 .owl-stage {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;

    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

.owl-item{
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: auto !important;
}


#testimonials .owl-item > div{
  padding: 30px;
  text-align: left;
  padding-top: 15px;
}


#testimonials .owl-item > div > div{
  text-align: left;
}



.sm{
  font-size: 16px;
}

.md{
  font-size: 24px;
}


.lg{
font-size: 64px;
}


.days{

margin: 10px auto 5px;
  width: 80%;

}
.days span{
color: white;
display: inline-block;
font-style: italic;
margin-left: 5px;
margin-right: 5px;
line-height: 30px;
cursor: pointer;
}

.month{
  color: white;
display: inline-block;
font-style: italic;
margin-left: 5px;
margin-right: 5px;
// line-height: 30px;
cursor: pointer;
}





.insideHeader{
  margin-bottom: 20px;
  margin-top: -15px;
}




button.snipcart-add-item{
  border: 0;
  background: transparent;



&:focus,
&:active {
  outline: none;
  box-shadow: none;
}


}

.snipcart-modal__container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 110 !important;
    background-color: #f0f5f6;
    top: 140px !important;
}




.top-widget{
width: 100%;
height: 500px;
background: green;
}





.coverflowsection{
    padding: 20px 0 0 0;
    height: 600px;
background-color: #F05D5B;
overflow: hidden;
position: relative;
  h4{
    color: #FFF367;
  } 
  p{
    color: white;
    width: 80%;
    margin: 20px auto;
  }
}



.bottom-button{
position: absolute;
bottom: 0;
}


.width-container{
width: 100%;
overflow: auto;
}


section{
  clear: both;
}


.shortcarousel{
      margin-bottom: 100px;
}


.description-para{
  color: white;
  margin: 10px auto 20px;
  width: 80%;
}

</style>