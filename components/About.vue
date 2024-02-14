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
					<span class="text-2xl leading-tight">
						Tingkatkan & Tingkatkan Proyek Teknologi
					</span>
				</div>
			</div>
		</div>

		<!-- Bagian kanan -->
		<div class="flex items-center text-end justify-center">
			<div class="mb-4">
				<span class="text-sm text-slate-400 font-bold">
					Ada banyak variasi bagian yang tersedia tetapi mayoritas
					telah mengalami perubahan dalam beberapa bentuk, karena
					humor atau kata-kata acak yang tampaknya tidak dapat
					dipercaya.
				</span>
			</div>
		</div>

		<!-- Gambar dengan judul -->
		<div class="grid grid-cols-4 mt-8 gap-4">
			<div v-for="i in 4" class="relative col-span-4 sm:col-span-2 lg:col-span-1 hover:-translate-y-10 hover:scale-x-100 hover:z-[9999] cursor-pointer">
				<div class="relative overflow-hidden">
					<div
						style="
							background-image: url('https://oitech-nuxt.vercel.app/images/resource/project-1.jpg');
						"
						class="bg-cover bg-center h-56 sm:h-64 lg:h-72 w-full rounded-md shadow-md">
						<!-- Judul di atas gambar -->
						<div class="absolute bottom-0 right-0 left-0 text-white">
							<h2 class="text-2xl mb-0 font-bold text-center">Sibedas Absensi</h2>
							<div class="text-center">
								<span class="text-center text-green-400">Website</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
