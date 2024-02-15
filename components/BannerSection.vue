<template>
    <div class="p-[80px] bg-slate-100">
        <div class="text-center">
            <span class="sm:text-[50px]">
                {{ title }}
            </span>
            <div class="">
                <ul class="flex justify-center">
                    <li 
                        v-for="(nav, i) in navs" 
                        :key="i"
                        :class="{
                            'no-slash': i === 0, 
                            'end-list': i === navs?.length - 1
                        }"
                        class="list-nav font-normal"
                    >
                        {{ nav?.title }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    title: {
        type: String,
        default: '' as string,
    },
})

interface Navs {
    title: string;
};

const navs = ref <Navs[]> ([
    {
        title: 'Home'
    },
    {
        title: 'Pages'
    },
    {
        title: 'About'
    },
]);

</script>


<style lang="scss">
    .list-nav {
        @apply text-green-400;
        &::before {
            content: '>';
            margin: 0 10px;
        }

        &.end-list {
            @apply text-black;
        }

        &.no-slash {
            &::before {
                content: none;
                margin: 0;
            }
        }
    }
</style>
