<script lang="ts">
  import Icon from '@iconify/svelte';
  export let active: string | undefined = undefined;
</script>

<nav aria-label="breadcrumb">
  <ol class="flex items-center gap-1 text-sm text-gray-600">
    <li>
      <a href="/" class="block transition hover:text-gray-700">
        <span class="sr-only"> Home </span>
        <Icon icon="heroicons-outline:home" class="h-4 w-4" />
      </a>
    </li>

    <Icon icon="heroicons-outline:chevron-right" class="h-3 w-3" />

    <li>
      <a
        href="/slides"
        class="block transition hover:text-gray-700 hover:underline underline-offset-4"
      >
        Slides
      </a>
    </li>
    {#if active}
      <Icon icon="heroicons-outline:chevron-right" class="h-3 w-3" />
      <li>
        <a
          href={`/slides/${active}`}
          class="block transition hover:text-gray-700 hover:underline underline-offset-4"
        >
          {active}
        </a>
      </li>
    {/if}
  </ol>
</nav>
