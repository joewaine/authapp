import Vue from "vue";
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import VueMq from 'vue-mq'
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueScrollactive from 'vue-scrollactive';
import "bootstrap/dist/css/bootstrap.css";

const base = axios.create({
  baseURL: "http://localhost:4000"
});

Vue.prototype.$http = base;
Vue.config.productionTip = false;

Vue.use(VueMq, {
  breakpoints: {
    sm: 1080,
    lg: Infinity,
  }
})


// vuexstoremethods
Vue.use(VueScrollactive);

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage
})

const store = new Vuex.Store({
  plugins: [vuexLocalStorage.plugin],
  state: {
    count: 0,
    names: [],
    shoppingCartItems: [],
    cart: 0,
    userName: 'joe',
    inventory: {
      offerings: [
        {
          visible: true,
          title: 'Family Meal Calendar',
          category: 'familymeal',
          slideNo: 1,
          items: [
            {
              name: 'monday family meal',
              img: 'https://affectionate-gates-5cf4d4.netlify.app/img/1.jpg',
              price: 40.00,
              today: true,
              description: 'Family Meal - Meat or Vegetarian- Pick Up',
              availableFamilyMeals: [
                { timeslot: '4:30', amountRemaining: 0, reserved: false },
                { timeslot: '5:00', amountRemaining: 20, reserved: false },
                { timeslot: '5:30', amountRemaining: 20, reserved: false },
                { timeslot: '6:00', amountRemaining: 20, reserved: false },
                { timeslot: '6:30', amountRemaining: 20, reserved: false },
                { timeslot: '7:00', amountRemaining: 20, reserved: false }
              ]
            },
            {
              name: 'tuesday',
              img: 'https://affectionate-gates-5cf4d4.netlify.app/img/2.jpg',
              price: 40.00,
              today: false,
              description: 'Family Meal - Meat or Vegetarian- Pick Up',
              availableFamilyMeals: [
                { timeslot: '4:30', amountRemaining: 0, reserved: false },
                { timeslot: '5:00', amountRemaining: 0, reserved: false },
                { timeslot: '5:30', amountRemaining: 0, reserved: false },
                { timeslot: '6:00', amountRemaining: 0, reserved: false },
                { timeslot: '6:30', amountRemaining: 0, reserved: false },
                { timeslot: '7:00', amountRemaining: 0, reserved: false }
              ]
            },
            {
              name: 'wednesday',
              img: 'https://affectionate-gates-5cf4d4.netlify.app/img/3.jpg',
              price: 40.00,
              today: false,
              description: 'Family Meal - Meat or Vegetarian- Pick Up',
              availableFamilyMeals: [
                { timeslot: '4:30', amountRemaining: 0, reserved: false },
                { timeslot: '5:00', amountRemaining: 0, reserved: false },
                { timeslot: '5:30', amountRemaining: 0, reserved: false },
                { timeslot: '6:00', amountRemaining: 0, reserved: false },
                { timeslot: '6:30', amountRemaining: 0, reserved: false },
                { timeslot: '7:00', amountRemaining: 0, reserved: false }
              ]
            },
            {
              name: 'thursday',
              img: 'https://affectionate-gates-5cf4d4.netlify.app/img/4.jpg',
              price: 40.00,
              today: false,
              description: 'Family Meal - Meat or Vegetarian- Pick Up',
              availableFamilyMeals: [
                { timeslot: '4:30', amountRemaining: 0, reserved: false },
                { timeslot: '5:00', amountRemaining: 0, reserved: false },
                { timeslot: '5:30', amountRemaining: 0, reserved: false },
                { timeslot: '6:00', amountRemaining: 0, reserved: false },
                { timeslot: '6:30', amountRemaining: 0, reserved: false },
                { timeslot: '7:00', amountRemaining: 0, reserved: false }
              ]
            }
          ]
        },
        {
          visible: true,
          title: 'A La Carte',
          category: 'alacarte',
          items: [
            {
              name: 'shirt',
              img: 'https://affectionate-gates-5cf4d4.netlify.app/img/ala/1.jpg',
              price: 5.00,
              description: 'This Is A Shirt'
            },
            {
              name: 'watch',
              img: 'https://affectionate-gates-5cf4d4.netlify.app/img/ala/2.jpg',
              price: 10.00,
              description: 'This Is A Shirt'
            },
            {
              name: 'hat',
              img: 'https://affectionate-gates-5cf4d4.netlify.app/img/ala/3.jpg',
              price: 12.00,
              description: 'This Is A Shirt'
            },
            {
              name: 'cookbook',
              img: 'https://affectionate-gates-5cf4d4.netlify.app/img/ala/3.jpg',
              price: 12.00,
              description: 'This Is A Shirt'
            }
          ]
        },
        {
          visible: true,
          title: 'Bar Pickup',
          category: 'barpickup',
          items: [
            {
              name: 'shirt',
              img: 'https://placeimg.com/200/200/any?7',
              price: 20.00
            },
            {
              name: 'watch',
              img: 'https://placeimg.com/200/200/any?8',
              price: 20.00
            },
            {
              name: 'hat',
              img: 'https://placeimg.com/200/200/any?9',
              price: 20.00
            },
            {
              name: 'cookbook',
              img: 'https://placeimg.com/200/200/any?10',
              price: 20.00
            }
          ]
        },
        {
          visible: true,
          title: 'Pantry',
          category: 'pantry',
          items: [
            {
              name: 'shirt',
              img: 'https://placeimg.com/200/200/any?7',
              price: 20.00
            },
            {
              name: 'watch',
              img: 'https://placeimg.com/200/200/any?8',
              price: 20.00
            },
            {
              name: 'hat',
              img: 'https://placeimg.com/200/200/any?9',
              price: 20.00
            },
            {
              name: 'cookbook',
              img: 'https://placeimg.com/200/200/any?10',
              price: 20.00
            }
          ]
        },
        {
          visible: true,
          title: 'Merch',
          category: 'merch',
          items: [
            {
              name: 'shirt',
              img: 'https://placeimg.com/200/200/any?7',
              price: 20.00
            },
            {
              name: 'watch',
              img: 'https://placeimg.com/200/200/any?8',
              price: 20.00
            },
            {
              name: 'hat',
              img: 'https://placeimg.com/200/200/any?9',
              price: 20.00
            },
            {
              name: 'cookbook',
              img: 'https://placeimg.com/200/200/any?10',
              price: 20.00
            }
          ]
        },
        {
          visible: true,
          title: 'Testimonials',
          category: 'testimonials',
          items: [
            {
              name: 'shirt',
              img: 'https://placeimg.com/200/200/any?7',
              price: 20.00
            },
            {
              name: 'watch',
              img: 'https://placeimg.com/200/200/any?8',
              price: 20.00
            },
            {
              name: 'hat',
              img: 'https://placeimg.com/200/200/any?9',
              price: 20.00
            },
            {
              name: 'cookbook',
              img: 'https://placeimg.com/200/200/any?10',
              price: 20.00
            }
          ]
        }
      ]
    }
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    increment2 (state, { name }) {
      if (name in state) {
        state[name]++
      } else {
        state[name] = 1
      }
    },
    addtocart (state) {
      state.cart = state.cart + 20
    },
    removeFromCart (state) {
      state.cart = state.cart - 20
    },
    reserveFamilyMeal (state, { timeslot }) {
      state.shoppingCartItems.push({timeslot: timeslot})
      state.cart = state.cart + 20
      for (var i in state.inventory.offerings[0].items[0].availableFamilyMeals) {
        if (state.inventory.offerings[0].items[0].availableFamilyMeals[i].timeslot === timeslot) {
          state.inventory.offerings[0].items[0].availableFamilyMeals[i].reserved = true
          break
        }
      }
    },
    removeUnreserve (state, { timeslot }) {
      state.cart = state.cart - 20
      state.shoppingCartItems = state.shoppingCartItems.filter(function (obj) {
        return obj.timeslot !== timeslot
      })
      for (var i in state.inventory.offerings[0].items[0].availableFamilyMeals) {
        if (state.inventory.offerings[0].items[0].availableFamilyMeals[i].timeslot === timeslot) {
          state.inventory.offerings[0].items[0].availableFamilyMeals[i].reserved = false
          break
        }
      }
    },
    unreserveFamilyMeal (state, { timeslot }) {
      state.cart = state.cart - 20
      state.shoppingCartItems = state.shoppingCartItems.filter(function (obj) {
        return obj.timeslot !== timeslot
      })
      for (var i in state.inventory.offerings[0].items[0].availableFamilyMeals) {
        if (state.inventory.offerings[0].items[0].availableFamilyMeals[i].timeslot === timeslot) {
          state.inventory.offerings[0].items[0].availableFamilyMeals[i].reserved = false
          break
        }
      }
    },
    completeCheckout (state, { shoppingCart }) {
      for (var i in shoppingCart) {
        for (var j in state.inventory.offerings[0].items[0].availableFamilyMeals) {
          if (state.inventory.offerings[0].items[0].availableFamilyMeals[j].timeslot === shoppingCart[i].timeslot) {
            state.inventory.offerings[0].items[0].availableFamilyMeals[j].amountRemaining--
            break
          }
        }
      }
      state.shoppingCartItems = []
      state.cart = 0
      for (var k in state.inventory.offerings[0].items[0].availableFamilyMeals) {
        state.inventory.offerings[0].items[0].availableFamilyMeals[k].reserved = false
      }
    }
  }
})



// endvuexstoremethods


new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount("#app");
