<template>
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
					<p class="text-gray-700 dark:text-gray-300 text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Dicta, rem quasi hic repellat voluptatibus excepturi.
						Sunt ratione quaerat necessitatibus? Ducimus quis
						nesciunt eaque consectetur autem ipsa quo voluptatem
						exercitationem consequatur, modi, temporibus vel a ipsam
						ratione, odio numquam illo nihil quod beatae ullam
						voluptatum delectus. Cumque quidem eligendi ipsa facere
						impedit, tempore odit at! Alias iusto a laboriosam
						perferendis ipsum sunt sapiente illo placeat
						reprehenderit dolorum dignissimos eveniet nihil eos nemo
						itaque, hic asperiores aspernatur aut fugit error quasi
						exercitationem quae dolores. Et quam error vel rem
						officiis, veritatis deleniti autem esse. Consectetur
						ipsam consequuntur aliquid dicta itaque pariatur culpa.
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
</template>


<script setup lang="ts">
// 
</script>
