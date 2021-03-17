import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                headerPrimary: '#5865E0',
                primary: '#F5F6F8',
                secondary: '#FFFFFF',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
                textBackGround: '#F5F6F8',
            },
            dark: {
                headerPrimary: '#5865E0',
                primary: '#263238',
                secondary: '#575f69',
                accent: '#3949AB',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
                textBackGround: '#575f69',
            },
        },
    },
});
