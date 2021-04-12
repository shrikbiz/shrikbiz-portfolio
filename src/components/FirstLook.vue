<template>
    <div>
        <Background style="z-index: 1" />
        <v-row justify="center" class="masterhead">
            <v-col style="z-index: 3" cols="auto" width="100vw">
                <div style="z-index: 4" class="title-area" justify="center" align="center">
                    <h1 class="anim-title" style="z-index: 5">
                        <span
                            style="z-index: 5"
                            class="title-letter color-transition"
                            v-for="(letter, index) in titleName"
                            :key="index"
                        >
                            {{ letter }}
                        </span>
                    </h1>
                </div>
                <v-row style="z-index: 4" class="sub-title-container" align="center" justify="center">
                    <v-col
                        cols="auto"
                        style="z-index: 5"
                        class="sub-title-container-col"
                        v-for="(iAm, index) in iAmList"
                        :key="index"
                    >
                        <span style="z-index: 5" class="sub-titles">
                            <p style="z-index: 5" class="each-sub-titles">
                                {{ iAm }}
                            </p>
                        </span>
                        <span v-if="index !== iAmList.length - 1" class="sub-titles-divider">|</span>
                    </v-col>
                </v-row>
            </v-col>
            <v-col style="z-index: 3" justify="center" align="center">
                <div class="scroll"></div>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import vue from 'vue';
import { Component } from 'vue-property-decorator';
import RGBClass from '@/helper/ColorChange';
import { RGB, GetRGBList } from '@/helper/Colors';

@Component({
    components: {
        Background: () => import('@/components/Background.vue'),
    },
})
export default class FirstLook extends vue {
    scrollVariable: number = 0;
    titleName: string = 'ShrikantPatel';
    char = -1;
    colorChar: number = 0;
    timer: any;
    titleColorArray: any[] = [];
    animTime: number = 0;
    colorList: RGB[] = GetRGBList;
    colorIndex: number = 0;

    iAmList: string[] = [
        'Web Designer',
        'Software Developer',
        'Algorithm Enthusiast',
        'rookie Content Creator',
        'Former Soccer Player',
        'Painter',
        'Cook',
        'Star Wars',
        'Marvels',
        'Game of Thrones',
        'Gym Enthusiastic',
    ];

    created() {
        let index = 0;
        for (let letter of this.titleName) {
            let color: any = new RGBClass();
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

    //do not make it array function
    mounted() {
        this.timer = setInterval(this.onTick, 100);
        this.onTick();
        let text = document.querySelector('.sub-title-container');
        for (let iAm in this.iAmList) {
            let span: any = text?.querySelectorAll('.sub-titles')[iAm];
            let colorIndx = Number(iAm) % this.colorList.length;
            span.style.setProperty('--lineColor', `#${this.colorList[colorIndx]}`);
        }
    }

    //do not make it array function
    onTick() {
        let text = document.querySelector('.anim-title');
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

    //do not make it array function
    slowColorChange() {
        let text: any = document.querySelector('.anim-title');
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
        // if (++this.animTime === 1000) {
        //     clearInterval(this.timer);
        //     this.timer = null;
        //     return;
        // }
        if (++this.char > this.titleName.length - 1) {
            this.colorIndex = ++this.colorIndex % (this.colorList.length * 2);
            this.char = 0;
        }
    }
}
</script>
<style lang="scss" scoped>
.masterhead {
    height: 100vh;
    z-index: 2 !important;
    background: rgba(0, 0, 0, 0);
}

.anim-title {
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    transition: all 0.1s ease-out;
    // font-family: 'Montserrat, sans-serif' !important;
}

.title-area {
    margin-top: 10rem;
    margin-bottom: 2rem;
    width: 100%;
    height: auto;
    overflow-y: hidden;
    overflow-x: hidden;
}

.sub-title-container {
    max-width: 100%;
    // height: 100%;
}

.sub-title-container-col {
    display: flex;
    padding: 0px 20px !important;
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
    //under/overline height
    height: 15px;
    opacity: 0.7;
    background: var(--lineColor);
    //how bottom the underline will be
    bottom: 15px;
    transition: all 0.2s ease-out;
}

.sub-titles:hover:before {
    //how down side the underline will slide
    transform: translateY(15px);
}

.each-sub-titles {
    position: relative;
    display: inline-block;
    //subtitles fontsize
    font-size: 40px;
    background: linear-gradient(to bottom, #fff, #fff 50%, #000 50%, #000 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent !important;
    background-repeat: no-repeat;
    transition: all 0.2s ease-out;
    white-space: nowrap;
    margin-bottom: 0 !important;
}
.each-sub-titles:hover {
    background-position: 0 15px;
}

.sub-titles-divider {
    position: relative;
    display: inline-block;
    font-size: 40px;
    left: 15px;
    right: 15px;
}

//
.title-letter {
    opacity: 0;
    transition-property: opacity, color;
    transition-duration: 1s;
    font-size: 10rem;
}

.title-letter.fade {
    opacity: 1;
}

.about-me {
    text-align: center;
    font-size: 20px;
    margin: 3% 5%;
}

.slide-down {
    // position: absolute;
    // top: auto;
    // bottom: 50px;
    // text-align: center;
    top: 50px;
    font-size: 50px;
    color: grey;
}

h1 {
    font-size: 6rem;
    font-weight: normal;
}

//scroll down icon animation

.scroll {
    width: 60px;
    height: 60px;
    border: 2px solid #fff;
    border-radius: 50%;
    position: relative;
    animation: down 1.5s infinite;
    -webkit-animation: down 1.5s infinite;
    &::before {
        content: '';
        position: absolute;
        top: 15px;
        left: 18px;
        width: 18px;
        height: 18px;
        border-left: 2px solid #fff;
        border-bottom: 2px solid #fff;
        transform: rotate(-45deg);
    }
}

@keyframes down {
    0% {
        transform: translate(0);
    }
    20% {
        transform: translateY(15px);
    }
    40% {
        transform: translate(0);
    }
}

@-webkit-keyframes down {
    0% {
        transform: translate(0);
    }
    20% {
        transform: translateY(15px);
    }
    40% {
        transform: translate(0);
    }
}

@keyframes scroll {
    0% {
        height: 40px;
    }
    30% {
        height: 70px;
    }
    60% {
        height: 40px;
    }
}

@-webkit-keyframes scroll {
    0% {
        height: 40px;
    }
    30% {
        height: 70px;
    }
    60% {
        height: 40px;
    }
}
</style>
