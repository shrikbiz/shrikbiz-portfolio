<template>
    <v-app>
        <v-main v-if="true" class="primary" id="job-board">
            <v-container>
                <v-card elevation="4">
                    <!-- search area -->
                    <SearchArea @searchData="handleSearch($event)" @clearSearch="handlClearSearch" />
                </v-card>
            </v-container>
            <v-container v-if="!jobData.length">
                <v-row justify="center">
                    <v-col cols="auto">
                        <v-banner id="no-data-message" width="100%" icon="mdi-alert-circle-outline">
                            No data available
                        </v-banner>
                    </v-col>
                </v-row>
            </v-container>
            <!-- <v-container v-if="jobData.length" width="100%"> -->
            <v-row v-if="totalResults > 0" justify="center">
                <v-col cols="8" align="center" width="100%">
                    <v-alert id="result-bar" border="bottom" class="accent ma-3" dark>
                        <v-avatar size="40" class="headerPrimary">
                            <span class="headline">{{ totalResults }}</span>
                        </v-avatar>
                        result<span v-if="totalResults > 1">s</span> found
                    </v-alert>
                </v-col>
            </v-row>
            <!-- </v-container> -->
            <v-container v-if="totalResults > 0">
                <v-row justify="center" class=" mb-10">
                    <v-col v-for="job in jobData" :key="job.id" cols="auto">
                        <v-card id="jobs" elevation="10">
                            <JobDetail :jobData="job" />
                        </v-card>
                    </v-col>
                </v-row>
                <v-row v-if="isShowMore" justify="center" class="mb-10">
                    <v-col cols="auto">
                        <v-btn @click="addJobData" id="view-more" color="accent">
                            View More
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row v-if="!isShowMore" justify="center" class="mb-10">
                    <v-col cols="auto">
                        <v-banner>End of Job List</v-banner>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import store from '@/store/store';

@Component({
    components: {
        JobDetail: () => import('@/components/MobileView/JobDetail.vue'),
        SearchArea: () => import('@/components/MobileView/SearchArea.vue'),
    },
})
export default class JobBoard extends Vue {
    storeModule: any;
    jobList: any[] = [];
    numberOfJobList = 9;
    isShowMore = true;
    apiData: any[] = [];
    totalResults = 0;

    async created() {
        if (!this.storeModule) this.storeModule = getModule(store, this.$store);
        await this.storeModule.getGitJobData();
        this.apiData = await this.storeModule.gitJobData;
        this.totalResults = this.apiData.length;
        this.numberOfJobList =
            this.viewRatio == 'xl'
                ? 12
                : this.viewRatio == 'lg'
                ? 9
                : this.viewRatio == 'xs' || this.viewRatio == 'sm'
                ? 8
                : 10;
    }

    get viewRatio() {
        //xs, sm, md, lg, xl
        return this.$vuetify.breakpoint.name;
    }

    async mounted() {
        this.apiData = await this.storeModule.gitJobData;
    }

    get isDataAvail(): boolean {
        return this.jobData.length ? true : false;
    }

    get jobData() {
        const list: any[] = [];
        if (this.apiData.length) {
            for (const index in this.apiData) if (Number(index) < this.numberOfJobList) list.push(this.apiData[index]);
        }
        // this.totalResults = ;
        this.isShowMore = this.apiData.length > list.length;
        return list;
    }

    addJobData() {
        this.numberOfJobList += this.numberOfJobList;
    }

    handleSearch({ position, location }: any) {
        this.apiData = this.storeModule.gitJobData;
        if (position || location) {
            this.apiData = this.apiData
                .filter((job: any) => {
                    return (
                        job.company.toLowerCase().includes(position.toLowerCase()) ||
                        job.description.toLowerCase().includes(position.toLowerCase()) ||
                        job.title.toLowerCase().includes(position.toLowerCase()) ||
                        job.type.toLowerCase().includes(position.toLowerCase())
                    );
                })
                .filter((job: any) => job.location.toLowerCase().includes(location.toLowerCase()));
        }
        this.totalResults = this.apiData.length;
        this.jobData;
    }

    handlClearSearch() {
        this.apiData = this.storeModule.gitJobData;
        this.totalResults = this.apiData.length;
    }
}
</script>
<style lang="scss" scoped></style>
