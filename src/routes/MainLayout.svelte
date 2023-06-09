<script lang="ts">
	import SideNav from "$lib/components/navbar/SideNav.svelte";
	import Footer from "$lib/components/Footer.svelte";
import TopNavBar from "$lib/components/navbar/TopNavBar.svelte";
import { Drawer, drawerStore } from '@skeletonlabs/skeleton';


	import { AppBar, AppShell } from "@skeletonlabs/skeleton";

	function drawerOpen(): void {
	drawerStore.open({});
}
function drawerClose(): void {
	drawerStore.close();
}

</script>
<Drawer>
	<h2 class="p-4">Navigation</h2>
	<hr />
	<SideNav />
</Drawer>
<AppShell >
	<svelte:fragment slot="header">
		<div class="bg-hero bg-cover bg-no-repeat h-screen">
			<div class="backdrop-brightness-50 flex flex-col h-full" >

				<AppBar background="bg-white/10" class="z-10">
					<svelte:fragment slot="lead">
    <div class="flex items-center">
        <button on:click={drawerOpen} class="lg:hidden btn btn-sm mr-4">
            <span>
                <svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
                    <rect width="100" height="20" />
                    <rect y="30" width="100" height="20" />
                    <rect y="60" width="100" height="20" />
                </svg>
            </span>
        </button>
        <strong class="text-xl uppercase">Furniture</strong>
    </div>
</svelte:fragment>
				<svelte:fragment slot="trail">
					<TopNavBar />
				</svelte:fragment>
			</AppBar>
            <slot name="hero" />
			</div>
			
			
		</div>
	</svelte:fragment>
	<slot />

	<svelte:fragment slot="pageFooter">
		<Footer/>
	</svelte:fragment>
</AppShell>