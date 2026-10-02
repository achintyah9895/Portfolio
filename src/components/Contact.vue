<script setup>
import { Link, Mail, MapPin, Phone } from 'lucide-vue-next';
import { ref, reactive } from 'vue'

const contactInfo = [
    {
        id:1,
        icon: Mail,
        title: 'Email',
        value: 'devjishnu364@gmail.com',
        link: 'mailto:devjishnu364@gmail.com'
    },
        {
        id:2,
        icon: Phone,
        title: 'Phone',
        value: '+91 9778023855',
        link: 'tel:919778023855'
    },
      {
        id:3,
        icon: Link ,
        title: 'LinkedIn',
        value: 'linkedin.com/in/jishnu9895dev',
        link: 'https://linkedin.com/in/jishnu9895dev'
    },
       
        {
        id:4,
        icon: MapPin,
        title: 'Location',
        value: 'Kochi, Kerala, India',
        link: null
    },
]

const isSubmitting = ref(false)

const formData = reactive({
  email: '',
  subject: '',
  message: '',
})

const handleSubmit = async () => {
    isSubmitting.value = true

    try {
           formData.email = ''
           formData.subject = ''
           formData.message = ''
    } catch (error) {
        alert("Failed to send.Please try again")
    } finally {
        isSubmitting.value = false
    }
}

</script>

<template>
<section class="py-20 bg-[#6d8d82"] id="contact">
    <div class="container mx-auto px-4 max-w-6xl">
        <h2 class="text-3xl md:text-5xl font-extrabold
        text-white mb-2">
            Let's Catch Up.
    </h2>
        <div class="w-32 h-1 bg-[#6d8d82] mx-10 mt-2
        rounded-2xl">

        </div>
        <div class="grid md:grid-cols-2 gap-8">
              <div>
                <p class="text-white mb-8 leading-relaxed mt-4">
                    I'm currently looking for opportunities in <span class="font-bold"> AWS, DevOps, Cloud Support, and Linux System
                     Administration.</span>
                     <br>
                    If you're hiring for a <span class="font-bold">junior/intern-level cloud or DevOps role </span>, I'd be happy to connect.
                </p>
                <div class="space-y-6"> 
                     <div v-for="info in contactInfo" :key="info.id"
                     class="flex item-center gap-4 group">
                     <div class="w-10 h-10 rounded-full bg-primary/10
                     justify-center item-center  group-hover:bg-primary/20
                     transition-colors">
                        
                        <component :is="info.icon" size="18" class="text-white" />
                    </div>
                        <div>
                            <h4 class="text-white font-semibold">
                                {{info.title}}
                            </h4>
                            <a 
                            v-if="info.link"
                            :href="info.link"
                            class="text-[#6d8d82] text-sm
                            hover:text-white transition-colors"
                            :target="info.title === 'Location' ? 
                            '_self' :'_blank'"
                            :rel="info.title === 'Location' ? ''
                            : 'noopener noreferrer'">
                        {{info.value}}</a>
                        <p
                        v-else class="text-[#6d8d82] text-sm">
                         {{ info.value }}       
                        </p>
                        </div>
                     </div>   
                </div>
              </div> 
              
              <!--form-->
              <div class="bg-[#6d8d82] rounded-lg p-6">
                <form @submit.prevent="handleSubmit">
                    <div class="mb-4">
                        <label for="email" class="text-white block mb-2 text-sm font-medium">
                            Email
                        </label>
                        <input type="email" id="email"
                        v-model="formData.email"
                        class="w-full px-4 py-2 bg-[#ABD39E]
                        border border-[#6d8d82] rounded-lg
                        text-black text-sm focus:outline-none
                        focus:border-primary transition-colors "
                        placeholder="your@gmail.com"
                        required />
                    </div>
                    <div class="mb-4">
                        <label for="message" class="text-white block mb-2 text-sm font-medium">
                            Message
                        </label>
                        <textarea id="message"
                        v-model="formData.message"
                        class="w-full px-4 py-2 bg-[#ABD39E]
                        border border-[#6d8d82] rounded-lg
                        text-black text-sm focus:outline-none
                        focus:border-primary transition-colors "
                        placeholder="Tell Me about your project...."
                        rows="4"
                        required />
                    </div>
                      <button
                      type="submit"
                      :disabled="isSubmitting"
                      class="w-full px-6 py-2.5 bg-primary text-white
                      rounded-lg font-medium hover:bg-primary/80
                      transition-colors disabled:opacity-50
                      disabled:cursor-not-allowed">
                      {{isSubmitting ? 'sending...' :'send message'}}

                      </button>  
                </form>
              </div>
        </div>
    </div>
</section>

</template>