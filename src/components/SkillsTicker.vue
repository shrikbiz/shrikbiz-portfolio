<template>
    <div height="200px">
        <InfiniteScrollBar :barStyle="{ background: 'none', padding: '5px 0', height: '7rem' }" :duration="`40s`">
            <img style="max-height:5rem; margin: auto 5rem" src="@/assets/skills/avengers.png" />
            <img style="max-height:5rem; margin: auto 5rem" src="@/assets/skills/angular.png" />
            <img style="max-height:5rem; margin: auto 5rem" src="@/assets/skills/babel.png" />
            <img style="max-height:5rem; margin: auto 5rem" src="@/assets/skills/bootstrap.png" />
            <img style="max-height:5rem; margin: auto 5rem" src="@/assets/skills/css.png" />
            <img style="max-height:5rem; margin: auto 5rem" src="@/assets/skills/git.png" />
            <img style="max-height:5rem; margin: auto 5rem" src="@/assets/skills/got.png" />
            <img style="max-height:5rem; margin: auto 5rem" src="@/assets/skills/html.png" />
            <img style="max-height:5rem; margin: auto 5rem" src="@/assets/skills/js.png" />
            <img style="max-height:5rem; margin: auto 5rem" src="@/assets/skills/java.png" />
            <img style="max-height:5rem; margin: auto 5rem" src="@/assets/skills/juve.png" />
            <img style="max-height:5rem; margin: auto 5rem" src="@/assets/skills/leet.png" />
            <img style="max-height:5rem; margin: auto 5rem" src="@/assets/skills/npm.png" />
            <img style="max-height:5rem; margin: auto 5rem" src="@/assets/skills/python.png" />
            <img style="max-height:5rem; margin: auto 5rem" src="@/assets/skills/react.png" />
            <img style="max-height:5rem; margin: auto 5rem" src="@/assets/skills/rm.png" />
            <img style="max-height:5rem; margin: auto 5rem" src="@/assets/skills/starwars.png" />
            <img style="max-height:5rem; margin: auto 5rem" src="@/assets/skills/ts.png" />
            <img style="max-height:5rem; margin: auto 5rem" src="@/assets/skills/vue.png" />
            <img style="max-height:5rem; margin: auto 5rem" src="@/assets/skills/yarn.png" />
        </InfiniteScrollBar>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    components: {
        InfiniteScrollBar: () => import('@/helper/InfiniteScroll.vue'),
    },
})
export default class SkillsTicker extends Vue {}
</script>

<style scoped lang="scss"></style>
