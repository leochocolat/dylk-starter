import page from '@/mixins/page';

export default {
    mixins: [page],

    methods: {
        transitionInit() {
            console.log('transition init');
        },

        firstReveal(done, routeInfos) {
            console.log('first reveal', routeInfos);
            done();
        },

        transitionIn(done, routeInfos) {
            console.log('transition in', routeInfos);
            done();
        },

        transitionOut(done, routeInfos) {
            console.log('transition out', routeInfos);
            done();
        },
    },
};
