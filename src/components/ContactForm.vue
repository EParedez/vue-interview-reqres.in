<template>
    <div>
        <v-container>
            <div>
                <div cols="12" sm="6" md="4">
                    <v-text-field label="first name*" v-model="contact_real.first_name" required></v-text-field>
                </div>
                <div cols="12" sm="6" md="4">
                    <v-text-field label="Last name*" v-model="contact_real.last_name" required> </v-text-field>
                </div>
                <div cols="12" sm="6" md="4">
                    <v-text-field label="Email*" v-model="contact_real.email"  required> </v-text-field>
                </div>
            </div>
        </v-container>
        <small>*indicates required field</small>
    </div>

</template>

<script>

    export default {
        props: ['contact'],
        name: "ContactForm",
        data() {
            return {

            }
        },
        mounted() {

        },
        computed: {
            contact_real : function () {
                if(this.contact == undefined){
                    return  {
                        first_name: '',
                        last_name: '',
                        email: ''
                    }
                }
                return this.contact;
            }
        }
    }
</script>

<style scoped>

</style>
