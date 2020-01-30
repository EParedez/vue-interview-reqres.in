<template>
    <div>

        <div v-for="user in users" v-bind:key="user.id">
            <Contact v-bind:user="user"  />
        </div>

    </div>

</template>

<style>

</style>

<script>
  import Contact from "../components/Contact";
  export default {
      components: {Contact},
      data(){
          return {
              users: []
          }
      },
      mounted() {
          this.getData();
      },
      methods: {
          getData(){
              let context = this;
              this.Get('token', '/users', null).then(p=> {
                  console.log(p)
                  context.users = p.data.data;
                  console.log(context.users)
              }).catch(err => console.log(err))
          }
      }
  }
</script>
