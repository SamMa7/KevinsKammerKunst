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
      <div v-for="video in slice.primary.videos" class="flex flex-col gap-5 w-4/5">
        <h2>{{ video.titel }}</h2>
        <div v-html="video.video?.html" class="single-youtube-video"/>
        <PrismicRichText :field="video.text"/>
      </div>
    </div>
  </section>
</template>
