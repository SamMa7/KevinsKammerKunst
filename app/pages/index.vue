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
    <div class="flex flex-col gap-10">
        <h1>test headline h1</h1>
        <h2>test headline h2</h2>
        <h3>test headline h3</h3>
        <h4>test headline h4</h4>

        <button class="btn-primary">
            test button primary
        </button>
        <button class="btn-primary" disabled="true">
            test button primary disabled
        </button>
        <button class="btn-link">
            test button link
        </button>

        <a>
            test link
        </a>
    </div>
    
    <SliceZone :slices="page?.data.slices ?? []" :components="components" />
</template>
