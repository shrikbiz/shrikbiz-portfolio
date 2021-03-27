<template>
    <div
        id="scroll-target"
        style="max-height: calc(100vh - 56.8px); width: 100%; height: auto; overflow-x: hidden"
        class="overflow-y-auto"
    >
        <FirstLook />

        <!-- Title -->
        <div class="work-info" :style="{ background: radialEffect(0, 900) }">
            <!-- <InfiniteScrollBar :barStyle="{ background: '#42b883', padding: '5px 0' }">
                <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png" />
                <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png" />
                <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png" />
                <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png" />
                <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png" />
                <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png" />
                <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png" />
                <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png" />
                <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png" />
                <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png" />
                <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png" />
                <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png" />
                <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png" />
                <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png" />
            </InfiniteScrollBar> -->
            <div class="work-container">
                <v-row v-scroll:#scroll-target="onScroll" justify="center" style=" width: 100%; margin-bottom: 5rem">
                    <v-col cols="auto" style="width: 100%">
                        <TitleEffect
                            :scrollVariable="scrollVariable"
                            :title="'Work'"
                            :effectEnd="600"
                            :difference="500"
                            :primaryColorHex="[221, 69, 255]"
                        />
                    </v-col>
                </v-row>
                <v-row justify="center" style=" width: 100%; margin-bottom: 50vh">
                    <v-col cols="auto" align="right" style="width: 50%">
                        <Card
                            :isDirectionLeft="true"
                            :effectEnd="900"
                            :difference="350"
                            :scrollVariable="scrollVariable"
                            :jobDetails="{
                                jobTitle: 'FrontEnd Software Engineer',
                                companyName: 'Lumen Technologies',
                                description: tempDescription,
                            }"
                        >
                            <template v-slot:logo>
                                <v-img contain src="@/assets/LumenLogo.png" class="company-logo"> </v-img>
                            </template>
                        </Card>
                    </v-col>
                    <v-col cols="auto" style="width: 50%"> </v-col>
                    <v-col cols="auto" style="width: 50%"> </v-col>
                    <v-col align="left" cols="auto" style="width: 50%">
                        <Card
                            :isDirectionLeft="false"
                            :effectEnd="1200"
                            :difference="350"
                            :scrollVariable="scrollVariable"
                            :jobDetails="{
                                jobTitle: 'Software Specialist',
                                companyName: 'eClinicalWorks',
                                description: tempDescription,
                            }"
                        >
                            <template v-slot:logo>
                                <v-img contain src="@/assets/eCW.png" class="company-logo"> </v-img>
                            </template>
                        </Card>
                    </v-col>
                    <v-col cols="auto" align="right" style="width: 50%">
                        <Card
                            :isDirectionLeft="true"
                            :effectEnd="1500"
                            :difference="350"
                            :scrollVariable="scrollVariable"
                            :jobDetails="{
                                jobTitle: 'Software Developer (Intern)',
                                companyName: 'Mazcon InfoTech',
                                description: tempDescription,
                            }"
                        >
                            <template v-slot:logo>
                                <v-img contain src="@/assets/mazcon.png" class="company-logo"> </v-img>
                            </template>
                        </Card>
                    </v-col>
                    <v-col cols="auto" style="width: 50%"></v-col>
                </v-row>
            </div>
        </div>
        <!-- <v-row
            v-scroll:#scroll-target="onScroll"
            justify="center"
            class="secondHead"
            style="width: 100%; margin-bottom: 50vh"
        >
            <v-col cols="auto" style="width: 100%">
                <div align="center">
                    <v-card width="400" :style="{ left: cardTwoSlideIn + '%', right: 'auto', overflowX: 'hidden' }">
                        <v-img height="200px" src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg">
                            <v-card-title class="white--text mt-8">
                                <v-avatar size="56">
                                    <img
                                        alt="user"
                                        src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                                    />
                                </v-avatar>
                                <p class="ml-3">
                                    card 2
                                </p>
                            </v-card-title>
                        </v-img>

                        <v-card-text>
                            <div class="font-weight-bold ml-8 mb-2">
                                Card 2 Items
                            </div>

                            <v-timeline align-top dense>
                                <v-timeline-item
                                    v-for="(message, index) in ['work with javascript', 'worked with typescript']"
                                    :key="index"
                                    small
                                >
                                    <div>
                                        <div class="font-weight-normal">
                                            <strong>{{ index }}: </strong>
                                            <span> {{ message }}</span>
                                        </div>
                                    </div>
                                </v-timeline-item>
                            </v-timeline>
                        </v-card-text>
                    </v-card>
                </div>
            </v-col>
        </v-row> -->

        <!-- the slide in and roller one -->
        <!-- <v-row v-scroll:#scroll-target="onScroll" justify="center" class="secondHead primary">
            <v-col cols="auto">
                <div align="center" style="margin-top: 10rem">
                    <v-lazy
                        v-model="isActive"
                        :options="{
                            threshold: 0.1,
                        }"
                        min-height="200"
                        transition="fade-transition"
                    >
                        <h1
                            :style="{
                                width: '100%',
                                fontFamily: 'Helvetica',
                                marginLeft: titleSpeed + 'px',
                                overflowX: 'hidden',
                            }"
                        >
                            <Roller
                                :wordWrap="10"
                                :charList="charList"
                                defaultChar=" "
                                :transition="1"
                                text="Shrikant P"
                            ></Roller>
                        </h1>
                    </v-lazy>
                    <h4
                        align="center"
                        :style="{
                            width: '100%',
                            marginLeft: titleSpeed + 'px',
                            overflowX: 'none',
                        }"
                    >
                        FrontEnd Software Engineer
                    </h4>
                </div>
            </v-col>
        </v-row> -->
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Emit, Prop } from 'vue-property-decorator';
import { Characters } from '@/constants/char';
import { Fraction } from '@/helper/helperIndex';

@Component({
    components: {
        Roller: () => import('vue-roller'),
        FirstLook: () => import('@/components/FirstLook.vue'),
        TitleEffect: () => import('@/components/utils/TitleEffect.vue'),
        Card: () => import('@/components/utils/Card.vue'),
        InfiniteScrollBar: () => import('@/helper/InfiniteScroll.vue'),
    },
})
export default class HomePage extends Vue {
    @Prop() handleScrollVariable: any;
    isActive: boolean = false;
    scrollVariable: number = 0;
    tempDescription: string = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione consequuntur
                                perspiciatis at repudiandae architecto rerum similique rem velit minima.
                                Voluptates ipsam id, laudantium molestias numquam doloribus accusamus ad quos
                                odit!`;

    @Emit('handleScrollVariable')
    handleScroll(variable: any) {}

    //for title sliding in
    get titleSpeed(): number {
        let constant: number = 862;
        let number = constant - this.scrollVariable;
        return number > 0 ? number : 0;
    }
    // for roller
    get charList(): string[] {
        let capsCharList = Characters.map(char => (char = char?.toUpperCase()));
        let specialChar = ['.', '-'];
        let charList: string[] = [];
        charList.push(...Characters, ...capsCharList, ...specialChar, ' ');
        return charList;
    }
    onScroll(event: any) {
        this.scrollVariable = event.target.scrollTop;
        this.handleScroll(this.scrollVariable);
    }

    radialEffect(start: number, end: number) {
        let fraction = Fraction(start, end, this.scrollVariable);
        return `radial-gradient(circle at ${200 -
            fraction * 100}%, rgba(255, 71, 255, 0.527) 5%, #eee 35%, #121212 35%)`;
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

h1 {
    font-size: 5em;
    font-weight: normal;
}
h4 {
    font-weight: normal;
    font-family: Montserrat, sans-serif;
}

h2 {
    font-size: 1.7em;
    font-weight: normal;
}
.work-info {
    position: relative;
    height: 150vh;
    background: #121212;
    // background: radial-gradient(circle at 100%, rgba(255, 71, 255, 0.527) 5%, #eee 35%, #121212 35%);
}
.work-container {
    position: relative;
    top: 0rem;
}

.work-card:hover {
    box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.692) !important;
    background: rgba(22, 22, 22, 0.884);
}
</style>
