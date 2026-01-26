<template>
  <div
    class="fixed inset-0 overflow-hidden pointer-events-none bg-animated"
    style="z-index: 1; top: 0; left: 0; width: 100%; height: 100%"
  />
</template>

<script setup>
// No composables needed - just gradient background
</script>

<style scoped>
/* Landing background - brighter, more pink, more beige */
.bg-animated {
  background: 
    radial-gradient(ellipse 120% 100% at 15% 70%, rgba(252, 175, 202, 0.5) 0%, rgba(252, 175, 202, 0.3) 30%, transparent 65%),
    radial-gradient(ellipse 100% 90% at 35% 85%, rgba(245, 200, 220, 0.4) 0%, transparent 55%),
    radial-gradient(ellipse 80% 80% at 75% 50%, rgba(230, 210, 230, 0.3) 0%, transparent 60%),
    radial-gradient(ellipse 110% 100% at 50% 100%, rgba(250, 210, 200, 0.25) 0%, transparent 70%),
    radial-gradient(ellipse 90% 70% at 85% 20%, rgba(240, 220, 240, 0.18) 0%, transparent 50%),
    linear-gradient(135deg, #000000 0%, #1a0f1a 30%, #2a1a2e 60%, #3a2a3a 100%);
}
</style>
