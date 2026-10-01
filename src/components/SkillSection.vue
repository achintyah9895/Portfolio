<script setup>
import awsIcon from "../assets/aws.jpg"
import dockerIcon from "../assets/docker.png"
import grafanaIcon from "../assets/grafana.png"
import jenkinsIcon from "../assets/jenkins.jpg"
import kubernetesIcon from "../assets/kubernetes.jpg"
import prometheusIcon from "../assets/prometheus.jpg"
import pythonIcon from "../assets/python.png"
import vueIcon from "../assets/vue-js.jpg"

const skillData = [
    {
        id: 1,
        name: "AWS",
        icon: awsIcon
    },
     {
        id: 2,
        name: "docker",
        icon: dockerIcon
    },
     {
        id: 3,
        name: "grafana",
        icon: grafanaIcon
    },
     {
        id: 4,
        name: "jenkins",
        icon: jenkinsIcon
    },
     {
        id: 5,
        name: "kubernetes",
        icon: kubernetesIcon
    },
     {
        id: 6,
        name: "prometheus",
        icon: prometheusIcon
    },
     {
        id: 7,
        name: "python",
        icon: pythonIcon
    },
    {
        id: 8,
        name: "vue",
        icon: vueIcon
    },
]
</script>

<template>
     <section class="text-white py-20 overflow-hidden" id="experience">
    <div class="max-w-7xl mx-auto px-6 lg:px-16">
        <div class="mb-16">
        <h2 class="text-4xl md:text-5xl uppercase font-extrabold text-white">
                Skills & Projects
        </h2>
        <br><br>
          <div  class="group relative rounded-2xl bg-[#EBE1D7] px-1  py-6
                transition-all duration-300 hover:border-primary/50">
        <div class="grid grid-cols-3 sm:grid-cols-4 lg:flex lg:flex-row lg:items-center lg:justify-between gap-6">

    <div
        v-for="skill in skillData"
        :key="skill.id"
        class="flex items-center justify-center"
        data-aos="fade-up"
    >
        <img
            :src="skill.icon"
            :alt="skill.name"
            class="w-16 h-16 object-contain rounded-2xl"
        />
        </div> 
           
        </div>
      </div>
    </div>
    </div>

     </section>
</template>