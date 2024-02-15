<template>
	<section class="p-14">
		<div class="text-center">
			<span class="text-sm text-green-500">Tentang Kami</span>
		</div>
		<div class="text-center mt-2">
			<span class="font-semibold text-2xl"
				>Selalu Memberikan Sesuatu yang lebih dari ekspektasi</span
			>
		</div>

		<div class="text-center mt-2">
			<span class="text-xs font-semibold text-slate-500">
				Sed non odio non elit porttitor tincidunt. Donec fermentum, elit
				sit amet gravida molestie, orci dui eleifend sem, at blandit
				ipsum diam non purus. Duis dapibus nisi eget vehicula dignissim.
			</span>
		</div>

		<div class="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-5">
			<div
				v-for="i in 2"
				:key="i"
				class="shadow-md p-6 flex flex-col justify-center items-center rounded bg-white">
				<icon name="twemoji:rocket" class="text-3xl mb-2" />
				<span class="text-lg font-semibold"
					>End to End Development</span
				>
				<small class="text-sm text-gray-500 mt-1"
					>Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Atque, veniam.</small
				>
			</div>
		</div>

		<div class="mt-5">
			<button
				class="bg-green-500 text-white font-bold border rounded hover:bg-white hover:border-green-400 hover:text-green-400 px-6 py-3 w-full"
				@click="scrollToElement('#forms')">
				Hubungi Kami
			</button>
		</div>
	</section>
</template>

<script setup lang="ts">
import { scrollToElement } from '@/data/helpers';
</script>

<style scoped lang="scss">
</style>
