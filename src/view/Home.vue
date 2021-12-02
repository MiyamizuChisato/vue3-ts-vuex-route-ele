<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :icon="activity.icon"
          :type="activity.type"
          :color="activity.color"
          :size="activity.size"
          :hollow="activity.hollow"
          :timestamp="activity.timestamp"
      >
        {{ activity.content }}
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {MoreFilled} from '@element-plus/icons'

export default defineComponent({
  name: "Home",
  setup() {
    return {
      activities: [
        {
          content: 'Element Plus',
          timestamp: 'element for vue',
          size: 'large',
          type: 'primary',
          icon: MoreFilled,
        },
        {
          content: 'TypeScript',
          timestamp: 'ts for vue',
          color: '#0bbd87',
        },
        {
          content: 'Vue Vuex',
          timestamp: 'vue-vuex for vue3',
          size: 'large',
        },
        {
          content: 'Vue Router',
          timestamp: 'vue-router for vue3',
          type: 'primary',
          hollow: true,
        },
        {
          content: 'Vue3',
          timestamp: 'one piece',
        },
      ],
    }
  },
})
</script>
<style lang="less">
.block {
  width: 200px;
  margin: 100px auto;
}
</style>
