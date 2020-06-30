<template>
    <section id="newsletter" class="section hero is-primary is-fullheight">
      <div class="newsletter-section">
        <div class="pad-cont">
        <h4>
            sign up for newsletter
        </h4>
            <p class="thick-white">
                Lorem ipsum dolor sit amet, consectetur eiusmod tempor incididunt ut labore tempor incididunt
            </p> 
        </div>
      </div>
      <div class="newsletter-section">
        <div class="pad-cont">
            <CampaignMonitor />
        </div>
      </div>
    </section>
</template>



<script>

import CampaignMonitor from '@/components/CampaignMonitor.vue'

import Send from '@/components/Send.vue'

export default {


components: {
    Send,
    CampaignMonitor
}


};
</script>



<style lang="scss">
#newsletter{
    margin-bottom: 100px;
    padding: 0;
}



.newsletter-section{
    width: 50%;
    display: inline-block;
    text-align: left;
    padding-bottom: 30px;
    h4{
        text-align: left;
    }
    .pad-cont{
        padding: 30px;
    }
}



.thick-white{
    color: white;
    font-weight: 600;
}



</style>