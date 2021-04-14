<template>
    <div v-scroll:#scroll-target="onScroll" justify="center" align="center">
        <v-img
            gradient="to top right, rgba(100,115,201,.1), rgba(25,32,72,.3)"
            src="@/assets/myPhoto.png"
            max-width="300px"
            class="mb-8"
            style="border-radius: 50px;"
        >
        </v-img>
        <v-lazy
            v-model="isActive"
            :options="{
                threshold: 0.2,
            }"
            height="auto"
            transition="fade-transition"
        >
            <div class="typewriter" justify="left" align="left">
                <h1>Hi there, I'm Shrikant.</h1>
                <!-- <IntroText /> -->
                <div id="lines">
                    <p id="line">
                        I am a FrontEnd Software Developer from Denver, Colorado with ~3 years of experience. Even
                        though I have worked with all three major players of web development - Angular, React, and Vue,
                        I majorly work with React and Vue. I love working with Javascript. Recently I started an
                        Instagram page to share my knowledge about Javascript with other upcoming web developers. When I
                        am not programming, I like to cook, bike and/or hike, gym, or play with Data Structure &
                        Algorithms.
                    </p>
                </div>
            </div>
        </v-lazy>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Baffle from '@/helper/baffle/baffle';

@Component
export default class Intro extends Vue {
    isActive: boolean = false;
    implement = 0;
    scrollVariable: number = 0;
    line1: string = `I am a FrontEnd Software Developer form Denver, Colorado with ~3 years of experience.`;
    line2: string = `Even though I have worked with all three major-player of web development - Angular, React, and
                        Vue,`;
    line3: string = `I majorly work with React and Vue. I like working with Javascript.`;
    line4: string = `Recently I started Instagram page to share my knowledge about Javascript with other upcoming web
                        developer.`;
    line5: string = `When I am not programming, I like to cook, bike and/or hike, gym or play with Data Struture &
                        Algorithms.`;

    created() {
        console.log(
            `line1: ${this.line1.length}, line2: ${this.line2.length}, line3: ${this.line3.length}, line4: ${this.line4.length}, line5: ${this.line5.length}`
        );
    }
    onScroll(event: any) {
        this.scrollVariable = event.target.scrollTop;
        if (this.scrollVariable > 570) {
            this.implement++;
            this.animGlitch();
        }
    }

    animGlitch() {
        if (this.implement === 2) {
            let text = document.querySelector('#lines');
            let baffle = Baffle(text, {
                characters: '░▒ ▓/░ﻨ█▓█ﻪ▒░ო▓▒▓էհรﻨĸռﻪս▒▓░',
                speed: 100,
            });
            baffle.start();
            baffle.reveal(4000);
            console.log(baffle);
        }
    }
}
</script>

<style scoped lang="scss">
.typewriter {
    position: relative;
    top: 35%;
    left: 20rem;
    margin-bottom: 5rem;
    font-family: 'Fira Code', monospace;
    background: #1212127e;
}

.typewriter h1 {
    color: #858585;
    border-right: 10px solid rgba(167, 255, 15, 0.907);
    white-space: nowrap;
    overflow: hidden;
    width: 450px;
    white-space: nowrap;
    overflow: hidden;
    margin-bottom: 2rem;
    animation: typewriter 2s steps(30) 1s 1 normal both;
}

#lines {
    max-width: 1000px;
}

@keyframes typewriter {
    0% {
        width: 0;
        border-right: none;
    }
    0.1% {
        border-right: 10px solid rgba(167, 255, 15, 0.907);
    }
    99.9% {
        border-right: 10px solid rgba(167, 255, 15, 0.907);
    }
    100% {
        border: none;
    }
}
</style>
