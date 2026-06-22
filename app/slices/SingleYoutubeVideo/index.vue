<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps(getSliceComponentProps<Content.YoutubeVideoSlice>());
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="video-text"
  >
    <div class="flex flex-col gap-20 items-center">
      <div class="flex flex-col gap-5 w-4/5">
        <h2>{{ slice.primary.titel }}</h2>
        <div v-html="slice.primary.video?.html" class="single-youtube-video"/>
        <PrismicRichText :field="slice.primary.desription"/>
      </div>
    </div>
  </section>
</template>
