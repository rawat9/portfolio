<script lang="ts">
  import Breadcrumb from '$lib/components/slides/Breadcrumb.svelte';

  import type { LayoutData } from './$types';

  export let data: LayoutData;
</script>

<svelte:head>
  <title>Slides {data.title ? `| ${data.title}` : ''}</title>
</svelte:head>

<div class="container px-8 py-20 mx-auto">
  <Breadcrumb active={data.title} />
  <div class="h-px w-full my-6 bg-gray-200"></div>
  <slot />
</div>
