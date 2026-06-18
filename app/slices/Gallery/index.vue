<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="columns-1 gap-3 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
      <NuxtImg 
        v-for="(picture, _index) in slice.primary.pictures" 
        class="w-full h-auto" 
        loading="lazy" 
        :alt="picture.picture.alt" 
        :src="picture.picture.url ?? undefined"
        @click="openPictureModal(_index)"
      />
    </div>

    <Modal v-model:show-modal="open">
      <div class="bg-light z-50 fixed top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 w-3/6 h-5/6 rounded-md">
        <button 
            class="btn-link fixed right-5 top-5"  
            @click="open = false"
        > 
            <Icon name="mdi:close" size="25"/> 
        </button>
          <div class="p-10 flex size-full justify-between">
            <button 
              class="btn-dark rounded-full size-12 self-center"
              :disabled="currentIndex === 0"
              @click="prevImage()"
            >
              <Icon name="mdi:arrow-left" size="25"/>
            </button>
            <NuxtImg 
              class="object-contain max-w-[80%]" 
              loading="lazy" 
              :alt="slice.primary.pictures[currentIndex]?.picture.alt" 
              :src="slice.primary.pictures[currentIndex]?.picture.url ?? undefined"
            />
            <button 
              class="btn-dark rounded-full size-12 self-center"
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
