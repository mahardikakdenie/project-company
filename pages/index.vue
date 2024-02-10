<template>
	<div>
        <hero-section />
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
	layout: 'default',
});
const pageTitleContext = 'It Solution - Landing Page';
const pageDescriptionContext =
	'Solusi IT terkini untuk meningkatkan produktivitas bisnis Anda.';

// Mengisi metadata berdasarkan konteks
useHead(() => ({
	title: pageTitleContext,
	meta: [
		{
			hid: 'description',
			name: 'description',
			content: pageDescriptionContext,
		},
	],
}));
</script>
