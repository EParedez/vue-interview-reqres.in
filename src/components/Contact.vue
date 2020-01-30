<template>
    <v-card
            class="mx-auto"
            max-width="300">
        <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
            <v-card-title></v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

        <v-card-text class="text--primary">
            <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>

        <v-card-actions>

            <v-btn
                    color="orange"
                    text
                    icon
            >
                <v-icon>mdi-pencil</v-icon>
            </v-btn>

            <v-btn
                    color="red"
                    text
                    icon
            >
                <v-icon>mdi-delete</v-icon>
            </v-btn>

        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        props: ['user'],
        name: "Contact"
    }
</script>

<style scoped>

</style>
