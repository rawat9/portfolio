<script>
  import Image from '$lib/assets/Image.png';
  import Typewriter from 'svelte-typewriter';
  import Icon from '@iconify/svelte';
  import { onMount } from 'svelte';

  let isVisible = false;

  onMount(() => {
    isVisible = true;
  });
</script>

<section id="home" class="mb-28 pt-32 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
  <div class="flex items-center justify-center">
    <img
      src={Image}
      alt="Anurag Rawat"
      class="h-32 w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
    />
  </div>

  <h1 class="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl">
    <span class="font-semibold">I'm Anurag.</span>
    <span class="font-light text-lg line-clamp-1">
      Passionate software engineer. I love to build things for the web.
    </span>
    {#if isVisible}
      <p class="font-light text-lg">
        Interested in
        <Typewriter mode="loop">
          <span class="font-mono">software engineering</span>
          <span class="font-mono">functional programming</span>
          <span class="font-mono">full stack web dev</span>
          <span class="font-mono">music 🎵</span>
        </Typewriter>
      </p>
    {/if}
  </h1>

  <div class="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
    <a
      href="#contact"
      class="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:bg-gray-950 transition"
    >
      Get in touch
      <Icon
        icon="radix-icons:arrow-right"
        class="opacity-70 group-hover:translate-x-1 transition"
      />
    </a>

    <a
      class="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none transition cursor-pointer borderBlack dark:bg-white/10"
      href="/CV.pdf"
      target="_blank"
    >
      View CV
      <Icon icon="radix-icons:download" class="opacity-60 group-hover:translate-y-1 transition" />
    </a>

    <a
      class="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
      href="https://www.linkedin.com/in/anuragsrawat/"
      target="_blank"
      aria-label="Link to my LinkedIn Profile"
    >
      <Icon icon="cib:linkedin" />
    </a>

    <a
      class="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
      href="https://github.com/rawat9"
      target="_blank"
      aria-label="Link to my GitHub Profile"
    >
      <Icon icon="cib:github" />
    </a>
  </div>
</section>
