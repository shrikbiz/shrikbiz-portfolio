<template>
    <div class="work-info" :style="{ background: radialEffect(1300, 2400) }">
        <div class="work-container">
            <v-row v-scroll:#scroll-target="onScroll" justify="center" class="title-row">
                <v-col cols="auto">
                    <TitleEffect
                        :scrollVariable="scrollVariable"
                        :title="'Projects'"
                        :effectEnd="1800"
                        :difference="500"
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
                        :effectEnd="2100"
                        :difference="350"
                        :scrollVariable="scrollVariable"
                        :jobDetails="{
                            companyName: 'Revent App',
                            jobTitle: 'Side Project',
                            description: tempDescription,
                        }"
                    >
                        <template v-slot:logo>
                            <v-img contain src="@/assets/LumenLogo.png" class="company-logo"> </v-img>
                        </template>
                    </Card>
                </v-col>
                <!-- row 2 -->
                <v-col align="right" class="card-col" cols="auto">
                    <Card
                        :isDirectionLeft="true"
                        :effectEnd="2250"
                        :difference="350"
                        :scrollVariable="scrollVariable"
                        :jobDetails="{
                            companyName: 'Organic Bar',
                            jobTitle: 'Side Project',
                            description: tempDescription,
                        }"
                    >
                        <template v-slot:logo>
                            <v-img contain src="@/assets/eCW.png" class="company-logo"> </v-img>
                        </template>
                    </Card>
                </v-col>
                <v-col cols="auto" class="card-col"> </v-col>
                <!-- row 3 -->
                <v-col cols="auto" class="card-col"></v-col>
                <v-col cols="auto" align="left" class="card-col">
                    <Card
                        :isDirectionLeft="false"
                        :effectEnd="2600"
                        :difference="350"
                        :scrollVariable="scrollVariable"
                        :jobDetails="{
                            companyName: 'Mass. Audubon Society',
                            jobTitle: 'Clark University',
                            description: tempDescription,
                        }"
                    >
                        <template v-slot:logo>
                            <v-img contain src="@/assets/mazcon.png" class="company-logo"> </v-img>
                        </template>
                    </Card>
                </v-col>
                <!-- row 4 -->
                <v-col cols="auto" align="right" class="card-col">
                    <Card
                        :isDirectionLeft="true"
                        :effectEnd="2950"
                        :difference="350"
                        :scrollVariable="scrollVariable"
                        :jobDetails="{
                            companyName: 'Mass. Audubon Society',
                            jobTitle: 'Clark University',
                            description: tempDescription,
                        }"
                    >
                        <template v-slot:logo>
                            <v-img contain src="@/assets/mazcon.png" class="company-logo"> </v-img>
                        </template>
                    </Card>
                </v-col>
                <v-col cols="auto" class="card-col"></v-col>
                <!-- row 5 -->
                <v-col cols="auto" class="card-col"></v-col>
                <v-col cols="auto" align="left" class="card-col">
                    <Card
                        :isDirectionLeft="false"
                        :effectEnd="3250"
                        :difference="350"
                        :scrollVariable="scrollVariable"
                        :jobDetails="{
                            companyName: 'Hotel Booking',
                            jobTitle: 'Gujarat Technological University',
                            description: tempDescription,
                        }"
                    >
                        <template v-slot:logo>
                            <v-img contain src="@/assets/mazcon.png" class="company-logo"> </v-img>
                        </template>
                    </Card>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Fraction } from '@/helper/helperIndex';
import { RGB, ColorName, ColorLists, ColorList, GetRGBList } from '@/helper/Colors';

@Component({
    components: {
        TitleEffect: () => import('@/components/utils/TitleEffect.vue'),
        Card: () => import('@/components/utils/Card.vue'),
    },
})
export default class ProjectLook extends Vue {
    color: ColorList = ColorLists[1];
    scrollVariable: number = 0;
    tempDescription: string = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione consequuntur
                                perspiciatis at repudiandae architecto rerum similique rem velit minima.
                                Voluptates ipsam id, laudantium molestias numquam doloribus accusamus ad quos
                                odit!`;

    onScroll(event: any) {
        this.scrollVariable = event.target.scrollTop;
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
    height: 200vh;
    background: #121212;
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
