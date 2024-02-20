<template>
	<div>
		<navbar />
		<slot />
		<forms />
		<footer-app />
	</div>
</template>

<style lang="scss">
.page-enter-active,
.page-leave-active {
	transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(1rem);
}
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');

body {
	font-family: "Josefin Sans", sans-serif;
	font-optical-sizing: auto;
	font-weight: 500;
	font-style: normal;
}
</style>
