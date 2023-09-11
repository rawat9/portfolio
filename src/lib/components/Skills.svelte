<script>
  import { skills } from '$lib/constants';
</script>

<section id="skills" class="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
  <h2 class="text-3xl font-medium capitalize mb-8 text-center">Skills</h2>
  <ul class="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
    {#each skills as skill}
      <li class="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
        {skill}
      </li>
    {/each}
  </ul>
</section>
