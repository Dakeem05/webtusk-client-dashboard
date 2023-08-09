<script setup>
    import { ref } from "vue";
    import Notify from "../components/Icons/Notify.vue";
    import Setting from "../components/Icons/Setting.vue";
    import RightIcon from "../components/Icons/RightIcon.vue";
    import SideBar from "../components/SideBar.vue";
    let business = ref("Kloud Solutions");
    let greeting = ref('');
    let time = new Date().toLocaleTimeString();
    let value = time.slice(-2);
    if(value === 'AM'){
        greeting.value = "Morning"
    } else {
        greeting.value = "Afternoon"

    }
    let name = ref('Akpan')
</script>

<template>
    <section class="flex gap-[3rem]">
        <div>
            <side-bar/>
        </div>
        <section class="mt-[3rem] max-w-7xl xl:mr-[3rem] relative">
            <aside class="flex absolute right-0 gap-[1rem]">
                <router-link to="setting" class="hover:text-black flex text-lg font-montserrat">
                    <span>Create</span>
                    <span class="pt-1"><right-icon/></span>
                </router-link>
                <router-link to="setting" class="hover:text-black pt-1 relative flex">
                    <Notify/>
                    <div class="h-[9px] w-[9px] -top-[0.4px] bg-red-600 rounded-full absolute right-[0.1rem] animate-ping-notify border-[1px] border-white"></div>
                </router-link>
                <router-link to="setting" class="hover:text-black pt-1"><Setting/></router-link>
            </aside>
            <article class="mt-[3rem] w-[82rem]">
                <plaintext class="text-lg font-montserrat font-bold">
                    Welcome,
                    <span>
                        {{business}}
                    </span>
                </plaintext>
                <plaintext class="text-lg font-montserrat -mt-[0.5rem] font-bold">
                    Good
                    <span>
                        {{greeting}},
                    </span>
                    <span>
                        {{name}}
                    </span>
                </plaintext>
                <span class="flex gap-[2rem] w-full">
                    <span class="flex gap-[2rem] w-1/2">
                        <div class="bg-green-900 h-[10rem] w-1/2 rounded-md"></div>
                        <div class="bg-green-900 h-[10rem] w-1/2 rounded-md"></div>
                    </span>
                    <span class="flex gap-[2rem] w-1/2">
                        <div class="bg-green-900 h-[10rem] w-1/2 rounded-md"></div>
                        <div class="bg-green-900 h-[10rem] w-1/2 rounded-md"></div>
                    </span>
                </span>
                <span class="flex gap-[2rem] mt-[3rem] w-full">
                        <div class="bg-green-900 h-[18rem] w-1/2 rounded-md"></div>
                        <div class="bg-yellow-500 h-[18rem] w-1/2 rounded-md"></div>
                </span>
            </article>
        </section>
    </section>
</template>