<template>
    <v-row v-scroll:#scroll-target="onScroll" justify="center" class="masterhead">
        <v-col cols="auto">
            <div style="width: 100%; height: 500px; overflow-y: hidden; overflow-x: hidden">
                <!-- <v-img :height="imgHeight" style="margin: 10rem 0; overflow-x: hidden" src="@/assets/mountainWP.jpeg"> -->
                <!-- </v-img> -->

                <div width="100%" style="margin: 10rem 0" align="center">
                    <h1
                        :style="{
                            marginTop: '50px',
                            fontFamily: 'Montserrat, sans-serif',
                            width: '100%',
                            overflowX: 'hidden',
                        }"
                        class="animTitle"
                    >
                        <span
                            v-for="(letter, index) in titleName"
                            :key="index"
                            :style="{
                                fontSize: '6rem',
                                transition: `font-size margin-left 0s`,
                            }"
                        >
                            <!-- marginLeft: titleSpacing + 'px', -->
                            {{ letter }}
                        </span>
                    </h1>
                    <h4
                        align="center"
                        :style="{
                            width: '100%',
                            overflowX: 'hidden',
                            fontSize: titleSize + 'px',
                        }"
                    >
                        FrontEnd Software Engineer
                    </h4>
                </div>
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
import RGB from '@/helper/color';

@Component
export default class FirstLook extends vue {
    scrollVariable: number = 0;
    titleName: string = 'ShrikantPatel';
    char = -1;
    colorChar: number = 0;
    timer: any;
    titleColorArray: any[] = [];
    animTime: number = 0;
    colorList: string[] = ['dd45ff', '41faf4', 'cffa41', 'cb6bff'];
    colorIndex: number = 0;

    get imgHeight() {
        let number: number = this.scrollVariable;
        let constant = 400;
        constant += number;
        return constant ? constant : 0;
    }
    get titleSize(): number {
        return this.scrollVariable < 800 ? this.scrollVariable / 45 + 50 : 60;
    }
    get titleSpacing(): number {
        let number: number = this.scrollVariable / 40;
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
        let span: any = text?.querySelectorAll('span')[this.char];
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
        let span: any = text.querySelectorAll('span')[this.char];
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
span {
    opacity: 0;
    transition: all ease 1s;
}
span.fade {
    opacity: 1;
}

h1 {
    font-size: 4em;
    font-weight: normal;
    // background: -webkit-linear-gradient(#eee, rgb(86, 86, 86));
    // background-clip: text;
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
}
h4 {
    font-weight: normal;
    background: -webkit-linear-gradient(rgb(233, 233, 233), rgba(241, 80, 247, 0.914), rgb(233, 233, 233));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

h2 {
    font-size: 1.7em;
    font-weight: normal;
}
</style>
