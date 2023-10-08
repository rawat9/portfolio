<script lang="ts">
  export let placeholder: string;
</script>

<div class="relative">
  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <svg
      class="w-4 h-4 text-slate-400 dark:text-gray-400"
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
    class="flex items-center w-96 text-left space-x-3 px-4 pl-10 h-12 bg-white focus:outline-none shadow-lg rounded-lg text-slate-400 focus:text-slate-500 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
    {placeholder}
  />
</div>
