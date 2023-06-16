<script lang="ts">
    import FormError from '$lib/components/FormError.svelte';
    import toast from '$lib/utils/toast';
    import { superForm } from 'sveltekit-superforms/client';
    import createFurnitureSchema from "$lib/schema/createFurnitureSchema";
    export let formData;
    export let categories;
    const {
        form,
        errors,
        message,
        enhance
    } = superForm(formData, {
        validators: createFurnitureSchema
    });
    let submitting = false;
    $:{
        if(submitting){
            toast($message);
            submitting = false;
        }
    }
</script>


<div class="bg-black rounded-md">
    <form on:submit={() => submitting = true} use:enhance method="post" enctype='multipart/form-data' action="?/createFurniture" class=" bg-primary-100/40 p-12 flex flex-col">
        <h2 class="text-2xl font-bold mb-6 text-center">Create Furniture</h2>
        <div class="mb-6">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Furniture name</label
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
            <label for="category_id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Category Id</label
            >
            <select bind:value={$form.category_id} name="category_id" id="category_id" class="select">
                {#each categories as category}
                    <option value={category._id}>{category.name}</option>
                {/each}
            </select>
            <FormError error={$errors.category_id} />
        </div>
        <div class="mb-6">
            <label for="images" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Images</label
            >
            <input
                    multiple
                    type="file"
                    id="images"
                    accept="image/*"
                    name="images"
                    class="rounded-lg input"
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
