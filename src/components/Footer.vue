<template>
    <v-footer color="headerPrimary" padless>
        <v-row no-gutters justify="center">
            <v-col class="py-4 text-right white--text headerPrimary" cols="auto">
                Author:
                <a href="mailto: shrikantpatel.js@gmail.com" style="text-decoration: none">
                    <strong>Shrikant Patel</strong> |
                    <span class="accent">
                        {{ scrollVariable }}
                    </span>
                </a>
            </v-col>
            <v-col class="py-4 pl-9 text-right white--text headerPrimary" cols="auto">
                |
            </v-col>
            <v-col class="py-4 pl-9 text-right white--text headerPrimary" cols="auto">
                <a href="https://www.instagram.com/shrikbiz.js/" style="text-decoration: none">
                    <v-icon color="primary">mdi-instagram</v-icon>
                </a>
            </v-col>
            <v-col class="py-4 pl-9 text-right white--text headerPrimary" cols="auto">
                |
            </v-col>
            <v-col class="py-4 pl-9 text-right white--text headerPrimary" cols="auto">
                <a href="https://www.linkedin.com/in/shrikant-patel-232282204/" style="text-decoration: none">
                    <v-icon color="primary">mdi-linkedin</v-icon>
                </a>
            </v-col>
            <v-col class="py-4 pl-9 text-right white--text headerPrimary" cols="auto">
                |
            </v-col>
            <v-col class="py-4 pl-9 text-right white--text headerPrimary" cols="auto">
                <a href="https://github.com/shrikbiz7" style="text-decoration: none">
                    <v-icon color="primary">mdi-github</v-icon>
                </a>
            </v-col>
            <v-col class="py-4 pl-9 text-right white--text headerPrimary" cols="auto">
                |
            </v-col>
            <v-col class="py-4 pl-9 text-right white--text headerPrimary" cols="auto">
                <a href="https://shrikbiz.medium.com/" style="text-decoration: none">
                    <v-img
                        color="primary"
                        alt="medium logo"
                        class="shrink mr-2"
                        contain
                        src="@/assets/medium.png"
                        maxWidth="100"
                    />
                </a>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
    @Prop() scrollVariable: any;
}
</script>
