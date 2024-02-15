<template>
	<header class="w-100 z-[999]">
		<header-top v-if="$route?.path === '/'" />
		<header-bottom />
	</header>
</template>

<script lang="ts" setup></script>
