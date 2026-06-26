<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps(getSliceComponentProps<Content.BlogpostsSlice>());
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="flex flex-col gap-8 items-center">
      <div v-for="item in slice.primary.posts" class="speech-bubble size-fit rich-text max-w-2xl px-3 sm:px-5 lg:px-10">
        <div class="mb-5">
          <span class="italic text-sm text-secondary">{{ item.date }}</span>
          <h2>{{ item.title }}</h2>
        </div>
        <PrismicRichText :field="item.post"/>
      </div>
    </div>
  </section>
</template>
