<script setup>
defineProps({ project: Object })
</script>

<template>
  <article class="project-card border rounded p-4 hover:shadow-sm glass">
    <div class="overflow-hidden rounded">
      <img :src="project.image" :alt="project.title" class="w-full h-40 object-cover rounded" />
    </div>
    <h4 class="mt-3 font-semibold text-white">{{ project.title }}</h4>
    <p class="text-sm text-white mt-2">{{ project.short }}</p>
    <div class="mt-3 flex items-center justify-between">
      <a :href="project.path" class="text-white bg-amber-500 px-3 py-1 rounded">Ver caso</a>
      <div class="text-sm text-slate-400">{{ project.stack || 'Tecnologias' }}</div>
    </div>
  </article>
</template>
