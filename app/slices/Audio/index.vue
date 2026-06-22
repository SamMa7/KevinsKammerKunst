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
    <div class="flex flex-col gap-3">
      <h3>{{ slice.primary.sound.text }}</h3>
      <audio controls>
        <source :src="getUrl(slice.primary.sound)" type="audio/mp3">
      </audio>
      <PrismicRichText :field="slice.primary.description" />
    </div>
  </section>
</template>
