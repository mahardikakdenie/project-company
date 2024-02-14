<template>
	<div class="bg-gray-100 min-h-screen flex items-center justify-center">
		<div class="bg-white p-8 rounded-md shadow-md w-full max-w-screen-lg">
			<h2 class="text-2xl font-bold mb-6 text-gray-800">Hubungi Kami</h2>
			<form>
				<div class="mb-4">
					<label
						for="name"
						class="block text-sm font-medium text-gray-600"
						>Nama</label
					>
					<input
						type="text"
						id="name"
						name="name"
						class="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300" />
				</div>

				<div class="mb-4">
					<label
						for="email"
						class="block text-sm font-medium text-gray-600"
						>Email</label
					>
					<input
						type="email"
						id="email"
						name="email"
						class="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300" />
				</div>

				<div class="mb-4">
					<label
						for="message"
						class="block text-sm font-medium text-gray-600"
						>Pesan</label
					>
					<textarea
						id="message"
						name="message"
						rows="4"
						class="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"></textarea>
				</div>

				<div>
					<button
						type="submit"
						class="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
						Kirim
					</button>
				</div>
			</form>
		</div>
	</div>
</template>
