<script setup>
import { ref } from 'vue'
const mobileOpen = ref(false)
const toggleMobile = () => {
mobileOpen.value = !mobileOpen.value
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- Header -->
    <header class="sticky top-0 z-40 bg-gray-900 text-white shadow-lg">
      <div class="mx-auto px-4 py-3 flex items-center justify-center">
        <!-- 桌面导航 -->
        <nav class="hidden md:flex items-center gap-6 text-sm">
          <RouterLink to="/roadmap-for-myself/" class="hover:text-blue-300 transition text-lg">首页</RouterLink>
          <RouterLink to="/roadmap-for-myself/blog" class="hover:text-blue-300 transition text-lg">博客</RouterLink>
          <a
            href="https://github.com/Wisher7274/roadmap-for-myself"
            target="_blank"
            rel="noopener"
            class="hover:text-blue-300 transition text-lg"
          >GitHub</a>
        </nav>

        <!-- 移动端菜单按钮 -->
        <button
          class="md:hidden p-2 rounded hover:bg-gray-700 focus:outline-none"
          @click="toggleMobile"
          aria-label="菜单"
        >
          <span class="block w-5 h-0.5 bg-white mb-1"></span>
          <span class="block w-5 h-0.5 bg-white mb-1"></span>
          <span class="block w-5 h-0.5 bg-white"></span>
        </button>
      </div>

      <!-- 移动端下拉菜单 -->
      <div v-if="mobileOpen" class="md:hidden bg-gray-800 px-4 py-3">
        <nav class="flex flex-col gap-2 text-sm">
          <RouterLink to="/roadmap-for-myself/" class="hover:text-blue-300 transition" @click="mobileOpen = false">首页</RouterLink>
          <RouterLink to="/roadmap-for-myself/blog" class="hover:text-blue-300 transition" @click="mobileOpen = false">博客</RouterLink>
          <a
            href="https://github.com/Wisher7274/roadmap-for-myself"
            target="_blank"
            rel="noopener"
            class="hover:text-blue-300 transition"
          >GitHub</a>
        </nav>
      </div>
    </header>

    <!-- 主内容 -->
    <main class="flex-1 dark:bg-gray-950">
      <RouterView />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-gray-400 text-sm py-6 text-center z-20">
      <p>&copy; 2026 Jacob Lee. All rights reserved.</p>
      <p class="mt-1">Made by Wisher7274 with 💗</p>
    </footer>
  </div>
</template>

<style>

</style>