<template>
    <div style="margin: 20px auto">
        <v-row class="accent rounded-t-lg" width="auto">
            <v-col col="auto">
                <h3 style="text-align: center; font-family: Verdana, sans-serif">
                    Search for your next job
                </h3>
            </v-col>
        </v-row>
        <v-row justify="center" class="accent ">
            <v-col cols="auto">
                <div align="center">
                    <v-text-field
                        id="search-area"
                        prepend-inner-icon="mdi-magnify"
                        clearable
                        style="width: 20rem"
                        label="Search by job, or company"
                        outlined
                        v-model="searchPosition"
                        @keyup.enter.exact="handleSearch"
                    ></v-text-field>
                </div>
            </v-col>
            <v-col cols="auto">
                <div align="center">
                    <!-- <v-text-field
                        v-model="searchLocation"
                        prepend-inner-icon="mdi-map-marker"
                        clearable
                        style="width: 20rem"
                        label="City, state, or country"
                        outlined
                        :append-outer-icon="'mdi-map-marker-plus'"
                        @click:append-outer="sendMessage"
                    ></v-text-field> -->
                    <v-text-field
                        id="search-area"
                        v-model="searchLocation"
                        prepend-inner-icon="mdi-map-marker"
                        clearable
                        style="width: 20rem"
                        label="City, state, or country"
                        outlined
                        @keyup.enter.exact="handleSearch"
                    ></v-text-field>
                </div>
            </v-col>
        </v-row>
        <v-row justify="center" class="accent rounded-b-lg">
            <v-col cols="auto">
                <div align="center" class="my-3" id="search-btn" @click="handleSearch">
                    <v-btn id="btn">Search</v-btn>
                </div>
            </v-col>
            <v-col cols="auto">
                <div v-if="isClearAvailable" id="clear-btn" align="center" class="my-3" @click="handleClearSearch">
                    <v-btn id="btn">Clear</v-btn>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Emit, Prop } from 'vue-property-decorator';
import store from '@/store/store';
import { getModule } from 'vuex-module-decorators';

@Component
export default class SearchArea extends Vue {
    @Prop() searchData!: any;
    @Prop() clearSearch!: any;

    storeModule: any;
    searchPosition = '';
    searchLocation = '';
    isClearAvailable = false;

    async created() {
        if (!this.storeModule) this.storeModule = getModule(store, this.$store);
        console.log('location', Intl.DateTimeFormat().resolvedOptions().timeZone);
    }

    @Emit('searchData')
    handleSearch() {
        this.isClearAvailable = this.searchPosition || this.searchLocation ? true : false;
        return { position: this.searchPosition, location: this.searchLocation };
    }

    @Emit('clearSearch')
    handleClearSearch() {
        this.searchPosition = '';
        this.searchLocation = '';
        this.isClearAvailable = false;
    }

    get viewRatio() {
        //xs, sm, md, lg, xl
        return this.$vuetify.breakpoint.name;
    }

    sendMessage() {
        //add user location to the text area
        // this.searchLocation = 'colorado';
    }
}
</script>
