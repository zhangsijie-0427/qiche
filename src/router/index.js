import Vue from 'vue'
import VueRouter from 'vue-router'
import tobu from '@/components/tobu.vue'
import denglu from '@/components/denglu.vue'
import Grenzx from '@/components/Grenzx.vue'
import xinczs from '@/components/Xinczs.vue'
import Yhtj from '@/components/Yhtj.vue'
import Jydh from '@/components/Jydh.vue'
import Bxlp from '@/components/Bxlp.vue'
import Wanerche from '@/components/Wanerche.vue'

Vue.use(VueRouter)

const routes = [{
        path: "/",
        name: "tobu",
        component: tobu
    },
    {
        path: "/denglu",
        name: "denglu",
        component: denglu
    }, {
        path: "/Grenzx",
        name: "Grenzx",
        component: Grenzx
    }, {
        path: "/xinczs",
        name: "xinczs",
        component: xinczs,
    }, {
        path: "/Yhtj",
        name: "Yhtj",
        component: Yhtj
    }, {
        path: "/Jydh",
        name: "Jydh",
        component: Jydh
    }, {
        path: "/Bxlp",
        name: "Bxlp",
        component: Bxlp
    }, {
        path: "/Wanerche",
        name: "Wanerche",
        component: Wanerche
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router