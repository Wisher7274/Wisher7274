<script setup>
import { onMounted, onUnmounted } from 'vue'

let canvas = null
let ctx = null
let animationId = null
let meteors = []

// 流星配置参数，可根据喜好微调
const CONFIG = {
  count: 15,        // 同屏流星数量
  baseSpeed: 1,     // 基础下落速度
  variance: 1,      // 速度随机波动范围
  angle: Math.PI / 3, // 倾斜角度 (45度)
  tailLength: 100,   // 尾迹长度
  color: '255, 255, 255' // RGB颜色，方便拼接透明度
}

class Meteor {
  constructor(w, h) {
    this.w = w
    this.h = h
    this.reset(true)
  }

  reset(initial = false) {
    // 初始生成时随机分布在整个画布，后续重置只从顶部/右侧边缘生成
    this.x = initial ? Math.random() * this.w : Math.random() * this.w + this.w * 0.2
    this.y = initial ? Math.random() * this.h : -20
    this.speed = CONFIG.baseSpeed + Math.random() * CONFIG.variance
    this.len = CONFIG.tailLength + Math.random() * 40
    this.opacity = 0.3 + Math.random() * 0.7
  }

  update() {
    this.x -= Math.cos(CONFIG.angle) * this.speed
    this.y += Math.sin(CONFIG.angle) * this.speed

    // 超出左下边界时重置到顶部/右侧
    if (this.x < -this.len || this.y > this.h + this.len) {
      this.reset()
    }
  }

  draw(ctx) {
    const endX = this.x + Math.cos(CONFIG.angle) * this.len
    const endY = this.y - Math.sin(CONFIG.angle) * this.len

    const gradient = ctx.createLinearGradient(this.x, this.y, endX, endY)
    gradient.addColorStop(0, `rgba(${CONFIG.color}, ${this.opacity})`)
    gradient.addColorStop(1, `rgba(${CONFIG.color}, 0)`)

    ctx.beginPath()
    ctx.moveTo(this.x, this.y)
    ctx.lineTo(endX, endY)
    ctx.strokeStyle = gradient
    ctx.lineWidth = 1.5
    ctx.lineCap = 'round'
    ctx.stroke()
  }
}

const initCanvas = () => {
  if (!canvas) return
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  meteors = Array.from({ length: CONFIG.count }, () => new Meteor(canvas.width, canvas.height))
}

const animate = () => {
  if (!ctx || !canvas) return
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  meteors.forEach(m => {
    m.update()
    m.draw(ctx)
  })
  animationId = requestAnimationFrame(animate)
}

const handleResize = () => {
  if (canvas) {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    // 窗口大小改变时更新每个流星的边界引用
    meteors.forEach(m => { m.w = canvas.width; m.h = canvas.height })
  }
}

onMounted(() => {
  canvas = document.getElementById('meteor-canvas')
  ctx = canvas.getContext('2d')
  initCanvas()
  animate()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <!-- 
    fixed inset-0: 全屏固定定位
    z-0: 确保在所有内容之下
    pointer-events-none: 【关键】让鼠标事件穿透，不影响Header和内容区的点击
  -->
  <canvas id="meteor-canvas" class="fixed inset-0 z-0 pointer-events-none"></canvas>
</template>