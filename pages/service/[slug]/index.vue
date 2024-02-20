<template>
	<div>
		<banner-section title="Software Developer" />
		<div class="grid grid-cols-12 bg-white px-11">
			<div class="col-span-12 sm:col-span-4 p-3 gap-4">
				<div>
					<div class="mb-2 text-center p-3">
						<span class="text-lg"> FAQ </span>
					</div>
					<ul class="border rounded-md space-y-4">
						<li
							v-for="i in 3"
							:key="i"
							class="p-5 list-service bg-white dark:bg-gray-800 rounded-md">
							<div class="flex justify-between">
								<h3
									class="text-md font-semibold mb-2 text-green-600 dark:text-green-400">
									Software Developer
								</h3>
								<icon name="ic:baseline-plus" />
							</div>
							<div v-if="true" class="p-3 border-t">
								<p
									class="text-gray-700 dark:text-gray-300 text-sm">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Dicta, rem quasi hic
									repellat voluptatibus excepturi. Sunt
									ratione quaerat necessitatibus? Ducimus quis
									nesciunt eaque consectetur autem ipsa quo
									voluptatem exercitationem consequatur, modi,
									temporibus vel a ipsam ratione, odio numquam
									illo nihil quod beatae ullam voluptatum
									delectus. Cumque quidem eligendi ipsa facere
									impedit, tempore odit at! Alias iusto a
									laboriosam perferendis ipsum sunt sapiente
									illo placeat reprehenderit dolorum
									dignissimos eveniet nihil eos nemo itaque,
									hic asperiores aspernatur aut fugit error
									quasi exercitationem quae dolores. Et quam
									error vel rem officiis, veritatis deleniti
									autem esse. Consectetur ipsam consequuntur
									aliquid dicta itaque pariatur culpa.
								</p>
							</div>
						</li>
					</ul>

					<!--  -->
					<div class="w-full mt-2">
						<button
							class="border bg-green-100 text-green-600 w-full p-4 rounded-md hover:bg-white hover:border-green-100">
							Contact Us
						</button>
					</div>
				</div>
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
