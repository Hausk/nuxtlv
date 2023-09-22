<template>
        <NavBar/>
        <main class="w-screen h-screen bg-yellow-600">
                <div id="slider" class="slider flex flex-none h-screen w-screen" :style="{ transform: `translateX(${translateX})` }">
                        <div v-for="(image, index) in url" :key="index" class="w-screen flex flex-none">
                                <img :src="image" class="m-auto w-[90%] carousel-image"/>
                        </div>
                </div>
                <button @click="prevSlide" class="prev-button absolute bottom-[10%] left-0 bg-red-500 text-white px-4 py-2">Précédent</button>
                <button @click="nextSlide" class="next-button absolute bottom-[10%] right-0 bg-red-500 text-white px-4 py-2">Suivant</button>
        </main>
</template>

<script setup>
import { ref } from 'vue';

const { $anime } = useNuxtApp()
const url = ref([
        'https://media.istockphoto.com/id/949299844/it/foto/vista-prospettica-dellesterno-delledificio-contemporaneo.jpg?s=612x612&w=0&k=20&c=_DR1aRHuTEV3EYBJo1ZXq1pF4SgwB9EVWQLaBj4sC5g=',
        'https://media.istockphoto.com/id/1178554344/fr/vectoriel/contexte-de-cercles-dessin%C3%A9s-%C3%A0-la-main.jpg?s=2048x2048&w=is&k=20&c=UY85BUJcuaH84rJA6SgCMr_JNjatVMizxsaRyLuGfsM=',
        'https://media.istockphoto.com/id/1301717375/fr/photo/rapides-fluviaux-qui-coulent-photographi%C3%A9s-directement-au-dessus-avec-flou-de-mouvement.jpg?s=2048x2048&w=is&k=20&c=ndAvXRTk8EKko0wh1XlZ_b7s6RximN8eUf2H1UWv7dM='
]);
const currentIndex = ref(0);
const translateX = ref(0); // Initialisez la valeur de translateX

const animateElements = (index) => {
        console.log(index * 100);
        $anime({ targets: '#slider', translateX: index * 100 + '%', duration: 1200 })
}

const prevSlide = () => {
  let test = (currentIndex.value - 1 + url.value.length) % url.value.length;
  animateElements(test);
};

const nextSlide = () => {
  let test = (currentIndex.value + 1) % url.value.length;
  console.log('test');
  animateElements(test);
};

</script>