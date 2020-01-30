<template>
    <div>

        <v-card
                class="mx-auto"
                max-width="300">
            <v-img @click="show(user.id)"
                   class="white--text align-end"
                   height="200px"
                   v-bind:src="user.avatar"
            >
                <v-card-title></v-card-title>
            </v-img>

            <div class="pb-0">{{user.first_name}} {{user.last_name}}</div>

            <v-card-text class="text--primary">
                <div>{{user.email}}</div>
            </v-card-text>

            <v-card-actions>

                <v-btn
                        @click="dialogShow=true"
                        text
                        icon
                >
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>

                <v-btn
                        @click="deleteContact(user.id)"
                        text
                        icon
                >
                    <v-icon>mdi-delete</v-icon>
                </v-btn>

            </v-card-actions>
        </v-card>

<!--        <v-dialog v-model="dialogShow" persistent max-width="600px">-->
<!--            <v-card>-->
<!--                <v-card-title>-->
<!--                    <span class="headline">Contact </span>-->
<!--                </v-card-title>-->
<!--                <v-card-text>-->
<!--                    <ContactForm v-bind:contact="user" />-->
<!--                </v-card-text>-->
<!--                <v-card-actions>-->
<!--                    <v-spacer></v-spacer>-->
<!--                    <v-btn  text @click="dialogShow = false">Close</v-btn>-->
<!--                    <v-btn text @click="dialogShow = false">Save</v-btn>-->
<!--                </v-card-actions>-->
<!--            </v-card>-->
<!--        </v-dialog>-->
        <DialogForm v-bind:contact="user" v-bind:show="dialogShow" v-on:eventoModal="eventModal" />
    </div>

</template>

<script>
     import DialogForm from "../components/DialogForm";
    export default {
        props: ['user'],
        name: "Contact",
        components: {DialogForm},
        data() {
            return {
                dialogShow: false
            }
        },
        methods: {
            show(id){
                console.log(id);
                this.$router.push({ name: 'contact', params: { id: id }})
            }
            ,
            deleteContact(id){
                this.$store.commit('REMOVE_CONTACT', id);
            },
            eventModal(val){
                this.dialogShow = val;
            }
        }
    }
</script>

<style scoped>
    v-img {
        cursor: pointer;
    }
</style>
