<script setup lang="ts">
  import type { Content } from "@prismicio/client";

  defineProps(getSliceComponentProps<Content.YoutubeVideoPlaylistSlice>());
    
  const swiperRef = ref(null)
  const swiper = useSwiper(swiperRef)
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <h2>{{ slice.primary.optionalTitel }}</h2>
    <div class="pt-2">
      <ClientOnly>
        <swiper-container ref="swiperRef" :slides-per-view="3">
          <swiper-slide
            v-for="(video, idx) in slice.primary.playlist"
            :key="idx"
            class="px-1"
          >
            <div v-html="video.video?.html" class="playlist-youtube-video"/>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>

      <div class="flex w-full justify-center gap-10 pt-5">
        <button 
            class="btn-dark rounded-full size-12"
            @click="swiper.prev()"
          >
            <Icon name="mdi:arrow-left" size="25"/>
        </button>
        <button 
            class="btn-dark rounded-full size-12"
            @click="swiper.next()"
          >
            <Icon name="mdi:arrow-right" size="25"/>
        </button>
      </div>
    </div>
  </section>
</template>
