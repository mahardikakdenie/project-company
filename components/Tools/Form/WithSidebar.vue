<template>
	<div id="forms" class="">
		<div class="rounded-md grid grid-cols-1 sm:grid-cols-2 my-12">
			<!-- Formulir -->
			<div class="flex-1 p-8 rounded-md bg-white">
				<h2 class="text-2xl font-bold mb-6 text-gray-800">
					Hubungi Kami
				</h2>
				<form>
					<tools-input
						v-for="(form, index) in forms"
						:key="index"
						:key-label="form?.key"
						:options="form?.options"
						@on-input="inputForm" />

					<div class="mt-4">
						<button
							type="submit"
							class="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 w-full"
							@click="submit">
							Kirim
						</button>
					</div>
				</form>
			</div>

			<!-- Sidebar -->
			<div class="bg-white p-4">
				<!-- List Kontak -->
				<div class="mb-4">
					<ul class="flex justify-center gap-4">
						<icon name="logos:whatsapp-icon" class="text-[30px]" />
						<icon name="icon-park:phone-two" class="text-[30px]" />
						<icon name="logos:google-gmail" class="text-[30px]" />
					</ul>
				</div>
				<!-- Google Maps -->
				<div class="mb-6">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4487.740861406333!2d107.91154917234408!3d-6.849509481244409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68d1239eae252b%3A0x87a5c1fe6f5bc29a!2sJl.%20Kutamaya%2C%20Kabupaten%20Sumedang%2C%20Jawa%20Barat!5e0!3m2!1sen!2sid!4v1708868631342!5m2!1sen!2sid"
						width="600"
						height="450"
						style="border: 0"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div>
			</div>
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
	@apply bg-gray-100 min-h-screen;

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
