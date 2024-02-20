<template>
	<div>
		<banner-section title="Software Developer" />
		<div class="grid grid-cols-12 bg-white px-11">
			<div class="col-span-12 sm:col-span-4 p-3 gap-4">
				<faq />
			</div>
			<div class="col-span-12 sm:col-span-8 p-3">
				<div class="">
					<div class="w-full">
						<img
							src="https://oitech-nuxt.vercel.app/images/resource/service-details.jpg"
							class="rounded-md object-contain max-w-full max-h-full" />
					</div>

					<div class="p-4 mt-3 border-b-2">
						<h3 class="text-2xl mb-3">
							Pengembangan Software Berkualitas Tinggi untuk
							Meningkatkan Efisiensi Bisnis Anda
						</h3>
						<small class="">
							<icon name="fluent-mdl2:date-time" />
							22 Maret 2002
						</small>
						<small class="ml-5">
							<icon name="ph:user-fill" />
							Mahardika Kessuma Denie
						</small>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const title =
	'Pengembangan Software Berkualitas Tinggi untuk Meningkatkan Efisiensi Bisnis Anda';
useHead({
	title,
	meta: [],
});
</script>

<style lang="scss">
.list-service {
	@apply hover:bg-green-100 cursor-pointer border-b;
	&:hover {
		span {
			@apply text-green-600;
		}
	}
}
</style>
