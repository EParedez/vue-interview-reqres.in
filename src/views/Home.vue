<template>
    <div>

        <ContactList />

        <v-btn class="mx-4" fab color="orange">
            <v-icon >mdi-plus</v-icon>
        </v-btn>

    </div>

</template>

<style>

</style>

<script>
  import ContactList from "../components/ContactList";
  export default {
      components: {ContactList},
      data(){
          return {

          }
      },
      mounted() {

      },
      methods: {

      }
  }
</script>
