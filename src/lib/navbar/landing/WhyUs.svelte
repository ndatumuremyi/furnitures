<script lang="ts" >

	import WhyUsCard from "./WhyUsCard.svelte";
    interface whyUsInterface {
        title: string;
        icon: string;
        description: string;
    }

const whyUsList: whyUsInterface[] = [
    {
        title: "Building Planning",
        icon: "event_available",
        description: "This is a short description elaborating the service you have mentioned above."
    },
    {
        title: "Interior Space",
        icon: "window",
        description: "This is a short description elaborating the service you have mentioned above."
    },
    {
        title: "Offices",
        icon: "apartment",
        description: "This is a short description elaborating the service you have mentioned above."
    },
    {
        title: "Renovating Space",
        icon: "design_services",
        description: "This is a short description elaborating the service you have mentioned above."
    },
    {
        title: "Real Estates",
        icon: "house",
        description: "This is a short description elaborating the service you have mentioned above."
    },
    {
        title: "Free Consultation",
        icon: "business_center",
        description: "This is a short description elaborating the service you have mentioned above."
    },
    
    
];
</script>
<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 self-center gap-12">
    {#each whyUsList as whyUs}
         <WhyUsCard icon={whyUs.icon} title={whyUs.title}>
        {whyUs.description}
    </WhyUsCard>
    {/each}
   
</div>