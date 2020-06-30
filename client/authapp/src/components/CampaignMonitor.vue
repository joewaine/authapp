<template>
  <div>
    <input v-model="emailAddress" type="email" placeholder="enter your email" class="lap-right-pad" />
    <button class="no-button-style" @click="submitForm">
        <Send :sendText="subscribeText" :starState="starState" />
    </button>




  </div>
</template>
<script>


import Send from '@/components/Send.vue'
export default {
    components: {
            Send
    },
  data() {
    return {
      id: 'e2e3735926e732e8',
      emailName: 'cm-',
      emailAddress: '',
      subscribeText: 'send',
      sendText: 'send',
      starState: '#f58e58'
    }
  },
  methods: {
    submitEmail(secureUrl) {
      const params = {}
      params[this.emailName] = this.emailAddress
      // Warning: This response sometimes triggers a recapture if repeat requests are made from the same ip
      return fetch(secureUrl, {
        method: 'POST',
        body: new URLSearchParams(params),
        headers: new Headers({
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        })
      })
        .then(response => {
          this.subscribeText = 'thanks!'
          this.starState = '#f58e58'
          setTimeout(() => {
            this.subscribeText = 'send'
            this.starState = '#f58e58'
          }, 5000)
        })
        .catch(error => {
          console.log(error)
          this.subscribeText = 'error!'
         this.starState = '#F05D5B'
          setTimeout(() => {
            this.subscribeText = 'send'
            this.starState = '#f58e58'
          }, 5000)
        })
    },
    generateSecureSubscribeLink(email) {
      const params = {
        email: this.emailAddress,
        data: this.id
      }
      return fetch('http://createsend.com/t/getsecuresubscribelink', {
        method: 'POST',
        body: new URLSearchParams(params),
        headers: new Headers({
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        })
      })
        .then(response => response.text())
        .then(url => {
          this.submitEmail(url)
        })
        .catch(error => {
          console.log(error)
          this.subscribeText = 'error!'
          this.starState = '#F05D5B'
          setTimeout(() => {
            this.subscribeText = 'send'
             this.starState = '#f58e58'
          }, 5000)
        })
    },
    submitForm() {
      this.subscribeText = 'wait...'
      this.generateSecureSubscribeLink()
    }
  }
}
</script>
<style lang="scss">

.no-button-style{
    background: transparent;
    border: 0;
    transform: translate(-35px,-2px);
    &:focus,
    &:active{
        outline: none;
        box-shadow: none;
    }
}





.lap-right-pad{
    border: 0;
    color: #000;
    font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
    font-weight: 500;
    letter-spacing: .25px;
    padding: 12px 35px 12px 10px;

    &:focus,
    &:active{
        outline: none;
        box-shadow: none;
    }
}

</style>