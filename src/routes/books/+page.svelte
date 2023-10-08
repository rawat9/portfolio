<script>
  import Card from '$lib/components/shared/Card.svelte';
  import Search from '$lib/components/shared/Search.svelte';

  const cards = [
    {
      title: 'Card Title 1',
      subtitle: 'Card Subtitle 1',
      description: 'Card Description 1',
      image: 'https://source.unsplash.com/random/400x300'
    },
    {
      title: 'Card Title 2',
      subtitle: 'Card Subtitle 2',
      description: 'Card Description 2',
      image: 'https://source.unsplash.com/random/400x301'
    },
    {
      title: 'Card Title 3',
      subtitle: 'Card Subtitle 3',
      description: 'Card Description 3',
      image: 'https://source.unsplash.com/random/400x302'
    },
    {
      title: 'Card Title 4',
      subtitle: 'Card Subtitle 4',
      description: 'Card Description 4',
      image: 'https://source.unsplash.com/random/400x303'
    },
    {
      title: 'Card Title 5',
      subtitle: 'Card Subtitle 5',
      description: 'Card Description 5',
      image: 'https://source.unsplash.com/random/400x304'
    },
    {
      title: 'Card Title 6',
      subtitle: 'Card Subtitle 6',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
      image: 'https://source.unsplash.com/random/400x305'
    }
  ];
</script>

<div class="text-center mt-8">
  <h1
    class="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-5xl font-semibold text-transparent bg-clip-text"
  >
    Books
  </h1>
</div>
<div class="container sm:px-12 px-3 mt-16">
  <Search placeholder="e.g Svelte, React, Vue..." />
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 min-h-screen mt-10">
    {#each cards as card}
      <Card {...card} />
    {/each}
  </div>
</div>
