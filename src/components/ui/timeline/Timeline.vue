<script setup>
import { ref, onMounted, nextTick, watch } from "vue";
import { Motion, useScroll, useTransform } from "motion-v";
import { useTimelineItemsAnimation } from "@/composables/useTimelineItemsAnimation";

const props = defineProps({
  containerClass: { type: null, required: false },
  class: { type: null, required: false },
  items: { type: Array, required: false, default: () => [] },
  title: { type: String, required: false },
  description: { type: String, required: false },
});

const timelineContainerRef = ref(null);
const timelineRef = ref(null);
const height = ref(0);

onMounted(async () => {
  await nextTick();
  // Esperar a que el contenido se renderice completamente
  setTimeout(() => {
    if (timelineRef.value) {
      height.value = timelineRef.value.scrollHeight;
    }
  }, 100);
});

const { scrollYProgress } = useScroll({
  target: timelineRef,
  offset: ["start 50%", "end 50%"],
});

const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
const heightTransform = ref(useTransform(scrollYProgress, [0, 1], [0, height.value]));

watch(height, (newHeight) => {
  heightTransform.value = useTransform(scrollYProgress, [0, 1], [0, newHeight]);
}, { immediate: true });

// Recalcular altura cuando cambien los items
watch(() => props.items, async () => {
  await nextTick();
  setTimeout(() => {
    if (timelineRef.value) {
      height.value = timelineRef.value.scrollHeight;
    }
  }, 100);
}, { immediate: true });

// Iniciar animaciones de items
useTimelineItemsAnimation(timelineRef);
</script>

<template>
  <div
    ref="timelineContainerRef"
    class="w-full font-sans dark:bg-transparent"
  >
    <div ref="timelineRef" class="relative z-0 mx-auto max-w-7xl pb-0 px-4 md:px-0">
      <!-- Background line (Desktop only) -->
      <div class="hidden md:block absolute top-0 left-8 w-[2px] h-full bg-gradient-to-b from-transparent via-[#1A1A1A] to-transparent" />
      
      <!-- Animated foreground line (Desktop only) -->
      <div
        v-if="height > 0"
        :style="{
          height: `${height}px`,
        }"
        class="hidden md:block absolute top-0 left-8 w-[2px] overflow-hidden"
      >
        <Motion
          as="div"
          :style="{
            height: heightTransform,
            opacity: opacityTransform,
          }"
          class="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-[#F46EBB] via-[#FC94C7] to-transparent"
        />
      </div>
      
      <div
        v-for="(item, index) in props.items"
        :key="item.id + index"
        data-timeline-item
        class="flex flex-col md:flex-row md:gap-10 pt-10 md:pt-40 relative"
      >
        <!-- Mobile dot and label -->
        <div class="flex md:hidden mb-6 items-start gap-4">
          <div class="flex flex-col items-center flex-shrink-0">
            <div
              class="flex size-8 items-center justify-center rounded-full bg-white dark:bg-black"
            >
              <div
                class="size-3 rounded-full border border-neutral-200 bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800"
              />
            </div>
          </div>
          <h3 class="text-lg font-bold text-neutral-500 dark:text-neutral-400 pt-1">
            {{ item.label }}
          </h3>
        </div>

        <!-- Desktop label -->
        <div
          class="hidden md:flex sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm"
        >
          <div
            class="absolute left-3 flex size-10 items-center justify-center rounded-full bg-neutral-700 md:left-3 dark:bg-black"
          >
            <div
              class="size-4 rounded-full border border-neutral-300 bg-neutral-500 p-2 dark:border-neutral-700 dark:bg-neutral-800"
            />
          </div>
          <h3
            class="text-xl font-bold text-neutral-500 md:pl-20 md:text-5xl dark:text-neutral-400"
          >
            {{ item.label }}
          </h3>
        </div>

        <!-- Content slot -->
        <slot :name="item.id" />
      </div>
    </div>
  </div>
</template>
