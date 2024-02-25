<template>
	<div
		id="forms"
    >
		<div class="form-container">
			<h2 class="form-text-title">Hubungi Kami</h2>
			<form>
				<tools-input
					v-for="(form, index) in forms"
					:key="index"
					:key-label="form?.key"
					:options="form?.options"
					@on-input="inputForm" 
                />

				<div>
					<button
						type="submit"
						class="btn-form-submit"
                        @click="submit"
                    >
						Kirim
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup lang="ts">
interface Option {
	label: string;
	key: string;
}

interface FormItem {
	key: string;
	options: Option[];
}

const forms = inject('forms') as FormItem[];

const emits = defineEmits(['submit']);


const inputForm = (value: string, key: string) => {};
const submit = () => {
    emits('submit');
};
</script>

<style lang="scss">
    #forms {
        @apply bg-gray-100 min-h-screen flex items-center justify-center;
        
        .form-container {
            @apply bg-white p-8 rounded-md shadow-md w-full max-w-screen-lg;

            .form-text-title {
                @apply text-2xl font-bold mb-6 text-gray-800;
            }
            
            .btn-form-submit {
                @apply py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300;
            }
        }
    }
</style>
