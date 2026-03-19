<template>
    <div class="min-h-screen flex flex-col">
        <Header />

        <div 
            class="w-full flex justify-center grow relative"
            :style="bgImg?.image.url 
                ? { backgroundImage: `url(${bgImg.image.url})` } 
                : {}"
        >
            <div class="overlay-dark" />
            <div class="container bg-light z-10 px-14 py-10"> 
                <slot />
            </div>
        </div>

        <Footer />
    </div>
</template>

<script setup lang="ts">
    const settings = useSettings();
    const bgImg = settings.value?.data.background[0];
</script>