<template>
    <div class="d-flex flex-wrap" >
        <Contact v-for="user in users" v-bind:key="user.id" v-bind:user="user"  />
    </div>
</template>

<script>
    import Contact from "./Contact";

    export default {
        name: "ContactList",
        components: {Contact},
        data(){
            return {

            }
        },
        mounted() {
            this.getData();
        },
        methods: {
            getData(){
                let context = this;
                this.Get(null, '/users', null).then(p=> {
                    console.log(p)
                    context.$store.commit('SET_CONTACTS', p.data.data.slice());
                }).catch(err => console.log(err))
            }
        },
        computed: {
            users: function () {
                return this.$store.state.contacts;
            }
        }
    }
</script>

<style scoped>

</style>
