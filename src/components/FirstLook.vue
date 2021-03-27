<template>
    <v-row v-scroll:#scroll-target="onScroll" justify="center" class="masterhead">
        <v-col cols="auto">
            <div style="width: 100%; height: 300px; overflow-y: hidden; overflow-x: hidden">
                <div width="100%" align="center" style="margin-top: 5rem">
                    <!-- <v-img :height="imgHeight" style="margin-bottom: 5rem; overflow-x: hidden" src="@/assets/code.jpeg"> -->
                    <h1
                        :style="{
                            marginTop: '50px',
                            fontFamily: 'Montserrat, sans-serif',
                            width: '100%',
                            overflowX: 'hidden',
                            fontSize: titleSize + 'px',
                            transition: 'all 0.1s ease-out',
                        }"
                        class="animTitle"
                    >
                        <span class="title-letter color-transition" v-for="(letter, index) in titleName" :key="index">
                            {{ letter }}
                        </span>
                    </h1>
                    <!-- </v-img> -->
                </div>
            </div>
            <v-row style="max-width: 100%" class="sub-title-container" align="center" justify="center">
                <v-col cols="auto" style="display: flex" v-for="(iAm, index) in iAmList" :key="index">
                    <span class="sub-titles">
                        <p class="each-sub-titles">
                            {{ iAm }}
                        </p>
                    </span>
                    <span class="sub-titles-divider">|</span>
                </v-col>
            </v-row>
            <p style="text-align: center; font-size: 30px; margin: auto 5%" justify="center">
                Hi, I am Shrikant Patel from Denver, Colorado with ~3 years of experience as FrontEnd Software Engineer.
                Event though first framework that I learned was Angular, I generally work on Vue and React. When I am
                not programming, I like to go for hiking, cooking, or watch few Real Madrid or Juventus games. I have
                currently started to create content on FrontEnd Development related topics for Instagram, and soon for
                YouTube.
            </p>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import vue from 'vue';
import { Component } from 'vue-property-decorator';
import RGB from '@/helper/color';
import { Fraction } from '@/helper/helperIndex';

@Component
export default class FirstLook extends vue {
    scrollVariable: number = 0;
    titleName: string = 'ShrikantPatel';
    char = -1;
    colorChar: number = 0;
    timer: any;
    titleColorArray: any[] = [];
    animTime: number = 0;
    //ff8269 -> red
    //cb6bff -> violet
    //cffa41 -> yellowish green
    //ffb36b -> orange
    //41faf4 -> blue
    //dd45ff -> pinkish - violet (red, blue)
    colorList: string[] = ['cb6bff', 'cffa41', 'ffb36b', '41faf4', 'dd45ff', 'ff8269'];
    colorIndex: number = 0;

    iAmList: string[] = [
        'Web Designer',
        'Software Developer',
        'Algorithm Enthusiastic',
        'rookie Content Creator',
        'Former Soccer Player',
        'Painter',
        'Cook',
        'Star Wars',
        'Marvels',
        'Game of Thrones',
        'Gym Enthusiastic',
    ];

    get imgHeight() {
        let number: number = this.scrollVariable;
        let constant = 400;
        constant += number;
        return constant ? constant : 0;
    }
    get titleSize(): number {
        return this.scrollVariable < 800 ? this.scrollVariable / 15 + 100 : 60;
    }

    created() {
        let index = 0;
        for (let letter of this.titleName) {
            let color: any = new RGB();
            let limit: number = index * 100;
            for (let i = 0; i < limit; i++) color.colorChange();
            this.titleColorArray.push({
                letter,
                index,
                color,
            });
            index++;
        }
    }

    getColor(index: number): string {
        let color = this.titleColorArray[index];
        return `rgb(${color.color.rgb[0]}, ${color.color.rgb[1]}, ${color.color.rgb[2]})`;
    }

    onScroll(event: any) {
        this.scrollVariable = event.target.scrollTop;
    }

    onTick() {
        let text = document.querySelector('.animTitle');
        let span: any = text?.querySelectorAll('.title-letter')[this.char];
        span?.classList.add('fade');
        this.char++;
        if (this.char == this.titleName.length) {
            clearInterval(this.timer);
            this.timer = null;
            this.char = 0;
            this.timer = setInterval(this.slowColorChange, 100);
            return;
        }
    }

    slowColorChange() {
        let text: any = document.querySelector('.animTitle');
        let span: any = text.querySelectorAll('.title-letter')[this.char];
        if (this.colorIndex % 2 === 0) {
            span.style.color = `#${this.colorList[this.colorIndex / 2]}`;
        } else {
            if (Math.floor(this.colorIndex / 2) % 2)
                span.style.backgroundImage = `linear-gradient(#${this.colorList[Math.floor(this.colorIndex / 2)]}, #${
                    this.colorList[Math.floor(this.colorIndex / 2 + 1)]
                })`;
            else
                span.style.backgroundImage = `linear-gradient(#fff, #${
                    this.colorList[Math.floor(this.colorIndex / 2)]
                })`;
            span.style.webkitBackgroundClip = 'text';
            span.style.color = 'transparent';
        }
        if (++this.animTime === 1000) {
            clearInterval(this.timer);
            this.timer = null;
            return;
        }
        if (++this.char > this.titleName.length - 1) {
            this.colorIndex = ++this.colorIndex % 8;
            this.char = 0;
        }
    }

    afterEaseIn() {
        let text = document.querySelector('.animTitle');
        let span: any = text?.querySelectorAll('span')[this.char];
        for (let i = 0; i < this.titleName.length; i++) {
            this.titleColorArray[i].color.colorChange();
        }
        span.style.color = this.getColor(this.char);
        this.char++;
        if (this.char == this.titleName.length) this.char = 0;
        if (this.animTime === 3000) {
            clearInterval(this.timer);
            this.timer = null;
            this.char = 0;
            return;
        }
        this.animTime++;
    }

    mounted(): void {
        this.timer = setInterval(this.onTick, 100);
        this.onTick();
        let text = document.querySelector('.sub-title-container');
        for (let iAm in this.iAmList) {
            let span: any = text?.querySelectorAll('.sub-titles')[iAm];
            let colorIndx = Number(iAm) % this.colorList.length;
            span.style.setProperty('--lineColor', `#${this.colorList[colorIndx]}`);
        }
    }
}
</script>
<style lang="scss" scoped>
.masterhead {
    height: 120vh;
    // background-image: linear-gradient(
    //     135deg,
    //     rgb(38, 50, 56) 0%,
    //     rgb(88, 101, 224) 69%,
    //     rgb(57, 73, 171) 89%
    // ) !important;
}

.each-sub-titles {
    position: relative;
    display: inline-block;
    font-size: 50px;
    background: linear-gradient(to bottom, #fff, #fff 60%, #000 50%, #000 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent !important;
    background-repeat: no-repeat;
    transition: all 0.2s ease-out;
    white-space: nowrap;
}

.sub-titles-divider {
    position: relative;
    display: inline-block;
    font-size: 50px;
    left: 15px;
    right: 15px;
}

.sub-titles {
    position: relative;
    --lineColor: #cb6bff;
}

.sub-titles:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 15px;
    opacity: 0.7;
    background: var(--lineColor);
    bottom: 30px;
    transition: all 0.2s ease-out;
}

.each-sub-titles:hover {
    background-position: 0 11px;
}

.sub-titles:hover:before {
    transform: translateY(10px);
}

//
.title-letter {
    opacity: 0;
    transition-property: opacity, color;
    transition-duration: 1s;
}
// .color-transition {
//     transition: color ease-out 1s;
// }
.title-letter.fade {
    opacity: 1;
}

h1 {
    font-size: 6rem;
    font-weight: normal;
}
h4 {
    font-weight: normal;
    background: -webkit-linear-gradient(135deg, rgb(255, 255, 255), rgba(143, 142, 142, 0.996), rgb(255, 254, 254));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

h2 {
    font-size: 1.7em;
    font-weight: normal;
}
</style>
