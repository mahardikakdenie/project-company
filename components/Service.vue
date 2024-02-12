<template>
	<section class="">
		<div class="text-center">
			<div>
				<span class="text-xs font-bold text-green-500 service-title">
					SERVICES WE’RE OFFERING
				</span>
			</div>
			<div class="text-center">
				<span class="text-[40px]">
					High quality products and services <br />
					that we stand behind
				</span>
			</div>
		</div>

		<div class="px-[50px]">
			<div class="grid grid-cols-3 gap-5">
				<div v-for="i in 3" :key="i" class="border p-5">
					<div class="border p-4 relative">
						<img
							src="https://oitech-nuxt.vercel.app/images/resource/service-1.jpg"
							alt="" />
						<div
							class="items-center icon-sets bg-green-400 absolute px-3 bottom-[6px] text-[28px] w-[90px] flex justify-center left-[50px] h-[90px]">
							<icon name="carbon:development" class="" />
						</div>
					</div>
					<div class="p-6">
						<div>
							<span class="text-lg"> Product development </span>
						</div>
						<div>
							<small class="text-slate-400">
								We’ve designed a culture that allows our
								stewards to assimilate
							</small>
						</div>
						<div class="mt-5 flex justify-center">
							<button
                            >
								<span
									class="text-green-500 text-xs"
                                >
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
const isIconVisible = ref<Boolean>(true);
const indexOfService = ref<number>();
const onMouseEnter = (condition: boolean, index: number ): void => {
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
