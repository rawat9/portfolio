<script>
  import Card from '$lib/components/shared/Card.svelte';
  import Search from '$lib/components/shared/Search.svelte';
  import Button from '$lib/components/ui/button/button.svelte';
  import * as Tabs from '$lib/components/ui/tabs';
  import * as Dialog from '$lib/components/ui/dialog';
  import Icon from '@iconify/svelte';

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

<div class="mt-8 text-center">
  <h1
    class="inline-block bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-5xl font-semibold text-transparent"
  >
    Books
  </h1>
</div>
<div class="container mt-16 px-3 sm:px-12">
  <div class="flex items-center justify-center gap-2">
    <Search placeholder="e.g Svelte, React, Vue..." />
    <Tabs.Root class="borderBlack hidden rounded-lg shadow-lg sm:block" value="list-view">
      <Tabs.List>
        <Tabs.Trigger value="list-view">
          <Icon icon="ri:list-unordered" class="h-5 w-5" />
        </Tabs.Trigger>
        <Tabs.Trigger value="grid-view">
          <Icon icon="ri:layout-grid-line" class="h-5 w-5" />
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>

    <Dialog.Root>
      <Dialog.Trigger>
        <Button class="borderBlack shadow-lg" variant="outline">
          <Icon icon="radix-icons:plus" class="h-4 w-4" />
          <span class="ml-2 hidden sm:inline-block">Add New</span>
        </Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Are you sure absolutely sure?</Dialog.Title>
          <Dialog.Description>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </Dialog.Description>
        </Dialog.Header>
      </Dialog.Content>
    </Dialog.Root>
  </div>
  <div class="mt-10 grid min-h-screen grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    {#each cards as card}
      <Card {...card} />
    {/each}
  </div>
</div>
