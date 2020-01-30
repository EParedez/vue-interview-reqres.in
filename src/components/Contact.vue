<template>
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

        <v-card-subtitle class="pb-0">{{user.first_name}} {{user.last_name}}</v-card-subtitle>

        <v-card-text class="text--primary">
            <div>{{user.email}}</div>
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
        name: "Contact",
        methods: {
            show(id){
                console.log(id);
                this.$router.push({ name: 'contact', params: { id: id }})
            }
        }
    }
</script>

<style scoped>
    v-img {
        cursor: pointer;
    }
</style>
