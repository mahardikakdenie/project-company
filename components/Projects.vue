<template>
	<section class="p-14">
		<div class="flex justify-center items-center h-full">
			<!-- Bagian kiri -->
			<div class="flex items-center">
				<div class="text-left mb-4">
					<div class="mb-2 text-center">
						<span
							class="text-xs font-bold text-green-500 service-title">
							Yang Sudah Kami Kerjakan
						</span>
					</div>
					<span class="sm:text-2xl text-sm fe leading-tight">
						Tingkatkan & Tingkatkan Proyek Teknologi
					</span>
				</div>
			</div>
		</div>

		<!-- Bagian kanan -->
		<div class="flex items-center text-center justify-center">
			<div class="mb-4">
				<span class="text-xs sm:text-sm text-slate-400 font-bold">
					Ada banyak variasi bagian yang tersedia tetapi mayoritas
					telah mengalami perubahan dalam beberapa bentuk, karena
					humor atau kata-kata acak yang tampaknya tidak dapat
					dipercaya.
				</span>
			</div>
		</div>

		<!-- Gambar dengan judul -->
		<div :class="`grid sm:grid-cols-3 grid-cols-1 mt-8 gap-4`">
			<div
				v-for="(project, i) in projects"
				:key="i"
				class="relative hover:-translate-y-10 hover:scale-x-100 hover:z-[9999] cursor-pointer p-3"
			>
				<div class="relative overflow-hidden">
					<div
						:style="`
							background-image: url(${project?.image});
						`"
						class="bg-cover bg-center h-56 sm:h-64 lg:h-72 w-full rounded-md shadow-md" />
				</div>

				<div class="bg-[#ffffff1A] mt-16">
					<!-- <h2 class="text-2xl mb-0 font-bold text-center">Sibedas Absensi</h2> -->
					<div class="text-center">
						<span class="text-center text-green-600 font-bold">{{
							project?.name
						}}</span>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
interface Project {
	name: string;
	image: string;
}

const projects = ref<Project[]>([
	{
		name: 'Ecommerce Store',
		image: 'https://i.ibb.co/vJxjTQ4/store-mkd.png',
	},
	{
		name: 'Ensiklotari',
		image: 'https://i.ibb.co/Lt8DfBT/image.png',
	},
	{
		name: 'Learning Management Sistem',
		image: 'https://i.ibb.co/w71hpTt/image-1.png',
	},
	{
		name: 'LLDIKTI IV',
		image: 'https://i.ibb.co/LrGQ32B/image-2.png',
	},
]);
</script>
