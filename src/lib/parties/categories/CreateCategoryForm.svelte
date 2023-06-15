<script lang="ts">
	import FormError from '$lib/components/FormError.svelte';
	import toast from '$lib/utils/toast';
	import createProductSchema from '$lib/schema/createProductSchema';
	import { superForm } from 'sveltekit-superforms/client';
export let formData;
const {
		form,
		errors,
		message,
		enhance
	} = superForm(formData, {
		validators: createProductSchema
	});

	$: toast($message)
</script>


<div class="bg-black rounded-md">
	<form use:enhance method="post" action="?/createCategory" class=" bg-primary-100/40 p-12 flex flex-col">
        <h2 class="text-2xl font-bold mb-6 text-center">Create Category</h2>
		<div class="mb-6">
			<label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>Category name</label
			>
			<input
				type="text"
				id="name"
				name="name"
				class="input rounded-lg"
				placeholder="name"
				bind:value={$form.name}
			
			/>
			<FormError error={$errors.name} />
		</div>
		<div class="mb-6">
			<label for="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>Image</label
			>
			<input
				type="file"
				id="image"
                accept="image/*"
				name="image"
				class="rounded-lg input"
				bind:value={$form.image}
				required
			/>
		</div>

		<button
			type="submit"
			class="bt bg-primary-200/60 hover:bg-primary-200/70 text-white font-bold py-2 px-4 rounded-lg w-full"
			>Submit</button
		>
	</form>
</div>
