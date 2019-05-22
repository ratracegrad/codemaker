<template>
    <nav>
        <v-toolbar flat app>
            <v-toolbar-side-icon
                class="grey--text"
                @click="drawer = !drawer"
            ></v-toolbar-side-icon>
            <v-toolbar-title class="text-uppercase grey--text headline">
                <span>Code</span>
                <span class="font-weight-light">Maker</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat color="grey" to="/">
                <span>Home</span>
                <v-icon right>home</v-icon>
            </v-btn>
            <v-btn flat color="grey">
                <span>Sign Out</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer app class="grey darken-3" v-model="drawer">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <p class="white--text subheading mt-1">
                        CODEMaker
                    </p>
                </v-flex>
            </v-layout>
            <v-list>
                <v-list-tile
                    v-for="link in links"
                    :key="link.text"
                    :to="link.route"
                >
                    <v-list-tile-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">{{
                            link.text
                        }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    name: 'AppNavigation',
    data: () => ({
        drawer: false,
        links: [
            { icon: 'dashboard', text: 'Dashboard', route: '/' },
            { icon: 'folder', text: 'My Projects', route: '/projects' },
            { icon: 'person', text: 'Team', route: '/team' }
        ]
    })
};
</script>

<style scoped></style>
