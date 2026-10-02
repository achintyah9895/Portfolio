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
     <section class="text-white py-20 overflow-hidden" id="projects">
    <div class="max-w-7xl mx-auto px-6 lg:px-16">
        <div class="mb-16">
        <h2 class="text-4xl md:text-5xl uppercase font-extrabold text-white">
         Projects.
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
      <div>
      <h2 class="text-3xl md:text-5xl 
         text-white mb-3 mt-5 font-extrabold 
         hover:text-[#654321] transition-colors " data-aos="fade-right">
         <a href="https://github.com/achintyah9895/Spring_petclinic">
            Project 1 — End-to-End CI/CD Pipeline on AWS </a>
        </h2>
      <h3 class="text-xl underline font-bold mb-3" data-aos="fade-left">Jenkins • Maven • SonarQube • Trivy • Nexus • Docker
         • Kubernetes • AWS</h3>
            <p class="font-semibold " data-aos="fade-right">Designed and implemented an end-to-end CI/CD pipeline that automates the process of 
            taking Java application code from GitHub to a running Kubernetes workload.
            <br>
            <br>
            <span class="font-bold">Pipeline flow:</span>
            <br>
            GitHub → Jenkins → Maven → SonarQube → Trivy → Nexus → Docker → Docker Hub → Kubernetes
            <br>
            <br>
            <span class="font-bold">Key work:</span>
            <br>
            Configured Jenkins-based CI/CD automation.
            Built and packaged the Java application using Maven.
            Integrated SonarQube for static code analysis.
            Used Trivy to identify vulnerabilities in source files and container images.
            Published application artifacts to Nexus Repository.
            Built and pushed Docker images to Docker Hub.
            Deployed the application to Kubernetes running on AWS EC2.
            Added Prometheus and Grafana for infrastructure/application monitoring.
            Troubleshot deployment failures including CrashLoopBackOff, database connectivity, storage limitations,
            and networking issues.
            <br>
            <br>
            What I learned:
            <br>
            CI/CD automation, containerization, Kubernetes deployment, AWS infrastructure, troubleshooting, and monitoring.
            
        </p>
    </div>
    <!--Project 2-->
     <div>
      <h2 class="text-3xl md:text-5xl 
         text-white mb-3 mt-5 font-extrabold 
         hover:text-[#654321] transition-colors " data-aos="fade-right">
            Project 2 — AWS Infrastructure with Terraform
        </h2>
      <h3 class="text-xl underline font-bold mb-3" data-aos="fade-left">AWS • Terraform • VPC • EC2 • Networking</h3>
            <p class="font-semibold " data-aos="fade-right">Built AWS infrastructure using Terraform with a focus on 
            repeatable and automated provisioning.
            <br>
            <br>
            <span class="font-bold">Implemented:</span>
            <br>
            Custom VPC•
            Public/private subnet architecture•
            EC2 instances•
            Security Groups•
            Internet connectivity•
            Network configuration
            <br>
           
            <br>
             Used Terraform to replace manual infrastructure creation with reproducible Infrastructure as Code.
            <br>
            <br>
            What I learned:
            <br>
            AWS networking, Terraform configuration, infrastructure provisioning, and cloud resource management.
        </p>
    </div>
    </div>
    </div>

     </section>
</template>