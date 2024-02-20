<template>
	<!-- HTML Markup -->
	<footer class="bg-white text-slate-900 py-8">
		<div class="container mx-auto flex justify-between items-center">
			<div class="flex items-center">
				<!-- Logo atau ikon situs -->
				<img src="/image/nuxt.svg" alt="Logo" class="mr-4 h-8" />

				<!-- Nama Situs atau Slogan -->
				<h1 class="text-lg font-semibold">Nama Situs</h1>
			</div>

			<div class="flex space-x-4">
				<!-- Navigasi Footer -->
				<a href="#" class="hover:text-gray-400">Beranda</a>
				<a href="#" class="hover:text-gray-400">Tentang Kami</a>
				<a href="#" class="hover:text-gray-400">Kontak</a>
			</div>

			<div class="flex items-center">
				<!-- Media Sosial atau ikon sosial -->
				<a href="#" class="text-slate-900 hover:text-gray-400 mr-4">
					<svg
						fill="currentColor"
						viewBox="0 0 24 24"
						class="h-6 w-6">
						<!-- Isi dengan ikon media sosial, misalnya ikon Twitter -->
						<path
							d="M23 3.5c-0.8 0.4-1.7 0.7-2.6 0.8 0.9-0.5 1.6-1.3 1.9-2.2-0.8 0.5-1.7 0.9-2.7 1.1-0.8-0.9-1.9-1.4-3.1-1.4-2.4 0-4.3 2-4.3 4.3 0 0.3 0 0.7 0.1 1-3.6-0.2-6.9-1.9-9.1-4.5-0.4 0.7-0.7 1.5-0.7 2.3 0 1.6 0.8 3 2 3.8-0.7 0-1.3-0.2-1.9-0.5 0 0 0 0 0 0 0 2.2 1.6 4 3.6 4.4-0.4 0.1-0.8 0.1-1.3 0.1-0.3 0-0.7 0-1 0 0.7 2.2 2.7 3.8 5.1 3.8-1.9 1.5-4.3 2.4-6.9 2.4-0.4 0-0.8 0-1.3-0.1 2.4 1.5 5.3 2.4 8.4 2.4 10 0 15.4-8.3 15.4-15.4 0-0.2 0-0.4 0-0.6 1.1-0.8 2.1-1.8 2.9-3z"></path>
					</svg>
				</a>

				<a href="#" class="text-slate-900 hover:text-gray-400">
					<svg
						fill="currentColor"
						viewBox="0 0 24 24"
						class="h-6 w-6">
						<!-- Isi dengan ikon media sosial lainnya, misalnya ikon Instagram -->
						<path
							d="M12 2.2c3.1 0 3.5 0 4.7 0.1 1.1 0.1 1.8 0.4 2.4 0.8 0.5 0.3 0.8 0.8 1 1.5 0.1 0.6 0.1 1.5 0.1 2.7v5.2c0 1.1 0 1.9-0.1 2.3-0.1 0.6-0.4 1.1-1 1.5-0.5 0.3-1.1 0.5-1.8 0.6-0.7 0.1-1.6 0.1-2.7 0.1s-2 0-2.7-0.1c-0.7-0.1-1.3-0.3-1.8-0.6-0.6-0.3-1-0.8-1.2-1.5-0.1-0.4-0.1-1.2-0.1-2.3v-5.2c0-1.1 0-1.9 0.1-2.3 0.1-0.6 0.4-1.1 1-1.5 0.5-0.3 1.1-0.5 1.8-0.6 0.7-0.1 1.6-0.1 2.7-0.1zM12 0c-0.4 0-0.7 0-1 0.1-1.4 0.1-2.4 0.3-3.1 0.7-0.7 0.4-1.3 0.9-1.7 1.6-0.4 0.7-0.6 1.6-0.7 2.9v5.2c0 1.1 0 1.9 0.1 2.3 0.1 0.6 0.3 1.1 0.7 1.5 0.4 0.4 0.9 0.6 1.5 0.7 0.5 0.1 1.2 0.1 2.1 0.1s1.6 0 2.1-0.1c0.6-0.1 1.1-0.3 1.5-0.7 0.4-0.4 0.6-0.9 0.7-1.5 0.1-0.4 0.1-1.2 0.1-2.3v-5.2c0-1.1-0.1-1.9-0.1-2.3-0.1-0.6-0.3-1.1-0.7-1.5-0.4-0.4-0.9-0.6-1.5-0.7-0.4-0.1-0.8-0.1-1.1-0.1zM16.5 8.2c0 0.9-0.7 1.6-1.6 1.6s-1.6-0.7-1.6-1.6c0-0.9 0.7-1.6 1.6-1.6s1.6 0.7 1.6 1.6zM12 10.1c0 1.8-1.5 3.3-3.3 3.3s-3.3-1.5-3.3-3.3 1.5-3.3 3.3-3.3 3.3 1.5 3.3 3.3zM15.3 20H8.7c-1.5 0-2.8-1.3-2.8-2.8V8.8c0-1.5 1.3-2.8 2.8-2.8h6.6c1.5 0 2.8 1.3 2.8 2.8v8.4c0 1.5-1.3 2.8-2.8 2.8zM8.7 7.6c-0.7 0-1.3 0.6-1.3 1.3v8.4c0 0.7 0.6 1.3 1.3 1.3h6.6c0.7 0 1.3-0.6 1.3-1.3V8.8c0-0.7-0.6-1.3-1.3-1.3H8.7z"></path>
					</svg>
				</a>
			</div>
		</div>
	</footer>
</template>

<script></script>
