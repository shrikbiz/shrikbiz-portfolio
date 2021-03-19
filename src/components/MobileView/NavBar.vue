<template>
    <v-app-bar max-height="64" elevate-on-scroll class="headerPrimary" :dark="this.storeModule.isDarkTheme">
        <v-app-bar-nav-icon v-if="!desktopView.has(viewRatio)" @click="handleDrawer()"></v-app-bar-nav-icon>
        <div style="width: 400px; cursor: default" class="d-flex align-center">
            <v-img
                alt="Vuetify Logo"
                class="shrink mr-2"
                contain
                src="@/assets/git.png"
                transition="scale-transition"
                maxWidth="45"
            />
            <v-toolbar-title>
                <h1><strong>GitHub</strong> Jobs</h1>
            </v-toolbar-title>
        </div>
        <v-tabs v-if="desktopView.has(viewRatio)">
            <v-tab as="router-link" to="/"> <v-icon left> mdi-home-outline </v-icon>Home Page</v-tab>
            <v-tab as="router-link" to="/search"> <v-icon left> mdi-briefcase-search </v-icon>Job Search</v-tab>
        </v-tabs>
        <div v-if="desktopView.has(viewRatio)" style="width: 200px; cursor: default">
            <span v-if="!theme"> <v-icon>mdi-white-balance-sunny </v-icon>{{ `  ` }} Light Theme </span>
            <span v-if="theme"> <v-icon>mdi-weather-night</v-icon>{{ `  ` }} Dark Theme </span>
        </div>
        <div v-if="desktopView.has(viewRatio)" style="width: 100px" class="mt-6">
            <v-switch color="secondary" @change="handleThemeSwitch"></v-switch>
        </div>
        <!--  -->
    </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import store from '@/store/store';
import { getModule } from 'vuex-module-decorators';

@Component
export default class NavBar extends Vue {
    storeModule: any;
    // currentTheme: object = {};
    themeList: string[] = ['Light Theme', 'Dark Theme'];

    created() {
        if (!this.storeModule) this.storeModule = getModule(store, this.$store);
    }

    handleThemeSwitch() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        this.storeModule.changeStoreTheme(this.$vuetify.theme.dark);
    }

    get drawer() {
        return this.storeModule.isSideBar;
    }

    get desktopView() {
        return new Set(['lg', 'xl']);
    }

    get viewRatio() {
        //xs, sm, md, lg, xl
        return this.$vuetify.breakpoint.name;
    }

    get theme() {
        return this.storeModule.isDarkTheme;
    }
    handleDrawer() {
        this.storeModule.sideBarStatus();
    }
}
</script>
