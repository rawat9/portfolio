<script>
  import Image from '$lib/assets/Image.png';
  import Typewriter from 'svelte-typewriter';
  import Icon from '@iconify/svelte';
  import { onMount } from 'svelte';
  import CV from '$lib/assets/CV.pdf';

  let isVisible = false;

  onMount(() => {
    isVisible = true;
  });
</script>

<section
  id="home"
  class="max-w-[60rem] mb-32 sm:mb-0 justify-center flex items-center flex-col text-center"
>
  <div class="flex items-center justify-center">
    <img
      src={Image}
      alt="Anurag Rawat"
      class="h-48 w-48 rounded-full object-cover border-[0.35rem] border-white shadow-2xl"
    />
  </div>

  <h1 class="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl antialiased">
    <div class="my-6 text-3xl font-bold">
      <span
        class="bg-gradient-to-b from-gray-50 to-gray-500 bg-clip-text font-sans text-transparent"
        >I'm Anurag</span
      >
    </div>
    <p class="py-2 text-lg font-medium">Software Engineer at GE Vernova</p>
    {#if isVisible}
      <p class="font-light text-lg">
        Interested in
        <span class="font-mono">
          <Typewriter mode="loop">
            <span>Golang</span>
            <span>Software Engineering</span>
            <span>React Server Components</span>
            <span>Functional Programming</span>
            <span>Full stack web dev</span>
            <span>Music 🎵</span>
          </Typewriter>
        </span>
      </p>
    {/if}
  </h1>

  <div class="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-md font-medium">
    <a
      href="#contact"
      class="group bg-gray-900 text-white px-5 py-2 flex items-center gap-2 rounded-full dark:bg-slate-800 hover:bg-gray-950"
    >
      Get in touch
      <Icon
        icon="radix-icons:arrow-right"
        class="opacity-70 group-hover:translate-x-1 transition"
      />
    </a>

    <a
      class="group bg-white px-5 py-2 flex items-center hover:shadow-md gap-2 rounded-full outline-none transition cursor-pointer borderBlack dark:bg-white/10"
      href="https://www.anuragrawat.tech/_app/immutable/assets/CV.CaCXc0Dy.pdf"
      target="_blank"
      title="Anurag Rawat"
    >
      Download CV
      <Icon icon="radix-icons:download" class="opacity-60 group-hover:translate-y-1 transition" />
    </a>

    <div class="flex gap-2">
      <a
        class="bg-white p-3 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        href="https://www.linkedin.com/in/anuragsrawat/"
        target="_blank"
        aria-label="Link to my LinkedIn Profile"
        title="LinkedIn"
      >
        <Icon icon="devicon:linkedin" class="w-5 h-5" />
      </a>

      <a
        class="bg-white p-3 text-gray-700 flex items-center rounded-full hover:text-gray-950 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        href="https://github.com/rawat9"
        target="_blank"
        aria-label="Link to my GitHub Profile"
        title="GitHub"
      >
        <Icon icon="devicon:github" class="w-5 h-5" />
      </a>

      <a
        class="bg-white p-3 text-gray-700 flex items-center gap-2 rounded-full hover:text-gray-950 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        href="https://x.com/anuragsrawat"
        target="_blank"
        aria-label="Link to my Twitter Profile"
        title="Twitter (X)"
      >
        <Icon icon="devicon:twitter" class="w-5 h-5" />
      </a>
    </div>
  </div>
</section>
