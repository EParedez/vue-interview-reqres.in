<template>
    <v-dialog v-model="show" persistent max-width="600px">
        <v-card>
            <v-card-title>
                <span v-if="contact == undefined" class="headline"> New  Contact </span>
                <span v-if="contact != undefined" class="headline"> Edit  Contact </span>
            </v-card-title>
            <v-card-text>
                <ContactForm v-bind:contact="contact" ref="contactForm"  />
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="eventoModal(false)">Close</v-btn>
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

               if (!this.$refs['contactForm'].form.validate()) {
                   return;
               }

               let contacto = this.$refs['contactForm'].contact_real;
               console.log(contacto)
               if(contacto.id === 0){
                   // add
                   contacto.id = this.$store.state.contacts.length + 1;
                   contacto.avatar = 'https://www.searchpng.com/wp-content/uploads/2019/02/Men-Profile-Image.png';
                   this.$store.commit('ADD_CONTACT', contacto);
                   this.$refs['contactForm'].form.reset()
               }
               else{
                   //save
                   this.$store.commit('UPDATE_CONTACT', contacto);
               }
               this.eventoModal(false);
           },


       }
    }
</script>

<style scoped>

</style>
