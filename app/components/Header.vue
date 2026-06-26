<template>
    <header class="h-fit w-full bg-dark text-light flex justify-center">
        <div class="footer-header-container flex justify-between px-5 py-1">
            <div class="flex">
                <NuxtImg 
                    v-if="header?.data?.logo.url"
                    :src="header?.data.logo.url"
                    :alt="header?.data.logo.alt ?? 'logo'"
                    class="size-14"
                />
                <h1 class="hidden lg:inline text-light">{{ header?.data.title}}</h1>
            </div>

            <Nav />
        </div>
    </header>
</template>

<script setup lang="ts">
    import Nav from './nav.vue';

    const header = useHeader();
</script>