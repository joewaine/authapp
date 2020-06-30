<template>
<div class="cover">
    <div class="header">


    <img :src="image"/>

    </div>

    </div>
</template>




<script>  

import OrderStar from '@/components/svgIcons/OrderStar.vue'
export default{
name: 'coverslide',
components: {
    OrderStar
},
// props: ['postTitle','image','postName']
props: ['image']
}

</script>

<style lang="scss">
.header{
    width: 100%;
    height: 100px;
    background: #f05d5b;
    color: yellow;
    text-align: center;
    img{
        width: 100%;
    }
}

.bottom-button{
    width: 100%;
    height: 92px;
    background: #FFF367;
    color: yellow;
    text-align: center;
    padding-top: 11px;
}


.widgethover{
background: #2e22e8;width: 100px;height: 100px;

&:hover{
    background: pink;
}
}


</style>