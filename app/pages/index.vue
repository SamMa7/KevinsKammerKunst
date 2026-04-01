<script setup lang="ts">
import { asImageSrc } from "@prismicio/client";
import { components } from "~/slices";

const { client } = usePrismic();
const { data: page } = await useAsyncData("[home]", () =>
    client.getSingle("home"),
);

useSeoMeta({
    title: page.value?.data.meta_title,
    ogTitle: page.value?.data.meta_title,
    description: page.value?.data.meta_description,
    ogDescription: page.value?.data.meta_description,
    ogImage: computed(() => asImageSrc(page.value?.data.meta_image)),
});

</script>

<template> 
    <NuxtImg 
        v-if="page?.data.figure.url" 
        :src="page?.data.figure.url" 
        class="absolute z-30 h-[600px]"
        :style="{
            left: -(page?.data.figure.dimensions?.width/4) + 'px'
        }"
    />
    <SliceZone :slices="page?.data.slices ?? []" :components="components" />
</template>
