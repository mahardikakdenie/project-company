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
    &:hover {
        @apply border-green-100 bg-green-50 cursor-pointer;

        #title {
            @apply text-green-500;
        }

        #icon {
            @apply text-green-500;
        }

        #description {
            @apply text-green-500;
        }

        button {
            @apply border-green-500 bg-green-50;
        }

        #right-icon {
            @apply text-green-500;
        }
    }
}
</style>
