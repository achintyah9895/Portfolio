<script setup>
import Header from './components/Header.vue';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue';
import BodySection from './components/BodySection.vue';
import Education from './components/Education.vue';
import AboutSection from './components/AboutSection.vue';
import SkillSection from './components/SkillSection.vue';



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
    <SkillSection />
    <AboutSection />
  </div>
</template>
