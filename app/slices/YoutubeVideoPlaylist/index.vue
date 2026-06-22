<script setup lang="ts">
  import type { Content } from "@prismicio/client";

  defineProps(getSliceComponentProps<Content.YoutubeVideoPlaylistSlice>());
    
  const swiperRef = ref(null);
  const swiper = useSwiper(swiperRef);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <h2>{{ slice.primary.titel }}</h2>
    <div class="flex items-center pt-5 gap-3">
      <button 
        v-if="slice.primary.playlist.length > 3"
        class="btn-dark rounded-full size-12 min-w-12"
        :disabled="swiper.isBeginning.value"
        @click="swiper.prev()"
      >
        <Icon name="mdi:arrow-left" size="25"/>
      </button>
      <ClientOnly>
        <swiper-container ref="swiperRef" :slides-per-view="3" class="grow max-w-full overflow-hidden"> 
          <swiper-slide
            v-for="(video, idx) in slice.primary.playlist"
            :key="idx"
            class="px-1"
          >
            <div v-html="video.video?.html" class="playlist-youtube-video"/>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
      <button 
        v-if="slice.primary.playlist.length > 3"
        class="btn-dark rounded-full size-12 min-w-12"
        :disabled="swiper.isEnd.value"
        @click="swiper.next()"
      >
        <Icon name="mdi:arrow-right" size="25"/>
    </button>
    </div>
  </section>
</template>
