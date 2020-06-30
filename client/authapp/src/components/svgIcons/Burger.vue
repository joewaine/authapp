<template>
  <div>
    <input v-model="emailAddress" type="email" placeholder="your@email.com" />
    <button @click="submitForm">{{subscribeText}}</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id:
        '',
      emailName: 'cm-',
      emailAddress: '',
      subscribeText: 'Subscribe'
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
          this.subscribeText = 'Thanks!'
          setTimeout(() => {
            this.subscribeText = 'Subscribe'
          }, 5000)
        })
        .catch(error => {
          console.log(error)
          this.subscribeText = 'Error!'
          setTimeout(() => {
            this.subscribeText = 'Subscribe'
          }, 5000)
        })
    },
    generateSecureSubscribeLink(email) {
      const params = {
        email: this.emailAddress,
        data: this.id
      }
      return fetch('https://createsend.com//t/getsecuresubscribelink', {
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
          this.subscribeText = 'Error!'
          setTimeout(() => {
            this.subscribeText = 'Subscribe'
          }, 5000)
        })
    },
    submitForm() {
      this.subscribeText = 'Please Wait...'
      this.generateSecureSubscribeLink()
    }
  }
}
</script>
<style lang="scss">
</style>