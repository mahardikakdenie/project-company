<template>
	<div class="">
		<div class="flex gap-3 transition duration-300">
			<icon
				id="icon"
				:name="icon"
				class="text-[30px] sm:text-slate-900 font-bold" />
			<span
				id="title"
            class="items-center flex text-sm sm:text-slate-900 font-bold">
				{{ title }}
			</span>
		</div>
		<div class="mt-2 h-[100px] p-3 flex items-center">
			<div id="description" class="text-slate-900">
				{{ description }}
			</div>
		</div>
		<div class="flex justify-end">
			<button class="border rounded-md px-10 border-slate-900">
				<icon
					id="right-icon"
					name="icon-park-outline:right-two"
					class="text-sm text-slate-900" 
                />
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">


const props = defineProps ({
    icon: {
        type: String,
        default: '',
    },
    title: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: '',
    },
});

</script>
