<template>
	<section class="py-[20px] px-2 sm:relative sm:top-[-118px]">
		<div class="z-10 sm:py-6 px-2 sm:px-36">
			<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
				<div
					v-for="(item, index) in sealsItems"
					:key="index"
					class="border p-6 rounded">
					<div class="flex gap-3 bg-opacity-10 bg-[#ffffff1A]">
						<icon :name="item?.icon" class="text-[30px] sm:text-white font-bold" />
						<span class="items-center flex text-sm sm:text-white font-bold">
							{{ item?.title }}
						</span>
					</div>
					<div class="mt-2 h-[100px] p-3 flex items-center">
						{{ item?.description }}
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
interface SealsItems {
	icon: string;
	title: string;
	description: string;
}

const sealsItems = ref<SealsItems[]>([
	{
		icon: 'carbon:development',
		title: 'Software Developer',
		description:
			'We provide services with the best designs than our designer team for your business.',
	},
	{
		icon: 'gg:ui-kit',
		title: 'UI / UX',
		description:
			'We help develop company websites to be more professional and attractive',
	},
	{
		icon: 'nimbus:marketing',
		title: 'Digital Marketing',
		description:
			'We also help you market your products through an online marketplace.',
	},
]);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
