<script setup>
import { Menu, X } from 'lucide-vue-next'
import { ref } from 'vue' 
    const isMenuOpen = ref(false)
    const menuItems =[
        {name: 'Education', href: '#education'},
        {name: 'Certificates', href: '#certificates'},
        {name: 'Skills', href: '#skills'},
        {name: 'Projects', href: '#projects'},
        {name: 'About', href: '#about'},
    ]
    const scrollToSection = (href) => {
        isMenuOpen.value = false
        const element = document.querySelector(href)
        if(element){
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

</script>




<template>
  <header class="relative z-50 px-6 py-7"> 
  <div class="max-w-7xl mx-auto flex justify-between items-center">
      <!--Logo-->
        <div class="text-white text-3xl font-black cursor-pointer">
            PORTFOLIO<span class="text-primary">.</span>
        </div>
      <!--Navigate-->
        <nav class="hidden md:flex items-center gap-10">
            <ul class="flex gap-8">
                <li v-for="item in menuItems" :key="item.name">
                    <button @click="scrollToSection(item.href)"
                    class="text-white hover:text-[#654321]
                    text-base font-medium transition-colors">
                         {{item.name}}
                    </button>
                </li>
            </ul>
            <button
             @click="scrollToSection('#contact')"
            class="w-full max-w-[340px] bg-[#654321] text-white py-4 px-4
            rounded-full shadow-md hover:shadow-black/40 transition-all duration-300 ">
            Contact Me
            </button>
        </nav>
        <!--menu button-->
         <button
            class="md:hidden text-white"
            @click="isMenuOpen = !isMenuOpen">
                <Menu v-if="!isMenuOpen" :size="32" />
                <X v-else :size="32" />
         </button>
  </div>
  <div v-if="isMenuOpen"
   class="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
   @click="isMenuOpen = false">
  </div>
  <div class="fixed top-0 right-0 h-full w-80 bg-[#ABD39E] p-4
  z-50 transform transition-transform duration-300 md:hidden"
  :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'">
  <button 
   class="self-end text-white mb-10"
   @click="isMenuOpen = false">
    <X :size="32" /> 
  </button>
  <ul class="flex flex-col gap-8">
    <li v-for="item in menuItems" :key="item.name">
        <button 
        @click="scrollToSection(itemm.href)"
        class="text-white text-xl font-semibold 
        hover:text-[#654321] transition-colors">
            {{item.name}}
        </button>
    </li>
    <li class="pt-6 flex justify-center items-center">
        <button @click="scrollToSection('#contact')"
        class="w-full max-w-[240px] bg-[#654321] text-white py-4 
        rounded-full shadow-md hover:shadow-black/40 transition-all duration-300 ">
            Contact Me
        </button>
    </li>
  </ul>

  </div>
  </header>
</template>
