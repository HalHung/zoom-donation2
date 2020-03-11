<template>
  <div>
    <p>{{ greeting }} World!</p>
    <form v-on:submit.prevent="submit">
      <div class="form-group">
        <label for="idToken">Id token</label>
        <input type="text" class="form-control" id="idToken" placeholder="Enter id token" v-model="idToken">
      </div>
      <div class="form-group">
        <label for="product">Product</label>
        <input type="text" class="form-control" id="product" placeholder="Enter product" v-model="product">
      </div>
      <div class="form-group">
        <label for="tokenTerm">Token term</label>
        <input type="text" class="form-control" id="tokenTerm" v-model="tokenTerm">
      </div>  
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
      name: 'checkout-token',
      data: function () {
          return {
              greeting: 'Hello',
              product: 'starmusic_singlemonth100',
              idToken: '',
              tokenTerm: '400022******1111'
          }
      },
      methods: {
        submit: function () {
            axios.defaults.headers.common['Authorization'] = this.idToken;
            axios.post('http://localhost:8090/v1/subscription/token', {
              product: this.product,
              tokenTerm: this.tokenTerm,
              timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
            }).then(function (response) {
            console.log(response);
          });
        }
      }
  }
</script>
