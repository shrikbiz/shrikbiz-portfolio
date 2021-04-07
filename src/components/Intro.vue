<template>
    <div justify="center" align="center">
        <v-img
            gradient="to top right, rgba(100,115,201,.1), rgba(25,32,72,.3)"
            src="@/assets/myPhoto.jpg"
            max-width="300px"
            class="mb-8"
            style="border-radius: 200px;"
        >
        </v-img>
        <v-lazy
            v-model="isActive"
            :options="{
                threshold: 0.5,
            }"
            height="150px"
            transition="fade-transition"
        >
            <div class="typewriter" justify="center" align="center">
                <h1>Hi there, I'm Shrikant Patel.</h1>
                <p id="line-1">I am a FrontEnd Software Developer form Denver, Colorado with ~3 years of experience.</p>
            </div>
        </v-lazy>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Intro extends Vue {
    isActive: boolean = false;
}
</script>

<style scoped lang="scss">
body {
    color: #fffa6b;
    font-family: 'Fira Code', monospace;
}

.typewriter {
    // position: absolute;
    top: 35%;
    left: 10%;
}

.typewriter h1 {
    color: #fffa6b;
    border-right: 10px solid rgba(222, 255, 34, 0.743);
    white-space: nowrap;
    overflow: hidden;
    width: 410px;
    white-space: nowrap;
    overflow: hidden;
    animation: typewriter 2s steps(30) 1s 1 normal both;
}

.typewriter #line-1 {
    color: #ff8269;
    border-right: 10px solid rgba(222, 255, 34, 0.743);
    white-space: nowrap;
    overflow: hidden;
    width: 1000px;
    white-space: nowrap;
    overflow: hidden;
    animation: typewriter 4s steps(50) 1s 1 normal both;
    animation-delay: 3.5s;
    font-size: 1.5rem;
}

@keyframes typewriter {
    0% {
        width: 0;
        border-right: none;
    }
    0.1% {
        border-right: 10px solid rgb(226, 255, 63);
    }
    99.9% {
        border-right: 10px solid rgb(226, 255, 63);
    }
    100% {
        border: none;
    }
}

i {
    opacity: 0;
    animation: fadeIn 2s ease-in-out;
    animation-delay: 10s;
    animation-fill-mode: forwards;
    padding-top: 1rem;
    padding-left: 20px;
}

// a {
//     color: rgb(220, 220, 220);
// }

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>
