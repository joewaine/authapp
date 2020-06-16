<template>
    <main>


<section style="text-align: center;">

<br><br><br>
  <h1>Coming Soon!</h1>



<div style="cursor:pointer;" id="mama-dummy-button" class="TockButton-buttonContainer">
  <div data-tock-reserve="true" class="TockButton-link">
    <div class="TockButton TockButton-blue">
      <span class="TockWidget-B2">Mama Family Meal
        </span>
        </div>
        </div>
        </div>




<div style="cursor:pointer;" id="mama-dummy-button" class="TockButton-buttonContainer">
  <div data-tock-reserve="true" class="TockButton-link">
    <div class="TockButton TockButton-blue">
      <span class="TockWidget-B2">Mama Family Meal 2
        </span>
        </div>
        </div>
        </div>



<div style="cursor:pointer;" id="mama-dummy-button" class="TockButton-buttonContainer">
  <div data-tock-reserve="true" class="TockButton-link">
    <div class="TockButton TockButton-blue">
      <span class="TockWidget-B2">Mama Family Meal 3
        </span>
        </div>
        </div>
        </div>





  </section>


    </main>
</template>

<script>

import carousel from 'vue-owl-carousel'

export default {
  components: { carousel },
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
  methods: {
    toggle: function (event) {
      if (event.target.classList.contains('is-open')) {
        this.$store.commit('decrement')
        event.target.classList.remove('is-open')
      } else {
        event.target.classList.add('is-open')
        this.$store.commit('increment')
      }
    },
    async showCartData() {

try {
    await Snipcart.api.cart;
await console.log(Snipcart.api.cart);

} catch (error) {
    console.log(error);
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
    }
  }
}
</script>


<style>
.carousel{
  margin-bottom: 100px;
}

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



h1{
color: #F05D5B;
}
</style>