<template>
	<div>
		<hero-section />
        <seals />
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
		{
			hid: 'keywords',
			name: 'keywords',
			content: 'kata kunci, lainnya, disini',
		},
		{
			hid: 'og:title',
			property: 'og:title',
			content: pageTitleContext,
		},
		{
			hid: 'og:description',
			property: 'og:description',
			content: pageDescriptionContext,
		},
		{
			hid: 'og:image',
			property: 'og:image',
			content: 'https://oitech-nuxt.vercel.app/images/logo-2.png',
		},
		{
			hid: 'og:url',
			property: 'og:url',
			content: 'https://oitech-nuxt.vercel.app/images/logo-2.png',
		},
		{
			hid: 'twitter:title',
			name: 'twitter:title',
			content: pageTitleContext,
		},
		{
			hid: 'twitter:description',
			name: 'twitter:description',
			content: pageDescriptionContext,
		},
		{
			hid: 'twitter:image',
			name: 'twitter:image',
			content: 'https://oitech-nuxt.vercel.app/images/logo-2.png',
		},
		{
			hid: 'twitter:card',
			name: 'twitter:card',
			content: 'Haloo',
		},
	],
}));
</script>
