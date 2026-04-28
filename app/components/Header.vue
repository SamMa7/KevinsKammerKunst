<template>
    <header class="h-fit w-full bg-dark text-light flex justify-center">
        <div class="container-xl flex justify-between px-5 py-1">
            <div class="flex">
                <NuxtImg 
                    v-if="header?.data?.logo.url"
                    :src="header?.data.logo.url"
                    :alt="header?.data.logo.alt ?? 'logo'"
                    class=" h-14"
                />
                <h1>{{ header?.data.title}}</h1>
            </div>

            <nav class="flex gap-10">
                <a 
                    v-for="link in header?.data.navigation" class="flex items-center"
                    :href="getUrl(link.link)"
                > 
                    {{link.link.text}}
                </a>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
    import { getUrl } from '~/util/helperFunctions';
    const header = useHeader();
</script>