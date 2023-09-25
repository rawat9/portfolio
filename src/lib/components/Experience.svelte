<script>
  import { experiences } from '$lib/constants';
  import Icon from '@iconify/svelte';
</script>

<section id="experience" class="scroll-mt-28 mb-28 sm:mb-40 max-w-[45rem] leading-8">
  <h2 class="text-3xl font-medium capitalize mb-8 text-center">Experience</h2>
  <ol class="relative border-l border-gray-200 dark:border-gray-700 mb-3">
    {#each experiences as exp}
      <li class="mb-10 ml-9">
        <span
          class="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
        >
          <Icon icon={exp.icon} class="text-xl" />
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          {exp.title}
        </h3>
        <small class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {exp.company}, {exp.location} | {exp.date}</small
        >
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{exp.description}</p>
      </li>
    {/each}
  </ol>
</section>
