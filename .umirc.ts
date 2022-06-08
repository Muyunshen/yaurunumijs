import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: '全屏页面测试',
  routes: [{ path: '/', component: '@/pages/index' }],
  outputPath: 'build',
  // publicPath: './',
  publicPath: 'https://muyunshen.github.io/yaurunumijs/',
  history: { type: 'hash' },
  fastRefresh: {},
});
