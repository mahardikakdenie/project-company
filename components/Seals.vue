<template>
	<section class="py-[20px] px-2 sm:relative sm:top-[-68px]">
		<div class="z-10 sm:py-6 px-2 sm:px-36">
			<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
				<div
					v-for="(item, index) in sealsItems"
					:key="index"
					class="border p-6 rounded bg-white seals-hover">
					<div class="flex gap-3 transition duration-300">
						<icon
							id="icon"
							:name="item?.icon"
							class="text-[30px] sm:text-slate-900 font-bold" />
						<span
							id="title"
							class="items-center flex text-sm sm:text-slate-900 font-bold">
							{{ item?.title }}
						</span>
					</div>
					<div class="mt-2 h-[100px] p-3 flex items-center">
						<div id="description" class="text-slate-900">
							{{ item?.description }}
						</div>
					</div>
					<div class="flex justify-end">
						<!-- <button
							class="border rounded-md px-10 border-slate-900">
							<icon
								id="right-icon"
								name="icon-park-outline:right-two"
								class="text-sm text-slate-900" />
						</button> -->
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { sealsItem } from '@/data/constant';
interface SealsItems {
	icon: string;
	title: string;
	description: string;
	hoverClass: string;
	image: string;
}

const sealsItems = ref<SealsItems[]>(sealsItem);
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

/* Tambahkan aturan CSS berikut */
.bg-opacity-80 {
	background-color: rgba(255, 255, 255, 0.8);
}

.hover\:bg-opacity-100:hover {
	background-color: rgba(255, 255, 255, 1);
}

/* Penyesuaian warna teks untuk kontras */
.text-white {
	color: white;
}

.seals-hover {
	transition: all 0.3s ease; /* Atur durasi dan jenis animasi sesuai kebutuhan Anda */

	&:hover {
		border: 1px solid #34d399; /* Warna border saat dihover */
		background-color: #ecfdf5; /* Warna background saat dihover */
		cursor: pointer;

		#title {
			color: #34d399; /* Warna teks title saat dihover */
		}

		#icon {
			color: #34d399; /* Warna teks icon saat dihover */
		}

		#description {
			color: #34d399; /* Warna teks description saat dihover */
		}

		button {
			border: 1px solid #34d399; /* Warna border button saat dihover */
			background-color: #ecfdf5; /* Warna background button saat dihover */
		}

		#right-icon {
			color: #34d399; /* Warna teks right-icon saat dihover */
		}
	}
}
</style>
