<template>
    <v-dialog v-model="show" persistent max-width="600px">
        <v-card>
            <v-card-title>
                <span class="headline">Contact </span>
            </v-card-title>
            <v-card-text>
                <ContactForm  />
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn  text @click="show = false">Close</v-btn>
                <v-btn text @click="show = false">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import ContactForm from "./ContactForm";
    export default {
        components: {ContactForm},
        props: ['show'],
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
        }
    }
</script>

<style scoped>

</style>
