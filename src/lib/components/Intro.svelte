<script>
  import { typewriter } from '$lib/transition/typewriter';
  import Icon from '@iconify/svelte';
</script>

<section id="home" class="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
  <div class="flex items-center justify-center">
    <div class="relative">
      <img
        src="https://avatars.githubusercontent.com/u/11367048?v=4"
        alt="Anurag Rawat"
        width="196"
        height="196"
        class="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
      />

      <span class="absolute bottom-0 right-0 text-4xl"> 👋 </span>
    </div>
  </div>

  <h1 class="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
    <span class="font-bold">Hello, I'm Anurag.</span> I'm a{' '}
    <span class="font-bold">full-stack developer</span> with{' '}
    <span class="font-bold">8 years</span> of experience. I enjoy building
    <span class="italic">sites & apps</span>.
  </h1>

  <div class="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
    <a
      href="#contact"
      class="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:bg-gray-950 active:scale-105 transition"
    >
      Contact me here
      <Icon
        icon="radix-icons:arrow-right"
        class="opacity-70 group-hover:translate-x-1 transition"
      />
    </a>

    <a
      class="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
      href="/CV.pdf"
      download
    >
      Download CV
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
