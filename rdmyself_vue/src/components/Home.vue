<script setup>
  import BlogListEmbedded from './BlogListEmbedded.vue';
</script>
<template>
  <main class="flex-1 max-w-7xl mx-auto px-4 py-8 dark:bg-gray-950">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">


        <!--左-->
        <div class="space-y-6 max-w-sm mx-auto md:mx-0">
          <section class="bg-white dark:bg-cyan-950 rounded-lg shadow p-6 flex flex-col items-center text-center">
            <img src="../assets/avatar.png" alt="avator" class="w-24 h-24 rounded-full object-cover mb-4">
            <h2 class="text-xl font-bold mb-1 dark:text-white">Wisher7274</h2>
            <p class="text-gray-500 dark:text-amber-200 text-sm mb-4">以萤火之身祈愿，于命运之弦高歌</p>
            <div class="mt-4 text-sm text-gray-500">
              <a
              href="https://github.com/Wisher7274"
              target="_blank"
              class="hover:text-blue-500 transition"
              >GitHub主页</a>
            </div>
          </section>
          
          <section class="bg-white dark:bg-cyan-950 rounded-lg shadow p-6 flex flex-col items-center text-left">
            <h2 class="text-xl font-bold mb-3 dark:text-white">自我介绍</h2>
            <p class="text-sm text-gray-600 dark:text-gray-400 text-left leading-relaxed">
            一名刚高考完的毕业生，对开发充满热情。折腾过 Linux、Godot，用 Vue 搭了这个博客，这几天在VS code和《The Rust Programing Language》里摸爬滚打，长期关注LingChat项目（灵灵真的好可爱啊啊啊啊啊啊），已经提交了一点点PR（缝缝补补那种），正在努力做更多贡献。喜欢 Neuro-sama，希望 AI 能真正打破次元壁。目前技术栈还很零散，但我有满满的时间和好奇心，想一步步摸索出自己的路，也希望能认识更多一起玩的朋友～
            </p>
          </section>        
        </div>

        <!--中-->
        <div class="space-y-6">
          <section class="bg-white dark:bg-cyan-950 rounded-lg shadow p-6">
            <h2 class="text-xl dark:text-white font-bold mb-4">📝 博客总览</h2>
            <p class="dark:text-white">嘻嘻下面的都是假的~要看文章请点击<RouterLink to="/roadmap-for-myself/blog" class="text-sm text-gray-500 hover:text-blue-600 transition">查看全部 →</RouterLink>喵</p>
          </section>
          <section class="bg-white dark:bg-cyan-950 rounded-lg shadow p-6">
        
        <ul class="space-y-3">
          <li>
            <RouterLink
              to="/blog/first-gal"
              class="text-blue-600 hover:underline text-sm font-medium"
            >
              点点Star谢谢喵
            </RouterLink>
            <p class="text-xs text-gray-400">2025-09-15</p>
          </li>
          <li>
            <RouterLink
              to="/blog/build-blog"
              class="text-blue-600 hover:underline text-sm font-medium"
            >
              关注LingChat谢谢喵
            </RouterLink>
            <p class="text-xs text-gray-400">2026-06-10</p>
          </li>
          <li>
            <RouterLink
              to="/blog/learning-path"
              class="text-blue-600 hover:underline text-sm font-medium"
            >
              点点Star谢谢喵
            </RouterLink>
            <p class="text-xs text-gray-400">2026-06-13</p>
          </li>
        </ul>
        <div class="mt-4 text-right">
          <RouterLink to="/roadmap-for-myself/blog" class="text-sm text-gray-500 dark:text-white hover:text-blue-600 transition">
            查看全部 →
          </RouterLink>
        </div>
          </section>

          <section class="bg-white dark:bg-cyan-950 rounded-lg shadow p-6">
            <p class="text-xl font-bold dark:text-white">😊 真的在下面</p>
            <BlogListEmbedded />
          </section>
        </div>
             
      <!--右-->
        <aside class="space-y-6">
          <div class="bg-white dark:bg-cyan-950 rounded-lg shadow p-6 flex flex-col items-center text-center">
            <h2 class="text-xl dark:text-white font-bold mb-4">🎵 听听歌</h2>
          <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=3352129527&auto=1&height=66"></iframe>
          </div>
          
          <div>
            <section class="bg-white dark:bg-cyan-950 rounded-lg shadow p-6 flex flex-col items-center text-center">
            <h2 class="text-xl font-bold mb-3 dark:text-white">友情链接</h2>
            <div class="flex flex-col items-center space-y-2">
              <a target="_blank" href="https://github.com/SlimeBoyOwO/LingChat" class="hover:text-cyan-500 dark:text-gray-300 transition">LingChat</a>
            </div>
          </section>
          </div>
        </aside>
      </div>
  </main>  
</template>

