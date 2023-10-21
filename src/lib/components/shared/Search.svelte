<script lang="ts">
  export let placeholder: string;
</script>

<div class="relative w-full">
  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
    <svg
      class="h-4 w-4 text-slate-400 dark:text-gray-400"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
      />
    </svg>
  </div>
  <input
    type="text"
    class="dark:highlight-white/5 borderBlack flex h-10 w-full items-center space-x-3 rounded-lg bg-white px-4 pl-10 text-left text-slate-400 shadow-lg focus:text-slate-500 focus:outline-none dark:bg-slate-800 dark:text-slate-300 dark:ring-0 dark:hover:bg-slate-700"
    {placeholder}
  />
</div>
