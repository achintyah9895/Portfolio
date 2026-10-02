<script setup>
import { Calendar, GraduationCap } from 'lucide-vue-next';

    const educationData = [
        {
            university: "APJ Abdul Kalam Technological University",
            institution: "Sree Narayana Gurukulam College of Engineering",
            course: "B.Tech Computer Science Engineering",
            year: "2016-2020",
        },
        {   university:null,    
            institution: "Soften Technologies",
            course: "AWS Devops Training",
            year: " 2025-2026",
        }
    ]
</script>
<template>
    <section class="text-white py-20 overflow-hidden" id="education">
    <div class="max-w-7xl mx-auto px-6 lg:px-16">
        <div class="mb-16">
        <h2 class="text-4xl md:text-5xl uppercase font-extrabold text-white">
                Education 
        </h2>
        </div>
         <div class="flex flex-col lg:flex-row items-center gap-16 ">
          <!-- <div class="w-full lg:w=5/6 flex justify-center
           lg:justify-start " data-aos="fade-right"> 
            <div class="relative ">
                <div class="absolute h-full w-full z-0 p-2
                translae-x-4 translate-y-4 rounded-2xl
                shadow-lg border border-primary">
                </div>
             </div>-->
             <!--education data-->
             <div class="w-full lg:w=7/12 space-y-6 " data-aos="fade-right"> 
                    <div v-for="edu in educationData" :key="edu.institution"
                    class="group relative p-6 rounded-2xl bg-[#EBE1D7]
                    transition-all duration-300 hover:border-primary/50">
                    <div class="flex flex-col sm:flex-row
                    sm:items-center justify-between gap-4 mb-4">
                <div class="flex items-center gap-3">
                    <div class="p-2 bg-[#654321] rounded-lg border border-primary/20 group-hover:border-primary
                    transition-colors">
                        <GraduationCap class="text-white" size="24" />       
                    </div>      
                    <h3 class="text-lg font-bold text-gray-700
                        group-hover:text-[#ABD39E] transition-colors">
                         {{edu.course}}
                    </h3>  
                    <p class="text-gray-700">{{edu.institution}}</p>                 
                    </div>                   
                    </div> 
                    <div class="flex items-center gap-2 text-xs font-medium bg-[#654321] px-3 py-2 rounded-full 
                    border border-gray-700 w-fit">
                        <Calendar :size="18" class="text-white" />
                        {{ edu.year }}
                    </div>
                    <p class="text-gray-700 text-sm 
                    font-semibold mt-2 leading-relaxed ">{{edu.university}}</p>
                  </div>   
            </div>
        </div> 
    </div>
    </section>
</template>