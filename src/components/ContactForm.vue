<template>
    <div>
        <v-container>
            <v-form
                    ref="form"
                    v-model="valid"
            >
                <div cols="12" sm="6" md="4">
                    <v-text-field label="first name*" :rules="firstNameRules" v-model="contact_real.first_name" required></v-text-field>
                </div>
                <div cols="12" sm="6" md="4">
                    <v-text-field label="Last name*" :rules="lastNameRules" v-model="contact_real.last_name" required> </v-text-field>
                </div>
                <div cols="12" sm="6" md="4">
                    <v-text-field label="Email*" :rules="emailRules" v-model="contact_real.email"  required> </v-text-field>
                </div>
            </v-form>
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
                valid: true,
                firstNameRules: [
                    v => !!v || 'First Name is required',
                    v => (v && v.length <= 20) || 'First Name must be less than 20 characters',
                ],
                lastNameRules: [
                    v => !!v || 'Last Name is required',
                    v => (v && v.length <= 20) || 'First Name must be less than 20 characters',
                ],
                emailRules: [
                    v => !!v || 'Email is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
            }
        },
        mounted() {

        },
        computed: {
            contact_real : function () {
                if(this.contact == undefined){
                    return  {
                        id: 0,
                        first_name: '',
                        last_name: '',
                        email: '',
                        avatar: ''
                    }
                }
                return   {
                    id: this.contact.id,
                    first_name: this.contact.first_name,
                    last_name: this.contact.last_name,
                    email: this.contact.email,
                    avatar: this.contact.avatar
                }
            },
            form: function () {
                return this.$refs.form;
            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
