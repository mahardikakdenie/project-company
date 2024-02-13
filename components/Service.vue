<template>
	<section class="mt-6 sm:mt-1">
		<div class="text-center">
			<div class="mb-2">
				<span
					class="sm:text-xs text-[10px] font-bold text-green-500 service-title">
					SERVICES WE’RE OFFERING
				</span>
			</div>
			<div class="text-center mb-4">
				<span class="sm:text-[40px] text-sm leading-tight">
					High-quality products and services
					<br />
					that we stand behind
				</span>
			</div>
		</div>

		<div class="sm:px-[50px] px-3">
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
				<div
					v-for="(service, i) in sealsItems"
					:key="i"
					class="border p-2">
					<div class="p-2 relative overflow-hidden">
						<img
							:src="service?.image"
							alt=""
							class="w-full h-auto" />
						<div
							class="items-center icon-sets text-white bg-green-400 absolute px-2 -bottom-[2px] text-[28px] w-[70px] flex justify-center left-[20px] h-[70px]">
							<icon :name="service?.icon" class="" />
						</div>
					</div>
					<div class="p-6">
						<div>
							<span class="text-lg">{{ service?.title }}</span>
						</div>
						<div>
							<small class="text-slate-400">
								{{ service?.description }}
							</small>
						</div>
						<div class="mt-5 flex justify-center">
							<button>
								<span class="text-green-500 text-xs">
									Read More
								</span>
								<icon
									name="icon-park-solid:right-two"
									class="text-green-500 text-xs" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
import { sealsItem } from '@/data/constant';
interface SealsItems {
	icon: string;
	title: string;
	description: string;
	hoverClass: string;
	image: string;
}

const sealsItems = ref<SealsItems[]>(sealsItem);

const isIconVisible = ref<Boolean>(true);
const indexOfService = ref<number>();
const onMouseEnter = (condition: boolean, index: number): void => {
	console.log(index);

	indexOfService.value = index;
	isIconVisible.value = condition;
};
</script>

<style lang="scss">
.icon-sets {
	&::before {
		border-bottom: 10px solid transparent;
		border-right: 10px solid #49de80;
		bottom: 0;
		content: '';
		left: -10px;
		position: absolute;
	}

	&::after {
		border-bottom: 10px solid transparent;
		border-left: 10px solid #49de80;
		bottom: 0;
		content: '';
		position: absolute;
		right: -10px;
	}
}
</style>
