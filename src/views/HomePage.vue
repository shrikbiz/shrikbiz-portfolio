<template>
    <div
        id="scroll-target"
        style="max-height: calc(100vh - 56.8px); width: 100%; height: auto; overflow-x: hidden"
        class="overflow-y-auto"
    >
        <FirstLook />
        <v-row v-scroll:#scroll-target="onScroll" justify="center" class="secondHead primary">
            <v-col cols="auto">
                <div align="center">
                    <v-lazy
                        v-model="isActive"
                        :options="{
                            threshold: 0.1,
                        }"
                        min-height="200"
                        transition="fade-transition"
                    >
                        <h1
                            class="section"
                            :style="{
                                width: '100%',
                                fontFamily: 'Montserrat, sans-serif',
                                overflowX: 'hidden',
                                opacity: changeOpacity,
                                backgroundImage: 'linear-gradient(#999, #000)',
                                webkitBackgroundClip: 'text',
                                color: 'transparent',
                            }"
                        >
                            Work
                        </h1>
                    </v-lazy>
                    <h4
                        align="center"
                        :style="{
                            width: '100%',
                            overflowX: 'none',
                        }"
                    >
                        FrontEnd Software Engineer
                    </h4>
                </div>
            </v-col>
        </v-row>

        <!-- the slide in and roller one -->
        <!-- <v-row v-scroll:#scroll-target="onScroll" justify="center" class="secondHead primary">
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
        </v-row> -->
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
        FirstLook: () => import('@/components/FirstLook.vue'),
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
        let number = this.scrollVariable - 200;
        let percentage = number > 0 ? (number < 601 ? number / 600 : 1) : 0;
        return percentage;
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
    height: 100vh;
}

h1 {
    font-size: 4em;
    font-weight: normal;
    // background: -webkit-linear-gradient(#eee, #333);
    // background-clip: text;
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
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
