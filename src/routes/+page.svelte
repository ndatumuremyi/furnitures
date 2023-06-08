<script>
	import Button from "$lib/navbar/components/Buttons/Button.svelte";
import LandingHero from "$lib/navbar/landing/LandingHero.svelte";
	import Owners from "$lib/navbar/landing/Owners.svelte";
	import WhyUs from "$lib/navbar/landing/WhyUs.svelte";
	import WhyUsCard from "$lib/navbar/landing/WhyUsCard.svelte";
import LandingLayout from "./MainLayout.svelte";

</script>

<LandingLayout>
	<LandingHero slot="hero"/>
<div class="container flex flex-col gap-32 py-52">
	<h2 class="self-center text-2xl max-w-md">Interior Design Doesn't Have to Be Expensive or Complicated! It Should Be Smart & User Friendly</h2>

	<Owners/>

	<div class="flex flex-col items-center gap-2">
		<p class="uppercase text-sm">Every space count</p>
		<h2 class="h2">Why Choose Us</h2>
	</div>

	<WhyUs/>
</div>

</LandingLayout>

