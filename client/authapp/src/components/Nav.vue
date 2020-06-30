<template>
<div class="nav-wrap">
<div class="fixed-nav">
    <div class="navbar navbar-expand-lg navbar-dark fix-top-nav nadi-header">



        <template v-if="this.$store.state.loggedIn">
    <button v-if="$route.name != 'login'" @click="logUserOut()" class="logButton">log out</button>
        </template>
        <template v-else>
    <!-- <button v-if="$route.name != 'login'" @click="logUserOut()" class="logButton">log in</button> -->
    <router-link v-if="$route.name != 'login'" class="logButton" to="/login">log in</router-link>
        </template>


      <div class="container">
<div class="full-width-logo">
<template v-if="$mq === 'sm'">
    <!-- <a v-if="$route.name === 'home'" class="burger" @click="toggleMenu()"> -->
        <!-- <Burger /> -->
    <!-- </a> -->
    </template>
    <Logo />
  </div>
</div>

    </div>
    <template v-if="$mq === 'lg'">
    <nav v-if="$route.name === 'home'" class="navbar navbar-expand-lg navbar-dark fix-top-nav nadi-sub-header">
        <div class="container">
          <scrollactive
           :offset="180"
            ref="scrollactive"
            >   
             <ul id="menu">



                <li v-for="offering in store.inventory.offerings" @click="toggleMenu()" v-bind:key="offering.title">
                    <a :href="'#'+offering.category" class="scrollactive-item nav-item">{{offering.title.toLowerCase().trim()}}</a>
                    </li>
            </ul></scrollactive
          >
        </div>
    </nav>
</template>


</div>    

<template v-if="$mq === 'sm'">
        <nav v-if="$route.name === 'home'" class="navbar navbar-expand-lg navbar-dark fix-top-nav nadi-sub-header mobile-nav" :class="{ expanded: mobNavExpanded }">
        <div class="container">
          <scrollactive
           :offset="180"
            ref="scrollactive"
            >    <ul id="menu" class="mobile-menu">
                <li v-for="offering in store.inventory.offerings" @click="toggleMenu()" v-bind:key="offering.title">
                    <a :href="'#'+offering.category" class="scrollactive-item nav-item">{{offering.title}}</a>
                    </li>
            </ul></scrollactive
          >
        </div>
    </nav>

    <div>
        <div class="container">


        </div>
    </div>

    </template>
</div>
</template>


<script>
import VueJwtDecode from "vue-jwt-decode";

import Logo from "@/components/Logo";
// import Burger from "@/components/svgIcons/Burger";



export default {
    components: {
    Logo
    // Burger
  },
  data () {
      return {
          mobNavExpanded: false,
          logtext: '',
            user: {}
      }

  },
  methods: {
    logUserOut() {
      localStorage.removeItem("jwt");
      this.$store.commit('logOut')
    //   this.$router.push("/");
    },
    toggleMenu(){
        this.mobNavExpanded = !this.mobNavExpanded;
 
        console.log(this)
    },
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;


      console.log(decoded)
    },
  },
  created() {
      this.store = this.$store.state

  },
    mounted() {
    //   this.getUserDetails();
  }
  }

</script>


<style>


.trans{
    color: transparent
}

.nadi-header{
    background-color: #F05D5B;
    height: 92px;
}



.nadi-sub-header{
background-color: #F58E58;
height: 50px;
}




ul#menu{
    margin: -4px auto 0;
    padding-left: 0;
}

ul#menu li {
display:inline;
font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
font-weight: bold;
font-size: 20px;
text-align: center;
padding: 0 20px;

color: #ffffff;
}



ul#menu.mobile-menu li {
display:block;
list-style-type: none;
}


.nadi-sub-header.mobile-nav{
    height: auto;
    padding: 20px 0;
}




ul#menu li a{
color: #ffffff;
}



ul#menu li a.is-active{
  color: #FFF367;
}

ul#menu li.active{
    color: #FFF367;
}

.fixed-nav{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
}


.scrollactive-nav{
    margin: 0 auto;
}

.full-width-logo{
    width: 100%;
    position: relative;
    text-align: center;
}


.full-width-logo .collapse{
position: absolute;
right: 0;
}




.nadi-sub-header.mobile-nav{
    position: fixed;
    width: 100%;
    top: -154px;
    transition: all .5s ease;
}


.mobile-nav.expanded{
    top: 92px;
}




.mobile-nav li{
    margin-bottom: 5px;
}


.nav-wrap{
    position: absolute;
    z-index: 100;
}
.burger{
    position: absolute;
    right: 0;
    top: 20px;
}




@media only screen and (max-width: 576px) {
  
  
  
  .navbar .container {
        max-width: 98;
    }
}



.logButton{
    position: absolute;
    right: 0;
    height: 100%;
    border: 0;
    background: #F1765B;
    color: white;
    font-weight: 700;
    font-size: 18px;
    padding: 0 25px;
    line-height: 90px;
    text-decoration: none;
}


</style>






