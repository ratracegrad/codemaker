<template>
    <v-container grid-list-lg>
        <v-layout mb-3>
            <v-flex>
                <h1>Select a Challenge</h1>
            </v-flex>
        </v-layout>
        <v-layout mb-2>
            <v-flex>
                <div class="title">Beginner</div>
            </v-flex>
        </v-layout>
        <v-layout>
            <template v-for="challenge in challenges">
                <v-flex xs3 v-if="challenge.level === 1" :key="challenge.id">
                    <v-btn class="blue" @click="showChallenge(challenge.id)">{{
                        challenge.name
                    }}</v-btn>
                </v-flex>
            </template>
        </v-layout>
        <v-layout mb-2 mt-4>
            <v-flex>
                <div class="title">Intermediate</div>
            </v-flex>
        </v-layout>
        <v-layout>
            <template v-for="challenge in challenges">
                <v-flex xs3 v-if="challenge.level === 5" :key="challenge.id">
                    <v-btn class="blue">{{ challenge.name }}</v-btn>
                </v-flex>
            </template>
        </v-layout>
        <v-layout mb-2 mt-4>
            <v-flex>
                <div class="title">Advanced</div>
            </v-flex>
        </v-layout>
        <v-layout>
            <template v-for="challenge in challenges">
                <v-flex xs3 v-if="challenge.level === 10" :key="challenge.id">
                    <v-btn class="blue">{{ challenge.name }}</v-btn>
                </v-flex>
            </template>
        </v-layout>
    </v-container>
</template>

<script>
import db from '@/plugins/firebase';

export default {
    name: 'Home',
    data: () => ({
        challenges: []
    }),
    created() {
        db.collection('challenges').onSnapshot(res => {
            const changes = res.docChanges();
            changes.forEach(change => {
                if (change.type === 'added') {
                    this.challenges.push({
                        ...change.doc.data(),
                        id: change.doc.id
                    });
                }
            });
        });
    },
    methods: {
        showChallenge(id) {
            this.$store.commit('setChallenge', id);
            this.$router.push('/editor');
        }
    }
};
</script>
<style scoped></style>
