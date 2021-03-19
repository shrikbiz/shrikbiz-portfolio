import { Action, Module, Mutation, MutationAction, VuexModule } from 'vuex-module-decorators';
import api from '@/api';
import store from '.';

export const STORE_KEY = '$_jobsearch';

@Module({
    namespaced: true,
    name: STORE_KEY,
    store: store,
})
export default class AppStore extends VuexModule {
    isDarkTheme = false;
    isSideBar = false;
    gitJobData = {};
    gitJobError = {};
    isGitDataAvailable = false;

    @Mutation
    changeStoreTheme(data: boolean) {
        this.isDarkTheme = data;
    }

    @Mutation
    sideBarStatus() {
        this.isSideBar = !this.isSideBar;
    }

    @Mutation
    hideSideBar() {
        this.isSideBar = false;
    }

    @Mutation
    isGitJobApiLoaded(data: boolean) {
        this.isGitDataAvailable = data;
    }

    @Mutation
    addGitJobData(args: any) {
        this.gitJobData = args.data;
        this.gitJobError = args.dataError;
    }
    @Action({ commit: 'addGitJobData' })
    async getGitJobData() {
        this.context.commit('isGitJobApiLoaded', false);
        let data: any;
        let dataError: Record<string, string> = {};
        try {
            data = api.getJobApi();
            this.context.commit('isGitJobApiLoaded', true);
        } catch (e) {
            dataError = { serviceSegment: e };
        }
        return {
            data,
            dataError,
        };
    }
}
