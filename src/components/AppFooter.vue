<template>
    <v-toolbar color="black lighten-3">
        <v-spacer></v-spacer>
        <v-btn dark flat to="/terms">Terms of Service</v-btn>
        <v-btn dark flat to="/privacy">Privacy</v-btn>
        <v-btn dark flat to="/about">About</v-btn>
        <v-spacer></v-spacer>
    </v-toolbar>
</template>

<script>
export default {
    name: 'AppFooter'
};
</script>

<style scoped></style>
