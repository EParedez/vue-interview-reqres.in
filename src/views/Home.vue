<template>

    <div justify="center">

        <ContactList />

        <v-btn @click="dialogShow = true" class="mx-4" fab color="green">
            <v-icon >mdi-plus</v-icon>
        </v-btn>

        <DialogForm v-bind:show="dialogShow" />
    </div>

</template>

<style>

</style>

<script>
  import ContactList from "../components/ContactList";
  // import ContactForm from "../components/ContactForm";
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

      }
  }
</script>
