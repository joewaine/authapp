<template>
    <main>
      <section :id="offering.category" v-for="offering in offerings" v-bind:key="offering.title" class="section hero is-primary is-fullheight">
        <div v-if="offering.visible" class="carousel">
       <h4>{{offering.title}}</h4>
        <carousel :items="offering.slideNo ? offering.slideNo : 3">
          <div v-for="item in offering.items" v-bind:key="item.name">
            {{item.name}} ${{item.price}}
            
            <img v-bind:src="item.img" />
{{item.description}}
            <div class="order-panel">
          <template v-if="item.availableFamilyMeals">
          <br>
                <button class="order-button" v-bind:class="{ reserved: meal.reserved === true, 'not-available': meal.amountRemaining === 0 }" @click="confirmOrder(meal.timeslot)" v-for="(meal) in item.availableFamilyMeals" v-bind:key="meal.timeslot">
                    {{meal.timeslot}}&nbsp;({{meal.amountRemaining}})&nbsp;{{meal.reserved ? 'reserved' : ''}}
                  </button>
        </template>
              </div>


    <!-- <button class="snipcart-add-item"
    v-bind:data-item-id="item.name"
    v-bind:data-item-price="item.price"
    data-item-url="/home"
    data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
    v-bind:data-item-image="item.img"
    v-bind:data-item-name="item.name">
    Add to cart
  </button> -->
          <button
            :data-item-name="item.name"
            :data-item-price="item.price"
            :data-item-id="item.name"
            type="button"
            class="snipcart-add-item"
            data-item-url="/"
          >
            Add to cart
          </button>




          </div>





        </carousel>  

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

</style>