<template>
  <div class="login">
    <Nav />
    <login />
    <Products />



slideshowddd
<SlideShow />



  </div>
</template>
<script>


import SlideShow from "@/components/SlideShow";
import login from "@/components/auth/login";
import Products from "@/components/Products";
import Nav from "@/components/Nav";
export default {
  components: {
    login,
    Products,
    SlideShow,
    Nav
  }
};
</script>
