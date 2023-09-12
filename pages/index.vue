<template>
        <main class="w-screen h-screen flex bg-gradient-to-tr from-slate-800 to-gray-800 relative overflow-hidden justify-end">
                <h1 class="absolute text-white z-0 top-[1%] left-0 font-bold text-9xl uppercase text-left libre -translate-x-[500px]">Libre</h1>
                <h1 class="absolute text-white z-0 top-[15%] right-3 font-bold text-9xl w-full uppercase text-right and translate-x-[500px]">&amp;</h1>
                <h1 class="absolute text-white z-20 top-[31%] left-3 font-bold text-9xl uppercase text-left viv -translate-x-[500px]">Viv</h1>
                <h1 class="absolute text-white z-20 top-[45%] right-3 font-bold text-9xl w-full uppercase text-right ant translate-x-[500px]">Ant</h1>
                <img class="absolute z-10 -top-[3rem] right-5 rounded-[40%] w-full" src="/img/header.png" alt="500"/>
                <div class="absolute text-white z-20 text-center top-[65%] left-0 flex">
                        <p class="w-[90%] mx-auto text-center paraph opacity-0">Bonjour, je suis Victoria, une photographe passionnée par la création de souvenirs heureux et émotionnels à travers mes photos. Je suis là pour immortaliser vos moments spéciaux et les rendre encore plus mémorables.</p>
                </div>
                <div class="absolute top-[85%] w-full flex z-50">
                        <NuxtLink to="/test" class="m-auto border-y-[1px] border-white text-white px-4 py-2">Voir mon travail</NuxtLink>
                </div>
                <div class="absolute z-50 top-[93%] social text-white text-2xl w-screen flex">
                        <div class="social m-auto w-[50%] flex justify-between">
                                <a href="https://www.instagram.com/libre_vivant_photographie/?igshid=YmMyMTA2M2Y%3D" target="blank"><Icon name="uil:instagram" color="white" class="w-8 h-8" /></a>
                                <a href="https://www.tiktok.com/@libre_vivant" target="blank"><Icon name="ic:baseline-tiktok" color="white" class="w-8 h-8" /></a>
                                <a href="https://m.facebook.com/profile.php?id=100072519471892" target="blank"><Icon name="ic:baseline-facebook" color="white" class="w-8 h-8" /></a>
                        </div>
                </div>
        </main>
</template>

<style>
    img {
      -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
      mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%);
    }
</style>

<script setup lang="ts">
        import { onBeforeMount, onBeforeUpdate } from 'vue'
        const { $anime } = useNuxtApp()

        const animateElements = () => {
                $anime({ targets: '.libre', translateX: [500, 0], duration: 1200 })
                $anime({ targets: '.and', translateX: [-500, 0], duration: 1400, delay: 200 })
                $anime({ targets: '.ant', translateX: [500, 0], duration: 1600, delay: 400 })
                $anime({ targets: '.viv', translateX: [-500, 0], duration: 1800, delay: 600 })
                $anime({ 
                        targets: '.paraph',
                        opacity: [0, 1],
                        duration: 5000,
                        delay: 900
                })
        }
        onBeforeMount(() => {
        // Cette fonction sera appelée lorsque vous accéderez à la page
                animateElements()
        })

        onBeforeUpdate(() => {
        // Cette fonction sera appelée lorsque vous reviendrez sur la page
                animateElements()
        })
</script>