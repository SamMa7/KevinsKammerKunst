<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps(getSliceComponentProps<Content.TextBlockSlice>());
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <h4>{{ slice.primary.title }}</h4>
    <PrismicRichText :field="slice.primary.text" />
  </section>
</template>
