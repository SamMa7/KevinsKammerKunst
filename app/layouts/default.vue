<template>
    <div class="min-h-screen flex flex-col">
        <!--HEADER-->
        <Header />

        <div class="w-full flex justify-center grow relative">
            <!--BACKGROUND-->
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

            <!--CONTENT-->
            <div id="main-container" class="container-lg bg-light px-14 py-10 z-10 relative"> 
                <slot />

                <!--BACK TO TOP-->
                <button id="scrollToTop" v-on:click="scrollToTop" class="opacity-0 btn-dark rounded-full size-12 fixed right-10 bottom-40">
                    <Icon name="mdi:arrow-up" size="25"/>
                </button>
            </div>
        </div>

        <!--FOOTER-->
        <Footer />
    </div>
</template>

<script setup lang="ts">
    const settings = useSettings();
    
    // DATA
    const bgImgUrls = settings.value?.data.background?.map(image => image.image.url);

    // Images size is set in Prismic: 196*277
    const imgWidth = 196;
    const imgHeight = 277;

    const cols = ref(0);
    const rows = ref(0);

    // COMPUTED
    const totalTiles = computed(() => cols.value * rows.value);

    const gridStyle = computed(() => ({
        gridTemplateColumns: `repeat(${cols.value}, ${imgWidth}px)`,
        gridAutoRows: `${imgHeight}px`,
    }));

    // METHODS
    const updateGrid = () => {
        const element = window. document.getElementById('main-container');
        console.log(element?.clientHeight)

        cols.value = Math.ceil(window.innerWidth / imgWidth);
        rows.value = Math.ceil((element ? element.clientHeight : window.innerHeight) / imgHeight);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    //HOOKS
    onMounted(() => {
        updateGrid();
        window.addEventListener('resize', updateGrid);

        const scroll = document.getElementById("scrollToTop");
        document.addEventListener(
            "scroll",
            () => {
                if(!scroll) return;
                if (window.pageYOffset >= 300) {
                    scroll.style.opacity = "100";
                } else {
                    scroll.style.opacity = "0";
                }
            },
        );
    });
</script>
