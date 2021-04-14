<template>
    <div id="lines">
        <p id="line">
            I am a FrontEnd Software Developer from Denver, Colorado with ~3 years of experience.
        </p>
        <p id="line">
            Even though I have worked with all three major-player of web development -
        </p>
        <p id="line">
            Angular, React, and Vue, I majorly work with React and Vue.
        </p>
        <p id="line">
            I love working with Javascript. Recently I started an Instagram page
        </p>
        <p id="line">
            to share my knowledge about Javascript with other upcoming web developers.
        </p>
        <p id="line">
            When I am not programming, I like to cook, bike and/or hike, gym or
        </p>
        <p id="line">
            play with Data Structure & Algorithms.
        </p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Baffle from '@/helper/baffle/baffle';

@Component
export default class Intro extends Vue {
    isActive: boolean = false;
    scrollVariable: number = 0;
    line1: string = `I am a FrontEnd Software Developer form Denver, Colorado with ~3 years of experience.`;
    line2: string = `Even though I have worked with all three major-player of web development - Angular, React, and
                        Vue,`;
    line3: string = `I majorly work with React and Vue. I like working with Javascript.`;
    line4: string = `Recently I started Instagram page to share my knowledge about Javascript with other upcoming web
                        developer.`;
    line5: string = `When I am not programming, I like to cook, bike and/or hike, gym or play with Data Struture &
                        Algorithms.`;

    mounted() {
        console.log('object');
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
</script>

<style scoped lang="scss"></style>
