<template>
    <!-- replace the max-height if footer is uncommented  -->
    <!-- max-height: calc(100vh - 56.8px) -->
    <div
        id="scroll-target"
        style="max-height: 100vh; width: 100%; height: auto; overflow-x: hidden"
        class="overflow-y-auto"
        v-scroll:#scroll-target="onScroll"
    >
        <v-row
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
        </v-row>

        <!-- the slide in and roller one -->
        <v-row v-scroll:#scroll-target="onScroll" justify="center" class="secondHead primary">
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
        </v-row>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Emit, Prop } from 'vue-property-decorator';
import { Characters } from '@/constants/char';

@Component({
    components: {
        Roller: () => import('vue-roller'),
    },
})
export default class Expiremental extends Vue {
    isActive: boolean = false;
    scrollVariable: number = 0;

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
    onScroll = (event: any): void => (this.scrollVariable = event.target.scrollTop);
}
</script>

<style scoped lang="scss">
* {
    font-family: Montserrat, sans-serif;
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
</style>
