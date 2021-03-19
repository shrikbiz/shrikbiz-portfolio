<template>
    <div
        id="scroll-target"
        style="max-height: calc(100vh - 56.8px); width: 100%; height: auto; overflow-x: hidden"
        class="overflow-y-auto"
    >
        <div>
            <v-row v-scroll:#scroll-target="onScroll" justify="center" class="masterhead">
                <v-col cols="auto">
                    <div style="width: 100%; height: 500px; overflow-y: hidden; overflow-x: hidden">
                        <v-img
                            :height="imgHeight"
                            style="margin: 10rem 0; overflow-x: hidden"
                            src="@/assets/darkthemeWP.jpeg"
                        >
                            <div width="100%" style="color:white" align="center">
                                <h1
                                    :style="{
                                        marginTop: '50px',
                                        fontFamily: 'Helvetica',
                                        width: '100%',
                                        overflowX: 'hidden',
                                    }"
                                >
                                    <span
                                        v-for="(letter, index) in 'ShrikantPatel'"
                                        :key="index"
                                        :style="{
                                            fontSize: titleSize + 'px',
                                            marginLeft: titleSpacing + 'px',
                                        }"
                                    >
                                        {{ letter }}
                                    </span>
                                </h1>
                                <h4
                                    align="center"
                                    :style="{
                                        width: '100%',
                                        overflowX: 'hidden',
                                        fontSize: subTitleSize + 'px',
                                    }"
                                >
                                    FrontEnd Software Engineer
                                </h4>
                            </div>
                        </v-img>
                    </div>
                    <v-container>
                        <p style="font-size: 2rem; text-align: center; margin-bottom: 2rem">
                            Software Developer | Web Designer | Algorithm Enthusiastic | rookie Content Creator |
                            ex-Footballer (Soccer) | Painter | Cook | Star Wars | Marvels | Game of Thrones | Gym
                            Enthusiastic
                        </p>
                        <p style="text-align: center">
                            Hi, I am Shrikant Patel from Denver, Colorado with ~3 years of experience as FrontEnd
                            Software Engineer. Event though first framework that I learned was Angular, I generally work
                            on Vue and React. When I am not programming, I like to go for hiking, cooking, or watch few
                            Real Madrid or Juventus games. I have currently started to create content on FrontEnd
                            Development related topics for Instagram, and soon for YouTube.
                        </p>
                    </v-container>
                </v-col>
            </v-row>
        </div>
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
                            marginLeft: subTitleSpeed + 'px',
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
import { Component, Emit, Watch, Prop } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import store from '@/store/store';
import { Characters } from '@/constants/char';

@Component({
    components: {
        Roller: () => import('vue-roller'),
    },
})
export default class HomePage extends Vue {
    @Prop() handleScrollVariable: any;
    storeModule: any;
    isActive: boolean = false;
    scrollVariable: number = 0;

    @Emit('handleScrollVariable')
    handleScroll(variable: any) {}

    async created() {
        if (!this.storeModule) this.storeModule = getModule(store, this.$store);
    }

    get titleSpeed(): number {
        let constant: number = 860;
        return this.scrollVariable > constant ? Math.pow(this.scrollVariable - constant, 1.35) : 0;
    }
    get subTitleSpeed(): number {
        let constant: number = 860;
        return this.scrollVariable > constant ? Math.pow(this.scrollVariable - constant, 1.2) : 0;
    }

    get charList(): string[] {
        let capsCharList = Characters.map(char => (char = char?.toUpperCase()));
        let specialChar = ['.', '-'];
        let charList: string[] = [];
        charList.push(...Characters, ...capsCharList, ...specialChar, ' ');
        return charList;
    }

    get imgHeight() {
        let number: number = this.scrollVariable;
        let constant = 400;
        constant += number;
        return constant ? constant : 0;
    }

    get titleSize(): number {
        let number: number = this.scrollVariable / 45;
        number += 100;
        return number;
    }
    get subTitleSize(): number {
        let number: number = this.scrollVariable / 50;
        let constant = 50;
        constant -= number;
        return constant;
    }

    get titleSpacing(): number {
        let number: number = this.scrollVariable / 10;
        return number;
    }

    onScroll(event: any) {
        this.scrollVariable = event.target.scrollTop;
        this.handleScroll(this.scrollVariable);
    }
}
</script>

<style scoped lang="scss">
.masterhead {
    height: 100vh;
    // background-image: linear-gradient(
    //     135deg,
    //     rgb(38, 50, 56) 0%,
    //     rgb(88, 101, 224) 69%,
    //     rgb(57, 73, 171) 89%
    // ) !important;
}

.secondHead {
    height: 100rem;
}

h1 {
    font-size: 4em;
    font-weight: normal;
}
h4 {
    font-weight: normal;
}

h2 {
    font-size: 1.7em;
    font-weight: normal;
}
</style>
