<template>
	<section class="py-[20px] px-2 sm:relative sm:top-[-68px]">
		<div class="z-10 sm:py-6 px-2 sm:px-36">
			<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
				<div
					v-for="(item, index) in sealsItems"
					:key="index"
					class="border p-6 rounded bg-white shadow-lg seals-hover"
                >
					<div
						class="flex gap-3 transition duration-300">
						<icon
                            id="icon"
							:name="item?.icon"
							class="text-[30px] sm:text-slate-900 font-bold" 
                        />
						<span
                            id="title"
							class="items-center flex text-sm sm:text-slate-900 font-bold">
							{{ item?.title }}
						</span>
					</div>
					<div class="mt-2 h-[100px] p-3 flex items-center">
                        <div
                            id="description"
                            class="text-slate-900"
                        >
                            {{ item?.description }}
                        </div>
					</div>
                    <div class="flex justify-end">
                        <button class="border rounded-md px-10 border-slate-900">
                            <icon id="right-icon" name="icon-park-outline:right-two" class="text-sm text-slate-900" />
                        </button>
                    </div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
interface SealsItems {
	icon: string;
	title: string;
	description: string;
    hoverClass: string;
};

const sealsItems = ref<SealsItems[]>([
  {
    icon: 'carbon:development',
    title: 'Software Developer',
    description:
      'We provide services with the best designs than our designer team for your business.',
    hoverClass: 'hover-fade-right', // Tambahkan kelas hover
  },
  {
    icon: 'gg:ui-kit',
    title: 'UI / UX',
    description:
      'We help develop company websites to be more professional and attractive',
    hoverClass: 'hover-fade-left', // Tambahkan kelas hover
  },
  {
    icon: 'nimbus:marketing',
    title: 'Digital Marketing',
    description:
      'We also help you market your products through an online marketplace.',
    hoverClass: 'hover-fade-up', // Tambahkan kelas hover
  },
]);
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
