<script setup>
import { Download } from 'lucide-vue-next';
import { ref } from 'vue' 
    const isMenuOpen = ref(false)

   const scrollToSection = (href) => {
        isMenuOpen.value = false
        const element = document.querySelector(href)
        if(element){
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }
</script>


<template>
    <section class="relative w-full" data-aos="zoom-in-up">
       <!-- effect
         <div class="absolute top-0 inset-x-0 h-64 flex items-start">
            <div
            class="h-24 w-2/3 bg-linear-to-br from-[#654321]
            blur-2xl invisible opacity-40"></div>
            <div class="h-20 w-3/44 bg-linear-to-r from-[#ac7238]
            opacity-40 blur-2xl"></div>
        </div> -->
        <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-5xl
        lg:max-w-7xl mx-auto relative">
        <div class="grid lg:grid-cols-2 gap-10 xl:gap-14 relative
        pt-24 lg:max-w-none max -w-2xl md:max-w-3xl">
            <div class="lg:py-6">
                <div class="text-center lg:text-left">
                <h1 class="pt-4 text-white font-bold text-4xl
                md:text:5xl lg:text-6xl">
                 Hi, I'm <span class="text-transparent bg-clip-text
                 bg-linear-to-r from-[#654321] to-[#ac7238]">Jishnu Dev</span> 
            </h1>
            </div>
                <p class="text-center text-gray-100
                lg:text-left mx-auto max-w-xl">
                 "I am not a product of my circumstances. I am a product of my decisions." — Stephen Covey
                </p>
                
                <div class="flex items-center gap-3 pt-9 flex-col
                sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
                <!--hire me-->
                    <button 
                    @click="scrollToSection('#contact')"
                    class="px-6 md:px-7 py-3 rounded-full
                    relative group w-full sm:w-max flex justify-center bg-[#654321] shadow-lg">
                        <span class="relative flex item-center text-[#ABD39E] font-semibold
                        hover:scale-105 transition-all ease-in-out">
                            Hire Me
                        </span>
                    </button>
                <!--download resume-->
                    <button class="border border-primary px-6
                    md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center">
                        <div class="hover:scale-105 transition-all
                        ease-in-out flex justify-center relative">
                            <div class="scg-container">
                             <Download :size="18" class="text-primary"/>
                                <div class="download-loader text-white
                                hidden "></div>    
                            </div >
                            <a href="/Portfolio/Jishnu_Dev.pdf"
                            download="Jishnu_Dev.pdf"
                            class="pl-2 text-primary font-semibold">
                            Dowload Resume
                        </a>
                    </div>
                    </button>
                </div>
           </div> 
           <div class="lg:h-full md:flex">
                <div class="flex w-full h-96 min-h-96 lg:min-h-[none]
                lg:w-full items-center relative">
                    <div class="absolute h-full z-10 p-2 bg-[#ABD39E]
                        -translate-y-1/2 top-1/2 lg:right-3 md:right-40 sm:right-16
                         rounded-[25%_80%_80%_15%/30%_30%_70%_60%] shadow-lg border border-primary
                         drop-shadow-xl ">
                          
                            <img src="../assets/portfolio.png" alt="portfolio"
                             width="450"
                             height="auto"
                             loading="lazy"
                             class="w-full h-full rounded-[25%_80%_80%_13%/30%_30%_70%_50%]" >
                            
                </div>
            </div>
           </div> 
        </div>
        </div>
    </section>
</template>