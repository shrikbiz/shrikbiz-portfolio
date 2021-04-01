<template>
    <div
        id="scroll-target"
        style="max-height: 100vh; width: 100%; height: 100vh"
        :style="{
            backgroundImage: `linear-gradient(${degree}deg, ${colors} !important`,
        }"
    ></div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Emit, Watch, Prop } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import store from '@/store/store';
import { Characters } from '@/constants/char';

@Component
export default class SandBox extends Vue {
    @Prop() handleScrollVariable: any;
    storeModule: any;
    isActive: boolean = false;
    scrollVariable: number = 0;
    degree: number = 0;
    colors: string = '';
    red: number[] = [
        Math.floor(Math.random() * Math.max(255)),
        Math.floor(Math.random() * Math.max(255)),
        Math.floor(Math.random() * Math.max(255)),
    ];
    blue: number[] = [
        Math.floor(Math.random() * Math.max(255)),
        Math.floor(Math.random() * Math.max(255)),
        Math.floor(Math.random() * Math.max(255)),
    ];
    green: number[] = [
        Math.floor(Math.random() * Math.max(255)),
        Math.floor(Math.random() * Math.max(255)),
        Math.floor(Math.random() * Math.max(255)),
    ];
    fractionOne: number = Math.floor(Math.random() * Math.max(100));
    fractionTwo: number = Math.floor(Math.random() * Math.max(100));
    fractionThree: number = Math.floor(Math.random() * Math.max(100));

    @Emit('handleScrollVariable')
    handleScroll(variable: any) {}

    mounted() {
        // setInterval(this.change, 100);
    }

    colorIncrementer(color: number[]): number[] {
        color[0]++;
        color[1]++;
        color[2]++;
        if (color[0] > 255) color[0] = 0;
        if (color[1] > 255) color[1] = 0;
        if (color[2] > 255) color[2] = 0;
        return color;
    }

    change() {
        this.degree++;
        if (this.degree > 360) this.degree = 0;
        this.red = this.colorIncrementer(this.red);
        this.blue = this.colorIncrementer(this.blue);
        this.green = this.colorIncrementer(this.green);

        this.fractionOne = 10;
        this.fractionTwo = 20;
        this.fractionThree = 30;

        this.colors = `rgb(${this.red[0]}, ${this.red[1]}, ${this.red[2]}) ${this.fractionOne}%, rgb(${this.blue[0]}, ${this.blue[1]}, ${this.blue[2]}) ${this.fractionTwo}%, rgb(${this.green[0]}, ${this.green[1]}, ${this.green[2]}) ${this.fractionThree}%)`;
    }

    async created() {
        if (!this.storeModule) this.storeModule = getModule(store, this.$store);
    }

    get titleSpeed(): number {
        let constant: number = 862;
        let number = constant - this.scrollVariable;
        return number > 0 ? number : 0;
    }
    get subTitleSpeed(): number {
        let constant: number = 862;
        return this.scrollVariable > constant ? Math.pow(this.scrollVariable - constant, 1.2) : 0;
    }

    get charList(): string[] {
        let capsCharList = Characters.map(char => (char = char?.toUpperCase()));
        let specialChar = ['.', '-'];
        let charList: string[] = [];
        charList.push(...Characters, ...capsCharList, ...specialChar, ' ');
        return charList;
    }

    get changeOpacity(): number {
        let upperBound = 200;
        let lowerBound = 700;
        let fraction =
            this.scrollVariable > upperBound
                ? this.scrollVariable < lowerBound
                    ? (this.scrollVariable - upperBound) / (lowerBound - upperBound)
                    : 1
                : 0;
        return fraction;
    }

    get cardOneSlideIn(): number {
        let lowerBound = 500;
        let upperBound = lowerBound - 350;
        let fraction =
            this.scrollVariable > upperBound
                ? this.scrollVariable < lowerBound
                    ? (this.scrollVariable - upperBound) / (lowerBound - upperBound)
                    : 1
                : 0;
        return fraction * 100 - 80;
    }
    get cardThreeSlideIn(): number {
        let lowerBound = 900;
        let upperBound = lowerBound - 350;
        let fraction =
            this.scrollVariable > upperBound
                ? this.scrollVariable < lowerBound
                    ? (this.scrollVariable - upperBound) / (lowerBound - upperBound)
                    : 1
                : 0;
        return fraction * 100 - 80;
    }
    get cardTwoSlideIn(): number {
        let lowerBound = 650;
        let upperBound = lowerBound - 350;
        let fraction =
            this.scrollVariable > upperBound
                ? this.scrollVariable < lowerBound
                    ? (this.scrollVariable - upperBound) / (lowerBound - upperBound)
                    : 1
                : 0;
        return 80 - fraction * 100;
    }

    get colorPicker() {
        let upperBound = 200;
        let lowerBound = 700;
        let fractionNumber =
            this.scrollVariable < lowerBound
                ? this.scrollVariable > upperBound
                    ? (this.scrollVariable - upperBound) / lowerBound
                    : 0
                : 1;
        let number = Math.floor(fractionNumber * 256);
        number = number < 255 ? number : 255;
        let oneth = this.numberToHex(Math.floor(number / 16))?.toString();
        let zeroth = this.numberToHex(number % 16)?.toString();
        let hexValue = oneth?.concat(zeroth) + oneth?.concat(zeroth) + oneth?.concat(zeroth);
        return hexValue;
    }

    numberToHex(num: number) {
        let hex: any = new Map([
            [10, 'a'],
            [11, 'b'],
            [12, 'c'],
            [13, 'd'],
            [14, 'e'],
            [15, 'f'],
        ]);
        return hex.has(num) ? hex.get(num) : num;
    }

    onScroll(event: any) {
        this.scrollVariable = event.target.scrollTop;
        this.handleScroll(this.scrollVariable);
        let el: any = document.querySelector('.section');
        el.style.color = '-webkit-linear-gradient(blue, #333)';
    }
}
</script>

<style scoped lang="scss">
* {
    font-family: Montserrat, sans-serif;
}

h1 {
    font-size: 4em;
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
.work-card:hover {
    box-shadow: 0 0 20px 0 rgba(255, 255, 255, 1) !important;
    background: rgba(22, 22, 22, 0.651);
}
</style>
