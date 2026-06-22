<script setup lang="ts">
import type { Content } from "@prismicio/client";
import { getUrl } from "~/util/helperFunctions";

defineProps(getSliceComponentProps<Content.AudioSlice>());
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="flex flex-col gap-5">
      <div 
        class="flex"
        :class="slice.primary.audioNextToTitle ? 'items-center gap-10' : 'flex-col  gap-5'"
      >
        <h2 class="text-nowrap">{{ slice.primary.sound.text }}</h2>
        <audio controls class="w-full">
          <source :src="getUrl(slice.primary.sound)" type="audio/mp3">
        </audio>
      </div>
      <div class="rich-text">
        <PrismicRichText :field="slice.primary.description" />
      </div>
    </div>
  </section>
</template>
