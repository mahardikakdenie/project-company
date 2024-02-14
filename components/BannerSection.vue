<template>
    <div class="p-[80px] bg-slate-100">
        <div>
            <span class="text-[50px]">
                About Us
            </span>
            <div>
                <ul class="flex">
                    <li 
                        v-for="(nav, i) in navs" 
                        :key="i"
                        :class="{
                            'no-slash': i === 0, 
                            'end-list': i === navs?.length - 1
                        }"
                        class="list-nav font-semibold"
                    >
                        {{ nav?.title }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

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
