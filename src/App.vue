<template>
    <v-app id="app">
        <v-responsive class="overflow-y-auto" max-height="calc(100vh - 56.8px)">
            <v-main>
                <HomePage @handleScrollVariable="onScroll($event)" />
            </v-main>
        </v-responsive>
        <Footer :scrollVariable="scrollVariable" />
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import store, { STORE_KEY } from '@/store/store';
import { getModule } from 'vuex-module-decorators';

@Component({
    components: {
        HomePage: () => import('@/views/HomePage.vue'),
        Footer: () => import('@/components/Footer.vue'),
    },
})
export default class App extends Vue {
    storeModule: any;
    scrollVariable: number = 0;

    // @Module
    beforeCreate() {
        const isModuleRegistered = Object.keys(this.$store.state).includes(STORE_KEY);
        if (!isModuleRegistered) this.$store.registerModule(STORE_KEY, store);
    }

    created() {
        if (!this.storeModule) this.storeModule = getModule(store, this.$store);
    }

    onScroll(value: any) {
        this.scrollVariable = value;
    }
}
</script>
