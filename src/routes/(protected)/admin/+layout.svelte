<script lang="ts">
	import AdminNav from '$lib/components/navbar/AdminNav.svelte';
	import { AppBar, AppShell, Avatar } from '@skeletonlabs/skeleton';
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	export let data;

	const profile = data.profile;
	const popupFeatured: PopupSettings = {
		event: 'click',
		target: 'popupFeatured',
		placement: 'bottom'
	};
</script>
<AppShell>
	<svelte:fragment slot="header">
		<AppBar
			background="bg-transparent"
			gridColumns="grid-cols-2"
			slotDefault="place-self-center"
			slotTrail="place-content-end"
		>
			<svelte:fragment slot="lead" />
			<a href="/" class="text-xl uppercase px-3 py-3">Furniture</a>
			<svelte:fragment slot="trail">
				<button class="flex gap-2 items-center justify-center p-2 py-2 bg-primary-300/5 hover:bg-primary-400 rounded-md" use:popup={popupFeatured}>
					<Avatar width="w-12" initials="JD" background="bg-primary-500" />
					<span class="material-symbols-outlined">
						arrow_drop_down
					</span>
				</button>
				<div class="card p-4 w-72 shadow-x" data-popup="popupFeatured">
					<div class="w-full h-full flex flex-col items-center justify-center">
						<span class="py-2  ">
						{profile.data.email}
					</span>
					<button class="px-2 py-2 hover:bg-primary-500 w-full rounded-md"> logout </button>
					</div>
					
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<AdminNav />
	</svelte:fragment>

	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<div class="w-full h-full">
		<slot />
	</div>

	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<!-- (footer) -->
</AppShell>
