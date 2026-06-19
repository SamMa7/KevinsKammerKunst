<template>
    <Transition>
        <div v-if="showModal" class="fixed top-0 left-0 right-0 bottom-0 size-full z-50">
            <div class="overlay-dark" @click="showModal = false"/>
            
            <slot></slot>
        </div>
    </Transition>
</template>

<script setup lang="ts">
    const showModal = defineModel('showModal', {default: false, required: true});
</script>

