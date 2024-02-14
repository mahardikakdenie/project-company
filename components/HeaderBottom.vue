<template>
	<div class="px-0 sm:pr-[80px] relative block sm:flex border">
		<div
			class="items-end flex left-0 relative top-0 transition-all duration-300 ease border-r justify-center w-full sm:w-52 sm:justify-normal"
        >
			<div
				class="flex items-center bg-theme-color1 justify-center mr-[20px] min-h-120 min-w-283 p-6 relative">
				<div class="block relative">
					<nuxt-link to="/">
						<img
							src="/image/nuxt.svg"
							class="sm:w-[100px] w-[100px]"
							alt=""
							srcset="" />
					</nuxt-link>
				</div>
			</div>
		</div>
		<div class="flex items-center justify-center sm:justify-normal relative w-full ml-0 sm:ml-2">
			<nav class="relative sm:justify-start">
				<ol class="m-0 relative flex gap-5 sm:justify-center">
					<li 
                        v-for="(nav, index) in navs" 
                        :key="index"
                        class="hover:text-green-500 cursor-pointer"
                    >
						<nuxt-link 
							:to="nav?.link" 
							class="text-sm"
						>
							{{ nav?.text }}
						</nuxt-link>
					</li>
				</ol>
			</nav>
			<div class="flex gap-4" v-if="false">
				<button
					class="border p-2 rounded text-xs bg-green-400 text-white light">
					Get Solution
				</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>

interface Navs {
    text: string,
	link: string;
};

const navs = ref < Navs[] >([
    {
        text: 'Home',
		link: '/',
    },
    {
		text: 'About',
		link: '/about',
    },
    {
		text: 'Service',
		link: '/',
    },
    {
		text: 'Blog',
		link: '/',
    }
]);

</script>
