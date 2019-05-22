<template>
    <v-app class="grey lighten-4">
        <app-navigation></app-navigation>

        <v-content>
            <router-view></router-view>
        </v-content>

        <app-footer></app-footer>
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import AppFooter from '@/components/AppFooter';

export default {
    name: 'App',
    components: {
        AppNavigation,
        AppFooter
    },
    data() {
        return {
            //
        };
    }
};
</script>
<style></style>
