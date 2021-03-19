<template>
    <div>
        <v-card-title>{{ jobData.title }}</v-card-title>
        <v-card-text>
            <v-list-item>
                <v-list-item-content>
                    <div class="subtitle-1 mt-3" style="width: 90%; margin: 0 auto">
                        <v-icon>mdi-map-marker</v-icon>
                        <!-- Location -->
                        <span>
                            {{ jobData.location }}
                        </span>
                    </div>
                    <div class="subtitle-1 mt-2" style="width: 90%; margin: 0 auto">
                        <!-- Company Name -->
                        <v-icon>
                            mdi-office-building
                        </v-icon>
                        {{ jobData.company }}
                    </div>
                    <div class="subtitle-1 mt-2" style="width: 70%">
                        <!-- Company Name -->
                        Description:
                    </div>
                </v-list-item-content>
                <v-list-item-avatar tile size="80">
                    <v-img
                        v-if="jobData.company_logo"
                        alt="Vuetify Logo"
                        class="shrink mr-2"
                        contain
                        :src="jobData.company_logo"
                        transition="scale-transition"
                        maxWidth="80"
                    />
                    <v-icon transition="scale-transition" v-else x-large>mdi-domain</v-icon>
                </v-list-item-avatar>
            </v-list-item>

            <v-divider class="mx-4"></v-divider>
            <v-responsive class="overflow-y-auto mx-5 textBackGround" max-height="200">
                <div>
                    <div v-html="jobData.description"></div>
                </div>
            </v-responsive>
            <v-divider class="mx-4"></v-divider>
            <v-list-item-content>
                <div class="subtitle-1 mt-2 ml-5">
                    <!-- Company Name -->
                    How To Apply:
                </div>
            </v-list-item-content>
            <v-responsive class="overflow-y-auto mx-5" max-height="200">
                <div>
                    <div class="apply" v-html="jobData.how_to_apply"></div>
                </div>
            </v-responsive>
        </v-card-text>
        <v-divider class="mx-4"></v-divider>

        <v-card-actions class="ma-auto">
            <a :href="jobData.url ? jobData.url : 'https://jobs.github.com/'">
                <v-btn text>
                    Apply
                </v-btn>
            </a>
        </v-card-actions>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class JobModal extends Vue {
    @Prop() jobData!: any;
}
</script>

<style scoped>
.apply >>> a {
    color: blue;
}
</style>
