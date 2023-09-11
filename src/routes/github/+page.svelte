<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="flex items-center flex-col flex-wrap pt-28 sm:pt-36">
  <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mx-auto lg:max-w-none">
    {#each data.repositories as r}
      <div
        class="mx-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-gray-500/20"
      >
        <div class="p-6">
          <h1 class="text-2xl font-medium text-gray-700 pb-2">{r.repo}</h1>
          <p class="text text-gray-500 leading-6">
            {r.description}
          </p>
        </div>
      </div>
    {/each}
  </div>
</div>
