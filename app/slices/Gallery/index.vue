<script setup lang="ts">
  import type { Content } from "@prismicio/client";

  defineProps(getSliceComponentProps<Content.GallerySlice>());


</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="columns-1 gap-3 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
      <NuxtImg v-for="picture in slice.primary.pictures" class="w-full h-auto" loading="lazy" :alt="picture.picture.alt" :src="picture.picture.url ?? undefined"/>
    </div>
  </section>
</template>


