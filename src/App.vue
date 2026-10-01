<script setup>
  import Header from './components/Header.vue';
  import AOS from 'aos'
  import 'aos/dist/aos.css'
  import { onMounted } from 'vue';
import BodySection from './components/BodySection.vue';
import Education from './components/Education.vue';

  onMounted(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    })
  })

</script>

<template>
  <div className="bg-[#ABD39E] min-h-screen">
    <Header />
    <BodySection />
    <Education />
  </div>
</template>
