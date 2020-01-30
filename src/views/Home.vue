<template>

    <div class="content" justify="center">

        <ContactList />

        <v-btn @click="dialogShow = true" class="mx-4" fab color="green">
            <v-icon >mdi-plus</v-icon>
        </v-btn>

        <DialogForm v-bind:contact="undefined" v-bind:show="dialogShow" v-on:eventoModal="eventModal" />
    </div>

</template>

<style>

</style>

<script>
  import ContactList from "../components/ContactList";
  import DialogForm from "../components/DialogForm";
  export default {
      components: {DialogForm, ContactList},
      data(){
          return {
              dialogShow: false,
          }
      },
      mounted() {

      },
      methods: {
          eventModal(event){
              console.log(event);
              this.dialogShow = event;
          }
      }
  }
</script>

<style>
    .content {
        margin-top: 20px;
    }
</style>
