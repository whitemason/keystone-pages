// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://keystone.whitemason.club',
  base: '/',
  build: {
    // App Store Connect에 등록할 privacy.html 주소를 그대로 지키려고 파일 이름을 그대로 쓴다.
    format: 'preserve',
  },
});
