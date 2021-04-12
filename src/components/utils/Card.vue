<template>
    <v-card
        v-scroll:#scroll-target="onScroll"
        min-width="500"
        class="work-card"
        :style="{ maxWidth: '600px', left: cardSlideEffect, overflowX: 'hidden' }"
    >
        <div align="center" justify="center" v-if="jobDetails.logo">
            <v-img :src="imgUrl" class="mt-8 mb-8" max-width="300px" max-height="100px" style="border-radius: 10px;" />
            <!-- gradient="to top right, rgba(100,115,201,.1), rgba(25,32,72,.3)" -->
        </div>
        <v-card-title class="mt-8" v-if="jobDetails.companyName">
            <strong class="ml-8" style="font-size: 2em">
                {{ jobDetails.companyName }}
            </strong>
        </v-card-title>

        <v-card-title>
            <strong class="ml-8" style="color: grey">
                {{ jobDetails.jobTitle }}
            </strong>
        </v-card-title>

        <v-card-text>
            <div class="font-weight-bold ml-8 mb-2" align="left">
                {{ jobDetails.description }}
            </div>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Fraction } from '@/helper/helperIndex';

interface JobDetails {
    jobTitle: string;
    companyName?: string;
    description: string;
    logo?: string;
}

@Component
export default class Card extends Vue {
    @Prop() isDirectionLeft!: any;
    @Prop() effectEnd!: any;
    @Prop() difference!: any;
    @Prop() jobDetails!: JobDetails;

    scrollVariable: number = 0;
    get effectStart(): number {
        return this.effectEnd - (this.difference ? this.difference : 500);
    }
    get cardSlideEffect(): string {
        return (
            (this.isDirectionLeft
                ? (Fraction(this.effectStart, this.effectEnd, this.scrollVariable) - 1) * 20
                : (1 - Fraction(this.effectStart, this.effectEnd, this.scrollVariable)) * 20) + '%'
        );
    }

    get imgUrl() {
        var images = require.context('@/assets/', false, /\.png$/);
        return this.jobDetails.logo ? images('./' + this.jobDetails.logo + '.png') : '';
    }

    onScroll(event: any) {
        this.scrollVariable = event.target.scrollTop;
    }
}
</script>

<style scoped lang="scss">
* {
    font-family: Montserrat, sans-serif;
}

.work-info {
    position: relative;
    height: 150vh;
    background: #121212;
    background: radial-gradient(circle at 100%, rgba(255, 71, 255, 0.527) 5%, #eee 35%, #121212 35%);
}
.work-container {
    position: relative;
    top: 10rem;
}

.work-card {
    // border-radius: 50px !important ;
}

.work-card:hover {
    box-shadow: 0 0 20px 0 rgba(255, 255, 255, 1) !important;
}
</style>
