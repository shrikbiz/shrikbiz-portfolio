<template>
    <div class="work-info">
        <div class="work-container">
            <!-- //starter: 2500-->
            <v-row v-scroll:#scroll-target="onScroll" justify="center" class="title-row">
                <v-col cols="auto">
                    <TitleEffect
                        :title="'Projects'"
                        :scrollVariable="scrollVariable"
                        :effectEnd="starter"
                        :difference="600"
                        :primaryColorHex="color.hex"
                    />
                </v-col>
            </v-row>
            <v-row justify="center">
                <!-- row 1 -->
                <v-col cols="auto" class="card-col"> </v-col>
                <v-col cols="auto" align="left" class="card-col">
                    <Card
                        :isDirectionLeft="false"
                        :effectEnd="cardMovement(1)"
                        :difference="400"
                        :jobDetails="{
                            companyName: 'Snakes Game using Linked List',
                            jobTitle: 'Side Project',
                            description: snakes,
                        }"
                    />
                </v-col>
                <!-- row 2 -->
                <v-col align="right" class="card-col" cols="auto">
                    <Card
                        :isDirectionLeft="true"
                        :effectEnd="cardMovement(2)"
                        :difference="400"
                        :jobDetails="{
                            companyName: 'Revent App',
                            jobTitle: 'Side Project',
                            description: revent,
                        }"
                    />
                </v-col>
                <v-col cols="auto" class="card-col"> </v-col>
                <!-- row 3 -->
                <v-col cols="auto" class="card-col"></v-col>
                <v-col cols="auto" align="left" class="card-col">
                    <Card
                        :isDirectionLeft="false"
                        :effectEnd="cardMovement(3)"
                        :difference="400"
                        :jobDetails="{
                            companyName: 'Organic Bar',
                            jobTitle: 'Side Project',
                            description: organic,
                        }"
                    />
                </v-col>
                <!-- row 4 -->
                <v-col cols="auto" align="right" class="card-col">
                    <Card
                        :isDirectionLeft="true"
                        :effectEnd="cardMovement(4)"
                        :difference="400"
                        :jobDetails="{
                            companyName: 'Mass. Audubon Society',
                            jobTitle: 'Clark University',
                            description: capstone,
                        }"
                    />
                </v-col>
                <v-col cols="auto" class="card-col"></v-col>
                <!-- row 5 -->
                <v-col cols="auto" class="card-col"></v-col>
                <v-col cols="auto" align="left" class="card-col">
                    <Card
                        :isDirectionLeft="false"
                        :effectEnd="cardMovement(5)"
                        :difference="400"
                        :jobDetails="{
                            companyName: 'Splunk + Sportify data',
                            jobTitle: 'Clark Univeristy',
                            description: splunk,
                        }"
                    />
                </v-col>
                <v-col cols="auto" align="right" class="card-col">
                    <Card
                        :isDirectionLeft="true"
                        :effectEnd="cardMovement(6)"
                        :difference="400"
                        :jobDetails="{
                            companyName: 'Hotel Booking',
                            jobTitle: 'Gujarat Technological University',
                            description: hotel,
                        }"
                    />
                </v-col>
                <v-col cols="auto" class="card-col"></v-col>
            </v-row>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Fraction } from '@/helper/helperIndex';
import { RGB, ColorName, ColorLists, ColorList, GetRGBList } from '@/helper/Colors';
import { Snakes, Revent, Organic, Capstone, Splunk, Hotel } from '@/helper/Text';

@Component({
    components: {
        TitleEffect: () => import('@/components/utils/TitleEffect.vue'),
        Card: () => import('@/components/utils/Card.vue'),
    },
})
export default class ProjectLook extends Vue {
    color: ColorList = ColorLists[1];
    scrollVariable: number = 0;
    snakes: string = Snakes;
    revent: string = Revent;
    organic: string = Organic;
    capstone: string = Capstone;
    splunk: string = Splunk;
    hotel: string = Hotel;
    starter: number = 3100;

    onScroll(event: any) {
        this.scrollVariable = event.target.scrollTop;
    }

    cardMovement(serialNo: number) {
        const difference: number = 400;
        return this.starter + serialNo * difference;
    }

    radialEffect(start: number, end: number) {
        let fraction = Fraction(start, end, this.scrollVariable);
        let hex = this.color.hex;
        return `radial-gradient(circle at ${fraction * 100 - 100}%, rgba(${hex}, 0.527) 5%, #eee 35%, #121212 35%)`;
    }
}
</script>

<style scoped lang="scss">
* {
    font-family: Montserrat, sans-serif;
}

.company-logo {
    max-width: 100px;
    position: absolute;
    right: 10px;
    left: auto;
}

.work-info {
    position: relative;
    height: 370vh;
    z-index: 2;
    background: none;
}
.work-container {
    width: 100%;
    position: relative;
    top: 0rem;
}

.title-row {
    margin-bottom: 5rem;
}
.card-col {
    width: 50%;
}
</style>
