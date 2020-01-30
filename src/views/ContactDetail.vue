<template>
    <div>
        <h2>Contact Detail</h2>
        <Contact v-bind:user="user" />
    </div>
</template>

<script>
    import Contact from "../components/Contact";
    export default {
        name: "ContactDetail",
        components: {Contact},
        data(){
          return {
              user: {}
          }
        },
        mounted() {
            // console.log(this.$route.params);
            // console.log(this.contacts)

           let user = this.contacts.find(p=> p.id === this.$route.params.id);
            if(user){
                this.user = user;
            }
        },
        computed: {
            contacts: function () {
                return  this.$store.state.contacts;
            }

        }
    }
</script>

<style scoped>

</style>
