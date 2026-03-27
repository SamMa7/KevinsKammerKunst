<template>
    <div class="min-h-screen flex flex-col">
        <Header />

        <div class="w-full flex justify-center grow relative">
            <ClientOnly>
                <div 
                    v-if="bgImgUrls && bgImgUrls.length"
                    class="absolute inset-0 grid overflow-hidden -z-10"
                    :style="gridStyle"
                >
                    <div
                        v-for="i in totalTiles"
                        :key="i"
                        class="w-[196px] h-[277px] bg-cover"
                        :style="{ backgroundImage: `url(${bgImgUrls[i % bgImgUrls.length]})` }"
                    />
                </div>
                <div class="overlay-dark" />
            </ClientOnly>
            <div id="main-container" class="container-lg bg-light px-14 py-10 z-10 relative"> 
                <slot />
            </div>
        </div>

        <Footer />
    </div>
</template>

<script setup lang="ts">
    const settings = useSettings();

    const bgImgUrls = settings.value?.data.background?.map(image => image.image.url);

    // Images size is set in Prismic: 196*277
    const imgWidth = 196;
    const imgHeight = 277;

    const cols = ref(0);
    const rows = ref(0);

    const updateGrid = () => {
        const element = window. document.getElementById('main-container');
        console.log(element?.clientHeight)

        cols.value = Math.ceil(window.innerWidth / imgWidth);
        rows.value = Math.ceil((element ? element.clientHeight : window.innerHeight) / imgHeight);
    };

    onMounted(() => {
        updateGrid();
        window.addEventListener('resize', updateGrid);
    });

    const totalTiles = computed(() => cols.value * rows.value);

    const gridStyle = computed(() => ({
        gridTemplateColumns: `repeat(${cols.value}, ${imgWidth}px)`,
        gridAutoRows: `${imgHeight}px`,
    }));
</script>
