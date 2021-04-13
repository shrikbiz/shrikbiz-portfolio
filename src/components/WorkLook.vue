<template>
    <!-- <div class="work-info" :style="{ background: radialEffect(0, 900) }"> -->
    <div class="work-info">
        <div class="work-container">
            <v-row v-scroll:#scroll-target="onScroll" justify="center" class="title-row">
                <v-col cols="auto">
                    <TitleEffect
                        :scrollVariable="scrollVariable"
                        :title="'Work'"
                        :effectEnd="starter"
                        :difference="600"
                        :primaryColorHex="color.hex"
                    />
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="auto" align="right" class="card-col">
                    <Card
                        :isDirectionLeft="true"
                        :effectEnd="cardMovement(1)"
                        :difference="350"
                        :jobDetails="{
                            jobTitle: 'Network Visibility Dashboard',
                            description: lumen,
                            logo: `lumen`,
                        }"
                    />
                </v-col>
                <v-col cols="auto" class="card-col"> </v-col>
                <v-col cols="auto" class="card-col"> </v-col>
                <v-col align="left" class="card-col" cols="auto">
                    <Card
                        :isDirectionLeft="false"
                        :effectEnd="cardMovement(2)"
                        :difference="350"
                        :jobDetails="{
                            jobTitle: 'MIPS-MACRA & HRMS',
                            description: ecw,
                            logo: `eCW`,
                        }"
                    />
                </v-col>
                <v-col cols="auto" align="right" class="card-col">
                    <Card
                        :isDirectionLeft="true"
                        :effectEnd="cardMovement(3)"
                        :difference="350"
                        :jobDetails="{
                            jobTitle: 'Employee Attendance & Performance Tracker',
                            description: mazcon,
                            logo: `mazcon`,
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
import { Lumen, Ecw, Mazcon } from '@/helper/Text';

@Component({
    components: {
        TitleEffect: () => import('@/components/utils/TitleEffect.vue'),
        Card: () => import('@/components/utils/Card.vue'),
    },
})
export default class WorkLook extends Vue {
    color: ColorList = ColorLists[0];
    starter: number = 1500;
    scrollVariable: number = 0;
    difference: number = 350;
    lumen: string = Lumen;
    ecw: string = Ecw;
    mazcon: string = Mazcon;
    tempDescription: string = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione consequuntur
                                perspiciatis at repudiandae architecto rerum similique rem velit minima.
                                Voluptates ipsam id, laudantium molestias numquam doloribus accusamus ad quos
                                odit!`;

    onScroll(event: any) {
        this.scrollVariable = event.target.scrollTop;
    }

    cardMovement(serialNo: number) {
        const difference: number = 400;
        return this.starter + serialNo * difference;
    }

    // radialEffect(start: number, end: number) {
    //     let fraction = Fraction(start, end, this.scrollVariable);
    //     let hex = this.color.hex;
    //     return `radial-gradient(circle at ${200 - fraction * 100}%, rgba(${hex}, 0.527) 5%, #eee 35%, #121212 35%)`;
    // }
}
</script>

<style scoped lang="scss">
* {
    font-family: Montserrat, sans-serif;
}

.work-info {
    z-index: 2;
    position: relative;
    height: 170vh;
    background: none;
}
.work-container {
    width: 100%;
    position: relative;
    top: 2rem;
}

.title-row {
    margin-bottom: 5rem;
}
.card-col {
    width: 50%;
}
</style>
