<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="gap-5 sm:columns-2 lg:columns-3 [&>img:not(:first-child)]:mt-8">
      <NuxtImg 
        v-for="(picture, _index) in slice.primary.pictures" 
        class="w-full h-auto hover:cursor-pointer hover:scale-105 transition-all" 
        loading="lazy" 
        :alt="picture.picture.alt" 
        :src="picture.picture.url ?? undefined"
        @click="openPictureModal(_index)"
      />
    </div>

    <Modal v-model:show-modal="open">
      <div class="bg-light z-50 fixed top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 w-11/12 sm:w-9/12 lg:w-8/12 h-5/6 rounded-md">
        <button 
            class="btn-link fixed right-5 top-5"  
            @click="open = false"
        > 
            <Icon name="mdi:close" size="25"/> 
        </button>
          <div class="p-10 size-full">
            <NuxtImg 
              class="object-contain max-w-[95%] sm:max-w-[87%] lg:max-w-[80%] size-full m-auto" 
              loading="lazy" 
              :alt="slice.primary.pictures[currentIndex]?.picture.alt" 
              :src="slice.primary.pictures[currentIndex]?.picture.url ?? undefined"
            />
            <button 
              class="btn-dark rounded-full size-12 z-50 fixed left-5 bottom-20 lg:left-32 lg:top-1/2"
              :disabled="currentIndex === 0"
              @click="prevImage()"
            >
              <Icon name="mdi:arrow-left" size="25"/>
            </button>
            <button 
              class="btn-dark rounded-full size-12 z-50 fixed right-5 bottom-20 lg:right-32 lg:top-1/2"
              :disabled="currentIndex === slice.primary.pictures.length-1"
              @click="nextImage()"
            >
              <Icon name="mdi:arrow-right" size="25"/>
            </button>
          </div>
      </div>
    </Modal>
  </section>
</template>

<script setup lang="ts">
  import type { Content } from "@prismicio/client";
  import Modal from "~/components/modal.vue";

  defineProps(getSliceComponentProps<Content.GallerySlice>());

  const open = ref(false);
  const currentIndex = ref(0);

  const openPictureModal = (index: number) => {
    if(!index && index !== 0) return;

    open.value = true;
    currentIndex.value = index
  }

  const nextImage = () => {
    currentIndex.value++;
  }
  const prevImage = () => {
    currentIndex.value--;
  }
</script>
