<template>
  <div class="relative w-full overflow-hidden bg-black min-h-screen">
    <!-- Animated Landing Background (mounts once) -->
    <AnimatedLandingBackground />

    <!-- Global Navigation - Highest stacking context -->
    <NavLinks />

    <!-- Main Content -->
    <main class="relative z-40">
      <HeaderHome id="home" @go-to-services="handleGoToServices" />
      <AboutSection id="about" />
      <ServicesSection id="services" />
      <MaterialCarouselSection />
      <LogosMeetSection />
      <HowWeWorkTimeline id="process" />
      <TrustedBrandsSection />
      <WhyByLoaSection />
      <ContactSection id="contact" />
      <SiteFooter />
    </main>
  </div>
</template>

<script setup>
import AnimatedLandingBackground from '../components/AnimatedLandingBackground.vue'
import NavLinks from '../components/NavLinks.vue'
import HeaderHome from '../components/HeaderHome.vue'
import AboutSection from '../components/AboutSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import MaterialCarouselSection from '../components/MaterialCarouselSection.vue'
import TrustedBrandsSection from '../components/TrustedBrandsSection.vue'
import LogosMeetSection from '../components/LogosMeetSection.vue'
import HowWeWorkTimeline from '../components/HowWeWorkTimeline.vue'
import WhyByLoaSection from '../components/WhyByLoaSection.vue'
import ContactSection from '../components/ContactSection.vue'
import SiteFooter from '../components/SiteFooter.vue'

const handleGoToServices = () => {
  window.location.href = '#services'
}
</script>

<style scoped>
</style>
