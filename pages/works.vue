<template>
        <NavBar/>
        <main class="w-screen h-screen bg-yellow-600">
                <div class="flex h-full w-full">
                        <swiper
                        :modules="[Parallax]"
                        :grabCursor="true"
                        :loop="true"
                        :parallax="true"
                        :centeredSlides="true"
                        grabCursor="true"
                        effect="parallax"
                        direction="vertical"
                        class="m-auto h-full w-full"
                        rotate="500"
                        >
                                <swiper-slide v-for="(image, idx) in url" class="flex h-full w-full">
                                        <div data-swiper-parallax="00" class="relative h-full w-full flex m-auto">
                                                <div class="relative h-[90%] w-[90%] m-auto rounded-md" :style="{ background: 'center / cover no-repeat url(' + image + ');' }">
                                                        <p data-swiper-parallax="1000" class="text-4xl text-red-500">Test Slide {{ idx }}</p>
                                                </div>
                                        </div>
                                </swiper-slide>
                        </Swiper>
                </div>
        </main>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Parallax } from 'swiper/modules';

import 'swiper/css';


const { $anime } = useNuxtApp()
const url = ref([
        'https://media.istockphoto.com/id/949299844/it/foto/vista-prospettica-dellesterno-delledificio-contemporaneo.jpg?s=612x612&w=0&k=20&c=_DR1aRHuTEV3EYBJo1ZXq1pF4SgwB9EVWQLaBj4sC5g=',
        'https://media.istockphoto.com/id/1178554344/fr/vectoriel/contexte-de-cercles-dessin%C3%A9s-%C3%A0-la-main.jpg?s=2048x2048&w=is&k=20&c=UY85BUJcuaH84rJA6SgCMr_JNjatVMizxsaRyLuGfsM=',
        'https://media.istockphoto.com/id/1301717375/fr/photo/rapides-fluviaux-qui-coulent-photographi%C3%A9s-directement-au-dessus-avec-flou-de-mouvement.jpg?s=2048x2048&w=is&k=20&c=ndAvXRTk8EKko0wh1XlZ_b7s6RximN8eUf2H1UWv7dM=',
        'https://media.istockphoto.com/id/1370189361/fr/vectoriel/r%C3%A9sum%C3%A9-explosion-excitation-explosion-%C3%A9clair-arri%C3%A8re-plan-patriotique.jpg?s=612x612&w=0&k=20&c=6ErVXBgaoQgx-Y3ypQAlCPSdWT8rmCHfsy0QSz_ZX7U=',
        'https://media.istockphoto.com/id/1276580714/fr/photo/rendu-3d-fond-minimal-abstrait-cadre-carr%C3%A9-de-lumi%C3%A8re-de-n%C3%A9on-bleu-rose-avec-lespace-de.jpg?s=612x612&w=0&k=20&c=0sxSqFLvTb8DVHaRcdWuaDhQ2r5aDNRHRtqkQoG2RRk=',
]);
</script>