<template>
	<div class="pl-0 pr-[80px] relative flex border">
		<div
			class="items-end flex left-0 relative top-0 transition-all duration-300 ease border-r"
        >
			<div
				class="mr-[30px] flex items-center bg-theme-color1 justify-center mr-[20px] min-h-120 min-w-283 p-6 relative">
				<div class="block relative">
					<nuxt-link to="/">
						<img
							src="/image/nuxt.svg"
							width="100"
							alt=""
							srcset="" />
					</nuxt-link>
				</div>
			</div>
		</div>
		<div class="flex items-center justify-between relative w-full ml-2">
			<nav class="relative">
				<ol class="m-0 relative flex gap-5">
					<li 
                        v-for="(nav, index) in navs" 
                        :key="index"
                        class="hover:text-green-500 cursor-pointer"
                    >
						<span class="text-sm">{{ nav?.text }}</span>
					</li>
				</ol>
			</nav>
			<div class="flex gap-4">
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
};

const navs = ref < Navs[] >([
    {
        text: 'Home',
    },
    {
        text: 'About',
    },
    {
        text: 'Service',
    },
    {
        text: 'Blog',
    }
]);

</script>
