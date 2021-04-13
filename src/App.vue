<template>
    <v-app id="app">
        <v-responsive class="overflow-y-auto">
            <v-main>
                <!-- uncomment for production -->
                <Loading v-if="!isLoading" @isDone="handleDone" />
                <HomePage v-if="isLoading" @handleScrollVariable="onScroll($event)" />

                <!-- uncomment for development -->
                <!-- <HomePage @handleScrollVariable="onScroll($event)" /> -->
                <!-- <SandBox /> -->
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
        Loading: () => import('@/views/Loading.vue'),
        SandBox: () => import('@/views/SandBox.vue'),
        Footer: () => import('@/components/Footer.vue'),
    },
})
export default class App extends Vue {
    storeModule: any;
    scrollVariable: number = 0;
    isLoading: boolean = false;

    // @Module
    beforeCreate() {
        const isModuleRegistered = Object.keys(this.$store.state).includes(STORE_KEY);
        if (!isModuleRegistered) this.$store.registerModule(STORE_KEY, store);
    }
    handleDone() {
        this.isLoading = true;
    }

    created() {
        if (!this.storeModule) this.storeModule = getModule(store, this.$store);
    }

    onScroll(value: any) {
        this.scrollVariable = value;
    }
}
</script>

<style scoped></style>
