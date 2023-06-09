<script lang="ts">
	import { z } from 'zod';
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import FormError from '$lib/components/FormError.svelte';

	export let data: PageData;
	let loading = false;
	const schema = z.object({
		password: z.string().min(8).max(100),
		email: z.string().email()
	});

	const { form, errors, enhance } = superForm(data.form, {
		validators: schema
	});
</script>

<SuperDebug data={$form} />

<div class="w-full h-full flex flex-col justify-center">
	<form
		method="POST"
		use:enhance
		class="flex flex-col w-full items-center py-16 gap-6 max-w-md mx-auto card px-12"
	>
		<h2 class="h2 mb-16">Login</h2>
		<label class="w-full">
			<input
				type="email"
				name="email"
				placeholder="email"
				class="input py-3 variant-form-material w-full"
				bind:value={$form.email}
			/>
			<FormError error={$errors.email} />
		</label>

		<label class="w-full">
			<input
				type="password"
				name="password"
				placeholder="Password"
				class="input py-3 variant-form-material w-full"
				bind:value={$form.password}
			/>
			<FormError error={$errors.password} />
		</label>

		<button
			type="submit"
			disabled={loading}
			class="btn variant-filled-surface mt-12 rounded-md w-full">Login</button
		>
	</form>
</div>
