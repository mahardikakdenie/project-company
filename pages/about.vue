<template>
    <div>
        <banner-section title="Tentang Kami" />
        <about-me />
        <projects />
        <forms />
    </div>
</template>


<script lang="ts" setup>
const pageTitleContext = 'About Landing Page - It Solution';
const pageDescriptionContext =
	'Solusi IT terkini untuk meningkatkan produktivitas bisnis Anda.';
const keywordsContext = 'kata kunci, lainnya, disini';
const ogTitleContext = pageTitleContext;
const ogDescriptionContext = pageDescriptionContext;
const twitterTitleContext = pageTitleContext;
const twitterDescriptionContext = pageDescriptionContext;

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
			content: keywordsContext,
		},
		{
			hid: 'og:title',
			property: 'og:title',
			content: ogTitleContext,
		},
		{
			hid: 'og:description',
			property: 'og:description',
			content: ogDescriptionContext,
		},
		{
			hid: 'image',
			property: 'image',
			content: '/image/nuxt.svg',
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
			content: twitterTitleContext,
		},
		{
			hid: 'twitter:description',
			name: 'twitter:description',
			content: twitterDescriptionContext,
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
