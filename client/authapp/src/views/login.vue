<template>
  <div class="login">
    <Nav />
    <login />
    <Products />
  </div>
</template>
<script>
import login from "@/components/auth/login";
import Products from "@/components/Products";
import Nav from "@/components/Nav";
export default {
  components: {
    login,
    Products,
    Nav
  }
};
</script>
