<template>
	<div class="header-top">
		<div class="flex relative">
			<div class="flex sm:block items-center relative w-full">
				<div class="wrapper">
					<div class="flex items-center relative justify-center sm:justify-start">
						<ul class="flex py-2 px-0 sm:px-4 relative">
							<li
								v-for="(identity, index) in identities"
								:key="index"
								class="flex items-center text-gray-500 text-sm font-normal leading-5 mr-4 relative"
                            >
								<icon :name="identity?.icon" />
								<span class="sm:text-xs text-[9px] ml-1">
									{{ identity?.text }}
								</span>
							</li>
						</ul>
					</div>
					<div class="relative flex justify-center sm:justify-start">
						<ul class="items-center flex py-[10px] gap-3">
							<li
								v-for="(property, index) in navsProperty"
								:key="index"
								class="mx-0 link-property hover:text-green-500"
								:class="{
									'no-slash':
										index === navsProperty?.length - 1,
								}">
								<nuxt-link to="/">
									<span class="text-xs">
										{{ property?.text }}
									</span>
								</nuxt-link>
							</li>
						</ul>
					</div>
					<div class="flex gap-4 justify-center sm:justify-start">
						<icon name="uil:twitter" />
						<icon name="uil:facebook" />
						<icon name="uil:instagram" />
						<icon name="uil:whatsapp" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
interface Identity {
	text: string;
	icon: string;
}

interface NavsProperty {
	text: string;
}

const identities = ref<Identity[]>([
	{
		text: 'dikamahar884@gmail.com',
		icon: 'ic:outline-email',
	},
	{
		text: 'Jalan Kutamaya no 08 Sumedang',
		icon: 'mdi:address-marker-outline',
	},
]);

const navsProperty = ref<NavsProperty[]>([
	{
		text: 'Help',
	},
	{
		text: 'Support',
	},
	{
		text: 'Contact',
	},
]);
</script>


<style lang="scss" scoped>

    .header-top {
        .wrapper {
            @apply bg-[#F4F5F8] sm:flex block justify-between p-0 py-3 sm:py-1 sm:px-4 w-full relative items-center;
        }
    }
    .link-property {
        &.no-slash {
            &::after {
                content: none;
            }
        }

        &::after {
            content: "/";
            @apply text-xs ml-2;
        }
    }
</style>
