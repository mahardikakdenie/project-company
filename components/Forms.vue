<template>
	<section>
		<tools-form-no-sidebar v-if="true" />
		<tools-form-with-sidebar v-if="false" />
	</section>
</template>

<script lang="ts" setup>
interface Option {
	label: string;
	key: string;
}

interface Template {
	key: string;
	value: string;
	options?: Option[];
}

const templates: Template[] = [
	{
		key: 'name',
		value: '',
		options: [],
	},
	{
		key: 'email',
		value: '',
		options: [],
	},
	{
		key: 'phone_number',
		value: '',
		options: [],
	},
	{
		key: 'type',
		value: '',
		options: [
			{
				label: 'Software Developer',
				key: 'software_developer',
			},
			{
				label: 'UI/UX',
				key: 'ui_ux',
			},
			{
				label: 'Digital Marketing',
				key: 'digital_marketing',
			},
		],
	},
	{
		key: 'message',
		value: '',
		options: [],
	},
];

const forms = ref<Template[]>(templates);

const inputForm = (value: string, key: string) => {
	console.log(value, key);
};

provide('forms', forms?.value);
</script>
