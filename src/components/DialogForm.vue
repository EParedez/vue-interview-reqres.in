<template>
    <v-dialog v-model="show" persistent max-width="600px">
        <v-card>
            <v-card-title>
                <span class="headline">Contact </span>
            </v-card-title>
            <v-card-text>
                <ContactForm v-bind:contact="contact" ref="contactForm"  />
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn  text @click="eventoModal(false)">Close</v-btn>
                <v-btn text @click="save()">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import ContactForm from "./ContactForm";
    export default {
        components: {ContactForm},
        props: ['show', 'contact'],
        data() {
            return {
                dialogShow: false
            }
        },
        name: "DialogForm",
        computed: {

        },
        mounted() {
            if(this.show){
                this.dialogShow = this.show;
            }
        },
       methods: {
           eventoModal(value) {
               this.$emit('eventoModal', value)
           },

           save(){
               let contacto = this.$refs['contactForm'].contact_real;
               console.log(contacto)
               if(contacto.id === 0){
                   // add
                   contacto.id = this.$store.state.contacts.length + 1;
                   contacto.avatar = 'https://www.searchpng.com/wp-content/uploads/2019/02/Men-Profile-Image.png';
                   this.$store.commit('ADD_CONTACT', contacto);
               }
               else{
                   //save
                   this.$store.commit('UPDATE_CONTACT', contacto);
               }
               this.eventoModal(false);
              // console.log( this.$refs['contactForm'].contact_real);
           },


       }
    }
</script>

<style scoped>

</style>
