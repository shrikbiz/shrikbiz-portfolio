<template>
    <v-row v-scroll:#scroll-target="onScroll" justify="center" class="masterhead">
        <v-col cols="auto">
            <div style="width: 100%; height: 500px; overflow-y: hidden; overflow-x: hidden">
                <v-img :height="imgHeight" style="margin: 10rem 0; overflow-x: hidden" src="@/assets/darkthemeWP.jpeg">
                    <div width="100%" style="color:white" align="center">
                        <h1
                            :style="{
                                marginTop: '50px',
                                fontFamily: 'Montserrat, sans-serif',
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
                    Software Developer | Web Designer | Algorithm Enthusiastic | rookie Content Creator | Former Soccer
                    Player | Painter | Cook | Star Wars | Marvels | Game of Thrones | Gym Enthusiastic
                </p>
                <p style="text-align: center">
                    Hi, I am Shrikant Patel from Denver, Colorado with ~3 years of experience as FrontEnd Software
                    Engineer. Event though first framework that I learned was Angular, I generally work on Vue and
                    React. When I am not programming, I like to go for hiking, cooking, or watch few Real Madrid or
                    Juventus games. I have currently started to create content on FrontEnd Development related topics
                    for Instagram, and soon for YouTube.
                </p>
            </v-container>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class FirstLook extends vue {
    scrollVariable: number = 0;

    onScroll(event: any) {
        this.scrollVariable = event.target.scrollTop;
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
    get titleSpacing(): number {
        let number: number = this.scrollVariable / 10;
        return number;
    }
    get titleSpeed(): number {
        let constant: number = 860;
        return this.scrollVariable > constant ? Math.pow(this.scrollVariable - constant, 1.35) : 0;
    }
    get subTitleSpeed(): number {
        let constant: number = 860;
        return this.scrollVariable > constant ? Math.pow(this.scrollVariable - constant, 1.2) : 0;
    }
    get subTitleSize(): number {
        let number: number = this.scrollVariable / 50;
        let constant = 50;
        constant -= number;
        return constant;
    }
}
</script>
<style lang="scss" scoped>
.masterhead {
    height: 100vh;
    // background-image: linear-gradient(
    //     135deg,
    //     rgb(38, 50, 56) 0%,
    //     rgb(88, 101, 224) 69%,
    //     rgb(57, 73, 171) 89%
    // ) !important;
}
h1 {
    font-size: 4em;
    font-weight: normal;
    background: -webkit-linear-gradient(#eee, #333);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
h4 {
    font-weight: normal;
    background: -webkit-linear-gradient(rgba(44, 38, 38, 0.726), rgba(233, 233, 233, 0.849));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

h2 {
    font-size: 1.7em;
    font-weight: normal;
}
</style>
