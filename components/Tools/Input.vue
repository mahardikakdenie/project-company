<template>
	<div class="field">
		<label :for="keyLabel" class="field--label">
			{{ capitalizeWords(keyLabel) }}
		</label>
		<input
			v-if="keyLabel !== 'type' && keyLabel !== 'message'"
			:ref="keyLabel"
			:placeholder="`Mohon Masukan ${capitalizeWords(keyLabel)}`"
			type="text"
			:id="keyLabel"
			:name="keyLabel"
			class="field--input"
			@input="onInput($event, keyLabel)" />
		<textarea
			v-if="keyLabel === 'message'"
			:ref="keyLabel"
			:id="keyLabel"
			:placeholder="`Mohon Masukan ${capitalizeWords(keyLabel)}`"
			class="field--input" />
		<select
			v-if="keyLabel === 'type' && options?.length > 0"
			:ref="keyLabel"
			:id="keyLabel"
			:name="keyLabel"
			:placeholder="`Mohon Masukan ${capitalizeWords(keyLabel)}`"
			class="field--input"
			@change="onInput($event, keyLabel)">
			<option
				v-for="(option, index) in options"
				:key="index"
				:value="option?.value">
				{{ option.label }}
			</option>
		</select>
	</div>
</template>

<script setup lang="ts">
interface OptionItem {
	value?: string;
	label?: string;
}

const props = defineProps({
	keyLabel: {
		type: String,
		default: '',
	},
	options: {
		type: Array as PropType<OptionItem[]>,
		default: () => [],
	},
});

const emits = defineEmits(['on-input']);

const onInput = (event: Event, key: string): void => {
	const selectedValue = (event.target as HTMLSelectElement).value;
	emits('on-input', selectedValue, key);
};

const capitalizeWords = (fieldKey: string = ''): string =>
	fieldKey
		?.replace(/\b\w/g, (match) => match.toUpperCase())
		?.split('_')
		?.join(' ');
</script>

<style lang="scss">
.field {
	@apply mb-2;
	&--label {
		@apply block text-sm font-medium text-gray-600;
	}
	&--input {
		@apply mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300;
	}
}
</style>
