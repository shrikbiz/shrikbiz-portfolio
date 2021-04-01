<template>
    <!-- replace the max-height if footer is uncommented  -->
    <!-- max-height: calc(100vh - 56.8px) -->
    <div
        id="scroll-target"
        style="max-height: calc(100vh - 56.8px); width: 100%; height: auto; overflow-x: hidden"
        class="overflow-y-auto"
        v-scroll:#scroll-target="onScroll"
    >
        <FirstLook />

        <!-- Skill Hotizontal Ticker -->
        <!-- <SkillsTicker /> -->

        <!-- Title -->
        <WorkLook />

        <ProjectLook />
        <!-- <div style="min-height:100vh; background: white"></div> -->
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Emit, Prop } from 'vue-property-decorator';
import { Characters } from '@/constants/char';
import { Fraction } from '@/helper/helperIndex';

@Component({
    components: {
        Roller: () => import('vue-roller'),
        FirstLook: () => import('@/components/FirstLook.vue'),
        WorkLook: () => import('@/components/WorkLook.vue'),
        ProjectLook: () => import('@/components/ProjectLook.vue'),
        SkillsTicker: () => import('@/components/SkillsTicker.vue'),
        TitleEffect: () => import('@/components/utils/TitleEffect.vue'),
        Card: () => import('@/components/utils/Card.vue'),
        InfiniteScrollBar: () => import('@/helper/InfiniteScroll.vue'),
    },
})
export default class HomePage extends Vue {
    @Prop() handleScrollVariable: any;
    scrollVariable: number = 0;

    @Emit('handleScrollVariable')
    handleScroll(variable: any) {}

    //for title sliding in
    get titleSpeed(): number {
        let constant: number = 862;
        let number = constant - this.scrollVariable;
        return number > 0 ? number : 0;
    }
    // for roller
    get charList(): string[] {
        let capsCharList = Characters.map(char => (char = char?.toUpperCase()));
        let specialChar = ['.', '-'];
        let charList: string[] = [];
        charList.push(...Characters, ...capsCharList, ...specialChar, ' ');
        return charList;
    }
    onScroll(event: any) {
        this.scrollVariable = event.target.scrollTop;
        this.handleScroll(this.scrollVariable);
    }

    radialEffect(start: number, end: number) {
        let fraction = Fraction(start, end, this.scrollVariable);
        return `radial-gradient(circle at ${200 -
            fraction * 100}%, rgba(255, 71, 255, 0.527) 5%, #eee 35%, #121212 35%)`;
    }
}
</script>

<style scoped lang="scss">
* {
    font-family: Montserrat, sans-serif;
}

.company-logo {
    max-width: 100px;
    position: absolute;
    right: 10px;
    left: auto;
}

h1 {
    font-size: 5em;
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
.work-info {
    position: relative;
    height: 150vh;
    background: #121212;
}
.work-container {
    position: relative;
    top: 0rem;
}

.work-card:hover {
    box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.692) !important;
    background: rgba(22, 22, 22, 0.884);
}
</style>
