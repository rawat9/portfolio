<script lang="ts">
  export let image: string;
  export let title: string;
  export let subtitle: string;
  export let description: string;
</script>

<div class="flex flex-wrap flex-col bg-white rounded-lg shadow-md p-2 max-h-[28rem]">
  <div class="mb-4">
    <img src={image} alt={title} class="h-56 w-full object-cover rounded-lg" />
  </div>
  <div class="mb-2">
    <h3 class="text-lg font-medium text-gray-900">{title}</h3>
    <p class="text-sm text-gray-500">{subtitle}</p>
  </div>
  <p class="flex flex-1 text-gray-700 line-clamp-3">{description}</p>
  <div class="flex items-center flex-wrap">
    <a href="/" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
      >Learn More
      <svg
        class="w-4 h-4 ml-2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
      </svg>
    </a>
    <span
      class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"
    >
      <svg
        class="w-4 h-4 mr-1"
        stroke="currentColor"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>1.2K
    </span>
    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
      <svg
        class="w-4 h-4 mr-1"
        stroke="currentColor"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        viewBox="0 0 24 24"
      >
        <path
          d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
        />
      </svg>6
    </span>
  </div>
</div>
